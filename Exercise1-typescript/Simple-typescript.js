var VATCalulator = /** @class */ (function () {
    function VATCalulator() {
    }
    // x: number;
    // y: number;
    /* constructor(x : number, y : number) {
         this.x = x;
         this.y = y;
         
     } */
    VATCalulator.prototype.calculate = function (amount) {
        // amount = (this.x + this.y); 
        return amount * 1.25;
    };
    return VATCalulator;
}());
var vat = new VATCalulator();
console.log(vat.calculate(100));
