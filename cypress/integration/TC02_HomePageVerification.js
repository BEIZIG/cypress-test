describe('01_Homepage Verification', () => {
  it('Load page', () => {
	//Example of error : Timed out after waiting 60000ms to load.
	cy.visit('https://fr.foncia.com//')
	//Remove gestion des Cookies popup
	cy.get('body > app-root > app-cookie-banner > div.cookie-container-cta > div > app-foncia-button > button').click()
  });
  it('Check Logo',() => {
	//logo exist
	cy.get('body > app-root > app-header > header > div.header-logo > a > img')
    .should('be.visible')
  });
    it('Check Menu button',() => {
	//Menu button exist
	cy.get('body > app-root > app-header > header > div.header-button.header-button-mobile > p-button > button > span.p-button-label.ng-star-inserted')
    .should('be.visible')
	//Once you click on Menu button
	cy.get('body > app-root > app-header > header > div.header-button.header-button-mobile > p-button > button > span.p-button-label.ng-star-inserted').click()
	//Acheter option should be visible
	cy.get('body > app-root > app-header > header > div.header-content.p-d-flex.p-flex-column.p-flex-lg-row.p-jc-end.p-ai-center.visible > div.header-content-links.p-d-flex.p-flex-column.p-flex-lg-row.p-ai-center > div:nth-child(1) > a')
	.should('be.visible')
	//Louer Option should be visible
	cy.get('body > app-root > app-header > header > div.header-content.p-d-flex.p-flex-column.p-flex-lg-row.p-jc-end.p-ai-center.visible > div.header-content-links.p-d-flex.p-flex-column.p-flex-lg-row.p-ai-center > div:nth-child(2) > a')
	.should('be.visible')
	//Vendre Option should be visible
	cy.get('body > app-root > app-header > header > div.header-content.p-d-flex.p-flex-column.p-flex-lg-row.p-jc-end.p-ai-center.visible > div.header-content-links.p-d-flex.p-flex-column.p-flex-lg-row.p-ai-center > div:nth-child(3) > a')
	.should('be.visible')
	//Gestion Locative Option should be visible
	cy.get('body > app-root > app-header > header > div.header-content.p-d-flex.p-flex-column.p-flex-lg-row.p-jc-end.p-ai-center.visible > div.header-content-links.p-d-flex.p-flex-column.p-flex-lg-row.p-ai-center > div:nth-child(4) > a')
	.should('be.visible')
	//Syndic de copropriete Option should be visible
	cy.get('body > app-root > app-header > header > div.header-content.p-d-flex.p-flex-column.p-flex-lg-row.p-jc-end.p-ai-center.visible > div.header-content-links.p-d-flex.p-flex-column.p-flex-lg-row.p-ai-center > div:nth-child(5) > a')
	.should('be.visible')
	//Louer decovrir Foncia should be visible
	cy.get('body > app-root > app-header > header > div.header-content.p-d-flex.p-flex-column.p-flex-lg-row.p-jc-end.p-ai-center.visible > div.header-content-links.p-d-flex.p-flex-column.p-flex-lg-row.p-ai-center > div:nth-child(6) > a')
	.should('be.visible')
	//Louer Carrieres should be visible
	cy.get('body > app-root > app-header > header > div.header-content.p-d-flex.p-flex-column.p-flex-lg-row.p-jc-end.p-ai-center.visible > div.header-content-links.p-d-flex.p-flex-column.p-flex-lg-row.p-ai-center > div:nth-child(7) > a')
	.should('be.visible')
	//button my Foncia should be exist
	cy.get('body > app-root > app-header > header > div.header-content.p-d-flex.p-flex-column.p-flex-lg-row.p-jc-end.p-ai-center.visible > div.header-foncia.w-100 > div.header-content-foncia.p-d-flex.p-jc-center.p-ai-center > div > app-foncia-button > a')
	.should('be.visible')
	//Exit Menu option
	cy.get('body > app-root > app-header > header > div.header-button.header-button-mobile > p-button > button > span.p-button-label.ng-star-inserted').click()
  });
  it('FunctionalTest : check Image',() => {
	//Image is visible
	cy.get('body > app-root > app-home > div > app-home-profiles > div > div.content-container > app-foncia-card > div.card-cards > div.card-cards-img > div:nth-child(1) > img')
    .should('be.visible')
  });
  it('Check Menu button',() => {
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