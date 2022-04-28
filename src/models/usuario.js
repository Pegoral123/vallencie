export class Usuario {
    constructor(
        id = null,
        nome = "",
        senha = "",
        email = "",
        data_nasc = null,
        cpf = 1,
        tel = 1
    ) {
        this.id = id,
            this.nome = nome;
        this.senha = senha;
        this.email = email;
        this.cpf = cpf;
        this.tel = tel;
        this.data_nasc = data_nasc;
        this.foto_perfil = "";
        this.ativo = true;
    }
}