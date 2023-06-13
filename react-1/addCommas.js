function addCommas(num) {
    numStr = String(num);
    if (numStr.includes(".")){
        const [integerPart, decimalPart] = numStr.split('.');
        let splitNum = integerPart.split('');
        let commaNumArr = [];
        let count = 0;
        for (let i = splitNum.length -1; i >= 0; i--){
            if (count < 2 || i == 0){
                commaNumArr.unshift(splitNum[i]);
                count++;
            }
            else {
                commaNumArr.unshift(splitNum[i]);
                commaNumArr.unshift(',');
                count = 0;
            }
        }
        commaNumStr = commaNumArr.join('');
        commaNumStr += "." + decimalPart;
        return commaNumStr;
    }
    else {
        let splitNum = numStr.split('');
        let commaNumArr = [];
        let count = 0;
        for (let i = splitNum.length -1; i >= 0; i--){
            if (count < 2 || i == 0){
                commaNumArr.unshift(splitNum[i]);
                count++;
            }
            else {
                commaNumArr.unshift(splitNum[i]);
                commaNumArr.unshift(',');
                count = 0;
            }
        }
        commaNumStr = commaNumArr.join('');
        return commaNumStr;
    }
}


module.exports = addCommas;