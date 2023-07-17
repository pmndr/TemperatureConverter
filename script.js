//////////////////// SELECT VARIABLES ////////////////////////////////////////////////////////////
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

// input listener
const inputs = document.getElementsByClassName('input');

for(let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);

        switch(e.target.name) {
            case "celsius":
                fahrenheit.value = parseFloat(((value * 1.8) + 32).toFixed(2));
                kelvin.value = parseFloat(((value + 273.15).toFixed(2)));
                break;
            case "fahrenheit":
                celsius.value = parseFloat((((value - 32) / 1.8).toFixed(2)));
                kelvin.value = parseFloat(((((value - 32) / 1.8) + 273.15).toFixed(2)));
                break;
            case "kelvin":
                celsius.value = parseFloat(((value - 273.15).toFixed(2)));
                fahrenheit.value = parseFloat(((((value - 273.15) * 1.8) + 32).toFixed(2)));
                break;
            default:
                break;
        }
    });
}
