
function escolherIndustria() {
    let container = document.querySelector('.container');
    let questo = document.querySelector('.questo');
    container.classList.add('hide'); // Esconder o container
    questo.classList.remove('hide'); // Mostrar o formulário
}

function fecharForm() {
    let container = document.querySelector('.container');
    let questo = document.querySelector('.questo');
    questo.classList.add('hide');   // Esconder o formulário
    container.classList.remove('hide');  // Mostrar o container
}

function escolherVarejo() {
    let container = document.querySelector('.container');
    let questo = document.querySelector('.questo-varejo');
    container.classList.add('hide'); // Esconder o container
    questo.classList.remove('hide'); // Mostrar o formulário
}

function fecharFormulario() {
    let container = document.querySelector('.container');
    let questo = document.querySelector('.questo-varejo');
    questo.classList.add('hide');   // Esconder o formulário
    container.classList.remove('hide');  // Mostrar o container
}



function definirCor(elemento) {
    // Identifica o grupo de inputs ao qual o elemento pertence
    const grupo = elemento.closest('.radio-group');
    const btnFechar = document.querySelector('.btn-fechar');

    // Remove as cores de todos os rótulos dentro do grupo correspondente
    grupo.querySelectorAll('label').forEach(label => {
        label.classList.remove('red', 'yellow', 'green');
    });

    // Define a cor para o rótulo correspondente ao input clicado
    const label = grupo.querySelector(`label[for="${elemento.id}"]`);

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

    // Define a cor para correspondente ao input clicado
    const label = grupo.querySelector(`label[for="${elemento.id}"]`);

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

  




























// document.getElementById('questionario').addEventListener('submit', function(event) {
//     event.preventDefault();

//

//     // Repita para outros inputs de rádio

//     // Função para classificar as respostas
//     function classificarResposta(valor) {
//       if (valor >= 9) {
//         return 'Promotor';
//       } else if (valor >= 7) {
//         return 'Neutro';
//       } else {
//         return 'Detrator';
//       }
//     }

//     // Classificação das respostas
//     let classificacaoProduto = classificarResposta(produtoSatisfacao);
//     // Repita para outras classificações

//     // Exibir resultado
//     let resultado = `
//       <p>Classificação (Produto - Indústria): <strong>${classificacaoProduto}</strong></p>
//       <!-- Exiba outras classificações -->
//     `;

//     document.getElementById('result').innerHTML = resultado;
//   });

