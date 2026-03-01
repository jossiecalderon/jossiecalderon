/*!
 * Function to dynamically add Bootstrap from CDN
 */

(function addBootstrapFromCDN() {
  // Create a <link> element for the Bootstrap CSS
  const link = document.createElement('link');
  link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css';
  link.rel = 'stylesheet';
  link.integrity = 'sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT';
  link.crossOrigin = 'anonymous';

  // Create a <link> element for the Bootstrap Icons
  const iconLink = document.createElement('link');
  iconLink.rel = 'stylesheet';
  iconLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css';
  iconLink.integrity = "sha384-c9MVH4yRDZMY+bSlECVISp9U4xBl1dKb5z4x8IgF6lBKTHsh1AtxHBfHiiA+S/Nr";
  iconLink.crossOrigin = "anonymous";

  // Create a <script> element for the Bootstrap JS
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js';
  script.integrity = 'sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO';
  script.crossOrigin = 'anonymous';

  // Append the elements to the <head> of the document
  document.head.appendChild(link);
  document.head.appendChild(iconLink);
  document.head.appendChild(script);

  // Tooltip initialization
  // This code initializes Bootstrap tooltips on elements with the data-bs-toggle="tooltip" attribute
  document.addEventListener('DOMContentLoaded', function() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  })

})();

// Currently working on light theme.
/*
themeButton.addEventListener("click", () => {
  
  // Get the current theme from the "data-bs-theme" attribute
  const currentTheme = themeButton.getAttribute("data-bs-theme");
  if (currentTheme === 'light') { // Currently light, switch to dark
    themeButton.setAttribute("data-bs-theme", "dark");
    // Set the "data-bs-theme" attribute on the <html> element to "dark" so all elements inherit the property
    document.documentElement.setAttribute("data-bs-theme", "dark");
    // Switch the icon to dark mode
    themeButton.innerHTML = `<svg class="bi bi-moon-stars theme-icon-active" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><use href="#moon-stars-fill"></use></svg>`;
  } else { // Currently dark, switch to light
    themeButton.setAttribute("data-bs-theme", "light");
    // Set the "data-bs-theme" attribute on the <html> element to "dark" so all elements inherit the property
    document.documentElement.setAttribute("data-bs-theme", "light");
    // Switch the icon to dark mode
    themeButton.innerHTML = `<svg class="bi my-1 theme-icon-active" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><use href="#sun-fill"></use></svg>`;
  }
});*/