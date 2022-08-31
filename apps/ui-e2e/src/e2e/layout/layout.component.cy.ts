describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=layoutcomponent--primary'));
  it('should render the component', () => {
    cy.get('mojawork-ui-layout').should('exist');
  });
});
