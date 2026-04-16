import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-road-background',
  template: '<div class="road-bg"><div class="road-vignette"></div></div>',
  styleUrl: './road-background.scss',
})
export default class RoadBackground {
  @Input() rotated?: boolean;
}
