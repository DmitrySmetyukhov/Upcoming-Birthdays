describe('EditPersonDialog', () => {
  it('Should correctly show edit person dialog', () => {
    cy.visit('/');
    cy.get('#addPerson').click();
    cy.get('app-edit-person-dialog').should('be.visible');
    cy.get('#editPersonSaveBtn').should('be.disabled');
    cy.get('.spinner-block').should('not.exist');
  });
});
