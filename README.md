# 🛍️ Site Afiliado - Estilo Mercado Livre Mobile

Site afiliado responsivo que funciona como uma vitrine de produtos, onde todos os produtos são clicáveis e redirecionam para o Mercado Livre através de links de afiliados.

## 🎯 Objetivo do Projeto

Este site foi desenvolvido para:
- ✅ Exibir produtos de forma atrativa e profissional
- ✅ Redirecionar 100% dos cliques para o Mercado Livre
- ✅ Atuar como site afiliado gerando comissões
- ✅ Proporcionar experiência familiar ao usuário
- ❌ Não realizar checkout interno

## ✨ Funcionalidades Implementadas

### 🎨 Design e Layout
- ✅ Layout idêntico ao app mobile do Mercado Livre
- ✅ Cores amarelo (#FFE600) e branco características do ML
- ✅ Cards de produto com design profissional
- ✅ Totalmente responsivo (mobile-first)
- ✅ Animações suaves e feedback visual

### 🛍️ Vitrine de Produtos
- ✅ Grade responsiva: 2 colunas (mobile) → 3 (tablet) → 4-5 (desktop)
- ✅ 20 produtos de exemplo em 6 categorias
- ✅ Cada produto contém:
  - Imagem de alta qualidade
  - Nome do produto
  - Preço atual e antigo
  - Selo de desconto em %
  - Avaliação em estrelas
  - Número de reviews
  - Informação de frete grátis

### 🔍 Funcionalidades de Navegação
- ✅ Busca em tempo real com debounce
- ✅ Filtro por 6 categorias:
  - Eletrônicos
  - Casa e Decoração
  - Moda
  - Esportes
  - Beleza
  - Todos
- ✅ Indicador visual de categoria ativa
- ✅ Scroll suave entre seções

### 🔗 Sistema de Afiliados
- ✅ Cada produto possui link de afiliado único
- ✅ Redirecionamento em nova aba ao clicar
- ✅ Animação de feedback no clique
- ✅ Aviso de afiliado no rodapé
- ✅ Estrutura preparada para analytics

### 📱 Responsividade
- ✅ Mobile (< 600px): 2 produtos por linha
- ✅ Tablet (600-900px): 3 produtos por linha
- ✅ Desktop (> 900px): 4-5 produtos por linha
- ✅ Header sticky com busca
- ✅ Categorias com scroll horizontal no mobile

### 🚀 Performance
- ✅ Lazy loading de imagens
- ✅ Debounce na busca
- ✅ Animações otimizadas com CSS
- ✅ Código limpo e bem estruturado

## 📁 Estrutura de Arquivos

```
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos completos (amarelo ML, responsivo)
├── js/
│   ├── products.js        # Base de dados dos produtos
│   └── main.js            # Lógica principal (filtros, busca, redirecionamento)
└── README.md              # Este arquivo
```

## 🎨 Paleta de Cores

- **Amarelo ML**: `#FFE600` (cor principal)
- **Amarelo Escuro**: `#F2D600` (hover)
- **Azul ML**: `#3483FA` (links)
- **Verde**: `#00A650` (frete/preço)
- **Cinza Claro**: `#EDEDEE` (background)
- **Branco**: `#FFFFFF` (cards)

## 🔧 Como Personalizar

### 1️⃣ Adicionar Seus Links de Afiliado

Edite o arquivo `js/products.js` e substitua os links de exemplo:

```javascript
{
    id: 1,
    name: "Nome do Produto",
    price: 149.90,
    oldPrice: 299.90,
    image: "URL_DA_IMAGEM",
    rating: 4.5,
    reviews: 1250,
    shipping: "Frete grátis",
    category: "eletronicos",
    affiliateLink: "SEU_LINK_AFILIADO_AQUI" // ← Altere aqui
}
```

### 2️⃣ Adicionar Novos Produtos

Copie um objeto de produto existente e adicione ao array `products`:

```javascript
const products = [
    // ... produtos existentes
    {
        id: 21, // Próximo ID disponível
        name: "Novo Produto",
        price: 99.90,
        oldPrice: 199.90,
        image: "https://exemplo.com/imagem.jpg",
        rating: 4.7,
        reviews: 500,
        shipping: "Frete grátis",
        category: "eletronicos", // ou outra categoria
        affiliateLink: "https://seu-link-afiliado.com"
    }
];
```

### 3️⃣ Adicionar Novas Categorias

1. Adicione o botão no HTML (`index.html`):
```html
<button class="category-btn" data-category="nova-categoria">
    <i class="fas fa-icon"></i>
    <span>Nova Categoria</span>
</button>
```

2. Use a nova categoria nos produtos (`js/products.js`):
```javascript
category: "nova-categoria"
```

### 4️⃣ Personalizar Cores

Edite as variáveis CSS no arquivo `css/style.css`:

```css
:root {
    --yellow-ml: #FFE600;     /* Cor principal */
    --blue-ml: #3483FA;       /* Links */
    --green-price: #00A650;   /* Preços */
    /* ... outras variáveis */
}
```

### 5️⃣ Alterar Banner Promocional

Edite o HTML do banner em `index.html`:

```html
<div class="banner-content">
    <i class="fas fa-bolt"></i>
    <span>Seu texto promocional aqui!</span>
</div>
```

## 📊 Categorias Disponíveis

1. **Eletrônicos** (`eletronicos`) - 6 produtos
2. **Casa** (`casa`) - 4 produtos
3. **Moda** (`moda`) - 4 produtos
4. **Esportes** (`esportes`) - 3 produtos
5. **Beleza** (`beleza`) - 3 produtos

**Total**: 20 produtos de exemplo

## 🚀 Como Usar

### Desenvolvimento Local
1. Clone ou baixe os arquivos
2. Abra `index.html` diretamente no navegador
3. Não requer servidor web (site estático)

### Deploy
Para publicar o site:
1. Vá na aba **Publish** desta plataforma
2. Clique em publicar
3. Seu site estará online e acessível

### Integração com Mercado Livre
1. Cadastre-se no programa de afiliados do Mercado Livre
2. Gere links de afiliado para cada produto
3. Substitua os links em `js/products.js`
4. Publique o site

## 🔗 Links Importantes

- [Programa de Afiliados Mercado Livre](https://www.mercadolivre.com.br/afiliados)
- [Unsplash](https://unsplash.com) - Imagens gratuitas de alta qualidade
- [Font Awesome](https://fontawesome.com) - Ícones utilizados

## 📈 Próximos Passos Recomendados

### 🎯 Funcionalidades Futuras
- [ ] Integração com Google Analytics
- [ ] Facebook Pixel para remarketing
- [ ] Sistema de favoritos (localStorage)
- [ ] Compartilhamento social dos produtos
- [ ] Newsletter para captura de e-mails
- [ ] Filtro por faixa de preço
- [ ] Ordenação (menor/maior preço, mais vendidos)
- [ ] Paginação ou scroll infinito
- [ ] Banner rotativo no topo

### 🔧 Melhorias Técnicas
- [ ] Implementar Service Worker (PWA)
- [ ] Adicionar meta tags para SEO
- [ ] Sitemap.xml para indexação
- [ ] Schema.org markup para produtos
- [ ] Compressão de imagens (WebP)
- [ ] Cache de busca para performance
- [ ] Dark mode opcional

### 💰 Monetização
- [ ] Banner de anúncios Google AdSense
- [ ] Produtos patrocinados em destaque
- [ ] Seção "Mais Vendidos"
- [ ] "Ofertas do Dia" dinâmicas
- [ ] Integração com múltiplos programas de afiliados

### 📊 Analytics e Tracking
- [ ] Rastreamento de cliques por produto
- [ ] Taxa de conversão por categoria
- [ ] Produtos mais populares
- [ ] Origem do tráfego
- [ ] Tempo médio no site

## ⚠️ Avisos Importantes

1. **Links de Afiliado**: Os links atuais são exemplos. Você DEVE substituí-los pelos seus próprios links do programa de afiliados do Mercado Livre.

2. **Imagens**: As imagens são do Unsplash (gratuitas). Para uso profissional, utilize imagens oficiais dos produtos do Mercado Livre.

3. **Termos de Uso**: Certifique-se de seguir as diretrizes do programa de afiliados do Mercado Livre.

4. **Copyright**: Este site não possui afiliação oficial com o Mercado Livre. É apenas inspirado no design.

## 📱 Compatibilidade

- ✅ Chrome (mobile e desktop)
- ✅ Firefox (mobile e desktop)
- ✅ Safari (iOS e macOS)
- ✅ Edge
- ✅ Opera
- ✅ Samsung Internet

## 🤝 Suporte

Para dúvidas ou problemas:
1. Verifique se todos os arquivos estão no lugar correto
2. Abra o Console do navegador (F12) para ver erros
3. Certifique-se de que os links de afiliado estão corretos

## 📝 Licença

Este projeto é livre para uso pessoal e comercial. Sinta-se à vontade para modificar e adaptar às suas necessidades.

---

**Desenvolvido com 💛 para afiliados do Mercado Livre**

*Última atualização: 2024*
