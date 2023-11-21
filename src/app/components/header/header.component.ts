import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuVisible: boolean = true;
  isHeaderVisible: boolean = true;
  isSidebarOpen: boolean = false;


  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    this.isSidebarOpen = !this.isSidebarOpen; 
  }
  toggleHeader() {
    this.isHeaderVisible = !this.isHeaderVisible;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }



}
