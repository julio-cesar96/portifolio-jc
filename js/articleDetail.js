import articles from './articlesData.js';

document.addEventListener('DOMContentLoaded', () => {
    // Get the ID from the URL query params
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    const contentContainer = document.getElementById('article-content');
    const errorContainer = document.getElementById('article-error');

    if (!articleId) {
        showError();
        return;
    }

    const article = articles.find(a => a.id === articleId);

    if (article) {
        renderArticle(article);
    } else {
        showError();
    }

    function renderArticle(data) {
        // Update document title for SEO
        document.title = `${data.title} - Júlio Brito`;

        // Format date
        const dateObj = new Date(data.date + 'T00:00:00'); // Prevent timezone shift
        const formattedDate = dateObj.toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Inject data into DOM
        document.getElementById('article-title').textContent = data.title;
        document.getElementById('article-date').textContent = formattedDate;
        document.getElementById('article-read-time').textContent = `${data.readTime} leitura`;
        
        const tagsContainer = document.getElementById('article-tags');
        data.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'tag';
            tagSpan.textContent = tag;
            tagsContainer.appendChild(tagSpan);
        });

        document.getElementById('article-body').innerHTML = data.content;

        // Show content
        contentContainer.style.display = 'block';
    }

    function showError() {
        errorContainer.style.display = 'block';
    }
});
