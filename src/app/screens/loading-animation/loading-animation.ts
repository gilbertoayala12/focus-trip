import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-animation',
  imports: [],
  templateUrl: './loading-animation.html',
  styleUrl: './loading-animation.scss',
})
export class LoadingAnimation implements OnInit {
  private router = inject(Router);

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 5000);
  }
}
