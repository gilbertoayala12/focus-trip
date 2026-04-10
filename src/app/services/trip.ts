import { Injectable, computed, inject } from '@angular/core';
import { Timer } from './timer';
import RoutePacks from './route-pack';

@Injectable({ providedIn: 'root' })
export default class Trip {
  private timer = inject(Timer);
  private packs = inject(RoutePacks);

  position = computed(() => {
    const pack   = this.packs.selectedPack();
    const points = pack?.pathPoints ?? [];
    if (points.length < 2) return null;

    const p   = this.timer.progress();
    const raw = p * (points.length - 1);
    const idx = Math.min(Math.floor(raw), points.length - 2);
    const t   = raw - idx;
    const a   = points[idx];
    const b   = points[idx + 1];

    return {
      x: a.x + (b.x - a.x) * t,
      y: a.y + (b.y - a.y) * t,
    };
  });

  eta = computed(() => {
    const s = this.timer.remaining();
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  });
}