module.exports = function toReadable (number) {
    var zeroToTwenty = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    var tenth = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
    var zeroToTwenty = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    var tenth = ['0ten', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
    if (number <= 20) return zeroToTwenty[number];
    
    else if (number.toString().slice(-1) === '0' && number.toString().length === 2) return tenth[Array.from(String(number))[0]];
  
   else if (20 < number <= 99 && number.toString().length === 2) return tenth[Array.from(String(number))[0]] + " " + zeroToTwenty[Array.from(String(number))[1]];  
  
  else if (number.toString().slice(1) === "00") return zeroToTwenty[Array.from(String(number))[0]] +" " + "hundred";   
     
   else if (number.toString().slice(-1) === '0' && number.toString().length === 3) return zeroToTwenty[Array.from(String(number))[0]] +" " + "hundred"+" "+ tenth[Array.from(String(number))[1]];  
  
  else if (number.toString().length === 3 && number.toString().charAt(1) === '0') return zeroToTwenty[Array.from(String(number))[0]] + " " + "hundred"+ " " + zeroToTwenty[Array.from(String(number))[2]];   
  
   else if (number.toString().length === 3 && number.toString().charAt(1) === '1') return zeroToTwenty[Array.from(String(number))[0]] + " " + "hundred"+ " " + zeroToTwenty[number.toString().slice(1)];      
  
  else if (number.toString().length === 3 && number.toString().charAt(-2) != '1') return zeroToTwenty[Array.from(String(number))[0]] +" " + "hundred"+" "+ tenth[Array.from(String(number))[1]] + " " + zeroToTwenty[Array.from(String(number))[2]];
}
