var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(firstName, lastName, rateOfInterrest, ssn) {
        this.accountNumber = BankAccount.nextAccountNumber++;
        this.firstName = firstName;
        this.lastName = lastName;
        this.rateOfInterrest = rateOfInterrest;
        this.ssn = ssn;
        this.balance = 0;
    }
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    BankAccount.nextAccountNumber = 1;
    return BankAccount;
}());
var OverDraftAccount = /** @class */ (function (_super) {
    __extends(OverDraftAccount, _super);
    function OverDraftAccount(firstName, lastName, rateOfInterrest, ssn, overDraftLimit, overDraftInterest) {
        var _this = _super.call(this, firstName, lastName, rateOfInterrest, ssn) || this;
        _this.overDraftLimit = overDraftLimit;
        _this.overDraftInterest = overDraftInterest;
        return _this;
    }
    OverDraftAccount.prototype.addInterrest = function (fee) {
        if (this.balance > 0) {
            this.balance += this.balance * this.rateOfInterrest / 100;
        }
        else {
            this.balance -= this.balance * this.overDraftInterest / 100;
        }
        if (fee != 0) {
            this.balance -= fee;
        }
    };
    ;
    OverDraftAccount.prototype.checkLimit = function () {
        if (this.overDraftLimit < 3000) {
            return false;
        }
        else if (this.overDraftLimit >= 3000) {
            return true;
        }
    };
    return OverDraftAccount;
}(BankAccount));
/*const accountOverdraft: OverDraftAccount = new OverDraftAccount("Maximilian", "Kristensen", 20, 1234, 5000, 10);
accountOverdraft.deposit(200);
accountOverdraft.withdraw(300);
accountOverdraft.addInterrest(0);
console.log(accountOverdraft.balance);
*/
var LoanAccount = /** @class */ (function (_super) {
    __extends(LoanAccount, _super);
    function LoanAccount(firstName, lastName, rateOfInterrest, ssn, principal) {
        var _this = _super.call(this, firstName, lastName, rateOfInterrest, ssn) || this;
        _this.principal = principal;
        return _this;
    }
    LoanAccount.prototype.addInterrest = function (fee) {
        this.balance -= this.balance * this.rateOfInterrest / 100;
        if (fee != 0) {
            this.balance -= fee;
        }
    };
    return LoanAccount;
}(BankAccount));
var accountLoan = new LoanAccount("Maximilian", "Kristensen", 20, 1234, 0);
accountLoan.deposit(100);
accountLoan.addInterrest(0);
console.log(accountLoan.balance);
