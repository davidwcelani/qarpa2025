// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('loginValido', (usuario, senha) => {
    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('#login-button').click()
});

Cypress.Commands.add('setViewport', (viewportName) => {
  // Cypress.env() nos dá acesso a todas as variáveis carregadas do seu JSON
  const viewports = Cypress.env('viewports');
  if (!viewports) {
    throw new Error("Objeto 'viewports' não encontrado na sua configuração de ambiente. Verifique seu arquivo .json.");
  }
  // Pega as dimensões [largura, altura] do objeto usando o nome
  const dimensions = viewports[viewportName];
  if (!dimensions) {
    throw new Error(`Viewport com o nome '${viewportName}' não foi encontrado no seu arquivo de configuração. Nomes disponíveis: ${Object.keys(viewports).join(', ')}`);
  }
  // Desestrutura o array para pegar a largura e altura
  const [width, height] = dimensions;
  cy.log(`Configurando viewport para: ${viewportName} (${width}x${height})`);
  cy.viewport(width, height);
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })