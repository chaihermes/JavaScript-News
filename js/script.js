
let buttonClick = document.getElementById('btn');
let board = document.getElementById('board');

//o eventListener precisa de dois parâmetro, o que ele vai fazer a função que será executada
//function name(params) é igual a ()=>{}. Isso é uma função anônima.
//quando é funcção anônima precisa colocar os (). Se tiver só um parâmentro, não precisa. Dois ou mais, precisa os ().
buttonClick.addEventListener('click', async ()=>{
    //alert("Funcionou!"); Teste pra verificar se o click no botão está funcionando.
    //fetch com o link direto pega as informações pelo método GET.
                    fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=5de5f89fed6647b3b2da3aa7674c33fd")
                    .then(response=>response.json())
                    .then(json=>{
                        console.log(json.articles);
                        mostrarNaTela(json.articles);
                    });
        //dentro do then está fazendo uma função anônima, com arrow function.
        //o fetch retorna um json e no console.log estamos dizendo pro fetch pegar só o que for json.
        //return response.json();   Com arrow function não precisa escrever desse jeito, pode escrever direto deppois da => e sem as chaves.
        // }).then(json=>{
        //     console.log(json);
        // });
        //O json.articles é a lista de notícias.

//OUTRA MANEIRA DE ESCREVER O MESMO CÓDIGO DA PARTE DO FETCH

    // let listaNoticias = (await fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=5de5f89fed6647b3b2da3aa7674c33fd")).json();
    // console.log(await listaNoticias);
});

//função que receberá a lista das notícias, com arrow function:
let mostrarNaTela = listaNoticias=>{
//for(let noticia of listaNoticias)

    //o forEach recebe como valor a notícia.
    listaNoticias.forEach(function(noticia, posicao){

        let card = `<div class="card m-5" style="width: 18rem;">
        <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${noticia.title}</h5>
        <p class="card-text">${noticia.description}</p>
        <a href="${noticia.url}" class="btn btn-dark">Ver mais</a>
        </div>
        </div>`
        // += adiciona algo ao que já existe.
        board.innerHTML += card;
    });
    //template string é usado com duas crases ``    O ${} identifica uma variável.
    //   let saudacao = `Olá ${nome}`
}




// ()=>"solução direta sem {} e sem return"     
// (p1, p2)=>{
//     return "alguma coisa"   
// }
// parâmetro=>{ }

// function soma(a, b){
//     return a+b;
// };
// (a,b)=>a+b
//essas duas funções dão o mesmo resultado. O () recebe os parâmentros, a => funciona como o return.
//a=>a+10   Essa também é um arrow function que recebe apenas um parâmetro.
//let soma = (a,b)=>a+b;    Essa função arrow pode ser guardada em uma variável e ser chamada depois.
//soma(10, 20);