describe('Signup Modal Test', () => {
  it('should open and close the modal', () => {
    
    cy.get('button').contains('Sign Up').click();


    cy.get('.modal').should('be.visible')
    cy.get('.btn-close').click();


    cy.get('.modal').should('not.be.visible');
  });
});


