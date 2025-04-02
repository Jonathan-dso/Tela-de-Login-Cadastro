function alternarFormulario() {
    const formuarioLogin = document.querySelector('.formulario-login');
    const formuarioCadastro = document.querySelector('.formulario-cadastro');

    if (formuarioLogin.classList.contains('ativo')) {

        formuarioLogin.classList.remove('ativo');
        formuarioCadastro.classList.add('ativo');
    
    } else {

        formuarioCadastro.classList.remove('ativo');
        formuarioLogin.classList.add('ativo');
    }
}