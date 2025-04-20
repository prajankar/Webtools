// Function to load HTML components
async function loadComponent(url, elementId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Load header and footer when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('/components/header.html', 'header-placeholder');
    loadComponent('/components/footer.html', 'footer-placeholder');
}); 