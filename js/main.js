// Variáveis globais
let currentCategory = 'todos';
let filteredProducts = [...products];

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Função principal de inicialização
function initializeApp() {
    renderProducts(products);
    setupCategoryFilters();
    setupSearch();
    hideLoading();
}

// Renderizar produtos na grade
function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) return;
    
    // Limpar grade
    productsGrid.innerHTML = '';
    
    // Se não houver produtos
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: #999;">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px;"></i>
                <p style="font-size: 16px;">Nenhum produto encontrado</p>
            </div>
        `;
        return;
    }
    
    // Renderizar cada produto
    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Criar card de produto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Calcular desconto
    const discount = product.oldPrice 
        ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
        : 0;
    
    // Gerar estrelas
    const stars = generateStars(product.rating);
    
    // HTML do card
    card.innerHTML = `
        <img src="${product.image}" 
             alt="${product.name}" 
             class="product-image"
             onerror="this.src='https://via.placeholder.com/400x400?text=Imagem+Indisponivel'">
        <div class="product-info">
            ${product.oldPrice ? `<div class="product-price-old">R$ ${formatPrice(product.oldPrice)}</div>` : ''}
            <div class="product-price">
                R$ ${formatPrice(product.price)}
                ${discount > 0 ? `<span class="product-discount">${discount}% OFF</span>` : ''}
            </div>
            <div class="product-name">${product.name}</div>
            <div class="product-rating">
                <div class="stars">${stars}</div>
                <span>(${product.reviews})</span>
            </div>
            ${product.shipping ? `
                <div class="product-shipping">
                    <i class="fas fa-truck"></i>
                    <span>${product.shipping}</span>
                </div>
            ` : ''}
        </div>
    `;
    
    // Adicionar evento de clique para redirecionar
    card.addEventListener('click', () => {
        redirectToAffiliate(product);
    });
    
    return card;
}

// Gerar estrelas de avaliação
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    // Estrelas cheias
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Meia estrela
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Estrelas vazias
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Formatar preço
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

// Redirecionar para link de afiliado
function redirectToAffiliate(product) {
    // Adicionar animação de feedback
    const clickedCard = event.currentTarget;
    clickedCard.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        // Abrir link de afiliado em nova aba
        window.open(product.affiliateLink, '_blank');
        
        // Restaurar animação
        clickedCard.style.transform = '';
        
        // Log para analytics (opcional)
        console.log(`Produto clicado: ${product.name} (ID: ${product.id})`);
    }, 100);
}

// Configurar filtros de categoria
function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Atualizar botão ativo
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar produtos
            filterByCategory(category);
        });
    });
}

// Filtrar produtos por categoria
function filterByCategory(category) {
    currentCategory = category;
    
    showLoading();
    
    setTimeout(() => {
        if (category === 'todos') {
            filteredProducts = [...products];
        } else {
            filteredProducts = products.filter(product => product.category === category);
        }
        
        renderProducts(filteredProducts);
        hideLoading();
        
        // Scroll suave para o topo dos produtos
        document.getElementById('productsGrid').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 300);
}

// Configurar busca
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        // Debounce - aguardar usuário parar de digitar
        clearTimeout(searchTimeout);
        
        searchTimeout = setTimeout(() => {
            searchProducts(searchTerm);
        }, 300);
    });
}

// Buscar produtos
function searchProducts(searchTerm) {
    if (!searchTerm) {
        // Se a busca estiver vazia, mostrar produtos da categoria atual
        filterByCategory(currentCategory);
        return;
    }
    
    showLoading();
    
    setTimeout(() => {
        const results = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm);
            const matchesCategory = currentCategory === 'todos' || product.category === currentCategory;
            return matchesSearch && matchesCategory;
        });
        
        filteredProducts = results;
        renderProducts(results);
        hideLoading();
    }, 200);
}

// Mostrar loading
function showLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.classList.add('show');
    }
}

// Esconder loading
function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.classList.remove('show');
    }
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy loading de imagens (otimização)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    // Observar imagens quando forem adicionadas ao DOM
    const observeImages = () => {
        document.querySelectorAll('.product-image:not(.loaded)').forEach(img => {
            imageObserver.observe(img);
        });
    };
    
    // Executar após renderização
    setTimeout(observeImages, 500);
}

// Analytics básico (opcional - pode ser expandido)
function trackEvent(eventName, eventData) {
    console.log('Analytics Event:', eventName, eventData);
    // Aqui você pode integrar com Google Analytics, Facebook Pixel, etc.
}

// Log de inicialização
console.log('🛍️ Site Afiliado carregado com sucesso!');
console.log(`📦 Total de produtos: ${products.length}`);
console.log('⚡ Pronto para redirecionar para o Mercado Livre!');
