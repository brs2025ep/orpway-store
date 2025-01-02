import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parcelarEm'
})
export class ParcelarEmPipe implements PipeTransform {

  transform(price: number | undefined | null, parcelas: number ): string {
    if (!price || price == null) {
      return '';
    } 
    if (!parcelas || parcelas <= 0) {
      parcelas = 1;
    }

    let interestRate = 1;

    switch (parcelas) {
      case 12: interestRate = 1.2161; break;
      case 11: interestRate = 1.2012; break;
      case 10: interestRate = 1.1865; break;
      case 9: interestRate = 1.1769; break;
      case 8: interestRate = 1.1623; break;
      case 7: interestRate = 1.1472; break;
      case 6: interestRate = 1.1365; break;
      case 5: interestRate = 1.1231; break;
      case 4: interestRate = 1.1086; break;
      case 3: interestRate = 1.0923; break;
      case 2: interestRate = 1.0764; break;
      case 1: 
        return `À vista por ${price.toFixed(2)} BRL`; // Pagamento à vista
      default:
        return `À vista por ${price.toFixed(2)} BRL`;
    }

    const monthlyInstallment = (price * interestRate) / parcelas;
    return `${parcelas}x de ${monthlyInstallment.toFixed(2)} BRL`;
  }
}