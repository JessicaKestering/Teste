/// <reference types="cypress" />

function todosUsuarios(){
    return cy.request({
        method: "GET", 
        url: "usuarios",
        failOnStatusCode: false,
    })
}

export { todosUsuarios };