function appendToResult(value) {
    const resultField = document.getElementById('result'); 
    const currentValue = resultField.value; 

    // Eğer virgül eklenmek isteniyorsa, kontrol yapılır
    if (value === ',') {
        // Mevcut değer boşsa veya son karakter bir operatörse virgül eklenmesine izin verilmez
        if (currentValue === '' || isOperator(currentValue[currentValue.length - 1])) {
            return; 
        }
        const lastPart = currentValue.split(/[\+\-\*\/\%]/).pop(); // Son işleme göre son parça alınır
        if (lastPart.includes(',')) {
            return; // Son parçanın içinde zaten bir virgül varsa izin verilmez
        }
    }
    resultField.value += value; // Değer sonuç alanına eklenir
}

function isOperator(char) {
    return ['+', '-', '*', '/', '%'].includes(char); // Belirtilen karakterin operatör olup olmadığı kontrol edilir
}

function clearResult() {
    document.getElementById('result').value = ''; // Sonuç alanı temizlenir
}

function calculateResult() {
    try {
        // Mevcut değer alınır ve virgül noktaya çevrilir
        const result = eval(document.getElementById('result').value.replace(/,/g, '.')); 
        document.getElementById('result').value = result.toString().replace('.', ','); 
    } catch (error) {
        alert("Geçersiz işlem!"); // Hata durumunda uyarı verilir
        clearResult();
    }
}

function toggleSign() {
    const resultField = document.getElementById('result'); 
    const currentValue = resultField.value; 

    if (currentValue) {
        // Eğer mevcut değer negatifse, pozitif yapılır
        if (currentValue.startsWith('-')) {
            resultField.value = currentValue.slice(1); 
        } else {
            resultField.value = '-' + currentValue; // Pozitifse negatif yapılır
        }
    }
}

function calculatePercentage() {
    const resultField = document.getElementById('result'); 
    const currentValue = parseFloat(resultField.value.replace(',', '.')); // Mevcut değer alınır ve virgül nokta yapılır

    // Eğer değer geçerli bir sayıysa, yüzde hesaplanır
    if (!isNaN(currentValue)) {
        resultField.value = (currentValue / 100).toString().replace('.', ','); // Yüzde değerini hesaplanır ve virgül ile göster
    }
}
