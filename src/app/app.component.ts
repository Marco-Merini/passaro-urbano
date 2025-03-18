import { Component } from '@angular/core';
import { TopoComponent } from "./topo/topo.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TopoComponent, RodapeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PassaroUrbano';
}