import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public textMessage : string = ''; // using [(ngModel)]

  public enterText : string = '';

  onInputChange(event: any) { // Using event listener without [(ngModel)]
    var newValue = event.target.value; 
    this.enterText = newValue;
    // console.log('New value:', newValue);
  }
}
