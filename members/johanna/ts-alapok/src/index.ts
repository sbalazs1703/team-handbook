console.log("Hello, QA!");
const testerName: string = "Joha";
const testCount: number = 12;
const isPassed: boolean = true;

console.log(testerName);
console.log(testCount);
console.log(isPassed);

const environment = "staging";
const retryCount = 3;
let browser = "chromium";

console.log(`környezet: ${environment}, újrapróbálás: ${retryCount}`);
console.log(`${testerName} ${testCount} tesztet futtatott, sikeres: ${isPassed}`);