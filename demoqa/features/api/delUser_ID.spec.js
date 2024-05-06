

import { test, expect } from '@playwright/test'

fetch("/Account/v1/User/1c1d15a8-fa3b-49d9-a890-63c04e752b84", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));


const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3RlUWEiLCJwYXNzd29yZCI6IjEyMzRAYkRDIiwiaWF0IjoxNzE0OTYyNDcxfQ.2U9rbyGP_68b8dTmc1CTtLY2mYoPt2grouQ9nFG60MI");

const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  redirect: "follow"
};
