import { Injectable, signal, computed } from '@angular/core';
import { ROUTE_PACKS, RoutePack } from '../data/route-packs.data';

@Injectable({ providedIn: 'root' })
export default class RoutePacks {
  private allPacks = signal<RoutePack[]>(ROUTE_PACKS);
  selectedPack    = signal<RoutePack | null>(null);

  forDuration(minutes: number) {
    return computed(() =>
      this.allPacks().filter(p => p.durationMinutes === minutes)
    );
  }

  select(pack: RoutePack) {
    this.selectedPack.set(pack);
  }
}