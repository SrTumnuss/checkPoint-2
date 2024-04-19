import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefasComponent } from './components/tarefas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-new';
}
