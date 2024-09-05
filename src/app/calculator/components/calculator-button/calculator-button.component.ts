import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  styleUrls: ['./calculator-button.component.css'],
  imports: [],
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
    // attribute: 'hola',
    // 'data-size': 'XL',
  },
  // encapsulation: ViewEncapsulation.None // otra forma de remover encapsulación

})
export class CalculatorButtonComponent {
  public isCommand = input(false, {
    transform: (value: boolean | string ) =>
      typeof value === 'string' ? value === '' : value
  }); // se puede agregar requiered para que sea obligatorio. ej: input.required();
  public isDoubleSize = input(false, {
    transform: (value: boolean | string ) =>
      typeof value === 'string' ? value === '' : value
  });

  @HostBinding('class.w-2/4') get commandStyle(){
    return this.isDoubleSize();
  }

}
