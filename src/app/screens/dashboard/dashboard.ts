import { Component, effect, inject, OnInit } from '@angular/core';
import { Timer } from '../../services/timer';
import Trip from '../../services/trip';
import { Back } from '../../shared/back/back';
import { Router } from '@angular/router';
import { Scenery } from './components/scenery/scenery';
import { InstrumentPanel } from './components/instrument-panel/instrument-panel';
import { MiniMap } from './components/mini-map/mini-map';

@Component({
  selector: 'app-dashboard',
  imports: [Back, Scenery, InstrumentPanel, MiniMap],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  protected currentTrip = inject(Trip);
  private timer = inject(Timer);
  private router = inject(Router);
  trip = inject(Trip);
  public ETA: any;

  constructor() {
    effect(() => {
      if (this.trip.isComplete()) {
        this.router.navigate([' ']);
      }
    });
  }
  ngOnInit(): void {
    this.timer.start();
  }
}
