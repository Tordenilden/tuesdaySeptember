import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SorteperComponent } from "./components/sorteper/sorteper.component";
import { SamuraiComponent } from "./components/samurai/samurai.component";

// @Component is a decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SorteperComponent, SamuraiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Flemsebasse';
}
