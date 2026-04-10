import { TitleCasePipe } from '@angular/common';
import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePack } from '../../data/route-packs.data';
import RoutePacks from '../../services/route-pack';
import { Timer } from '../../services/timer';
import { Navigation } from '../../core/router/navigation';

@Component({
  selector: 'app-destination-picker',
  imports: [TitleCasePipe],
  templateUrl: './destination-picker.html',
  styleUrl: './destination-picker.scss',
})
export class DestinationPicker {
  private timerService = inject(Timer);
  private routePackService = inject(RoutePacks);
  private router = inject(Router);
  private navigation = inject(Navigation);
  public selectedTimer = this.timerService.remaining() / 60;
  public availableRoutes: Signal<RoutePack[]> = this.routePackService.forDuration(
    this.selectedTimer,
  );

  selected = signal<RoutePack | null>(null);

  select(selectedRoute: RoutePack) {
    this.selected.set(selectedRoute);
  }

  confirm() {
    const selectedRoute = this.selected();
    if (!selectedRoute) return;
    this.routePackService.select(selectedRoute);
    this.router.navigate(['/loading']);
  }
  goHome() {
    this.navigation.goHome();
  }
}
