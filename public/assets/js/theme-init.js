// Theme initialization script to set black primary color
(function() {
    // Set CSS custom properties for black primary color
    const root = document.documentElement;
    
    // Black primary color RGB values
    const blackRgb = '0, 0, 0';
    
    // Set all primary color variations
    root.style.setProperty('--primary-rgb', blackRgb);
    root.style.setProperty('--primary-color', `rgb(${blackRgb})`);
    root.style.setProperty('--primary-border', `rgb(${blackRgb})`);
    root.style.setProperty('--primary01', `rgba(${blackRgb}, 0.1)`);
    root.style.setProperty('--primary02', `rgba(${blackRgb}, 0.2)`);
    root.style.setProperty('--primary03', `rgba(${blackRgb}, 0.3)`);
    root.style.setProperty('--primary04', `rgba(${blackRgb}, 0.4)`);
    root.style.setProperty('--primary05', `rgba(${blackRgb}, 0.5)`);
    root.style.setProperty('--primary06', `rgba(${blackRgb}, 0.6)`);
    root.style.setProperty('--primary07', `rgba(${blackRgb}, 0.7)`);
    root.style.setProperty('--primary08', `rgba(${blackRgb}, 0.8)`);
    root.style.setProperty('--primary09', `rgba(${blackRgb}, 0.9)`);
    root.style.setProperty('--primary005', `rgba(${blackRgb}, 0.05)`);
    
    // Set modern page style
    root.setAttribute('data-page-style', 'modern');
    
    // Store in localStorage to persist the theme
    localStorage.setItem('primaryRGB', blackRgb);
    localStorage.setItem('vyzormodern', 'Modern');
})();