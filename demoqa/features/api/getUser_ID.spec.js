
import { test, expect } from '@playwright/test'


test('API_getUser_ID', async ({ request }) => {

  fetch("/Account/v1/User/1c1d15a8-fa3b-49d9-a890-63c04e752b84", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

const myHeaders = new Headers();
myHeaders.append(Authorization, "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3RlUWEiLCJwYXNzd29yZCI6IjEyMzRAYkRDIiwiaWF0IjoxNzE0OTYyNDcxfQ.2U9rbyGP_68b8dTmc1CTtLY2mYoPt2grouQ9nFG60MI");

const requestOptions = {
  method: GET,
  headers: myHeaders,
  redirect: follow
};

});
/* 
  test('Response code is 200', Response code is 200, function () {
      expect(esponse.code).to.equal(200);
  })
  test('Response time is less than 3000ms', Response time is less than 3000ms, function () {
    expect(esponseesponseTime).to.be.below(3000);
  });
  
  
  test(Response has the required fields - userID, username, and books, function () {
      const responseData = esponse.json();
      
      expect(responseData).to.be.an('object');
      expect(responseData).to.have.property('userID');
      expect(responseData).to.have.property('username');
      expect(responseData).to.have.property('books');
  });
  
  
  test(UserID and username should be non-empty strings, function () {
    const responseData = esponse.json();
    
    expect(responseData).to.be.an('object');
    expect(responseData.userID).to.be.a('string').and.to.have.lengthOf.at.least(1, UserID should be a non-empty string);
    expect(responseData.username).to.be.a('string').and.to.have.lengthOf.at.least(1, Username should be a non-empty string);
  });
  
  
  test(Books array is present and empty, function () {
      const responseData = esponse.json();
      
      expect(responseData).to.be.an('object');
      expect(responseData.books).to.exist.and.to.be.an('array').that.is.empty;
  });
  
  
  test(Response has the Content-Type header set to application/json, function () {
      expect(esponse.headers.get('Content-Type')).to.include('application/json');
  });
  
  // Check for a specific error message in the response
  test(Check for specific error message in the response, function () {
      const responseData = esponse.json();
      // Replace 'specificErrorMessage' with the actual error message you want to check for
      expect(responseData.error).to.eql('specificErrorMessage');
  });
   */
  







  