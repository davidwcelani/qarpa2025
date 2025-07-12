import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


// When('eu esteja usando o dispositivo {string}', (mobile) => {
//     cy.viewport(mobile);
//     cy.log(`Dispositivo configurado para: ${mobile}`);
//   });

  When('eu esteja usando o dispositivo {string}', (dispositivo) => {
  // Tenta converter a string para um array (para o caso de "[360, 740]")
  try {
    const [width, height] = JSON.parse(dispositivo);
    cy.viewport(width, height);
  } catch (e) {
    // Se não for um array, trata como um nome de preset (ex: "iphone-xr")
    cy.viewport(dispositivo);
  }
  });

  And('eu faço login válido', () => {
    cy.loginValido('standard_user', 'secret_sauce');
  });

Then('os produtos devem ser exibidos em uma única coluna vertical', () => {
  // Pega a largura da lista de produtos
   cy.get('.inventory_list').then(($list) => {
    const listWidth = $list.width();

    // Itera sobre cada item da lista
    cy.get('.inventory_item').each(($item) => {
      // Verifica se a largura de cada item é próxima à largura da lista inteira
      // (com uma pequena tolerância para margens/padding)
      expect($item.width()).to.be.closeTo(listWidth, 25);
    });
  });
  });