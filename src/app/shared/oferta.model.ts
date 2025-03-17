export class Oferta {
    public id!: number;
    public categoria!: string;
    public titulo!: string;
    public descricao_oferta!: string;
    public anunciante!: string;
    public valor!: number;
    public destaque!: boolean;
    public imagens!: Array<object>;

    constructor(
        id: number,
        categoria: string,
        titulo: string,
        descricao_oferta: string,
        anunciante: string,
        valor: number,
        destaque: boolean,
        imagens: Array<object>
    ) {
        this.id = id;
        this.categoria = categoria;
        this.titulo = titulo;
        this.descricao_oferta = descricao_oferta;
        this.anunciante = anunciante;
        this.valor = valor;
        this.destaque = destaque;
        this.imagens = imagens;
    }
}
