var searchButton = document.getElementById("buscar-cep")
var searchInput = document.getElementById("cep")
var resultado = document.getElementById("resultado");

searchButton.addEventListener("click", () => {
  const cepValue = document.getElementById('cep').value;

  if (searchInput.value === "") {
    resultado.style.display = ""
    resultado.innerHTML = `
      <p><strong>Não foram encontrados resultados!</strong></p>
    `;
  }

  else if (cepValue.length < 8) {
    resultado.style.display = ""
    resultado.innerHTML = `
      <p><strong>Não foram encontrados resultados!</strong></p>
    `;
  }

  else {
    const cep = document.getElementById("cep").value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        resultado.style.display = ""
        resultado.innerHTML = `
        <p><strong>CEP:</strong> ${data.cep}</p>
        <p><strong>Logradouro:</strong> ${data.logradouro}</p>
        <p><strong>Bairro:</strong> ${data.bairro}</p>
        <p><strong>Cidade:</strong> ${data.localidade}</p>
        <p><strong>Estado:</strong> ${data.uf}</p>
      `;
      })
      .catch(error => console.error(error));
  }

})


