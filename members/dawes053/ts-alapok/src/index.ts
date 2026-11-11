/*
console.log('Hello, QA!');


const baseUrl= "https://shop.example.com";
let loginAttempts = 0;
loginAttempts = loginAttempts + 1;

console.log(baseUrl, loginAttempts);

*/


const testerName: string="Anna";
const testCount: number = 12;
const isPassed: boolean = true;

console.log(testerName);
console.log(testCount);
console.log(isPassed);

const environment = "staging";
const retryCount = 3;
let browser = "chromium";

console.log(`Környezet: ${environment}, újrapróbálás: ${retryCount}`);
console.log(`${testerName} ${testCount} tesztet futtatott, sikeres: ${isPassed}`);