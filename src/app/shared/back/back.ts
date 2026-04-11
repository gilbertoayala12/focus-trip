import { Component, inject } from '@angular/core';
import { Navigation } from '../../core/router/navigation';

@Component({
  selector: 'app-back',
  imports: [],
  templateUrl: './back.html',
  styleUrl: './back.scss',
})
export class Back {
  private navigation = inject(Navigation)
goHome() {
    this.navigation.goHome();
  }
}
