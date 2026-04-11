import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, take, timer } from 'rxjs';

@Component({
  selector: 'app-loading-animation',
  imports: [AsyncPipe],
  templateUrl: './loading-animation.html',
  styleUrl: './loading-animation.scss',
})
export class LoadingAnimation implements OnInit {
  private router = inject(Router);
  public loadingMessages = [
    'Packing your bags...',
    'Closing the trunk...',
    'Starting up the engine...',
    'Almost there...',
    'All packed, lets go!'
  ];
  currentMessages$ = timer(0,1000).pipe(
    map(index => this.loadingMessages[index] || this.loadingMessages[this.loadingMessages.length - 1]),
    take(5)
  );
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 5000);
  }
}
