



const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3RlUWEiLCJwYXNzd29yZCI6IjEyMzRAYkRDIiwiaWF0IjoxNzE0OTYyNDcxfQ.2U9rbyGP_68b8dTmc1CTtLY2mYoPt2grouQ9nFG60MI");

const raw = JSON.stringify({
  "userName": "testeQa",
  "password": "1234@bDC"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/Account/v1/User", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));