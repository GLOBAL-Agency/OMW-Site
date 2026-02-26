// 1. Componente del Header (Navegación)
class SiteHeader extends HTMLElement {
    connectedCallback() {
        // Determine the current page to highlight the active link
        const currentPath = window.location.pathname;
        const isIndex = currentPath.endsWith('index.html') || currentPath === '/';
        const isInventory = currentPath.endsWith('inventory.html');
        const isContact = currentPath.endsWith('contact.html');

        this.innerHTML = `
            <nav class="navbar">
                <a href="index.html" class="logo">
                    <img src="logo-OMW.jpeg" alt="OnMyWay Logo" style="max-height: 40px; width: auto; border-radius: 5px;">
                </a>
                <ul class="nav-links">
                    <li><a href="index.html" class="${isIndex ? 'active' : ''}">Inicio</a></li>
                    <li><a href="inventory.html" class="${isInventory ? 'active' : ''}">Inventario</a></li>
                    <li><a href="contact.html" class="${isContact ? 'active' : ''}">Contacto</a></li>
                </ul>
                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </nav>
        `;

        // Initialize mobile menu logic AFTER the header is created
        const burger = this.querySelector('.burger');
        const nav = this.querySelector('.nav-links');
        
        if (burger && nav) {
            burger.addEventListener('click', () => {
                nav.classList.toggle('nav-active');
                burger.classList.toggle('toggle');
            });
        }
    }
}
customElements.define('site-header', SiteHeader);

// 2. Componente del Footer
class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="site-footer">
                <p>&copy; 2024 OnMyWay Miami. Todos los derechos reservados.</p>
                <p>📍 Brickell, Miami, FL | 📧 reservas@omwrentalcar.us</p>
            </footer>
        `;
    }
}
customElements.define('site-footer', SiteFooter);

// 3. Efecto de scroll para el navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = '#000';
            navbar.style.padding = '10px 10%';
        } else {
            navbar.style.background = 'rgba(10, 10, 11, 0.95)';
            navbar.style.padding = '20px 10%';
        }
    }
});
