import { Component, inject } from '@angular/core';
import Trip from '../../../../services/trip';
import RoutePacks from '../../../../services/route-pack';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-instrument-panel',
  imports: [TitleCasePipe],
  templateUrl: './instrument-panel.html',
  styleUrl: './instrument-panel.scss',
})
export class InstrumentPanel {
  trip = inject(Trip);
  packs = inject(RoutePacks);
}
