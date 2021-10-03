import * as DELETEUsuario from '../requests/DELETEUsuario.request';
import * as GETUsuarios from '../requests/GETUsuarios.request';

describe('DELETE Usuario', () => {
    it('Exclusão usuário', () => {
        GETUsuarios.todosUsuarios().then((resTodosUsuarios) => {
            DELETEUsuario.deleteUsuario(resTodosUsuarios.id).should((resDeleteUsuario) => {
            expect(resDeleteUsuario.status).to.eq(200)
            expect(resDeleteUsuario.body.message).to.eq('Registro excluído com sucesso');
            });
        });
    });
});