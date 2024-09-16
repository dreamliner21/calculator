// API Key dari ExchangeRate API
const API_KEY = '88248bb578b88d73f295187b';
const API_URL = 'https://v6.exchangerate-api.com/v6/' + API_KEY + '/latest/';

// Fungsi untuk operasi matematika
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        case 'square':
            result = Math.pow(num1, 2);
            break;
        case 'sqrt':
            result = Math.sqrt(num1);
            break;
        default:
            result = 'Operasi tidak dikenal';
    }

    document.getElementById('mathResult').innerText = 'Hasil: ' + result;
}

// Fungsi untuk konversi tinggi badan
function convertHeight(unit) {
    const heightCm = parseFloat(document.getElementById('height').value);
    let result;

    switch (unit) {
        case 'm':
            result = heightCm / 100;
            break;
        case 'inch':
            result = heightCm / 2.54;
            break;
        case 'km':
            result = heightCm / 100000;
            break;
        case 'dm':
            result = heightCm / 10;
            break;
        case 'mm':
            result = heightCm * 10;
            break;
        case 'um':
            result = heightCm * 10000;
            break;
        case 'nm':
            result = heightCm * 10000000;
            break;
        default:
            result = 'Unit tidak dikenal';
    }

    document.getElementById('heightResult').innerText = 'Hasil: ' + result;
}

// Fungsi untuk konversi berat badan
function convertWeight(unit) {
    const weightKg = parseFloat(document.getElementById('weight').value);
    let result;

    switch (unit) {
        case 'lbs':
            result = weightKg * 2.20462;
            break;
        case 'ounce':
            result = weightKg * 35.274;
            break;
        case 'g':
            result = weightKg * 1000;
            break;
        case 'ton':
            result = weightKg / 1000;
            break;
        case 'mg':
            result = weightKg * 1000000;
            break;
        case 'quintal':
            result = weightKg / 100;
            break;
        default:
            result = 'Unit tidak dikenal';
    }

    document.getElementById('weightResult').innerText = 'Hasil: ' + result;
}

// Fungsi untuk menghitung BMI
function calculateBMI() {
    const heightCm = parseFloat(document.getElementById('bmiHeight').value);
    const weightKg = parseFloat(document.getElementById('bmiWeight').value);
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    document.getElementById('bmiResult').innerText = 'BMI: ' + bmi.toFixed(2);
}

// Fungsi untuk konversi suhu
function convertTemperature() {
    const temp = parseFloat(document.getElementById('temp').value);
    const conversionType = document.getElementById('tempConversionType').value;
    let result;

    switch (conversionType) {
        case 'CtoF':
            result = (temp * 9/5) + 32;
            break;
        case 'CtoK':
            result = temp + 273.15;
            break;
        case 'FtoC':
            result = (temp - 32) * 5/9;
            break;
        case 'KtoC':
            result = temp - 273.15;
            break;
        case 'CtoR':
            result = (temp + 273.15) * 9/5;
            break;
        case 'CtoRe':
            result = temp * 4/5;
            break;
        default:
            result = 'Konversi tidak dikenal';
    }

    document.getElementById('tempResult').innerText = 'Hasil: ' + result;
}

// Fungsi untuk konversi mata uang
async function convertCurrency() {
    const amount = parseFloat(document.getElementById('currencyAmount').value);
    const fromCurrency = document.getElementById('currencyFrom').value;
    const toCurrency = document.getElementById('currencyTo').value;

    try {
        const response = await fetch(API_URL + fromCurrency);
        const data = await response.json();
        const rate = data.conversion_rates[toCurrency];
        const result = amount * rate;

        document.getElementById('currencyResult').innerText = 'Hasil: ' + result.toFixed(2) + ' ' + toCurrency;
    } catch (error) {
        document.getElementById('currencyResult').innerText = 'Terjadi kesalahan saat mengakses API';
    }
}
