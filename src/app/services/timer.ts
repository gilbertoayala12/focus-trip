import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Timer {
  private totalSeconds = signal<number>(0);
  private elapsed = signal<number>(0);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  // Derived — auto-update whenever elapsed or totalSeconds changes
  progress = computed(() => {
    const total = this.totalSeconds();
    return total > 0 ? this.elapsed() / total : 0;
  });

  remaining = computed(() => Math.max(0, this.totalSeconds() - this.elapsed()));

  isRunning = computed(() => this.elapsed() > 0 && this.elapsed() < this.totalSeconds());

  start() {
    this.intervalId = setInterval(() => {
      if (this.elapsed() >= this.totalSeconds()) {
        this.stop();
        return;
      }
      this.elapsed.update((e) => e + 1);
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    this.stop();
    this.elapsed.set(0);
    this.totalSeconds.set(0);
  }

  set(durationMinutes: number) {
    this.totalSeconds.set(durationMinutes * 60);
    this.elapsed.set(0);
    console.log(this.totalSeconds())
  }
}
