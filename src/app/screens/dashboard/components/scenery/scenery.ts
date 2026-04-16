import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import Trip from '../../../../services/trip';
import RoutePacks from '../../../../services/route-pack';

@Component({
  selector: 'app-scenery',
  imports: [CommonModule],
  templateUrl: './scenery.html',
  styleUrl: './scenery.scss',
})
export class Scenery {
trip = inject(Trip);
packs = inject(RoutePacks);
}
