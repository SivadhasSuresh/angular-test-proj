import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PopupComponent } from './popup.component';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';

describe('PopupComponent', () => {
  let component: PopupComponent;
  let fixture: ComponentFixture<PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupComponent, ButtonComponent, InputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the provided title and message', () => {
    const testTitle = 'Test Title';
    const testMessage = 'Test Message';
    
    component.title = testTitle;
    component.message = testMessage;
    fixture.detectChanges();
    
    const titleElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    const messageElement = fixture.debugElement.query(By.css('p')).nativeElement;
    
    expect(titleElement.textContent).toContain(testTitle);
    expect(messageElement.textContent).toContain(testMessage);
  });

  it('should show input component when contentType is text-input-buttons', () => {
    component.contentType = 'text-input-buttons';
    fixture.detectChanges();
    
    const inputElement = fixture.debugElement.query(By.directive(InputComponent));
    expect(inputElement).toBeTruthy();
  });

  it('should not show input component when contentType is text-buttons', () => {
    component.contentType = 'text-buttons';
    fixture.detectChanges();
    
    const inputElement = fixture.debugElement.query(By.directive(InputComponent));
    expect(inputElement).toBeNull();
  });

  it('should display buttons with provided text', () => {
    const primaryText = 'Primary Action';
    const secondaryText = 'Secondary Action';
    
    component.primaryButtonText = primaryText;
    component.secondaryButtonText = secondaryText;
    fixture.detectChanges();
    
    const buttons = fixture.debugElement.queryAll(By.directive(ButtonComponent));
    
    expect(buttons[0].componentInstance.text).toBe(primaryText);
    expect(buttons[1].componentInstance.text).toBe(secondaryText);
  });

  it('should emit events when buttons are clicked', () => {
    spyOn(component.primaryButtonClick, 'emit');
    spyOn(component.secondaryButtonClick, 'emit');
    
    const buttons = fixture.debugElement.queryAll(By.directive(ButtonComponent));
    buttons[0].componentInstance.buttonClick.emit();
    buttons[1].componentInstance.buttonClick.emit();
    
    expect(component.primaryButtonClick.emit).toHaveBeenCalled();
    expect(component.secondaryButtonClick.emit).toHaveBeenCalled();
  });

  it('should emit input value when input changes', () => {
    component.contentType = 'text-input-buttons';
    fixture.detectChanges();
    
    spyOn(component.inputChange, 'emit');
    
    const inputElement = fixture.debugElement.query(By.directive(InputComponent));
    inputElement.componentInstance.valueChange.emit('Test input');
    
    expect(component.inputChange.emit).toHaveBeenCalledWith('Test input');
  });

  it('should use vertical layout when buttonLayout is vertical', () => {
    component.buttonLayout = 'vertical';
    fixture.detectChanges();
    
    const buttonsContainer = fixture.debugElement.query(By.css('.mt-6.w-full')).nativeElement;
    expect(buttonsContainer.classList.contains('space-y-buttons-gap')).toBeTrue();
  });

  it('should use horizontal layout when buttonLayout is horizontal', () => {
    component.buttonLayout = 'horizontal';
    fixture.detectChanges();
    
    const buttonsContainer = fixture.debugElement.query(By.css('.mt-6.w-full')).nativeElement;
    expect(buttonsContainer.classList.contains('space-x-buttons-gap')).toBeTrue();
  });
  
  it('should hide title when contentType is message-only', () => {
    component.contentType = 'message-only';
    fixture.detectChanges();
    
    const titleElement = fixture.debugElement.query(By.css('h3'));
    expect(titleElement).toBeNull();
  });
  
  it('should hide message when contentType is title-only', () => {
    component.contentType = 'title-only';
    fixture.detectChanges();
    
    const messageElement = fixture.debugElement.query(By.css('p'));
    expect(messageElement).toBeNull();
  });
  
  it('should not show buttons when contentType is title-message', () => {
    component.contentType = 'title-message';
    fixture.detectChanges();
    
    const buttons = fixture.debugElement.queryAll(By.directive(ButtonComponent));
    expect(buttons.length).toBe(0);
  });
  
  it('should hide secondary button when showSecondaryButton is false', () => {
    component.showSecondaryButton = false;
    fixture.detectChanges();
    
    const buttons = fixture.debugElement.queryAll(By.directive(ButtonComponent));
    expect(buttons.length).toBe(1);
  });
});
