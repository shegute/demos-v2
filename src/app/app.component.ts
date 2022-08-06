import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'saa-app',
    encapsulation: ViewEncapsulation.ShadowDom,
    template: `
      <header>
          <h1>Styling Angular Applications</h1>
          <em>For Modern Angular Applications</em>
      </header>
      <div>
        Some Minor text above inner component
          <saa-app-nav class="example"></saa-app-nav>
          <saa-app-nav  ></saa-app-nav>
        Some Minor text below inner component
      </div>
    <style>
        h1 {
            background: blue;
            border-radius: 1.5em;
            margin: 1.5em 0;
            padding: 1em 1.2em;
        }

        div {
            background: #2A9FBC;
            border-radius: 0.5em;
            margin: 1.5em 0;
            padding: 1em 1.2em;
        }
    </style>
  `,
    styles: [`


    `]
})

export class AppComponent {
}