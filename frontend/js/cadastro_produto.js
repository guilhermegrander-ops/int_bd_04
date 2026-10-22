let resposta = document.getElementById('resposta')

let btn_cad_usuario = document.getElementById('btn_cad_usuario')

btn_cad_usuario.addEventListener('click', (e)=>{
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    let valores = {
        nome: nome,
        email: email,
        senha: senha
    }

    fetch(`http://localhost:3000/usuario`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados =>{
        console.log(dados)
    })
    .catch((err)=>{
        console.error('Não foi possivel cadastrar o usuario',err)
    })

})