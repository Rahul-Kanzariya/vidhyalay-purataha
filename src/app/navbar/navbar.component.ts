import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, ActivatedRoute, NavigationEnd } from '@angular/router';

interface Menu {
  name: string;
  endpoint: string
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  menuList: Menu[] = [
    {
      name: 'Dashboard',
      endpoint: 'dashboard'
    },
    {
      name: 'Students',
      endpoint: 'students'
    },
    {
      name: 'Payments',
      endpoint: 'payments'
    },
    {
      name: 'Projects',
      endpoint: 'projects'
    },
  ]
  activatedMenu!: Menu

  constructor(public router: Router, public activatedRoute :ActivatedRoute) {

  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentEndpoint = event.urlAfterRedirects;
        console.log('currentEndpoint: ', currentEndpoint);
        if(!this.activatedMenu && currentEndpoint){
          const currentMenu = this.menuList.find((menu) => currentEndpoint.includes(menu.endpoint))
          if(currentMenu) this.activatedMenu = currentMenu;
        }
      }
    });
  }

  handleMenuClick(menu: Menu){
    this.activatedMenu = menu;
  }
}
