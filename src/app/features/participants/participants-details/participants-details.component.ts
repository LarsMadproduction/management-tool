import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-participants-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './participants-details.component.html',
  styleUrl: './participants-details.component.scss',
})
export class ParticipantsDetailsComponent {
  item: string = '';

  participantDetails = [
    {
      company: 'Strabag',
      ContactPerson: 'Ausbilder in Firma',
      lastname: 'Schumacher',
      firstname: 'Lars',
      adress: 'GenhahnerHött 21',
      zipCode: '41189 Mönchengladbach',
      housing: 'Extern',
    },
    {
      company: 'Strabag',
      ContactPerson: 'Ausbilder in Firma',
      lastname: 'Schumacher',
      firstname: 'Lars',
      adress: 'GenhahnerHött 21',
      zipCode: '41189 Mönchengladbach',
      housing: 'Extern',
    },
  ];

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
