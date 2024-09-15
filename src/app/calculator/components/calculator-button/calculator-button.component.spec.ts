import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorButtonComponent } from './calculator-button.component';

describe('CalculatorButtonComponent', () => {

  let fixture: ComponentFixture<CalculatorButtonComponent>;
  let compiled: HTMLElement;
  let component: CalculatorButtonComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorButtonComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;

    fixture.detectChanges(); // Se utiliza para esperar a que se renderice el componente
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should apply w-1/4 doubleSize is false', () => {
    const hostCssClasses: string[] = compiled.classList.value.split(' ');
    expect(hostCssClasses).toContain('w-1/4');
    expect(component.isDoubleSize()).toBeFalse();
  });

  it('should apply w-2/4 doubleSize is true', () => {
    fixture.componentRef.setInput('isDoubleSize', true);
    fixture.detectChanges();
    const hostCssClasses: string[] = compiled.classList.value.split(' ');
    expect(hostCssClasses).toContain('w-2/4');
    expect(component.isDoubleSize()).toBeTrue();
  });

  it('should emit onClick when handleClick is called', () => {
    // Espías
    spyOn(component.onClick, 'emit');

    component.handleClick();

    expect(component.onClick.emit).toHaveBeenCalled();
    // expect(component.onClick.emit).toHaveBeenCalledWith('');
  });

  it('should set isPressed to true and then false when keyboardPressStyle is called with a matching key', (done) => {
    component.contentValue()!.nativeElement.innerText = '1';
    component.keyboardPressedStyle('1');
    expect(component.isPressed()).toBeTrue();

    setTimeout(() => {
      expect(component.isPressed()).toBeFalse();
      done();
    }, 101);
  });

});
