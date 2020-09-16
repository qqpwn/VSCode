interface IVATCalulator {
   // x : number;
   // y : number;
    
 
    calculate(amount : number) : number;
    
}

class VATCalulator implements IVATCalulator {
   // x: number;
   // y: number;
 
    
   /* constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
        
    } */

    calculate(amount: number): number {
        // amount = (this.x + this.y); 
        return amount * 1.25;
    }
    
}

const vat: IVATCalulator = new VATCalulator()
console.log(vat.calculate(100))