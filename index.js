const personForm = document.querySelector('#personForm');
const message = document.querySelector('#message');

function hexToRgb(hex) {
    // Thanks StackOverflow, i'm lazy
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


function getColorVal(color){
    const rgb = hexToRgb(color);
    return rgb.r + rgb.g + rgb.b;
}

function handleForm(ev){
    ev.preventDefault();
    
    const name = ev.target.personName.value;
    const color = ev.target.color.value;

    message.style.color = color;
    message.textContent = `Hello, ${name}!`;

    if (getColorVal(color) > 300){
        message.style.background = "rgba(255, 255, 255, 0)"
    }
    else{
        message.style.background = "rgba(255, 255, 255, 1)";
    }

    message.classList.remove('inactive');
}

personForm.addEventListener('submit', handleForm);