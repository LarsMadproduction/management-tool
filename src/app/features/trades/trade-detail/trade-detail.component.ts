import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-trade-detail',
  standalone: true,
  imports: [],
  templateUrl: './trade-detail.component.html',
  styleUrl: './trade-detail.component.scss',
})
export class TradeDetailComponent {
  item: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.item = params.get('item') || 'Kein Wert gefunden';
          console.log('Selected Item:', this.item);
          return [];
        })
      )
      .subscribe();
  }
}
