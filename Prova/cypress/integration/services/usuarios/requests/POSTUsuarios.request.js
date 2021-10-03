/// <reference types="cypress" />

const payloadAddBook = require('../payloads/add-usuario.json');

function addUsuario(){
    return cy.request({
        method: "POST",
        url: "usuarios",
        failOnStatusCode: false,
        body: payloadAddBook
    });

}

export { addUsuario };