import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nazwa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nazwa.component.html',
  styleUrl: './nazwa.component.css'
})

export class NazwaComponent {
  display: string = '';

  appendNumber(num: number) {
    this.display += num.toString();
  }

  appendOperator(operator: string) {
    this.display += ` ${operator} `;
  }

  calculate() {
    try {
      this.display = eval(this.display).toString();
    } catch (error) {
      this.display = 'Error';
    }
  }

  clear() {
    this.display = '';
  }

  delete() {
    // Usunięcie ostatniego znaku
    this.display = this.display.slice(0, -1);
  }
}
