// Base de dados de produtos
// IMPORTANTE: Substitua os links de afiliado pelos seus próprios links do Mercado Livre
const products = [
    // ELETRÔNICOS
    {
        id: 1,
        name: "Kit Jogo De Chave Catraca Soquete 46 Peças Combo Jogo Ferramentas Profissional Chave Fenda Philips Soquete 1/4 Em Aço CRV",
        price: 29.99,
        oldPrice: 49.99,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_796287-MLA100688695686_122025-F.webp",
        rating: 4.5,
        reviews: 1250,
        shipping: "Frete grátis",
        category: "eletronicos",
        affiliateLink: "https://mercadolivre.com/sec/1Getrh9"
    },
    {
        id: 2,
        name: "Headset Qcy H3 Anc Adaptativo Bluetooth 5.3 Multiponto 60h Cor Preto",
        price: 294.00,
        oldPrice: 360.00,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_987051-MLA88535124534_072025-F.webp",
        rating: 4.8,
        reviews: 890,
        shipping: "Frete grátis",
        category: "eletronicos",
        affiliateLink: "https://mercadolivre.com/sec/1pF8PkJ"
    },
    {
        id: 3,
        name: "Amazon Echo Pop Com Wi-fi E Bluetooth - Cor Preto",
        price: 329.00,
        oldPrice: 450.00,
        image: "https://http2.mlstatic.com/D_Q_NP_709709-MLA98775031281_112025-F.webp",
        rating: 4.6,
        reviews: 567,
        shipping: "Frete grátis",
        category: "eletronicos",
        affiliateLink: "https://mercadolivre.com/sec/2APDMac"
    },
    {
        id: 4,
        name: "Relógio Inteligente Military Rock C20 2023",
        price: 129.90,
        oldPrice: 162.49,
        image: "https://http2.mlstatic.com/D_Q_NP_980099-CBT91520574429_092025-F-relogio-inteligente-military-rock-c20-2023.webp",
        rating: 4.9,
        reviews: 2340,
        shipping: "Frete grátis",
        category: "eletronicos",
        affiliateLink: "https://mercadolivre.com/sec/1So9um3"
    },
    {
        id: 5,
        name: "Creatina Monohidratada 600g Soldiers Nutrition 100% Pura Importada Performance Músculo Treino",
        price: 44.90,
        oldPrice: 154.00,
        image: "https://http2.mlstatic.com/D_Q_NP_756773-MLA99586857204_122025-F.webp",
        rating: 4.7,
        reviews: 1678,
        shipping: "Frete grátis",
        category: "eletronicos",
        affiliateLink: "https://mercadolivre.com/sec/1uvpE3W"
    },
    {
        id: 6,
        name: "Creatina Monohidratada Pura 1kg Dark Lab Unidade Sem sabor",
        price: 249.90,
        oldPrice: 449.90,
        image: "https://http2.mlstatic.com/D_Q_NP_848860-MLA99964507641_112025-F.webp",
        rating: 4.6,
        reviews: 823,
        shipping: "Frete grátis",
        category: "eletronicos",
        affiliateLink: "https://mercadolivre.com/sec/1K2NpiV"
    },

    // CASA E DECORAÇÃO
    {
        id: 7,
        name: "Aspirador De Pó e Água Wap Gtw 10 Compacto 1400w 10 Litros Amarelo/Preto",
        price: 236.55,
        oldPrice: 399,
        image: "https://http2.mlstatic.com/D_Q_NP_944970-MLA99949674111_112025-F.webp",
        rating: 4.4,
        reviews: 456,
        shipping: "Frete grátis",
        category: "casa",
        affiliateLink: "https://mercadolivre.com/sec/2bCACZa"
    },
    {
        id: 8,
        name: "Liquidificador Britânia Turbo 900W 2,6L 4 Velocidades Preto BLQ970P 127V",
        price: 113.05,
        oldPrice: 184.90,
        image: "https://http2.mlstatic.com/D_Q_NP_849138-MLA84536495898_052025-F.webp",
        rating: 4.8,
        reviews: 1234,
        shipping: "Frete grátis",
        category: "casa",
        affiliateLink: "https://mercadolivre.com/sec/2g6mYfr"
    },
    {
        id: 9,
        name: "Roçadeira Nakasaki 75cc 3.6hp Nk750pro 8 Em 1 + Motopoda",
        price: 449.00,
        oldPrice: 799.00,
        image: "https://http2.mlstatic.com/D_Q_NP_936229-MLB95981173184_102025-F.webp",
        rating: 4.9,
        reviews: 2156,
        shipping: "Frete grátis",
        category: "casa",
        affiliateLink: "https://mercadolivre.com/sec/2pkgVQ4"
    },
    {
        id: 10,
        name: "Massageador Pistola Elétrica Profissional Muscular Portátil Aparelho Fisioterapia Corporal, 6 Velocidades 4 Cabeças De Massagem - Micgeek",
        price: 39.90,
        oldPrice: 57.40,
        image: "https://http2.mlstatic.com/D_Q_NP_621857-MLA97437063241_112025-F.webp",
        rating: 4.5,
        reviews: 987,
        shipping: "Frete grátis",
        category: "casa",
        affiliateLink: "https://mercadolivre.com/sec/1ZLg3U9"
    },

    // MODA
    {
        id: 11,
        name: "Luz De Leitura Led, Luz Noturna, Livro, Lâmpada De A",
        price: 131.24,
        oldPrice: 230.90,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_601367-MLB100327630435_122025-F-luz-de-leitura-led-luz-noturna-livro-lmpada-de-a.webp",
        rating: 4.9,
        reviews: 3456,
        shipping: "Frete grátis",
        category: "moda",
        affiliateLink: "https://mercadolivre.com/sec/15bSxuh"
    },
    {
        id: 12,
        name: "Travesseiro Nasa Cervical Ortopédico Antialérgico Dr Coluna",
        price: 177.99,
        oldPrice: 349.90,
        image: "https://http2.mlstatic.com/D_Q_NP_866451-MLA99955285289_112025-F.webp",
        rating: 4.6,
        reviews: 678,
        shipping: "Frete grátis",
        category: "moda",
        affiliateLink: "https://mercadolivre.com/sec/2bVM2s9"
    },
    {
        id: 13,
        name: "Porta Comprimido Caixa Organizadora Remédio Semanal Triplo Cor Preto",
        price: 22.65,
        oldPrice: 59.00,
        image: "https://http2.mlstatic.com/D_Q_NP_727359-MLA82557816919_022025-F.webp",
        rating: 4.7,
        reviews: 1345,
        shipping: "Frete grátis",
        category: "moda",
        affiliateLink: "https://mercadolivre.com/sec/2GwgRgY"
    },
    {
        id: 14,
        name: "Apoio Encosto Corretor Lombar Cadeira Automotivo Ortopédico",
        price: 23.99,
        oldPrice: 32.90,
        image: "https://http2.mlstatic.com/D_Q_NP_640720-MLB72364648362_102023-F.webp",
        rating: 4.8,
        reviews: 892,
        shipping: "Frete grátis",
        category: "moda",
        affiliateLink: "https://mercadolivre.com/sec/2cAknHC"
    },

    // ESPORTES
    {
        id: 15,
        name: "Cheirinho Carro Novo Aromatizante Automotivo Amperflim",
        price: 35.90,
        oldPrice: 54.80,
        image: "https://http2.mlstatic.com/D_Q_NP_800479-MLB95113450059_102025-F-cheirinho-carro-novo-aromatizante-automotivo-amperflim.webp",
        rating: 4.7,
        reviews: 567,
        shipping: "Frete grátis",
        category: "esportes",
        affiliateLink: "https://mercadolivre.com/sec/13idFee"
    },
    {
        id: 16,
        name: "Relógio de pulso Orient MBSS1171 com corria de aço fondo preto",
        price: 261.47,
        oldPrice: 469.90,
        image: "https://http2.mlstatic.com/D_Q_NP_977941-MLA99451663296_112025-F.webp",
        rating: 4.6,
        reviews: 1234,
        shipping: "Frete grátis",
        category: "esportes",
        affiliateLink: "https://mercadolivre.com/sec/1fjZr2e"
    },
    {
        id: 17,
        name: "Esteira Ergométrica Elétrica 12km/h Display LED",
        price: 1899.00,
        oldPrice: 2999.00,
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 345,
        shipping: "Frete grátis",
        category: "esportes",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-17"
    },

    // BELEZA
    {
        id: 18,
        name: "Secador de Cabelo Philco 2000W Ions Profissional",
        price: 89.90,
        oldPrice: 179.90,
        image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 1567,
        shipping: "Frete grátis",
        category: "beleza",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-18"
    },
    {
        id: 19,
        name: "Kit Maquiagem Completo 32 Itens Profissional",
        price: 149.90,
        oldPrice: 299.90,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 2345,
        shipping: "Frete grátis",
        category: "beleza",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-19"
    },
    {
        id: 20,
        name: "Perfume Importado Masculino 100ml Eau de Toilette",
        price: 199.00,
        oldPrice: 449.00,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 987,
        shipping: "Frete grátis",
        category: "beleza",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-20"
    }
];

// Exportar produtos para uso no main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
