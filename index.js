const personForm = document.querySelector('#personForm');
const message = document.querySelector('#message');

function handleForm(ev){
    ev.preventDefault();
    
    const name = ev.target.personName.value;
    const color = ev.target.color.value;

    message.style.color = color;
    message.textContent = `Hello ${name}`;

}

personForm.addEventListener('submit', handleForm);