// Tools data structure
const tools = [
    // Image Tools
    {
        id: 'image-to-png',
        name: 'Image to PNG Converter',
        description: 'Convert images to PNG format easily',
        category: 'image',
        icon: 'fa-image',
        url: '/tools/image-to-png.html'
    },
    {
        id: 'image-to-jpg',
        name: 'Image to JPG Converter',
        description: 'Convert images to JPG format with quality control',
        category: 'image',
        icon: 'fa-file-image',
        url: '/tools/image-to-jpg.html'
    },
    {
        id: 'image-resizer',
        name: 'Image Resizer',
        description: 'Resize images while maintaining aspect ratio',
        category: 'image',
        icon: 'fa-compress-arrows-alt',
        url: '/tools/image-resizer.html'
    },
    // SEO Tools
    {
        id: 'meta-tag-generator',
        name: 'Meta Tag Generator',
        description: 'Generate SEO-friendly meta tags for your website',
        category: 'seo',
        icon: 'fa-tags',
        url: '/tools/meta-tag-generator.html'
    },
    {
        id: 'keyword-density',
        name: 'Keyword Density Checker',
        description: 'Analyze keyword density in your content',
        category: 'seo',
        icon: 'fa-percentage',
        url: '/tools/keyword-density.html'
    },
    // Text Tools
    {
        id: 'word-counter',
        name: 'Word Counter',
        description: 'Count words, characters, and paragraphs',
        category: 'text',
        icon: 'fa-calculator',
        url: '/tools/word-counter.html'
    },
    {
        id: 'case-converter',
        name: 'Case Converter',
        description: 'Convert text case to uppercase, lowercase, or title case',
        category: 'text',
        icon: 'fa-font',
        url: '/tools/case-converter.html'
    },
    // Developer Tools
    {
        id: 'json-formatter',
        name: 'JSON Formatter',
        description: 'Format and validate JSON data',
        category: 'developer',
        icon: 'fa-code',
        url: '/tools/json-formatter.html'
    },
    {
        id: 'html-formatter',
        name: 'HTML Formatter',
        description: 'Format and beautify HTML code',
        category: 'developer',
        icon: 'fa-code',
        url: '/tools/html-formatter.html'
    }
    // Add more tools here...
];

// Export the tools data
window.toolsData = tools; 