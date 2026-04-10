import { Routes } from '@angular/router';
import { TimerSelection } from './screens/timer-selection/timer-selection';
import { DestinationPicker } from './screens/destination-picker/destination-picker';
import { LoadingAnimation } from './screens/loading-animation/loading-animation';
import { Dashboard } from './screens/dashboard/dashboard';
import { SessionComplete } from './screens/session-complete/session-complete';

export const routes: Routes = [
  { path: '',            component: TimerSelection },
  { path: 'destination', component: DestinationPicker },
  { path: 'loading',     component: LoadingAnimation },
  { path: 'dashboard',   component: Dashboard },
  { path: 'complete',    component: SessionComplete },
  { path: '**',          redirectTo: '' }
];
