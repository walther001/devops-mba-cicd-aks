describe('Todo App - Smoke Test', () => {
  it('deve carregar e adicionar uma tarefa', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Minha Todo List DevOps');

    cy.get('input[placeholder="Nova tarefa"]').type('Teste com Cypress');
    cy.get('button').contains('Adicionar').click();

    cy.contains('Teste com Cypress').should('exist');
  });
});
