
function escolherIndustria() {
    let container = document.querySelector('.container');
    let questo = document.querySelector('.conteiner-questao');
    // let escolher = document.querySelector('#cor-escolhido')
    container.classList.add('hide'); // Esconder o container
    questo.classList.remove('hide'); // Mostrar o formulário
}

function fecharForm() {
    let container = document.querySelector('.container');
    let questo = document.querySelector('.conteiner-questao');
    questo.classList.add('hide');   // Esconder o formulário
    container.classList.remove('hide');  // Mostrar o container
}

function escolherVarejo() {
    let container = document.querySelector('.container');
    let questo = document.querySelector('.conteiner-questao2');
    container.classList.add('hide'); // Esconder o container
    questo.classList.remove('hide'); // Mostrar o formulário
}

function fecharFormulario() {
    let container = document.querySelector('.container');
    let questo = document.querySelector('.conteiner-questao2');
    questo.classList.add('hide');   // Esconder o formulário
    container.classList.remove('hide');  // Mostrar o container
}



function definirCor(elemento) {
    // Identifica o grupo de inputs ao qual o elemento pertence
     const grupo = elemento.closest('.radio-group');

    // Remove as cores de todos os rótulos dentro do grupo correspondente
    grupo.querySelectorAll('label').forEach(label => {
        label.classList.remove('red', 'yellow', 'green');
    });

    // Define a cor para o rótulo correspondente ao input clicado
    const label = grupo.querySelector('label[for="' + elemento.id +'"]');

    if (elemento.value >= 0 && elemento.value <= 5) {
        label.classList.add('red');
    } else if (elemento.value >= 6 && elemento.value <= 8) {
        label.classList.add('yellow');
    } else if (elemento.value >= 9 && elemento.value <= 10) {
        label.classList.add('green');
    }

}

function corButao(elemento) {
    // Identifica o grupo de inputs ao qual o elemento pertence
    const grupo = elemento.closest('.grupo-produto');

    // Remove as cores de todos os inputs correspondente
    const labels = grupo.querySelectorAll('label');
    labels.forEach(label => {
        label.classList.remove('red', 'yellow', 'green');
    });

    // Define a cor correspondente ao input clicado
    const label = grupo.querySelector('label[for="' + elemento.id + '"]');

    if (elemento.value >= 0 && elemento.value <= 5) {
        label.classList.add('red');
    } else if (elemento.value >= 6 && elemento.value <= 8) {
        label.classList.add('yellow');
    } else if (elemento.value >= 9 && elemento.value <= 10) {
        label.classList.add('green');
    }

}

//Função para desabilitar e habilatar botão
function toggleButton() {
    const algumSelecionado = document.querySelector('input[name="ind_produto"]:checked');
    const algumSelecionado2 = document.querySelector('input[name="atendimento"]:checked');
    const botao = document.querySelector('#botaoEnviar');
    if (algumSelecionado && algumSelecionado2) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}
function toggleButton2() {
    const algumSelecionado = document.querySelector('input[name="recomendacao_prod"]:checked');
    const algumSelecionado2 = document.querySelector('input[name="satisfacao_empr"]:checked');
    const botao = document.querySelector('#botaoEnviar2');
     if (algumSelecionado && algumSelecionado2) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}

function srcCNPJ(id){
    var nm = document.querySelector("#nome_cli" + id);
    var cnpj = document.querySelector("#cnpj" + id).value;

if(cnpj.length == 18){
    fetch("config/srcCNPJ.php?cnpj=" + cnpj)
    .then(resp => resp.text())
    .then(resp => {
        nm.innerHTML = resp;
    })
}
}
   
  




























