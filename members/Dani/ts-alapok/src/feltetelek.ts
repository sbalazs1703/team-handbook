export {};

const passedCount = 45;
const failedCount = 5;

const totalCount = passedCount + failedCount;
const passRate = (passedCount / totalCount) * 100;

console.log(`Total: ${totalCount}`);
console.log(`Failed: ${totalCount - passedCount}`);
console.log(`Pass rate: ${passRate}%`);
console.log(`Remainder: ${totalCount % 8}`);

console.log(passRate >= 90);
console.log(passRate < 80);
console.log(totalCount === 50);
console.log(totalCount !== 50);

const statusCode: number = 404;
console.log(statusCode === 200);



const password: string = "Secret123";
const minLength = 8;
const maxLength = 64;
const passwordLength = password.length;

if (passwordLength > maxLength) {
    console.log(`Invalid: too long pw, keep it short cuzo (${passwordLength})`);
} else if (passwordLength < minLength) {
    console.log(`Invalid: too short pw, speak up bozo (${passwordLength})`);
} else {
    console.log(`Valiiiiiiid (${passwordLength})`);
}
