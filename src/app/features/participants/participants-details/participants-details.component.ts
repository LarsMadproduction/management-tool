import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-participants-details',
  standalone: true,
  imports: [],
  templateUrl: './participants-details.component.html',
  styleUrl: './participants-details.component.scss',
})
export class ParticipantsDetailsComponent {
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
