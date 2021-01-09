import { HostListener } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogApp';

  // sidebaropen=true;
  // sidebarcollapse=false;

  onActivate(event:any) {
    window.scroll(0,0);
   
}


// @HostListener('document:click', ['$event'])
// documentClick(event: MouseEvent,) {
//   this.sidebaropen=false;
//   this.sidebarcollapse=true;
  
// }





}
