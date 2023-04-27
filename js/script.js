const passwordField = document.getElementById('password-field'),
    parametersItem = document.getElementById('parameters__item'),
    parametersRange = document.getElementById('parameters__range'),
    checkboxSymbol = document.getElementById('symbol'),
    checkboxNumber = document.getElementById('number'),
    checkboxLowerCase = document.getElementById('lower-case'),
    checkboxUpperCase = document.getElementById('upper-case'),
    button = document.getElementById('btn'),
    charsLowerCase = 'abcdefghijklmnopqrstuvwxyz',
    charsUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    charsNumbers = '0123456789',
    charsSymbols = '@#$%^&*([])'

parametersRange.addEventListener('input', function () {
    parametersItem.value = parametersRange.value;
});

parametersItem.addEventListener('input', function () {
    parametersRange.value = parametersItem.value;
});

button.addEventListener('click', () => {
    let password = '';

    let chars = '';

    if (checkboxLowerCase.checked) {
        chars += charsLowerCase;
    }

    if (checkboxUpperCase.checked) {
        chars += charsUpperCase;
    }

    if (checkboxNumber.checked) {
        chars += charsNumbers;
    }

    if (checkboxSymbol.checked) {
        chars += charsSymbols;
    }

    if (chars === '')
        return;

    if (parametersItem.value < 5)
        parametersItem.value = 5;

    if (parametersItem.value > 30)
        parametersItem.value = 30;

    for (let i = 0; i < parametersItem.value; i++) {
        password += chars[Math.floor(Math.random() * chars.length)]        
    }
    
    passwordField.innerHTML = password;
})

passwordField.addEventListener('click', () => {
    if (passwordField.innerHTML.length)
        copyToClickBoard(passwordField.innerHTML);
})

function copyToClickBoard(text) {
    return navigator.clipboard.writeText(text);
}