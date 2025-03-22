import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-trade-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trade-detail.component.html',
  styleUrl: './trade-detail.component.scss',
})
export class TradeDetailComponent {
  item: string = '';

  years: string[] = ['2025', '2024', '2023', '2022', '2021', '2020'];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.item = params.get('item') || 'Kein Wert gefunden';
          return [];
        })
      )
      .subscribe();
  }

  openList(year: string): void {
    this.router.navigate(['/app/Gewerk', this.item, year]);
  }
  
  
}
