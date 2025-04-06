interface Cidade {
    id: number;
    nome: string;
    microrregiao: {
        mesorregiao: {
            UF: {
                sigla: string;
            };
        };
    };
}

export default Cidade;