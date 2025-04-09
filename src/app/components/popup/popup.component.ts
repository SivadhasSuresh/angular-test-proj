import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';

export type ButtonLayout = 'vertical' | 'horizontal';
export type ContentType = 
  'text-buttons' | 
  'text-input-buttons' | 
  'message-only' | 
  'title-only' | 
  'title-message';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent],
  templateUrl: './popup.component.html'
})
export class PopupComponent {
  @Input() title: string = 'Title';
  @Input() message: string = 'Keep your messages short, but make sure they cover everything you need to say.';
  @Input() buttonLayout: ButtonLayout = 'vertical';
  @Input() contentType: ContentType = 'text-buttons';
  @Input() primaryButtonText: string = 'Button';
  @Input() secondaryButtonText: string = 'Button';
  @Input() inputPlaceholder: string = 'Placeholder';
  @Input() inputValue: string = '';
  @Input() showSecondaryButton: boolean = true;
  
  @Output() primaryButtonClick = new EventEmitter<void>();
  @Output() secondaryButtonClick = new EventEmitter<void>();
  @Output() inputChange = new EventEmitter<string>();

  onPrimaryButtonClick(): void {
    this.primaryButtonClick.emit();
  }

  onSecondaryButtonClick(): void {
    this.secondaryButtonClick.emit();
  }

  onInputChange(value: string): void {
    this.inputChange.emit(value);
  }
}
