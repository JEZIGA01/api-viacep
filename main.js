const inputCep = document.getElementById('cep');
const resultadoCep = document.querySelector('.resultadoCep');

inputCep.addEventListener('keyup', showCEP);

function showCEP(event) {
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(body => { 
      resultadoCep.innerText = `
    O seu logradouro é: ${body.logradouro}, localizado na cidade: ${body.localidade},
     no bairro : ${body.bairro}, estado : ${body.uf}
    `;
    })
}
