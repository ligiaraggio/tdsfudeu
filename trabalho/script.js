function cadastrarUsuario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');

    if (nome === "" || email === "") {
        message.style.color = 'red';
        message.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    // Simulação de envio dos dados para um servidor ou banco de dados
    message.style.color = 'green';
    message.textContent = "Cadastro concluído com sucesso!";

    // Limpa os campos após o cadastro
    document.getElementById('cadastroForm').reset();