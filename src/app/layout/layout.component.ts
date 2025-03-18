import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-layout',
  imports: [NavbarComponent, RouterOutlet, RouterLink, MatButton],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
