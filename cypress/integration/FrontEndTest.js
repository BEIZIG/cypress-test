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
describe('02_Homepage Verification', () => {
  it('PerformanceTest : load page', () => {
	//Example of error : Timed out after waiting 60000ms to load.
	cy.visit('https://fr.foncia.com//')
  });
  it('FunctionalTest : check Logo',() => {
	//logo exist
	cy.get('body > app-root > app-header > header > div.header-logo > a > img')
    .should('be.visible')
  });
  it('FunctionalTest : check Menu button',() => {
	cy.get('body > app-root > app-header > header > div.header-button.header-button-mobile > p-button > button > span.p-button-label.ng-star-inserted')
    .should('be.visible')
  });
  it('FunctionalTest : check Slogan',() => {
	cy.get('body > app-root > app-home > div > app-home-search > div.home-search > h1')
    .invoke("text").should('eq', "A vos cotes, en ligne et dans votre quartier")  
  });

  
});
describe('03_Search Functinality ', () => {
  it('Choose Louer option', () => {
	//Action : select louer from combo box
    cy.get('#projectToggle').click()              // take the third element
    cy.get('#search-bar > div > form:nth-child(3) > div > div:nth-child(1) > div.popup-form.dropdown-content.p-d-flex.p-flex-column.ng-star-inserted', { timeout: 10000 })
    .should('be.visible').children()
  });  
}); 