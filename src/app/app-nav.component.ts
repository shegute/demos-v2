import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'saa-app-nav',
    template: `
        <div>
            <ul>
                <li>
                    <a href="#">Home</a>
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
            </ul>
        </div>
    `,
    styles: [`

        ul {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        a {
            color: #fff;
            padding: 0 1em;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

    `]
})

export class AppNavComponent {
}