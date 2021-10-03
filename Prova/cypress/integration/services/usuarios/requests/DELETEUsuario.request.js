/// <reference types="cypress" />

function deleteUsuario(id){
    return cy.request({
        method: "DELETE",
        url: `usuarios/${id}`,
        failOnStatusCode: false
    });
}

export { deleteUsuario };