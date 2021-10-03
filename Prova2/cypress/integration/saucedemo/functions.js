/// <reference types="cypress" />

function username(username){
    cy.get('[data-test=username').clear();
    cy.get('[data-test=username').type(username);
}

export { username };

function password(password){
    cy.get('[data-test=password]').clear();
    cy.get('[data-test=password]').type(password);
}

export { password };

function buttonLogin(){
    cy.get('[data-test=login-button]').click();
}

export { buttonLogin };

function userLocked(){
    cy.get('[data-test=error]').should('be.visible').and('contain', 'Epic sadface: Sorry, this user has been locked out.');
}

export { userLocked };

function buttonShoppingCart(){
    cy.get('.shopping_cart_link').click();
}

export { buttonShoppingCart };

function buttonCheckout(){
    cy.get('[data-test=checkout]').click();
}

export { buttonCheckout };

function firstName(firstName){
    cy.get('[data-test=firstName]').type(firstName);
}

export { firstName };

function lastName(lastName){
    cy.get('[data-test=lastName]').type(lastName);
}

export { lastName };

function postalCode(postalCode){
    cy.get('[data-test=postalCode]').type(postalCode);
}

export { postalCode };

function buttonContinue(){
    cy.get('[data-test=continue]').click();
}

export { buttonContinue };

function subTotal(value){
    cy.get('.summary_subtotal_label').should('contain', value);
}

export { subTotal };

function tax(value){
    cy.get('.summary_tax_label').should('contain', value);
}

export { tax };

function total(value){
    cy.get('.summary_total_label').should('contain', value);
}

export { total };

function finish(){
    cy.get('[data-test=finish]').click();
}

export { finish };

function backProducts(){
    cy.get('[data-test=back-to-products]').click();
}

export { backProducts };

function logout(){
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
}

export { logout };

function addBackpack(){
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
}

export { addBackpack };

function addFleeceJacket(){
    cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]').click();
}

export { addFleeceJacket };

function addOnesie(){
    cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click();
}

export { addOnesie };

function addTshirtRed(){
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
}

export { addTshirtRed };

function addBoltTshirt(){
    cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click();
}

export { addBoltTshirt };

function addBikeLight(){
    cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click();
}

export { addBikeLight };
