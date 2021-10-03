/// <reference types="cypress" />

const payloadChangeUsuario = require('../payloads/change-usuario.json');

function putUsuario(id){
    return cy.request({
        method: "PUT",
        url:  `usuarios/${id}`,
        headers: {
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: payloadChangeUsuario
    });
}

export { putUsuario };