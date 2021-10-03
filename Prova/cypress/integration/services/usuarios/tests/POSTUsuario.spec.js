import * as POSTUsuario from '../requests/POSTUsuarios.request';

describe('POST Usuario', () => {
    it('Adicionando novo usuário', () => {
        POSTUsuario.addUsuario().should((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq('Cadastro realizado com sucesso');
        })
    });
});