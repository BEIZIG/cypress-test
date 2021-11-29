describe('01_Test Case : Check Foncia is first on google Search', () => {
  it('Search for Foncia', () => {
	//Action : search on google for Foncia
    cy.visit('https://www.google.com/search?q=Foncia');
	//Get first element
    cy.get('#search a')
	//Make an assertion should be our site
      .invoke('attr', 'href').should('eq','https://fr.foncia.com/')
      .then(href => console.log(href));
  });  
}); 