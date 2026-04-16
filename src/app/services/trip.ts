import { Injectable, computed, inject } from '@angular/core';
import { Timer } from './timer';
import RoutePacks from './route-pack';

@Injectable({ providedIn: 'root' })
export default class Trip {
  private timer = inject(Timer);
  private packs = inject(RoutePacks);
  readonly PTS = [
    { x: 8, y: 40 },
    { x: 18, y: 38 },
    { x: 28, y: 33 },
    { x: 40, y: 26 },
    { x: 52, y: 20 },
    { x: 64, y: 18 },
    { x: 76, y: 19 },
    { x: 88, y: 21 },
    { x: 100, y: 26 },
    { x: 112, y: 31 },
    { x: 124, y: 34 },
    { x: 136, y: 36 },
    { x: 148, y: 35 },
    { x: 160, y: 31 },
    { x: 172, y: 28 },
    { x: 184, y: 24 },
    { x: 196, y: 20 },
    { x: 208, y: 16 },
    { x: 220, y: 13 },
    { x: 232, y: 12 },
    { x: 244, y: 14 },
    { x: 256, y: 18 },
    { x: 268, y: 23 },
    { x: 280, y: 27 },
    { x: 292, y: 31 },
    { x: 304, y: 33 },
    { x: 316, y: 33 },
    { x: 328, y: 32 },
    { x: 332, y: 32 },
  ];

  position = computed(() => {
    const p = this.timer.progress();
    const pts = this.PTS;
    const raw = p * (pts.length - 1);
    const i = Math.min(Math.floor(raw), pts.length - 2);
    const t = raw - i;
    return {
      x: pts[i].x + (pts[i + 1].x - pts[i].x) * t,
      y: pts[i].y + (pts[i + 1].y - pts[i].y) * t,
    };
  });

  eta = computed(() => {
    const s = this.timer.remaining();
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  });
  etaRaw = computed(() => this.timer.remaining());
  speed = computed(() => {
    const t = this.timer.progress();
    return Math.abs(30 + Math.round(Math.sin(t * 14) * 8 + Math.cos(t * 7) * 4));
  });
  photoUrl = computed(() => {
    // todo: update to handle different images
    return 'assets/scenery/urban-sunny.jpeg';
  });
  showDestination = computed(() => this.timer.progress() > 0.72);

  isComplete = computed(() => this.timer.remaining() === 0);
}
