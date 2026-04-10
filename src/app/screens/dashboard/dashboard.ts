import { Component, inject, OnInit, Signal } from '@angular/core';
import { Navigation } from '../../core/router/navigation';
import Trip from '../../services/trip';
import { Timer } from '../../services/timer';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  private navigation = inject(Navigation);
  protected currentTrip = inject(Trip);
  private timer = inject(Timer);

  public ETA: any;
  ngOnInit(): void {
    this.timer.start();
  }
  goHome() {
    this.navigation.goHome();
  }
}
