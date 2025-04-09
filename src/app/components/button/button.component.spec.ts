import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display button text', () => {
    const testText = 'Test Button';
    component.text = testText;
    fixture.detectChanges();
    
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.textContent.trim()).toBe(testText);
  });

  it('should apply primary variant styles', () => {
    component.variant = 'primary';
    fixture.detectChanges();
    
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.classList.contains('bg-[#4E61F6]')).toBeTrue();
    expect(buttonElement.classList.contains('text-white')).toBeTrue();
  });

  it('should apply secondary variant styles', () => {
    component.variant = 'secondary';
    fixture.detectChanges();
    
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.classList.contains('bg-transparent')).toBeTrue();
    expect(buttonElement.classList.contains('border')).toBeTrue();
    expect(buttonElement.classList.contains('border-[#4E61F6]')).toBeTrue();
    expect(buttonElement.classList.contains('text-[#4E61F6]')).toBeTrue();
  });

  it('should apply fullWidth style when fullWidth is true', () => {
    component.fullWidth = true;
    fixture.detectChanges();
    
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.classList.contains('w-full')).toBeTrue();
  });

  it('should not apply fullWidth style when fullWidth is false', () => {
    component.fullWidth = false;
    fixture.detectChanges();
    
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.classList.contains('w-full')).toBeFalse();
  });

  it('should emit buttonClick event when clicked', () => {
    spyOn(component.buttonClick, 'emit');
    
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.nativeElement.click();
    
    expect(component.buttonClick.emit).toHaveBeenCalled();
  });

  it('should not emit buttonClick event when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    
    spyOn(component.buttonClick, 'emit');
    
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.nativeElement.click();
    
    expect(component.buttonClick.emit).not.toHaveBeenCalled();
  });

  it('should have disabled attribute when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    
    const buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonElement.disabled).toBeTrue();
  });
});
