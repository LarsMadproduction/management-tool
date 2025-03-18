import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  categoryList: string[] = [
    'Neuigkeiten',
    'Teilnehmer Listen',
    'Bewertung',
    'Gewerk',
    'Firmen',
  ];

  years: string[] = [
    'Jahrgang: 2025',
    'Jahrgang: 2024',
    'Jahrgang: 2023',
    'Jahrgang: 2022',
    'Jahrgang: 2021',
    'Jahrgang: 2020',
  ];

  trades: string[] = [
    'Mauerer',
    'Betonbauer',
    'Holzbauer',
    'Straßenbauer',
    'Wasserbauer',
    'Rohrleitungsbauer',
  ];

  companies: string[] = ['Strabag', 'Eurovia', 'Kemna', 'Graf'];

  expandedCategories: { [key: string]: boolean } = {};

  toggleSublist(category: string): void {
    if (this.isToggleCategory(category)) {
      this.expandedCategories[category] = !this.expandedCategories[category];
    }
  }

  getSublist(category: string): string[] {
    if (category === 'Teilnehmer Listen') return this.years;
    if (category === 'Gewerk') return this.trades;
    if (category === 'Firmen') return this.companies;
    return [];
  }

  openCategory(category: string): void {
    console.log(`Kategorie "${category}" wurde geöffnet.`);
  }

  isToggleCategory(category: string): boolean {
    return (
      category === 'Teilnehmer Listen' ||
      category === 'Gewerk' ||
      category === 'Firmen'
    );
  }
}
