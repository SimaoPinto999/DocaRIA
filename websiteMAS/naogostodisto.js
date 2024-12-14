const clienteRadio = document.getElementById('registerClient');
const produtorRadio = document.getElementById('registerProdutor');
const clienteForm = document.getElementById('clienteForm');
const produtorForm = document.getElementById('produtorForm');

const products = [
    { id: 1, name: "Ovos Moles", price: 5.99, image: "https://receitasdepesos.com.br/wp-content/uploads/2023/07/ovos-moles.jpg", produtor: "Confeitaria Aveirense" },
    { id: 2, name: "Pão de Ló", price: 7.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdCBMU3Y1LsU1DWkENmnX0bJTsE0ydcX-dQ&s", produtor: "Doces da Maria" },
    { id: 3, name: "Bolo Fixolas", price: 20, image: "https://cdnx.jumpseller.com/os-bolos-da-marta/image/52703178/14_14_11zon.webp?1725642309", produtor: "Zé Dos Bolos" },
    { id: 4, name: "Bolo de Cenoura", price: 25, image: "https://static.itdg.com.br/images/360-240/d290bc79bcad112ee9095604e45eb262/365326-original.jpg", produtor: "Zé Dos Bolos" },
    { id: 5, name: "Queijadas de Sintra", price: 4.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkYu0GmtdBsbzX2Fq64eZnDIddi8SvUaUAw&s", produtor: "Doçaria Real" },
    { id: 6, name: "Pastéis de Nata", price: 1.20, image: "https://docerar.pt/wp-content/uploads/2018/03/pasteis-de-nata-1.jpg", produtor: "Fábrica de Nata" },
    { id: 7, name: "Tarte de Amêndoa", price: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5U-omg4VzX69bMSX93TfX7Gvc6cbx5NzrQ&s", produtor: "Doce Dourado" },
    { id: 8, name: "Travesseiros de Sintra", price: 6.99, image: "https://www.pingodoce.pt/wp-content/uploads/2022/03/travesseiros.jpg", produtor: "Doçaria Real" },
    { id: 9, name: "Pudim Flan", price: 8.50, image: "https://asset.skoiy.com/gta2554ejcwslaya/iazdfgdlrgbh.jpg?w=1852&q=80", produtor: "Doces da Maria" },
    { id: 10, name: "Salame de Chocolate", price: 5.00, image: "https://www.pingodoce.pt/wp-content/uploads/2016/03/617x370_pd_6964.jpg", produtor: "Confeitaria Aveirense" },
    { id: 11, name: "Brigadeiro", price: 1.50, image: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/1a884bcbc5b04d71476d2995d51d0140.jpg", produtor: "Zé Dos Bolos" },
    { id: 12, name: "Mousse de Chocolate", price: 4.50, image: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/369562012750bd46ceaeef5d59a23229.jpg", produtor: "Doces da Maria" },
    { id: 13, name: "Tarte de Limão", price: 14, image: "https://docerar.pt/wp-content/uploads/2023/09/Web_TarteLimao.jpeg.jpg", produtor: "Doce Dourado" },
    { id: 14, name: "Arroz Doce", price: 3.50, image: "https://receitadaboa.com.br/wp-content/uploads/2024/04/iStock-119394438.jpg", produtor: "Fábrica de Nata" }
];

const users = [
    {
        email: "cliente@docaria.com",
        password: "123456",
        name: "Junco Juoum",
        tipo: "Cliente",
        foto: "https://cdn.discordapp.com/attachments/777582482752274453/1317231594284650608/omaiorjuncodepoisdomeupatrao.jpg?ex=675def05&is=675c9d85&hm=0878907100dca581a86a37b127731519c377aa18691b1d82fe578fdccbe9f8b1&",
        morada: "Rua Principal, Nº1, Lisboa, PT"
    },
    {
        email: "produtor@docaria.com",
        password: "654321",
        name: "Confeitaria Aveirense",
        tipo: "Produtor",
        morada: "Rua da Alegria, Nº22, Porto, PT",
        foto: "https://pontourbano.pt/static/08e548268c40b3cc0feb40ece623ddfb/e296a/peixinho.jpg",
        TipoNegócio: "Confeitaria"
    },
    {
        email: "cliente1@docaria.com",
        password: "abc123",
        name: "Carlos Mendes",
        tipo: "Cliente",
        morada: "Avenida Central, Nº45, Braga, PT"
    },
    {
        email: "produtor1@docaria.com",
        password: "xyz456",
        name: "Doces da Maria",
        tipo: "Produtor",
        morada: "Rua das Flores, Nº10, Coimbra, PT",
        TipoNegócio: "Independente",
        foto: "https://cdn.discordapp.com/attachments/777582482752274453/1317511509638778991/foto1.jpeg?ex=675ef3b6&is=675da236&hm=3d1f28d112d7c3c16b94e9b9c8a8b716a5b5522d156310525f041921346b3ede&"
    },
    {
        email: "cliente2@docaria.com",
        password: "qwerty1",
        name: "Ana Silva",
        tipo: "Cliente",
        morada: "Praça Nova, Nº3, Aveiro, PT"
    },
    {
        email: "produtor2@docaria.com",
        password: "asdfgh2",
        name: "Zé Dos Bolos",
        tipo: "Produtor",
        morada: "Rua do Sol, Nº18, Faro, PT",
        TipoNegócio: "Independente",
        foto: "https://cdn.discordapp.com/attachments/777582482752274453/1317511508346798151/foto4.jpg?ex=675ef3b5&is=675da235&hm=dad36a73f4576d4d0496f2d827a1dfb476595f0da0dd1579ad89a418af918aab&"
    },
    {
        email: "cliente3@docaria.com",
        password: "zxcvbn3",
        name: "Beatriz Cunha",
        tipo: "Cliente",
        morada: "Estrada Velha, Nº7, Leiria, PT"
    },
    {
        email: "produtor3@docaria.com",
        password: "poiuyt4",
        name: "Doçaria Real",
        tipo: "Produtor",
        morada: "Rua do Mar, Nº12, Funchal, PT",
        TipoNegócio: "Confeitaria",
        foto: "https://cdn.discordapp.com/attachments/777582482752274453/1317511507592085554/foto2.jpg?ex=675ef3b5&is=675da235&hm=f8cf6cfa4c6c8c59ecfcc03a467baf53cd1263996bf0cccf0754ac6a4d659b2c&"
    },
    {
        email: "cliente4@docaria.com",
        password: "mnbvcx5",
        name: "Clara Santos",
        tipo: "Cliente",
        morada: "Rua Verde, Nº20, Setúbal, PT"
    },
    {
        email: "produtor4@docaria.com",
        password: "lkjhgf6",
        name: "Fábrica de Nata",
        tipo: "Produtor",
        morada: "Rua das Pedras, Nº5, Viseu, PT",
        TipoNegócio: "Confeitaria",
        foto: "https://cdn.discordapp.com/attachments/777582482752274453/1317511509169012746/foto7.jpg?ex=675ef3b5&is=675da235&hm=afabcceab85987ba113102fce92c830cb47a12507c4818c072f898c071b4f8c5&"
    },
    {
        email: "cliente5@docaria.com",
        password: "567890",
        name: "Fernanda Lopes",
        tipo: "Cliente",
        morada: "Rua das Rosas, Nº2, Guimarães, PT"
    },
    {
        email: "produtor5@docaria.com",
        password: "098765",
        name: "Doce Dourado",
        tipo: "Produtor",
        morada: "Rua Nova, Nº30, Évora, PT",
        TipoNegócio: "Confeitaria",
        foto: "https://cdn.discordapp.com/attachments/777582482752274453/1317511508833472543/foto5.jpg?ex=675ef3b5&is=675da235&hm=90feea0b6d4f18adbf45e07d83af1e08ebad33355bcafa825c2d6fe83a0fa561&"
    }
];

var produtores = [];

var clientes = [];

var cart = [];

let lastScrollY = window.scrollY; // Posição do scroll anterior
    const navbar = document.querySelector('.navbar-main');

    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
        // Rolando para baixo: oculta a navbar
        navbar.classList.add('navbar-hidden');
      } else {
        // Rolando para cima: exibe a navbar
        navbar.classList.remove('navbar-hidden');
      }

      // Adiciona fundo escuro após rolar
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }

      lastScrollY = window.scrollY; // Atualiza a posição do scroll
    });
// login

document.querySelectorAll('input[name="userType"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'Cliente') {
            clienteForm.classList.remove('d-none');
            produtorForm.classList.add('d-none');
        } else {
            produtorForm.classList.remove('d-none');
            clienteForm.classList.add('d-none');
        }
    });
});


function validarRegisterCliente(){
    const nome = document.getElementById('registerclienteName').value.trim();
    const email = document.getElementById('registerclienteEmail').value.trim();
    const password = document.getElementById('registerclientePassword').value.trim();
    let Valido = true;

    //console.log(nome);
    //console.log(email);
    //console.log(password);

    if(nome.length < 3){
        Valido = false;
        document.getElementById('registerclienteNameError').classList.remove('d-none');
    } else {
        document.getElementById('registerclienteNameError').classList.add('d-none');
    }

    if(email.length < 8){
        Valido = false;
        document.getElementById('registerclienteEmailError').classList.remove('d-none');
    } else {
        document.getElementById('registerclienteEmailError').classList.add('d-none');
    }

    if(password.length < 5){
        Valido = false;
        document.getElementById('registerclientePasswordError').classList.remove('d-none');
    } else {
        document.getElementById('registerclientePasswordError').classList.add('d-none');
    }

    return Valido
}


function logout() {
    console.log("SAI");
    localStorage.removeItem("user-index"); // Remove os dados do usuário
    window.location.reload(); // Recarrega a página para atualizar a navbar
}


function validarRegisterProdutor(){
    const nome = document.getElementById('registerprodutorName').value.trim();
    const tipo = document.getElementById('inputNegocio').value;
    const email = document.getElementById('registerprodutorEmail').value.trim();
    const password = document.getElementById('registerprodutorPassword').value.trim();
    let Valido = true;

    console.log(tipo);

    if(nome.length < 3){
        Valido = false;
        document.getElementById('registerprodutorNameError').classList.remove('d-none');
    } else {
        document.getElementById('registerprodutorNameError').classList.add('d-none');
    }

    if(tipo == "..."){
        Valido = false;
        document.getElementById('registerprodutorNegocioError').classList.remove('d-none');
    } else {
        document.getElementById('registerprodutorNegocioError').classList.add('d-none');
    }

    if(email.length < 8){
        Valido = false;
        document.getElementById('registerprodutorEmailError').classList.remove('d-none');
    } else {
        document.getElementById('registerprodutorEmailError').classList.add('d-none');
    }

    if(password.length < 5){
        Valido = false;
        document.getElementById('registerprodutorPasswordError').classList.remove('d-none');
    } else {
        document.getElementById('registerprodutorPasswordError').classList.add('d-none');
    }

    return Valido
}


document.addEventListener("DOMContentLoaded", () => {
    const user_index = JSON.parse(localStorage.getItem("user-index")); // Recupera o usuário do localStorage

    if (JSON.parse(localStorage.getItem("users")) == null || JSON.parse(localStorage.getItem("users")) == undefined) {
        localStorage.setItem('users', JSON.stringify(users));
        console.log("Fui buscar os users aos valores default!");
    }

    tempusers = JSON.parse(localStorage.getItem("users"));
    console.log("Users = ",JSON.parse(localStorage.getItem("users")));

    produtores = tempusers.filter(user => user.tipo === "Produtor");
    clientes = tempusers.filter(user => user.tipo === "Cliente");

    console.log("Produtores = ", produtores);
    console.log("Clientes = ", clientes);

    
    localStorage.setItem('produtores', JSON.stringify(produtores));
    localStorage.setItem('clientes', JSON.stringify(clientes));

    //console.log(localStorage.getItem('products'));
    //console.log(localStorage.getItem('produtores'));

    localStorage.setItem('products', JSON.stringify(products));
    //console.log(localStorage.getItem('produtores'));

    localStorage.setItem('cart', JSON.stringify(cart));
    //console.log(localStorage.getItem('cart'));

    console.log(user_index);
    if (user_index != null) {
        console.log("Bem vindo", tempusers[user_index].name);
        document.getElementById("loginLI").classList.add("d-none");
        document.getElementById("userMenu").classList.remove("d-none");
        document.getElementById("userMenu").innerHTML = `
            <label class="nav-link text-light" id="welcomeMessage">
                Bem-vindo, ${tempusers[user_index].name}
                <button class="btn btn-secondary btn-sm" onclick= "window.location.href = 'settings.html'">
                  <i class="fa fa-cogs" aria-hidden="true"></i>
                </button>
                <button class="btn btn-secondary btn-sm" onclick="logout()">
                    <i class="fa fa-sign-out" aria-hidden="true"></i> Sair
                </button>
            </label>`;
    }
    else {
        console.log("Não há ninguém logado :(");
    }
});