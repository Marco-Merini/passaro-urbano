import { Component } from '@angular/core';
import { TopoComponent } from "./topo/topo.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [TopoComponent, RodapeComponent, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PassaroUrbano';
}