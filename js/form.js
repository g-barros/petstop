let form = document.querySelector('.form-card');
let inputs = document.querySelectorAll('.form-card input');
let blankInput = document.querySelector('.blank-input');

function enviarMensagem() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Formulário enviado com sucesso!',
    showConfirmButton: false,
    timer: 1500,
  });
}

function clearInputs() {
  [...inputs].forEach((input) => (input.value = ''));
}

function validateInputs() {
  return [...inputs].filter((input) => input.value === '').length === 0;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (validateInputs()) {
    enviarMensagem();
    clearInputs();
  } else {
    blankInput.innerHTML += '<div>Preencha todos os campos!</div>';
  }
  inputs.value = '';
});
