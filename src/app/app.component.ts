import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',],
  "styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.min.css"],

})
export class AppComponent {


 employees : any[]  = [
    { "name": "Employees" },
    { "name": "Support" }
     ];
  title = 'app';
name : string  ="karthik";
email :string ="example@gmail"
  sample(): void {
alert();
  }


  
}
