import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <main>

      <a [routerLink]="['/']">
        <header class="brand-name">

         <h1>PetoTrader</h1>
         <button>
          + Pet
        </button>
        </header>
      </a>
        <section class="content">
          <router-outlet></router-outlet>
        </section>

    </main>`,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'pet-angular-app';
}



