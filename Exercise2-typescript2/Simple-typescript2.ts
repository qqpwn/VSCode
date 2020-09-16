interface IBankAccount{
    accountNumber : number;
    balance : number;
    firstName : string;
    lastName : string;
    rateOfInterrest : number;
    ssn : number;

    addInterrest();
    addInterrest(fee : number);
    deposit(amount : number);
    getBalance() : number;
    withdraw(amount : number);
}

abstract class BankAccount implements IBankAccount{
    accountNumber: number;
    balance : 0;
    firstName: string;
    lastName: string;
    rateOfInterrest: number;
    ssn : number;
    static nextAccountNumber : 0;
  
    constructor(firstName :string,lastName : string,rateOfInterrest : number, ssn: number) {
       
       this.accountNumber = BankAccount.nextAccountNumber + 1;
       firstName = this.firstName;
       lastName = this.lastName;
       rateOfInterrest = this.rateOfInterrest;
       ssn = this.ssn;
       
        
    }

    abstract addInterrest();
    abstract addInterrest(fee: number);
      
    deposit(amount: number) {
        throw new Error("Method not implemented.");
    }
    getBalance(): number {
        throw new Error("Method not implemented.");
    }
    withdraw(amount: number) {
        throw new Error("Method not implemented.");
    }

}

class OverDraftAccount extends BankAccount{
    overDraftInterest : number;
    overDraftLimit : number;

    constructor(firstName : string,lastName : string,rateOfInterrest : number,ssn : number) {
        super(firstName,lastName,rateOfInterrest,ssn);
        
    }

    addInterrest(fee? : number) {

    };

    checkLimit() : boolean{
        return true;
    }
}

class LoanAccount extends BankAccount{

    principal : number;

    
    constructor(firstName : string,lastName : string,rateOfInterrest : number,ssn : number) {
        super(firstName,lastName,rateOfInterrest,ssn);
        
    }

    addInterrest(fee? : number) {
        
    }
}