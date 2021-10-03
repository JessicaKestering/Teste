import * as GETUsuarios from '../requests/GETUsuarios.request';

describe('GET Usuarios', () => {
    it('Listar todos os usuários', () => {
        GETUsuarios.todosUsuarios().should((response) => {
            expect(response.status).to.eq(200);
        }); 
    });
});
