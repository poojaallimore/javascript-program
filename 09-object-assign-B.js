console.log(`====== SBI Bank Details==================`);

let sbiBank={

    bankName:"SBI Bank",

    location:"Pune",

    accountNo:123456789,

    ifsc:"SBI000123",

    interestRate: 8.9,

    details:function(){

        console.log(`Bank Name:${this.bankName},Location:${this.location},Account No:${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);
        
    }
}
sbiBank.details();

console.log(`====== Bank Details of Axis Bank====================================`);

let axisBank={

    bankName:"AXIS Bank",

    location:"Mumbai",

    accountNo:1234566669,

    ifsc:"AxIS000333",

    interestRate: 7.9,

    details:function(){

        console.log(`Bank Name:${this.bankName},Location:${this.location},Account No:${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);
        
    }
}
axisBank.details();

console.log(`====== HDFC Bank Details==============================================================`);

let hdfcBank={

    bankName:"HDFC Bank",

    location:"Solapur",

    accountNo:2323456789,

    ifsc:"HDFC000122",

    interestRate: 8.8,

    details:function(){

        console.log(`Bank Name:${this.bankName},Location:${this.location},Account No:${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);
        
    }
}
hdfcBank.details();

console.log(`====== YES Bank Details==========================================================`);


let yesBank={

    bankName:"YES Bank",

    location:"Chakan",

    accountNo:1235536789,

    ifsc:"YES000123",

    interestRate: 9.1,

    details:function(){

        console.log(`Bank Name:${this.bankName},Location:${this.location},Account No:${this.accountNo},IFSC:${this.ifsc},Interest Rate:${this.interestRate}`);
        
    }
}
yesBank.details();




