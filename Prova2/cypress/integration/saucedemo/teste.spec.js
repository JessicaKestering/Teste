import * as page from '../saucedemo/functions';

/// <reference types="cypress" />

describe('Teste Saucedemo', () => {
    it('Login com usuário bloqueado', () => {
        cy.visit('/');

        //Informando o Username
        page.username('locked_out_user');

        //Informando o Password
        page.password('secret_sauce');

        //Clica no botão Login
        page.buttonLogin();

        //Valida que apresentou mensagem de erro no login
        page.userLocked();
    });

    it('Realizando compra completa', () => {

        //Informando o Username
        page.username('standard_user');

        //Informando o Password
        page.password('secret_sauce');

        //Clicando no botão Login
        page.buttonLogin();

        //Adicionando os produtos ao carrinho
        page.addBackpack();
        page.addFleeceJacket();

        //Cicando no carrinho de compras
        page.buttonShoppingCart();

        //Clicando no botão Checkout
        page.buttonCheckout();

        //Informando os dados pessoais
        page.firstName('Jessica');
        page.lastName('Kestering');
        page.postalCode('89052-290');

        //Clicando no botão Continue
        page.buttonContinue();

        //Validando os valores da compra
        page.subTotal('Item total: $79.98');
        page.tax('Tax: $6.40');
        page.total('Total: $86.38');

        //Clicando no botão Finish
        page.finish();

        //Clicando no botão Back Home
        page.backProducts();

        //Fazendo Logout
        page.logout();
    });

    it('Adicionar todos os produtos ao carrinho e validar valor total da compra', () => {

        //Informando o Username
        page.username('standard_user');

        //Informando o Password
        page.password('secret_sauce');

        //Clicando no botão Login
        page.buttonLogin();

        //Adicionando os produtos ao carrinho
        page.addBackpack();
        page.addFleeceJacket();
        page.addOnesie();
        page.addTshirtRed();
        page.addBoltTshirt();
        page.addBikeLight();

        //Cicando no carrinho de compras
        page.buttonShoppingCart();

        //Clicando no botão Checkout
        page.buttonCheckout();

        //Informando os dados pessoais
        page.firstName('Jessica');
        page.lastName('Kestering');
        page.postalCode('89052-290');

        //Clicando no botão Continue
        page.buttonContinue();

        //Validando os valores da compra
        page.subTotal('Item total: $129.94');
        page.tax('Tax: $10.40');
        page.total('Total: $140.34');

        //Clicando no botão Finish
        page.finish();

        //Clicando no botão Back Home
        page.backProducts();

        //Fazendo Logout
        page.logout(); 
    });
});