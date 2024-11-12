// Função para salvar o nome e redirecionar para a página "dashboard"
function atualizarNome() {
    const nomeSetado = document.getElementById('setarNome').value;
    localStorage.setItem('nomeUsuario', nomeSetado); // Salva o nome no localStorage
    window.location.href = 'dashboard.html'; // Redireciona para a página de destino
}

// Função para recuperar e exibir o nome na página "dashboard"
function mostrarNome() {
    const nomeUsuario = localStorage.getItem('nomeUsuario');
    const nomeElemento = document.getElementById('nomeSetado');
    
    // Se existir um nome salvo, exibe-o; caso contrário, exibe "Visitante"
    if (nomeUsuario && nomeElemento) {
        nomeElemento.innerText = nomeUsuario;
    }
}

// Executa a função de exibir nome automaticamente se o elemento estiver presente
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('nomeSetado')) {
        mostrarNome();
    }
});
