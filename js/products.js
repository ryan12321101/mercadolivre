// Base de dados de produtos
// IMPORTANTE: Substitua os links de afiliado pelos seus próprios links do Mercado Livre
const products = [
    // ELETRÔNICOS
    {
        id: 1,
        name: "Fone de Ouvido Bluetooth JBL Tune 510BT",
        price: 149.90,
        oldPrice: 299.90,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 1250,
        shipping: "Frete grátis",
        category: "eletronicos",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-1"
    },
    {
        id: 2,
        name: "Smart TV LED 50\" 4K UHD Samsung Crystal",
        price: 1899.00,
        oldPrice: 2999.00,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 890,
        shipping: "Frete grátis",
        category: "eletronicos",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-2"
    },
    {
        id: 3,
        name: "Notebook Lenovo IdeaPad 3i 15.6\" Core i5 8GB 256GB SSD",
        price: 2599.00,
        oldPrice: 3499.00,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 567,
        shipping: "Frete grátis",
        category: "eletronicos",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-3"
    },
    {
        id: 4,
        name: "Mouse Gamer Logitech G403 Hero RGB 16.000 DPI",
        price: 189.90,
        oldPrice: 349.90,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 2340,
        shipping: "Frete grátis",
        category: "eletronicos",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-4"
    },
    {
        id: 5,
        name: "Smartwatch Xiaomi Mi Band 7 Tela AMOLED",
        price: 199.00,
        oldPrice: 399.00,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 1678,
        shipping: "Frete grátis",
        category: "eletronicos",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-5"
    },
    {
        id: 6,
        name: "Teclado Mecânico Gamer RGB Switch Blue",
        price: 249.90,
        oldPrice: 449.90,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 823,
        shipping: "Frete grátis",
        category: "eletronicos",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-6"
    },

    // CASA E DECORAÇÃO
    {
        id: 7,
        name: "Aspirador de Pó Robô Multilaser 3 em 1",
        price: 599.00,
        oldPrice: 999.00,
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop",
        rating: 4.4,
        reviews: 456,
        shipping: "Frete grátis",
        category: "casa",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-7"
    },
    {
        id: 8,
        name: "Jogo de Panelas Antiaderente 5 Peças Tramontina",
        price: 189.90,
        oldPrice: 349.90,
        image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 1234,
        shipping: "Frete grátis",
        category: "casa",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-8"
    },
    {
        id: 9,
        name: "Cafeteira Elétrica Expresso Nespresso",
        price: 449.00,
        oldPrice: 799.00,
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 2156,
        shipping: "Frete grátis",
        category: "casa",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-9"
    },
    {
        id: 10,
        name: "Liquidificador Turbo Inox 1200W 12 Velocidades",
        price: 149.90,
        oldPrice: 279.90,
        image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 987,
        shipping: "Frete grátis",
        category: "casa",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-10"
    },

    // MODA
    {
        id: 11,
        name: "Tênis Nike Air Max 90 Masculino Original",
        price: 499.90,
        oldPrice: 799.90,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 3456,
        shipping: "Frete grátis",
        category: "moda",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-11"
    },
    {
        id: 12,
        name: "Jaqueta Jeans Masculina Classic Fit",
        price: 129.90,
        oldPrice: 259.90,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 678,
        shipping: "Frete grátis",
        category: "moda",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-12"
    },
    {
        id: 13,
        name: "Relógio Masculino Technos Prata Analógico",
        price: 299.00,
        oldPrice: 599.00,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 1345,
        shipping: "Frete grátis",
        category: "moda",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-13"
    },
    {
        id: 14,
        name: "Bolsa Feminina Transversal Couro Legítimo",
        price: 159.90,
        oldPrice: 329.90,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 892,
        shipping: "Frete grátis",
        category: "moda",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-14"
    },

    // ESPORTES
    {
        id: 15,
        name: "Bicicleta MTB Aro 29 Shimano 21 Marchas",
        price: 1299.00,
        oldPrice: 1999.00,
        image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 567,
        shipping: "Frete grátis",
        category: "esportes",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-15"
    },
    {
        id: 16,
        name: "Kit Halteres 20kg Anilhas Musculação Fitness",
        price: 199.90,
        oldPrice: 399.90,
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 1234,
        shipping: "Frete grátis",
        category: "esportes",
        affiliateLink: "https://mercadolivre.com.br/produto-exemplo-16"
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
