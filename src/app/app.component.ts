import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogApp';
  sidebarclosed=true;
  onActivate(event:any) {
    window.scroll(0,0);
   
}





}
