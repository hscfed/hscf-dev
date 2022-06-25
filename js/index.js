// Main Header and Footer Components

const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <link rel="stylesheet" href="./css/style.css">
  <header class="primary-header container">
  <div>
    <a href="./index.html">
      <img class="logo-img" src="./img/HSCF-Logo.png" alt="HSCF Logo">
    </a>
  </div>

  <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false"></button>

  <nav>
    <ul id="primary-navigation" data-visible="false" class="primary-navigation">
      <li>
        <a href="index.html">Home</a>
      </li>
      <li>
        <a href="about-us.html">About Us</a>
      </li>
      <li>
        <a href="contact-us.html">Contact Us</a>
      </li>
      <li>
        <a href="activities.html">Activities</a>
      </li>
      <li>
        <a href="#">Members</a>
      </li>
      <li>
        <a class="join" href="join-hscf.html">Join HSCF</a>
      </li>
    </ul>
  </nav>
  </header>
`;

class MainHeader extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    const navToggle = this.shadowRoot.querySelector('.mobile-nav-toggle');

    navToggle.addEventListener('click', () => {
      const primaryNav = this.shadowRoot.querySelector('.primary-navigation');
      const visibility = primaryNav.dataset.visible;

      if (visibility === 'false') {
        primaryNav.dataset.visible = 'true';
        navToggle.setAttribute('aria-expanded', 'true');
      } else {
        primaryNav.dataset.visible = 'false';
        navToggle.setAttribute('aria-expanded', 'false');
      }
    })
  }

  disconnectedCallback() {
    const navToggle = this.shadowRoot.querySelector('.mobile-nav-toggle');
    navToggle.removeEventListener();
  }
}

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <link rel="stylesheet" href="./css/style.css">
  <footer>
    <div class="footer-flex container">
      <div class="links">
        <div class="main-links">
          <h3>Main Links</h3>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about-us.html">About Us</a></li>
            <li><a href="contact-us.html">Contact Us</a></li>
            <li><a href="activities.html">Activities</a></li>
            <li><a href="#">Members</a></li>
            <li><a href="join-hscf.html">Join HSCF</a></li>
          </ul>
        </div>

        <div class="activity-links">
          <h3>Activity Links</h3>
          <ul>
            <li><a href="meetings.html">Meetings</a></li>
            <li><a href="christmas-program.html">Christmas Program</a></li>
            <li><a href="curriculum-sale.html">Curriculum Sale</a></li>
            <li><a href="science-fair.html">Science & Heritage Fair</a></li>
            <li><a href="poetry-cafe.html">Poetry Cafe</a></li>
            <li><a href="track-field.html">Track & Field</a></li>
          </ul>
        </div>
      </div>

      <div class="info">

        <h3>Home School<br>Christian Fellowship</h3>

        <p class="email">hscfed@gmail.com</p>
        <p>&copy; <span id="year"></span> All Rights Reserved</p>
        <img src="./img/HSCF-Logo-darkblue.png">
      </div>
    </div>
  </footer>
`;

class MainFooter extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    const yearSpan = this.shadowRoot.querySelector('#year');
    yearSpan.innerText = new Date().getFullYear();
  }
}


// Define custom elements
window.customElements.define('main-header', MainHeader);
window.customElements.define('main-footer', MainFooter);