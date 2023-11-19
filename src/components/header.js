export default class HeaderComponent extends HTMLElement {
    // run some code to set HTML when the component is ready
    connectedCallback() {
      this.innerHTML = this.getTemplate();
    }
  
    // create templates that interpolate variables and HTML!
    getTemplate() {
      return `

      <header class="bg-white shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-5">
            <div>
              <a href="/" class="flex py-4 px-2">
                <span class="text-black-500 text-xl">Cloud RI</span>
              </a>
            </div>
            <nav class="space-x-1 pt-5">
            <a href="/content/archive/" class="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Archive</a>
            <a href="/content/code-of-conduct/" class="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Code of Conduct</a>
            <a href="/content/join/" class="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Join</a>  
            </nav>
          </div>
        </div>
      </div>
    </header>
      `;
    }
  }
  
  customElements.define('app-header', HeaderComponent);