import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent implements OnInit {
  isAnimated = false;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.isAnimated = true;
    }, 100);

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }
}
