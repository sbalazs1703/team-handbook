console.log("Hello, QA!");

const baseUrl = "https://shop.example.com";
let loginAttempts = 0;
loginAttempts = loginAttempts + 1;

console.log(baseUrl, loginAttempts);

const testerName: string = "DEEZ";
const testCount: number = 12;
const isPassed: boolean = true;

console.log(testerName);
console.log(testCount);
console.log(isPassed);

const environment: string = "production";
const retryCount: number = 3;

console.log(`Környezet: ${environment}, újrapróbálás: ${retryCount}`);
console.log(`${testerName} ${testCount} tesztet futtatott, sikeres: ${isPassed}`);