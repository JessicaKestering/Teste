import * as PUTUsario from '../requests/PUTUsuario.request';
import * as GETUsuarios from '../requests/GETUsuarios.request';

describe('PUT Usuario', () => {
    it('Alterar usuário', () => {
        GETUsuarios.todosUsuarios().then((resTodosUsuarios) => {
        PUTUsario.putUsuario(resTodosUsuarios.id).should((resPutUsuario) => {
            expect(resTodosUsuarios.status).to.eq(200)
            expect(resPutUsuario.status).to.eq(200);
              cy.log("Registro alterado com sucesso");
            });
        });
    });
});
