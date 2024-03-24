// Get HTML elements
let benefits = document.querySelector("#benefits").value
const button = document.querySelector(".button")
// Convert string to number
benefits = parseFloat(benefits)
// initialise Variables
let nhif;
let nssf;
let insuranceRelief;
let personalRelief;
let payee;
let taxablePay;
let netPay;

// Function to calculate NHIF
function nhifCalc() {
    // Get HTML elements
    let basicSalary = document.querySelector("#salary").value
    // Convert string to number
    basicSalary = parseFloat(basicSalary)

    // Calculate NHIF based on basic salary
    if (basicSalary >= 600 && basicSalary <= 5999) {
        nhif = 150
    }
    // More conditions for different basic salary ranges
    else if (basicSalary >= 6000 && basicSalary <= 7999) {
        nhif = 300
    } else if (basicSalary >= 8000 && basicSalary <= 11999) {
        nhif = 400
    } else if (basicSalary >= 12000 && basicSalary <= 14999) {
        nhif = 500
    } else if (basicSalary >= 15000 && basicSalary <= 19999) {
        nhif = 600
    } else if (basicSalary >= 20000 && basicSalary <= 24999) {
        nhif = 750

    } else if (basicSalary >= 25000 && basicSalary <= 29999) {
        nhif = 850
    } else if (basicSalary >= 30000 && basicSalary <= 34999) {
        nhif = 900
    } else if (basicSalary >= 35000 && basicSalary <= 39999) {
        nhif = 950
    } else if (basicSalary >= 40000 && basicSalary <= 44999) {
        nhif = 1000
    } else if (basicSalary >= 45000 && basicSalary <= 49999) {
        nhif = 1100
    } else if (basicSalary >= 50000 && basicSalary <= 59999) {
        nhif = 1200
    } else if (basicSalary >= 60000 && basicSalary <= 69999) {
        nhif = 1300
    } else if (basicSalary >= 70000 && basicSalary <= 79999) {
        nhif = 1400
    } else if (basicSalary >= 80000 && basicSalary <= 89999) {
        nhif = 1500
    } else if (basicSalary >= 90000 && basicSalary <= 99999) {
        nhif = 1600
    } else if (basicSalary >= 100000) {
        nhif = 1700
    } else {
        nhif = 0
    }
    return nhif
}

// Function to calculate NSSF contribution
function nssfCalc() {
    // Get basic salary value from HTML
    let basicSalary = document.querySelector("#salary").value
    // Convert string to number
    basicSalary = parseFloat(basicSalary)
    // If basic salary is between 1000 and 7000
    if (basicSalary > 1000 && basicSalary <= 7000) {
        // Set NSSF to 420
        nssf = 420

    } // If basic salary is between 7001 and 36000
    else if (basicSalary > 7000 && basicSalary <= 36000) {
        // Calculate NSSF based on 6% of basic salary
        nssf = Math.round(420 + 0.06 * (basicSalary - 7000))

    }// Fixed amount for this range
    else if (basicSalary > 36000) {
        nssf = 2160
    } else {
        nssf = 0
    }
    return nssf

}

// Function to calculate insurance relief
function insuranceReliefCalc() {
    nhif = nhifCalc()
    insuranceRelief = Math.round(0.15 * nhif)
    return insuranceRelief

}

// Function to calculate Payee
function payeeCalc() {
    let basicSalary = document.querySelector("#salary").value
    let benefits = document.querySelector("#benefits").value
    basicSalary = parseFloat(basicSalary)
    benefits = parseFloat(benefits)
    // Define constant values
    let personalRelief = 2400
    let insuranceRelief = insuranceReliefCalc()
    let nssf = nssfCalc()
    // Calculate taxable pay
    taxablePay = basicSalary - benefits - nssf
    // Calculate payee based on taxable pay range
    if (taxablePay === 24001) {
        payee = 2400 - personalRelief - insuranceRelief
    } else if (taxablePay > 24001 && taxablePay <= 32333) {
        payee = Math.round(2400 + 0.25 * (taxablePay - 24001) - personalRelief - insuranceRelief)
    } else if (taxablePay > 32333) {
        payee = Math.round(2400 + 0.25 * (32333 - 24000) + 0.3 * (taxablePay - 32333) - personalRelief - insuranceRelief)
    } else {
        payee = 0
    }
    // Return the calculated payee
    return payee

}

// Function to calculate net pay
function netPayCalc() {
    let basicSalary = document.querySelector("#salary").value
    let benefits = document.querySelector("#benefits").value
    basicSalary = parseFloat(basicSalary)
    benefits = parseFloat(benefits)
    // Get payee and NSSF and NHIF values
    let payee = payeeCalc()
    let nssf = nssfCalc()
    let nhif = nhifCalc()
    // Calculate net pay
    netPay = basicSalary - benefits - payee - nssf - nhif
    if (netPay < 0) {
        netPay = 0
    } else {
        netPay = netPay
    }
    return Math.round(netPay)
}