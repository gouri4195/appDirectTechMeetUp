// Go to PIM section from the Dashboard
Cypress.Commands.add('pimSectionGoToPIM', () => {
  cy.get('a[href*="/web/index.php/pim/viewPimModule"]').click();
});

// Go to Add Employee page
Cypress.Commands.add('pimSectionGoToAddEmployee', () => {
  cy.get('button[class*="oxd-button oxd-button--medium oxd-button--secondary"]').eq(1).contains('Add').click();
});

// Fill the Employee Information to create a new employee
Cypress.Commands.add('pimSectionCreateNewEmployee', (firstName, middleName, lastName, employeeId) => {
  cy.get('input[name="firstName"]').type(firstName);
  cy.get('input[name="middleName"]').type(middleName);
  cy.get('input[name="lastName"]').type(lastName);
  cy.get('input[class="oxd-input oxd-input--active"]').eq(1).clear().type(employeeId);
  cy.get('button[type="submit"]').click();
  cy.get('div[class="orangehrm-edit-employee-name"] h6').should('contain', firstName);
});

// Provide Employee Personal Details
Cypress.Commands.add('pimSectionProvideEmployeePersonalDetails', (firstName, middleName, lastName) => {
  cy.get('div[class="oxd-select-wrapper"]').eq(0).click();
  cy.get('div[role="listbox"] div[role="option"]').contains('Indian').click();
  cy.get('div[class="oxd-select-wrapper"]').eq(1).click();
  cy.get('div[role="listbox"] div[role="option"]').contains('Single').click();
  cy.get('input[placeholder="yyyy-dd-mm"]').eq(1).type('2001-01-01');
  cy.get('span[class*="oxd-radio-input"]').eq(0).click();
  cy.get('button[type="submit"]').eq(0).contains('Save').click();
});

// Go to Employee List page
Cypress.Commands.add('pimSectionGoToEmployeeList', () => {
  cy.visit('/web/index.php/pim/viewEmployeeList');
});

// Search for an employee
Cypress.Commands.add('pimSectionSearchForEmployee', (firstName) => {
  cy.intercept('GET', `/web/index.php/api/v2/pim/employees?nameOrId=${firstName}&includeEmployees=onlyCurrent`).as('getEmployeeList');
  cy.get('input[placeholder*="Type for hints"]').eq(0).clear().type(firstName);
  cy.get('button[type="submit"]').click();
  cy.wait('@getEmployeeList');
  cy.get('div[class="oxd-table-body"] div[class="oxd-table-card"] div').eq(0).click();
  cy.get('div[class="orangehrm-edit-employee-name"] h6').should('contain', firstName);
});