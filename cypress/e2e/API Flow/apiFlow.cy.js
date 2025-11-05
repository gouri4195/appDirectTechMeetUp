describe('Sample API tests', () => {

  it('GET users returns 200 and has data', () => {
    cy.request('GET', `https://jsonplaceholder.typicode.com/users/1`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('email').eq('Sincere@april.biz');
    });
  });

  it('POST create returns 201 and validates the created user details', () => {
    const requestBody = {
        "name": "John Doe",
        "username": "john.doe",
        "email": "john.doe@example.com"
    };
    cy.request('POST', 'https://jsonplaceholder.typicode.com/users', requestBody).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name').eq(requestBody.name);
      expect(response.body).to.have.property('username').eq(requestBody.username);
      expect(response.body).to.have.property('email').eq(requestBody.email);
      const createdId = response.body.id;

      // Use the created id to fetch the user and validate details
      return cy.request('GET', `https://jsonplaceholder.typicode.com/users/${createdId}`).then((getResponse) => {
        expect(getResponse.status).to.eq(200);
        // Validate that the response contains same user details as created
        expect(getResponse.body).to.have.property('id').eq(createdId);
        expect(getResponse.body).to.have.property('name').eq(requestBody.name);
        expect(getResponse.body).to.have.property('username').eq(requestBody.username);
        expect(getResponse.body).to.have.property('email').eq(requestBody.email);
      });
    });
  });
});
