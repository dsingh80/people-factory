const personForm = document.querySelector('form#personForm');

function handleSubmit(ev){
    ev.preventDefault();
    console.log("Submit attemped");
    const name = ev.target.personName.value;
    document.querySelector('h1').textContent = `Hi ${name}!`;
}

personForm.addEventListener('submit', handleSubmit);