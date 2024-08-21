
function Bank(bankName,location,ifscCode,branchCode){

    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}

let yesBank = new Bank("Yes Bank","Pune","YES001213","1245637823");

console.log(`Bank Details:Bank Name:${yesBank.bankName},Location:${yesBank.location},IFSC Code:${yesBank.ifscCode},Branch Code:${yesBank.branchCode}`);

let sbiBank = new Bank("SBI Bank","Solapur","SBI001222","3245637823");

console.log(`Bank Details:Bank Name:${sbiBank.bankName},Location:${sbiBank.location},IFSC Code:${sbiBank.ifscCode},Branch Code:${sbiBank.branchCode}`);

let mahBank = new Bank("Maharashtra Bank","Moshi","Maha011213","1775637823");

console.log(`Bank Details:Bank Name:${mahBank.bankName},Location:${mahBank.location},IFSC Code:${mahBank.ifscCode},Branch Code:${mahBank.branchCode}`);

let axisBank = new Bank("Axis Bank","Chakan","AXIS011213","1375637823");

console.log(`Bank Details:Bank Name:${axisBank.bankName},Location:${axisBank.location},IFSC Code:${axisBank.ifscCode},Branch Code:${axisBank.branchCode}`);
 
console.log(`======== Adding new data member into given object prototype===============`);
 
Bank.prototype.openTime = "9 AM IST";

Bank.prototype.closeTime = "6 PM IST";

console.log(`====== 1. Open and Close time of SBI Bank================= `);
 
console.log(`1.SBI BANK:Open Time is:${sbiBank.openTime} and Close Time is:${sbiBank.closeTime}`);

console.log(`====== 2. Bank name and its close time=====================`);

console.log(`2.Bank Details: Bank Name:${axisBank.bankName},and Closing Time is:${axisBank.closeTime}`);
 
console.log(`========= 3. Bank Name,branch Code and its close time===================`);

console.log(`3.Bank Details:Bank Name:${yesBank.bankName},Branch Code:${yesBank.branchCode},Open Time:${yesBank.openTime}`);


