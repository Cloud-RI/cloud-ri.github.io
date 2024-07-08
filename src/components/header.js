export default class HeaderComponent extends HTMLElement {
  
    connectedCallback() {
      this.innerHTML = this.getTemplate();
    }
  
    getTemplate() {
      return `

      <header>
      <div class="mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-5">
            <div>
              <a href="/" class="flex py-4 px-2">
                <span class="text-black-500 text-xl">Cloud RI</span>
              </a>
            </div>
            <nav class="space-x-1 pt-5">
              <a href="/content/presentations/" class="py-4 px-2">Presentations</a>
              <a href="/content/code-of-conduct/" class="py-4 px-2">Code of Conduct</a>
              <a href="/content/join/" class="py-4 px-2">Join</a>  
            </nav>
          </div>
          <div class="space-x-3 pt-5 flex justify-end">
              <a class="mr-2" href="https://github.com/Cloud-RI/"><img src="/assets/github-logo.png" alt="Cloud RI Github" /></a>
              <a class="mr-2" href="https://www.linkedin.com/groups/12899954/"><img src="/assets/LinkedIn_icon.svg" alt="Cloud RI LinkedIn Group" /></a>
              <a href="https://www.meetup.com/cloudri/"><img src="/assets/Meetup_icon.svg" alt="Cloud RI Meetup Group" /></a>
            </div>
        </div>
      </div>
    </header>
      `;
    }
  }
  
  customElements.define('app-header', HeaderComponent);