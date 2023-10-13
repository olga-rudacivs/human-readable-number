module.exports = function toReadable (number) {
  
        const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      
        if (number < 10) {
          return digits[number];
        }
      
        if (number >= 10 && number < 20) {
          return teens[number - 10];
        }
      
        if (number >= 20 && number < 100) {
          const ten = Math.floor(number / 10);
          const digit = number % 10;
          let result = tens[ten];
      
          if (digit > 0) {
            result += ' ' + digits[digit];
          }
      
          return result;
        }
      
        if (number >= 100) {
          const hundred = Math.floor(number / 100);
          const remainder = number % 100;
          let result = digits[hundred] + ' hundred';
      
          if (remainder > 0) {
            result += ' ' + toReadable(remainder);
          }
      
          return result;
        }
      
}
