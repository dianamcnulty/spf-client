import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showTrainingLinks() {
    const dropDown = document.getElementById('dropdown-content')
    dropDown.classList.add('dropdown-content-show');

  }
}
