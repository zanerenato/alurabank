export abstract class View<T>
{
    private _elemento: JQuery;
    private _escapar: boolean;

    constructor(seletor: string, escapar: boolean = false)
    {
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    abstract template(model: T): string;

    update(model: T): void
    {
        let template = this.template(model);
        if(this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/g,'');

        this._elemento.html(template);
    }
}
