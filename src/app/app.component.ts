import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  //DATA BINDING
  inputType = 'text';

  //EVENT BINDING
  handler(event) {
    console.log('clicked', event);
  }

  user = {
    name: 'Chau',
    age: 20,
  };
}
