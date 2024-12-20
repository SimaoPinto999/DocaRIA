Olá professor!
Aqui tem os utilizadores prontos para fazer o login:
Disponibilizamos qualquer tipo de utilizador (Cliente/Produtor) pois a interface é diferente.
As descrições, moradas e encomendas foram geradas, logo não são verídicas.
Obrigado,
O Grupo 2 da P3. 

Utilizadores = [
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
        "descricao": "A Confeitaria Aveirense é especializada em produtos de confeitaria tradicionais 	de Aveiro, com uma vasta gama de doces regionais que conquistam os corações dos amantes da 	gastronomia local."
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
        "descricao": "Doces da Maria é uma marca local que combina ingredientes frescos e receitas 	tradicionais para criar doces deliciosos, feitos com carinho e dedicação, perfeitos para 	qualquer ocasião especial."
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
        "descricao": "Zé Dos Bolos é conhecido pela sua variedade de bolos frescos e irresistíveis, 	sempre preparados com os melhores ingredientes e oferecendo opções para todos os gostos."
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
        "descricao": "Doçaria Real é uma confeitaria de renome que se destaca pela excelência na 	produção de doces de luxo, trazendo o melhor da tradição e inovação em cada fatia de bolo."
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
        "descricao": "Fábrica de Nata é especializada na criação de irresistíveis pastéis de nata, 	feitos com uma receita secreta que proporciona um sabor único e inesquecível."
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
        "descricao": "Doce Dourado é uma confeitaria focada em oferecer doces de alta qualidade com 	uma mistura de sabores modernos e tradicionais, buscando sempre agradar aos mais exigentes 	paladares."
    }
]

Encomendas =  [
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
