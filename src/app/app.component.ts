import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopupComponent } from './components/popup/popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PopupComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-figma-app';
  
  // Separate input values for each popup component
  inputValue1: string = '';
  inputValue2: string = '';

  handlePrimaryButtonClick(): void {
    console.log('Primary button clicked');
    alert('Primary button clicked');
  }

  handleSecondaryButtonClick(): void {
    console.log('Secondary button clicked');
    alert('Secondary button clicked');
  }

  handleInputChange1(value: string): void {
    console.log('Input 1 changed:', value);
    this.inputValue1 = value;
  }

  handleInputChange2(value: string): void {
    console.log('Input 2 changed:', value);
    this.inputValue2 = value;
  }
}
