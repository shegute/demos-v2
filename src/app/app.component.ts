import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'saa-app',
    encapsulation: ViewEncapsulation.ShadowDom,
    template: `
      <header>
          <h1>Styling Angular Applications</h1>
          <em>For Modern Angular Applications</em>
      </header>
      <div class="example">
        Some Minor text above inner component
          <saa-app-nav >
            <li>
               <a class="elementAndClassExample" href="#">Home</a>
            </li>
            <li>
                <a href="#">Prerequisites</a>
            </li>
            <li>
                <a href="#">Modules</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
          </saa-app-nav>
        Some Minor text below inner component

        <a href="#">Contact Us</a>
        <!-- Due to the ng-deep <a> tag css, even this link will have the css applied even though its outside of the component with the css setting, BAD! -->
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
