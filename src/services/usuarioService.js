import { Usuario } from '@/models/usuario.js';
import { http } from './config.js';

export default {
    list: function() {
        return http.get("usuario/list");
    },

    login: function(dadosUsuario) {
        // {
        //  "usuario": "sc@email.com",
        //  "senha": "123@123"
        // }
        console.log(dadosUsuario);
        return http.post("usuario/logon", dadosUsuario);
    },

    add: function(dadosUsuario = new Usuario) {
        console.log(dadosUsuario);
        return http.post("usuario/add", dadosUsuario);
    }
};