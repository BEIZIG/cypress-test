describe('Enter Criterea ', () => {
	let criteria
	beforeEach(function(){
		cy.fixture('searchDetails').then((data)=>{
			criteria = data
	})
	})
   it('visit fr.foncia.com',() => {
	cy.visit('https://fr.foncia.com//')
	//Remove gestion des Cookies popup
	cy.get('body > app-root > app-cookie-banner > div.cookie-container-cta > div > app-foncia-button > button').click()
	
   })	
   it('Fill property ',() => {
	cy.get('#propertyToggle').click()
	cy.get('#search-bar > div > form:nth-child(3) > div > div:nth-child(2) > div.popup-form.dropdown-content.p-d-flex.p-jc-between.ng-star-inserted', {timeout:20})
	.should('be.visible').children().contains(criteria.Biens).click()
	});  
    it('Fill project', () => {
	cy.get('#projectToggle > p').click() 
	cy.get('#search-bar > div > form.research-bar-tab.search-bar-form.w-100.p-d-none.ng-invalid.ng-dirty.ng-touched > div > div:nth-child(1) > div.popup-form.dropdown-content.p-d-flex.p-flex-column.ng-star-inserted', {timeout:10000})
	.should('be.visible').children().contains(criteria.Projet).click()
   }); 
	it('Fill Price ',() => {
	//Wait until price area appear then put your price
	cy.get('#price', { timeout: 20 })
    .should('be.visible').type(criteria.Prix)
  }); 
   it('Fill Location ',() => {
	cy.get('#city').type('Paris')
	cy.get('#pr_id_1_list').contains(criteria.city).click()
	});  
	it('Submit searching ',() => {
	cy.get('#search-bar > div > form.research-bar-tab.search-bar-form.w-100.p-d-none.ng-dirty.ng-touched.ng-valid > div > div.button.p-col-12.p-md-4.p-xl-12.p-d-flex.p-ai-end > app-foncia-button > button').click()
	});        
}); 

describe('Check that filled criteria are correctly parsed', () => {
	let criteria
	beforeEach(function(){
		cy.fixture('searchDetails').then((data)=>{
			criteria = data
	})
	})
	it('Check location ',() => {
	cy.get('body > app-root > app-search-results > div.p-d-flex.p-flex-wrap.p-flex-row.search-results-container.ng-star-inserted > div.p-col-12.search-results-header-sticky > app-search-result-header > div.p-flex-wrap.search-results-header.p-d-sm-none.p-d-md-flex.search-form.ng-untouched.ng-pristine.ng-valid.ng-star-inserted > div.p-as-start.p-d-flex.p-flex-nowrap.search-results-header-location > div > span.p-d-flex.p-flex-row.ng-star-inserted > span.flex-1.search-results-header-label', { timeout: 10000 })
    .should($el => expect($el.text().trim()).to.equal(criteria.city));
	})
	it('Check Property ',() => {
	cy.get('body > app-root > app-search-results > div.p-d-flex.p-flex-wrap.p-flex-row.search-results-container.ng-star-inserted > div.p-col-12.search-results-header-sticky > app-search-result-header > div.p-flex-wrap.search-results-header.p-d-sm-none.p-d-md-flex.search-form.ng-untouched.ng-pristine.ng-valid.ng-star-inserted > div.p-as-center.search-results-header-surface.search-results-header-border > span.p-d-flex.p-flex-row > span.flex-1.search-results-header-label')
    .should($el => expect($el.text().trim()).to.equal(criteria.Biens));
	})
	it('Check result ',() => {
	cy.get('body > app-root > app-search-results > div.p-d-flex.p-flex-wrap.p-flex-row.search-results-container.ng-star-inserted > div.p-col-12.search-results-header-sticky > app-search-result-header > div.p-flex-wrap.search-results-header.p-d-sm-none.p-d-md-flex.search-form.ng-untouched.ng-pristine.ng-valid.ng-star-inserted > div.search-results-header-total.search-results-header-border > span.search-results-header-value.big')
    .invoke('text').then(parseFloat).should('be.gt', 0);
	})
})


	