import articles from './articlesData.js';

document.addEventListener('DOMContentLoaded', () => {
    const articlesGrid = document.getElementById('articles-grid');
    const filtersContainer = document.getElementById('filters-container');

    // Sort articles by date (newest first)
    const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Get unique tags
    const allTags = new Set();
    articles.forEach(article => {
        article.tags.forEach(tag => allTags.add(tag));
    });

    // Render Filters
    const renderFilters = () => {
        // Keep the "Todos" button that's already in the HTML
        allTags.forEach(tag => {
            const btn = document.createElement('button');
            btn.className = 'tag-btn';
            btn.dataset.tag = tag;
            btn.textContent = tag;
            filtersContainer.appendChild(btn);
        });

        // Add event listeners to all buttons
        const filterBtns = document.querySelectorAll('.tag-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked
                e.target.classList.add('active');
                
                const selectedTag = e.target.dataset.tag;
                renderArticles(selectedTag);
            });
        });
    };

    // Render Articles
    const renderArticles = (filterTag = 'all') => {
        articlesGrid.innerHTML = '';

        const filtered = filterTag === 'all' 
            ? sortedArticles 
            : sortedArticles.filter(article => article.tags.includes(filterTag));

        if (filtered.length === 0) {
            articlesGrid.innerHTML = '<p>Nenhum artigo encontrado para esta tag.</p>';
            return;
        }

        filtered.forEach(article => {
            // Format date
            const dateObj = new Date(article.date + 'T00:00:00'); // Prevent timezone shift
            const formattedDate = dateObj.toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            const tagsHtml = article.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('');

            const articleCard = document.createElement('a');
            articleCard.href = `article-detail.html?id=${article.id}`;
            articleCard.className = 'article-card';
            
            articleCard.innerHTML = `
                <div class="card-meta">
                    <span class="date">${formattedDate}</span>
                    <span class="read-time">${article.readTime} leitura</span>
                </div>
                <h2 class="card-title">${article.title}</h2>
                <p class="card-summary">${article.summary}</p>
                <div class="card-tags">
                    ${tagsHtml}
                </div>
            `;
            
            articlesGrid.appendChild(articleCard);
        });
    };

    renderFilters();
    renderArticles();
});
