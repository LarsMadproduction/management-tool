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
  filteredParticipants: {
    company: string;
    ContactPerson: string;
    lastname: string;
    firstname: string;
    adress: string;
    zipCode: string;
    housing: string;
    year: string;
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
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.item = params.get('item') || 'Kein Wert gefunden';
      console.log('Selected Item:', this.item);

      this.filteredParticipants = this.participantDetails.filter(
        (participant) => participant.year === this.item
      );
    });
  }
}
