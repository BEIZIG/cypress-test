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
  it('FunctionalTest : check Image',() => {
	//Image is visible
	cy.get('body > app-root > app-home > div > app-home-profiles > div > div.content-container > app-foncia-card > div.card-cards > div.card-cards-img > div:nth-child(1) > img')
    .should('be.visible')
  });
  it('FunctionalTest : check Menu button',() => {
	//Menu button exist
	cy.get('body > app-root > app-header > header > div.header-button.header-button-mobile > p-button > button > span.p-button-label.ng-star-inserted')
    .should('be.visible')
  });
  it('FunctionalTest : check Cluster Rechercher un bien ',() => {
	//Rechercher un bien must have 
	cy.get('#search-bar > div > label:nth-child(2)').click()
	cy.get('#projectToggle').should('be.visible')
	cy.get('#propertyToggle').should('be.visible')
	cy.get('#price').should('be.visible')
	cy.get('#city').should('be.visible')
  });

});
describe('03_Search Functinality ', () => {
  it('Choose Louer option', () => {
	//Action : select louer option
	//Action click on menu
    cy.get('body > app-root > app-header > header > div.header-button.header-button-mobile > p-button > button > span.p-button-label.ng-star-inserted').click()
	//Wait until louer button appears then click on it
    cy.get('body > app-root > app-header > header > div.header-content.p-d-flex.p-flex-column.p-flex-lg-row.p-jc-end.p-ai-center.visible > div.header-content-links.p-d-flex.p-flex-column.p-flex-lg-row.p-ai-center > div:nth-child(2) > a', { timeout: 10000 })
    .should('be.visible').click()
   }); 
   it('type information',() => {
	//Wait until searching area appears then click on it
	cy.get('body > app-root > app-management-page > app-management-component > div > div.management-page-presentation > div.right.p-d-flex.p-flex-column > div.right-buttons.p-d-flex.p-flex-column.p-flex-md-row > div.right-buttons-search.p-d-flex.p-flex-column.p-jc-end.ng-star-inserted > button', { timeout: 10000 })
    .should('be.visible').click()
	//Wait until price area appear then put your price
	cy.get('#price', { timeout: 10000 })
    .should('be.visible').type(1500)
  });  
}); 