import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'saa-app',
  encapsulation: ViewEncapsulation.None,
  template: `
      <header>
          <h1>Styling Angular Applications</h1>
          <em>For Modern Angular Applications</em>
      </header>
      <div>
          <saa-app-nav></saa-app-nav>
      </div>
  `,
    styles: [`

        div {
            background: blue;
            border-radius: 1.5em;
            margin: 1.5em 0;
            padding: 5em 1.2em;
        }

    `]
})

export class AppComponent {
}