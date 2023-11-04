class FooterComponent extends HTMLElement {
    // run some code to set HTML when the component is ready
    connectedCallback() {
      this.innerHTML = this.getTemplate();
    }
  
    // create templates that interpolate variables and HTML!
    getTemplate() {
      const year = new Date().getFullYear();
  
      return `
  
        <footer>
          <h4>Cloud RI &copy;${year}</h4>
        </footer>
      `;
    }
  }
  
  customElements.define('app-footer', FooterComponent);