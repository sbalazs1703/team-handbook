console.log("Hello, QA!");

const testerName: string = "Anna";
const testCount: number = 12;
const isPassed: boolean = true;
const baseUrl = "https://shop.example.com";
let loginAttempts = 0;
loginAttempts = loginAttempts + 1;

console.log(baseUrl, loginAttempts);

console.log(`Tester: ${testerName}, Tests Run: ${testCount}, Passed: ${isPassed}`);

const environment = "staging";
const retryCount = 3;

console.log(`Environment: ${environment}, Retry Count: ${retryCount}`);
