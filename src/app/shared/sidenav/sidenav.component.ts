import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  constructor(private router: Router) {}
  categoryList: string[] = [
    'Neuigkeiten',
    'Teilnehmer-Listen',
    'Bewertung',
    'Gewerk',
    'Firmen',
  ];

  years: string[] = ['2025', '2024', '2023', '2022', '2021', '2020'];

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

  isSelected: { [key: string]: boolean } = {};

  ngOnInit() {
    this.isSelected['Neuigkeiten'] = true;
    console.log(this.isSelected['Neuigkeiten']);
  }

  toggleSublist(category: string): void {
    if (this.isToggleCategory(category)) {
      this.expandedCategories[category] = !this.expandedCategories[category];
    }
  }

  getSublist(category: string): string[] {
    if (category === 'Teilnehmer-Listen') return this.years;
    if (category === 'Gewerk') return this.trades;
    if (category === 'Firmen') return this.companies;
    return [];
  }

  openCategory(category: string): void {
    this.isSelected[category] = !this.isSelected[category];
    this.router.navigate([`/app/${category}`]);
  }

  isToggleCategory(category: string): boolean {
    return (
      category === 'Teilnehmer-Listen' ||
      category === 'Gewerk' ||
      category === 'Firmen'
    );
  }

  openSubCategory(category: string, item: string) {
    this.isSelected[item] = !this.isSelected[item];
    this.router.navigate([`/app/${category}`, item]);
  }
}
