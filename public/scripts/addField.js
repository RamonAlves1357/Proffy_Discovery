// Procurar o botão "+ Novo horario"
document.querySelector("#add-time")
    //  Quando clicar no botao
    .addEventListener('click', cloneField)


// Execultar uma ação
function cloneField() {
    // Dulplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(field) {
        // pegar o field atual e limpa
        field.value = ""
    });
    // Colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}