/* eslint-disable no-undef */
describe('login test', () => {
  it('verificar que cargue la página home leyendo el H1', () => {
    // 01. Configurar el estado de la aplicación:
    cy.visit('/')

    // 02. Ejecutar la acción del usuario (interacción con la UI):
    cy.get('h1')
      .contains('Home') // esperar un resultado positivo
  })

  it('verificar que cargue la página login como customer leyendo el H1', () => {
    // Intercept se usa para esperr una respuesta del servidor

    cy.intercept('POST', 'http://localhost:3000/login').as('loginAPI')

    cy.visit('/login')

    cy.get('#email') // buscar el id del input del email
      .type('crdgom@gmail.com') // escribir el email
    cy.get('#password') // buscar el id del input del password
      .type('a') // escribir el password
    cy.get('button[type=submit]').click()// buscar el botón de login

    cy.wait('@loginAPI') // esperar a que la respuesta del servidor llegue

    cy.get('h1')
  })

  it('verificar que cargue la página logout como admin leyendo el H1', () => {
    // Intercept se usa para esperr una respuesta del servidor

    cy.intercept('POST', 'http://localhost:3000/login').as('loginAPI')

    cy.visit('/login')

    cy.get('#email') // buscar el id del input del email
      .type('crdgom@gmail.com') // escribir el email
    cy.get('#password') // buscar el id del input del password
      .type('a') // escribir el password
    cy.get('button[type=submit]').click()// buscar el botón de login

    cy.wait('@loginAPI') // esperar a que la respuesta del servidor llegue

    cy.get('nav>ul>li:last').click()
    cy.get('h1').should('have.text', 'Home') // buscar el botón de logout
  })
})
