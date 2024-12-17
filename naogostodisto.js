const clienteRadio = document.getElementById('registerClient');
const produtorRadio = document.getElementById('registerProdutor');
const clienteForm = document.getElementById('clienteForm');
const produtorForm = document.getElementById('produtorForm'); 

const products = [
    { id: 1, name: "Ovos Moles (8 uni.)", price: 5.99, image: "https://receitasdepesos.com.br/wp-content/uploads/2023/07/ovos-moles.jpg", produtor: "Confeitaria Aveirense" },
    { id: 2, name: "Castanhas de Ovos (6 uni.)", price: 3, image: "https://www.pingodoce.pt/wp-content/uploads/2022/06/castanhas-de-ovos.jpg", produtor: "Confeitaria Aveirense" },
    { id: 3, name: "Raivas (10 uni.)", price: 2.99, image: "https://www.minigolfe-costanova.pt/wp-content/uploads/2018/12/Receita-Raivas-Aveiro.jpg", produtor: "Confeitaria Aveirense" },
    { id: 4, name: "Cartuchos (8 uni.)", price: 5.99, image: "https://static.wixstatic.com/media/8024f8_13edb315f6174bf09fd5e214a2f2e1ef~mv2.jpg/v1/fill/w_945,h_546,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8024f8_13edb315f6174bf09fd5e214a2f2e1ef~mv2.jpg", produtor: "Confeitaria Aveirense" },
    { id: 5, name: "Queijadas de Sintra", price: 4.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkYu0GmtdBsbzX2Fq64eZnDIddi8SvUaUAw&s", produtor: "Doçaria Real" },
    { id: 6, name: "Pastéis de Nata", price: 1.20, image: "https://docerar.pt/wp-content/uploads/2018/03/pasteis-de-nata-1.jpg", produtor: "Fábrica de Nata" },
    { id: 7, name: "Tarte de Amêndoa", price: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5U-omg4VzX69bMSX93TfX7Gvc6cbx5NzrQ&s", produtor: "Doce Dourado" },
    { id: 8, name: "Travesseiros de Sintra", price: 6.99, image: "https://www.pingodoce.pt/wp-content/uploads/2022/03/travesseiros.jpg", produtor: "Doçaria Real" },
    { id: 9, name: "Pudim Flan", price: 8.50, image: "https://asset.skoiy.com/gta2554ejcwslaya/iazdfgdlrgbh.jpg?w=1852&q=80", produtor: "Doces da Maria" },
    { id: 10, name: "Salame de Chocolate", price: 5.00, image: "https://www.pingodoce.pt/wp-content/uploads/2016/03/617x370_pd_6964.jpg", produtor: "Confeitaria Aveirense" },
    { id: 11, name: "Brigadeiro", price: 1.50, image: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/1a884bcbc5b04d71476d2995d51d0140.jpg", produtor: "Zé Dos Bolos" },
    { id: 12, name: "Mousse de Chocolate", price: 4.50, image: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/369562012750bd46ceaeef5d59a23229.jpg", produtor: "Doces da Maria" },
    { id: 13, name: "Tarte de Limão", price: 14, image: "https://docerar.pt/wp-content/uploads/2023/09/Web_TarteLimao.jpeg.jpg", produtor: "Doce Dourado" },
    { id: 14, name: "Arroz Doce", price: 3.50, image: "https://receitadaboa.com.br/wp-content/uploads/2024/04/iStock-119394438.jpg", produtor: "Fábrica de Nata" },
    { id: 15, name: "Pão de Ló", price: 7.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdCBMU3Y1LsU1DWkENmnX0bJTsE0ydcX-dQ&s", produtor: "Doces da Maria" },
    { id: 16, name: "Bolo Fixolas", price: 20, image: "https://cdnx.jumpseller.com/os-bolos-da-marta/image/52703178/14_14_11zon.webp?1725642309", produtor: "Zé Dos Bolos" },
    { id: 17, name: "Bolo de Cenoura", price: 25, image: "https://static.itdg.com.br/images/360-240/d290bc79bcad112ee9095604e45eb262/365326-original.jpg", produtor: "Zé Dos Bolos" }
];

const users = [
    {
        email: "cliente@docaria.com",
        password: "123456",
        name: "João Manuel",
        tipo: "Cliente",
        foto: "",
        morada: "Rua Principal, Nº1, Lisboa, PT"
    },
    {
        email: "produtor@docaria.com",
        password: "654321",
        name: "Confeitaria Aveirense",
        tipo: "Produtor",
        morada: "Rua da Alegria, Nº22, Aveiro, PT",
        foto: "images/foto1.jpeg",
        TipoNegócio: "Confeitaria",
        "descricao": "A Confeitaria Aveirense é especializada em produtos de confeitaria tradicionais de Aveiro, com uma vasta gama de doces regionais que conquistam os corações dos amantes da gastronomia local."
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
        morada: "Rua das Flores, Nº10, Aveiro, PT",
        TipoNegócio: "Independente",
        foto: "images/foto3.jpg",
        "descricao": "Doces da Maria é uma marca local que combina ingredientes frescos e receitas tradicionais para criar doces deliciosos, feitos com carinho e dedicação, perfeitos para qualquer ocasião especial."
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
        morada: "Rua do Sol, Nº18, Aveiro, PT",
        TipoNegócio: "Independente",
        foto: "images/foto4.jpg",
        "descricao": "Zé Dos Bolos é conhecido pela sua variedade de bolos frescos e irresistíveis, sempre preparados com os melhores ingredientes e oferecendo opções para todos os gostos."
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
        morada: "Rua do Mar, Nº12, Aveiro, PT",
        TipoNegócio: "Confeitaria",
        foto: "images/foto2.jpg",
        "descricao": "Doçaria Real é uma confeitaria de renome que se destaca pela excelência na produção de doces de luxo, trazendo o melhor da tradição e inovação em cada fatia de bolo."
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
        morada: "Rua das Pedras, Nº5, Aveiro, PT",
        TipoNegócio: "Confeitaria",
        foto: "images/foto5.jpg",
        "descricao": "Fábrica de Nata é especializada na criação de irresistíveis pastéis de nata, feitos com uma receita secreta que proporciona um sabor único e inesquecível."
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
        morada: "Rua Nova, Nº30, Aveiro, PT",
        TipoNegócio: "Confeitaria",
        foto: "images/foto6.jpg",
        "descricao": "Doce Dourado é uma confeitaria focada em oferecer doces de alta qualidade com uma mistura de sabores modernos e tradicionais, buscando sempre agradar aos mais exigentes paladares."
    }
];

var produtores = [];

var clientes = [];

var cart = [];

var encomendasantigas = [
    {
        "id": "ORD-001",
        "cliente": "Junco Juoum",
        "pedido": [
            { "id": 1, "name": "Ovos Moles", "quantity": 2, "produtor": "Confeitaria Aveirense", "price": 5.99 },
            { "id": 10, "name": "Salame de Chocolate", "quantity": 1, "produtor": "Confeitaria Aveirense", "price": 5.00 }
        ],
        "total": 16.98,
        "estado": "Em preparo"
    },
    {
        "id": "ORD-002",
        "cliente": "Carlos Mendes",
        "pedido": [
            { "id": 2, "name": "Pão de Ló", "quantity": 1, "produtor": "Doces da Maria", "price": 7.50 },
            { "id": 12, "name": "Mousse de Chocolate", "quantity": 3, "produtor": "Doces da Maria", "price": 4.50 }
        ],
        "total": 21.00,
        "estado": "Aguardando pagamento"
    },
    {
        "id": "ORD-003",
        "cliente": "Ana Silva",
        "pedido": [
            { "id": 3, "name": "Bolo Fixolas", "quantity": 1, "produtor": "Zé Dos Bolos", "price": 20.00 },
            { "id": 4, "name": "Bolo de Cenoura", "quantity": 1, "produtor": "Zé Dos Bolos", "price": 25.00 }
        ],
        "total": 45.00,
        "estado": "Entregue"
    },
    {
        "id": "ORD-004",
        "cliente": "Beatriz Cunha",
        pedido: [
            { "id": 6, "name": "Pastéis de Nata", "quantity": 6, "produtor": "Fábrica de Nata", "price": 1.20 },
            { "id": 14, "name": "Arroz Doce", "quantity": 2, "produtor": "Fábrica de Nata", "price": 3.50 }
        ],
        "total": 15.40,
        "estado": "Em transporte"
    },
    {
        "id": "ORD-005",
        "cliente": "Clara Santos",
        "pedido": [
            { "id": 7, "name": "Tarte de Amêndoa", "quantity": 1, "produtor": "Doce Dourado", "price": 15.00 },
            { "id": 13, "name": "Tarte de Limão", "quantity": 2, "produtor": "Doce Dourado", "price": 14.00 }
        ],
        "total": 43.00,
        "estado": "Em preparo"
    },
    {
        "id": "ORD-006",
        "cliente": "Fernanda Lopes",
        "pedido": [
            { "id": 5, "name": "Queijadas de Sintra", "quantity": 4, "produtor": "Doçaria Real", "price": 4.50 },
            { "id": 8, "name": "Travesseiros de Sintra", "quantity": 3, "produtor": "Doçaria Real", "price": 6.99 }
        ],
        "total": 41.47,
        "estado": "Em preparo"
    }
];

var encomendas = [
    {
        "id": "ORD-001",
        "cliente": "João Manuel",
        "pedido": [
            {
                "id": 1,
                "name": "Ovos Moles (8 uni.)",
                "quantity": 2,
                "produtor": "Confeitaria Aveirense",
                "price": 5.99
            },
            {
                "id": 10,
                "name": "Salame de Chocolate",
                "quantity": 1,
                "produtor": "Confeitaria Aveirense",
                "price": 5
            }
        ],
        "total": 16.98,
        "estado": "Em preparo"
    },
    {
        "id": "ORD-002",
        "cliente": "Carlos Mendes",
        "pedido": [
            {
                "id": 5,
                "name": "Queijadas de Sintra",
                "quantity": 3,
                "produtor": "Doçaria Real",
                "price": 4.50
            }
        ],
        "total": 13.50,
        "estado": "Em transporte"
    },
    {
        "id": "ORD-003",
        "cliente": "Ana Silva",
        "pedido": [
            {
                "id": 15,
                "name": "Pão de Ló",
                "quantity": 1,
                "produtor": "Doces da Maria",
                "price": 7.50
            },
            {
                "id": 12,
                "name": "Mousse de Chocolate",
                "quantity": 2,
                "produtor": "Doces da Maria",
                "price": 4.50
            }
        ],
        "total": 17.50,
        "estado": "Entregue"
    },
    {
        "id": "ORD-004",
        "cliente": "Beatriz Cunha",
        "pedido": [
            {
                "id": 8,
                "name": "Travesseiros de Sintra",
                "quantity": 4,
                "produtor": "Doçaria Real",
                "price": 6.99
            }
        ],
        "total": 27.96,
        "estado": "Em preparo"
    },
    {
        "id": "ORD-005",
        "cliente": "Clara Santos",
        "pedido": [
            {
                "id": 13,
                "name": "Tarte de Limão",
                "quantity": 1,
                "produtor": "Doce Dourado",
                "price": 14
            },
            {
                "id": 11,
                "name": "Brigadeiro",
                "quantity": 3,
                "produtor": "Zé Dos Bolos",
                "price": 1.50
            }
        ],
        "total": 19.50,
        "estado": "Em preparo"
    },
    {
        "id": "ORD-006",
        "cliente": "Fernanda Lopes",
        "pedido": [
            {
                "id": 14,
                "name": "Arroz Doce",
                "quantity": 4,
                "produtor": "Fábrica de Nata",
                "price": 3.50
            }
        ],
        "total": 14.00,
        "estado": "Em transporte"
    },
    {
        "id": "ORD-007",
        "cliente": "João Manuel",
        "pedido": [
            {
                "id": 9,
                "name": "Pudim Flan",
                "quantity": 2,
                "produtor": "Doces da Maria",
                "price": 8.50
            }
        ],
        "total": 17.00,
        "estado": "Entregue"
    },
    {
        "id": "ORD-008",
        "cliente": "Carlos Mendes",
        "pedido": [
            {
                "id": 7,
                "name": "Tarte de Amêndoa",
                "quantity": 2,
                "produtor": "Doce Dourado",
                "price": 15
            }
        ],
        "total": 30.00,
        "estado": "Em transporte"
    },
    {
        "id": "ORD-009",
        "cliente": "Ana Silva",
        "pedido": [
            {
                "id": 3,
                "name": "Raivas (10 uni.)",
                "quantity": 1,
                "produtor": "Confeitaria Aveirense",
                "price": 2.99
            },
            {
                "id": 4,
                "name": "Cartuchos (8 uni.)",
                "quantity": 1,
                "produtor": "Confeitaria Aveirense",
                "price": 5.99
            }
        ],
        "total": 11.98,
        "estado": "Em preparo"
    },
    {
        "id": "ORD-010",
        "cliente": "Beatriz Cunha",
        "pedido": [
            {
                "id": 11,
                "name": "Brigadeiro",
                "quantity": 5,
                "produtor": "Zé Dos Bolos",
                "price": 1.50
            }
        ],
        "total": 7.50,
        "estado": "Em preparo"
    },
    {
        "id": "ORD-011",
        "cliente": "Clara Santos",
        "pedido": [
            {
                "id": 15,
                "name": "Pão de Ló",
                "quantity": 3,
                "produtor": "Doces da Maria",
                "price": 7.50
            }
        ],
        "total": 22.50,
        "estado": "Em transporte"
    },
    {
        "id": "ORD-012",
        "cliente": "Fernanda Lopes",
        "pedido": [
            {
                "id": 2,
                "name": "Castanhas de Ovos (6 uni.)",
                "quantity": 3,
                "produtor": "Confeitaria Aveirense",
                "price": 3
            }
        ],
        "total": 9.00,
        "estado": "Em preparo"
    },
    {
        "id": "ORD-013",
        "cliente": "João Manuel",
        "pedido": [
            {
                "id": 1,
                "name": "Ovos Moles (8 uni.)",
                "quantity": 5,
                "produtor": "Confeitaria Aveirense",
                "price": 5.99
            }
        ],
        "total": 29.95,
        "estado": "Em transporte"
    },
    {
        "id": "ORD-014",
        "cliente": "Carlos Mendes",
        "pedido": [
            {
                "id": 3,
                "name": "Raivas (10 uni.)",
                "quantity": 2,
                "produtor": "Confeitaria Aveirense",
                "price": 2.99
            }
        ],
        "total": 5.98,
        "estado": "Entregue"
    },
    {
        "id": "ORD-015",
        "cliente": "Ana Silva",
        "pedido": [
            {
                "id": 5,
                "name": "Queijadas de Sintra",
                "quantity": 6,
                "produtor": "Doçaria Real",
                "price": 4.50
            }
        ],
        "total": 27.00,
        "estado": "Em preparo"
    },
    {
        "id": "ORD-016",
        "cliente": "Beatriz Cunha",
        "pedido": [
            {
                "id": 6,
                "name": "Pastéis de Nata",
                "quantity": 2,
                "produtor": "Fábrica de Nata",
                "price": 1.20
            }
        ],
        "total": 2.40,
        "estado": "Em preparo"
    },
    {
        "id": "ORD-017",
        "cliente": "Clara Santos",
        "pedido": [
            {
                "id": 8,
                "name": "Travesseiros de Sintra",
                "quantity": 3,
                "produtor": "Doçaria Real",
                "price": 6.99
            }
        ],
        "total": 20.97,
        "estado": "Em transporte"
    },
    {
        "id": "ORD-018",
        "cliente": "Fernanda Lopes",
        "pedido": [
            {
                "id": 16,
                "name": "Bolo Fixolas",
                "quantity": 1,
                "produtor": "Zé Dos Bolos",
                "price": 20
            }
        ],
        "total": 20.00,
        "estado": "Em preparo"
    },
    {
        "id": "ORD-019",
        "cliente": "João Manuel",
        "pedido": [
            {
                "id": 7,
                "name": "Tarte de Amêndoa",
                "quantity": 1,
                "produtor": "Doce Dourado",
                "price": 15
            }
        ],
        "total": 15.00,
        "estado": "Entregue"
    },
    {
        "id": "ORD-020",
        "cliente": "Carlos Mendes",
        "pedido": [
            {
                "id": 9,
                "name": "Pudim Flan",
                "quantity": 4,
                "produtor": "Doces da Maria",
                "price": 4.50
            }
        ],
        "total": 18.00,
        "estado": "Em transporte"
    }
]

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

    
    //console.log(localStorage.getItem('produtores'));

    if (JSON.parse(localStorage.getItem("products")) == null || JSON.parse(localStorage.getItem("products")) == undefined) {
        localStorage.setItem('products', JSON.stringify(products));
        console.log("Fui buscar os produtos aos valores default!");
    }
    console.log("Produtos = ", JSON.parse(localStorage.getItem("products")));


    if (JSON.parse(localStorage.getItem("cart")) == null || JSON.parse(localStorage.getItem("cart")) == undefined) {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("Fui buscar o carrinho aos valores default!");
    }
    console.log("Cart = ", JSON.parse(localStorage.getItem("cart")));

    if (JSON.parse(localStorage.getItem("encomendas")) == null || JSON.parse(localStorage.getItem("encomendas")) == undefined) {
        localStorage.setItem('encomendas', JSON.stringify(encomendas));
        console.log("Fui buscar as encomendas aos valores default!");
    }
    console.log("Encomendas = ", JSON.parse(localStorage.getItem("encomendas")));

    console.log(user_index);
    if (user_index != null) {
        console.log("Bem vindo", tempusers[user_index].name);
        document.getElementById("loginLI").classList.add("d-none");
        document.getElementById("logoNav").style.width = "260px";
        document.getElementById("userMenu").classList.remove("d-none");
        document.getElementById("userMenu").innerHTML = `
            <label class="nav-link text-light" id="welcomeMessage">
                Bem vindo, ${tempusers[user_index].name}
                <button class="btn btn-secondary btn-sm" onclick= "window.location.href = 'settings.html'">
                  <i class="fa fa-cogs" aria-hidden="true"></i>
                </button>
                <button class="btn btn-secondary btn-sm" onclick="logout()">
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                </button>
            </label>`;
    }
    else {
        console.log("Não há ninguém logado :(");
    }
});