// Seleccionamos los elementos del DOM
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            display.value = '';
        } else if (value === '=') {
            try {
                if (display.value.trim() === '') {
                    display.value = '';
                } else {
                    display.value = eval(display.value);
                }
            } catch {
                display.value = 'Error';
                setTimeout(() => {
                    display.value = '';
                }, 2000);
            }
        } else if (value === '%') {
            display.value = parseFloat(display.value) / 100;
        } else if (value === '√') {
            display.value = Math.sqrt(parseFloat(display.value));
        } else {
            if (display.value === 'Error') {
                display.value = value;
            } else {
                display.value += value;
            }
        }
    });
});

