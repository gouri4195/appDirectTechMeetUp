describe('Employee E2E Flow', () => {
  const username = Cypress.env('username');
  const password = Cypress.env('password');
  let firstName = '';
  let middleName = '';
  let lastName = '';
  let randomNumber = 0;

  beforeEach(() => {
    cy.visit('/web/index.php/auth/login');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/web/index.php/dashboard/index');
    //cy.login(username, password);
    randomNumber = Math.floor(Math.random() * 1000000);
    cy.fixture('employeeInformation.json').then((employeeData) => { 
      firstName = employeeData.firstName+randomNumber;
      middleName = employeeData.middleName+randomNumber;
      lastName = employeeData.lastName+randomNumber;
    });
  });

  it('Create a new employee with initial details', () => {
      cy.pimSectionGoToPIM();
      cy.pimSectionGoToAddEmployee();
      cy.pimSectionCreateNewEmployee(firstName, middleName, lastName, randomNumber);
  });

  it('Create a new employee with initial details. Search for that new employee and verify the employee details', () => {
      cy.pimSectionGoToPIM();
      cy.pimSectionGoToAddEmployee();
      cy.pimSectionCreateNewEmployee(firstName, middleName, lastName, randomNumber);
      cy.pimSectionGoToEmployeeList();
      cy.pimSectionSearchForEmployee(firstName);
  });

  it('Create a new employee with all details including initial details and other personal details', () => {
      cy.pimSectionGoToPIM();
      cy.pimSectionGoToAddEmployee();
      cy.pimSectionCreateNewEmployee(firstName, middleName, lastName, randomNumber);
      cy.pimSectionGoToEmployeeList();
      cy.pimSectionSearchForEmployee(firstName);
      cy.pimSectionProvideEmployeePersonalDetails(firstName, middleName, lastName);
  });
});
