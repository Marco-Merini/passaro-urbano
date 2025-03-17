import { Component } from '@angular/core';
import { TopoComponent } from "./topo/topo.component";
import { HomeComponent } from "./home/home.component";
import { RodapeComponent } from "./rodape/rodape.component";
// import { RestaurantesComponent } from './restaurantes/restaurantes.component';
// import { DiversaoComponent } from './diversao/diversao.component';

// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TopoComponent, HomeComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PassaroUrbano';
}
