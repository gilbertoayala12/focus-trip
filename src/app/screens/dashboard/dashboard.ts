import { Component, inject, OnInit } from '@angular/core';
import { Timer } from '../../services/timer';
import Trip from '../../services/trip';
import { Back } from '../../shared/back/back';

@Component({
  selector: 'app-dashboard',
  imports: [Back],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  protected currentTrip = inject(Trip);
  private timer = inject(Timer);

  public ETA: any;
  ngOnInit(): void {
    this.timer.start();
  }
}
