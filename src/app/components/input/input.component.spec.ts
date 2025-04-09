import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display placeholder text', () => {
    const testPlaceholder = 'Test Placeholder';
    component.placeholder = testPlaceholder;
    fixture.detectChanges();
    
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.placeholder).toBe(testPlaceholder);
  });

  it('should display input value', () => {
    const testValue = 'Test Value';
    component.value = testValue;
    fixture.detectChanges();
    
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.value).toBe(testValue);
  });

  it('should emit valueChange event when input value changes', () => {
    spyOn(component.valueChange, 'emit');
    
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'New Value';
    inputElement.dispatchEvent(new Event('input'));
    
    expect(component.valueChange.emit).toHaveBeenCalledWith('New Value');
  });

  it('should set input type correctly', () => {
    component.type = 'email';
    fixture.detectChanges();
    
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.type).toBe('email');
  });

  it('should disable input when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputElement.disabled).toBeTrue();
  });
});
