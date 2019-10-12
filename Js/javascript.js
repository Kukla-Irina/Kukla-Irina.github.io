function bankarray(){
    var bankid = parseFloat(document.getElementById("bankid").value);
    var annualRate = [.025, .02, .033, .015, .03, .023];
    if (bankid > 5 || bankid < 0 ) {
    var annualRate = "Please put a correct number (From 0 to 5)";
        document.getElementById("Otputbank").innerHTML = annualRate;
    } else {
    document.getElementById("Otputbank").innerHTML = annualRate[bankid];
    var annualRate = annualRate[bankid];
    return annualRate;
}
   
}

function doPayment(annualRate) {
    var annualRate = bankarray(annualRate);
    var principal = parseFloat(document.getElementById('borrowed').value);
    var years = parseFloat(document.getElementById('number').value);
    var periodsPerYear = parseFloat(document.getElementById('payments').value);
    var result = computePayment(principal, annualRate, years, periodsPerYear);
    document.getElementById('outputDiv').innerHTML = result;

}

function doBalance(annualRate) {
    var annualRate = bankarray();
    var principal = parseFloat(document.getElementById('borrowed').value);
    var years = parseFloat(document.getElementById('number').value);
    var periodsPerYear = parseFloat(document.getElementById('payments').value);
    var numberOfPaymentsPaidToDate = parseFloat(document.getElementById('payments2').value);
    var result = computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentsPaidToDate);
    document.getElementById('outputDiv2').innerHTML = result;

}

function computePayment(principal, annualRate, years, periodsPerYear) {
    var r = annualRate / periodsPerYear;
    var n = - years * periodsPerYear;
    var t = Math.pow((1 + r),n);
    var p = (principal * r) / (1 - t);
    return p;
   }

function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentsPaidToDate) {
    var r = annualRate / periodsPerYear;
    var n = - years * periodsPerYear;
    var t = Math.pow((1 + r),n);
    var f = Math.pow((1 + r),numberOfPaymentsPaidToDate);
    var p = (principal * r) / (1 - t);
    var b = (principal * f) - ((p * (f - 1))/r);
    return b;

}

function Powers() {
var res = "";
var t = parseFloat(document.getElementById('number').value); 
for (i = 0; i <= t; i++) {

var power = Math.pow(2, i);

res += power+"<br>"; 
}

document.getElementById("outputDiv").innerHTML = res;
}
