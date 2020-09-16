interface IBankAccount{
    accountNumber : number;
    balance : number;
    firstName : string;
    lastName : string;
    rateOfInterrest : number;
    ssn : number;

    addInterrest() : void;
    addInterrest(fee : number) : void;
    deposit(amount : number) : void;
    getBalance() : number;
    withdraw(amount : number) : void;
}

abstract class BankAccount implements IBankAccount{
    accountNumber: number;
    balance : 0;
    firstName: string;
    lastName: string;
    rateOfInterrest: number;
    ssn : number;
    static nextAccountNumber : number = 1;
  
    constructor(firstName :string,lastName : string,rateOfInterrest : number, ssn: number) {
       
       this.accountNumber = BankAccount.nextAccountNumber ++;
       this.firstName = firstName ;
       this.lastName = lastName;
       this.rateOfInterrest = rateOfInterrest;
       this.ssn = ssn;
       this.balance = 0;
       
        
    }

    abstract addInterrest();
    abstract addInterrest(fee: number);
     
    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        this.balance -= amount;
    }

}

class OverDraftAccount extends BankAccount{
    overDraftInterest : number;
    overDraftLimit : number;

    constructor(firstName : string,lastName : string,rateOfInterrest : number,ssn : number, overDraftLimit : number, overDraftInterest : number) {
        super(firstName,lastName,rateOfInterrest,ssn);
        this.overDraftLimit = overDraftLimit;
        this.overDraftInterest = overDraftInterest;
    }

    addInterrest(fee? : number) {
        if(this.balance > 0){
            this.balance += this.balance * this.rateOfInterrest / 100;
        }
        else{
            this.balance -= this.balance * this.overDraftInterest / 100;
        }
        if (fee != 0){
            this.balance -= fee;
        }
    };

    checkLimit() : boolean{
        if(this.overDraftLimit < 3000){
            return false;
        }
        else if(this.overDraftLimit >= 3000){
            return true;
        }
    }
}

/*const accountOverdraft: OverDraftAccount = new OverDraftAccount("Maximilian", "Kristensen", 20, 1234, 5000, 10);
accountOverdraft.deposit(200);
accountOverdraft.withdraw(300);
accountOverdraft.addInterrest(0);
console.log(accountOverdraft.balance);
*/

class LoanAccount extends BankAccount{

    principal : number;

    
    constructor(firstName : string,lastName : string,rateOfInterrest : number,ssn : number, principal : number) {
        super(firstName,lastName,rateOfInterrest,ssn);
        this.principal = principal
    }



    addInterrest(fee? : number) {
        this.balance -= this.balance * this.rateOfInterrest / 100;
       
        if (fee != 0){
            this.balance -= fee;
        }
    }
}

/*
const accountLoan: IBankAccount = new LoanAccount("Maximilian", "Kristensen", 20,1234,0);
accountLoan.deposit(100);
accountLoan.addInterrest(0);
console.log(accountLoan.balance);
*/