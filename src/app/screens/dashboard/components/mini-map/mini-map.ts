import { Component, computed, inject } from '@angular/core';
import Trip from '../../../../services/trip';
import { Timer } from '../../../../services/timer';

@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.html',
  styleUrl: './mini-map.scss',
})
export class MiniMap {
  trip = inject(Trip);
  timer = inject(Timer);
  pathD = 'M8,40 C35,40 44,16 80,19 S128,36 164,28 S220,10 256,22 S308,36 332,32';

  progressPct = computed(() => Math.round(this.timer.progress() * 100));
  dashOffset = computed(() => 1000 * (1 - this.timer.progress()));
}
