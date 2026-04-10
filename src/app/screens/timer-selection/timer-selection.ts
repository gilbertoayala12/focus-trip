import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Timer } from '../../services/timer';

@Component({
  selector: 'app-timer-selection',
  imports: [],
  templateUrl: './timer-selection.html',
  styleUrl: './timer-selection.scss',
})
export class TimerSelection {
  private router = inject(Router);
  private timerService = inject(Timer);
  public timerDuration: number[] = [10, 25, 30, 45];

  selected = signal<number | null>(null);

  select(minutes: number) {
    this.selected.set(minutes);
  }

  confirm() {
    const duration = this.selected();
    if (!duration) return;
    this.timerService.set(duration);
    this.router.navigate(['/destination']);
  }
}
