document.addEventListener('DOMContentLoaded', () => {
    const toolsContainer = document.getElementById('toolsContainer');
    const searchInput = document.getElementById('toolSearch');
    const categoryButtons = document.querySelectorAll('.categories-nav button');

    // Function to create a tool card
    function createToolCard(tool) {
        return `
            <div class="col-md-6 col-lg-4 tool-item" data-category="${tool.category}">
                <div class="card tool-card h-100">
                    <div class="card-body">
                        <h5 class="card-title">
                            <i class="fas ${tool.icon} me-2"></i>${tool.name}
                        </h5>
                        <p class="card-text">${tool.description}</p>
                        <a href="${tool.url}" class="btn btn-primary mt-auto">
                            Use Tool
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    // Function to render tools
    function renderTools(toolsToRender) {
        toolsContainer.innerHTML = toolsToRender.map(tool => createToolCard(tool)).join('');
    }

    // Function to filter tools by category
    function filterTools(category) {
        const filteredTools = category === 'all' 
            ? window.toolsData 
            : window.toolsData.filter(tool => tool.category === category);
        renderTools(filteredTools);
    }

    // Function to search tools
    function searchTools(query) {
        const searchResults = window.toolsData.filter(tool => {
            const searchString = `${tool.name} ${tool.description}`.toLowerCase();
            return searchString.includes(query.toLowerCase());
        });
        renderTools(searchResults);
    }

    // Event listener for search input
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query) {
            searchTools(query);
        } else {
            renderTools(window.toolsData);
        }
    });

    // Event listeners for category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter tools by category
            const category = button.getAttribute('data-category');
            filterTools(category);
        });
    });

    // Initial render
    renderTools(window.toolsData);

    // Add Google AdSense code (if you have it)
    // const adScript = document.createElement('script');
    // adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    // adScript.setAttribute('async', '');
    // document.head.appendChild(adScript);
}); 