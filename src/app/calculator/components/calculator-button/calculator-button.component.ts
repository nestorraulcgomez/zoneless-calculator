import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, input, output, signal, viewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  styleUrls: ['./calculator-button.component.css'],
  imports: [],
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'border-r border-b border-indigo-400',
    '[class.w-2/4]': 'isDoubleSize()', // Alternativa a usar el HostBinding
    '[class.w-1/4]': '!isDoubleSize()',
    // attribute: 'hola',
    // 'data-size': 'XL',
  },
  // encapsulation: ViewEncapsulation.None // otra forma de remover encapsulación

})
export class CalculatorButtonComponent {

  public isPressed = signal(false);

  public onClick = output<string>();
  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button')


  public isCommand = input(false, {
    transform: (value: boolean | string ) =>
      typeof value === 'string' ? value === '' : value
  }); // se puede agregar requiered para que sea obligatorio. ej: input.required();

  public isDoubleSize = input(false, {
    transform: (value: boolean | string ) =>
      typeof value === 'string' ? value === '' : value
  });

  // @HostBinding('class.w-2/4') get commandStyle(){
  //   return this.isDoubleSize();
  // }

  handleClick(){
    if (!this.contentValue()?.nativeElement) {
      return;
    }
    const value = this.contentValue()!.nativeElement.innerText

    this.onClick.emit( value.trim() );
  }

  public keyboardPressedStyle( key: string ){
    if (!this.contentValue()) return;

    const value = this.contentValue()!.nativeElement.innerText;

    if (value != key) return;

    this.isPressed.set(true);

    setTimeout(() => {
      this.isPressed.set(false);
    }, 100);
  }

}
