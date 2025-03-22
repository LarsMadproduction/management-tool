import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participants-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './participants-details.component.html',
  styleUrl: './participants-details.component.scss',
})
export class ParticipantsDetailsComponent {
  item: string = '';
  year: string = '';
  filteredParticipants: {
    company: string;
    ContactPerson: string;
    lastname: string;
    firstname: string;
    adress: string;
    zipCode: string;
    housing: string;
    year: string;
    trade: string;
  }[] = [];

  participantDetails = [
    {
      company: 'STRABAG AG',
      companyAdress: 'Siegburger Str. 241 50679 Köln',
      ContactPerson: 'Ausbilder in Firma',
      lastname: 'Schumacher',
      firstname: 'Lars',
      adress: 'GenhahnerHött 21',
      zipCode: '41189 Mönchengladbach',
      housing: 'Extern',
      year: '2025',
      trade: 'Maurer',
    },
    {
      company: 'Strabag',
      ContactPerson: 'Ausbilder in Firma',
      lastname: 'Schumacher',
      firstname: 'Natascha',
      adress: 'GenhahnerHött 21',
      zipCode: '41189 Mönchengladbach',
      housing: 'Extern',
      year: '2024',
      trade: 'Holzbauer',
    },
    {
      company: 'Strabag',
      ContactPerson: 'Ausbilder in Firma',
      lastname: 'Schumacher',
      firstname: 'Johanna',
      adress: 'GenhahnerHött 21',
      zipCode: '41189 Mönchengladbach',
      housing: 'Extern',
      year: '2023',
      trade: 'Straßenbauer',
    },
    {
      company: 'Strabag',
      ContactPerson: 'Ausbilder in Firma',
      lastname: 'Schumacher',
      firstname: 'Jonas',
      adress: 'GenhahnerHött 21',
      zipCode: '41189 Mönchengladbach',
      housing: 'Extern',
      year: '2022',
      trade: 'Wasserbauer',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.item = params.get('item') || 'Kein Wert gefunden';
      this.year = params.get('year') || 'Kein Wert gefunden';
      this.filteredParticipants = this.participantDetails.filter(
        (participant) =>
          participant.trade === this.item && participant.year === this.year
      );
    });
  }
}
