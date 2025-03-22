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
  categoryList: string[] = ['Neuigkeiten', 'Bewertung', 'Gewerk', 'Firmen'];

  trades: string[] = [
    'Maurer',
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
  }

  toggleSublist(category: string): void {
    if (this.isToggleCategory(category)) {
      this.expandedCategories[category] = !this.expandedCategories[category];
    }
  }

  getSublist(category: string): string[] {
    if (category === 'Gewerk') return this.trades;
    if (category === 'Firmen') return this.companies;
    return [];
  }

  openCategory(category: string): void {
    Object.keys(this.isSelected).forEach(
      (key) => (this.isSelected[key] = false)
    );
    Object.keys(this.expandedCategories).forEach(
      (key) => (this.expandedCategories[key] = false)
    );

    if (this.isToggleCategory(category)) {
      this.expandedCategories[category] = true;
    }

    this.isSelected[category] = true;
    this.isSelected['category-selected'] = true;
    this.router.navigate([`/app/${category}`]);
  }

  isToggleCategory(category: string): boolean {
    return category === 'Gewerk' || category === 'Firmen';
  }

  openSubCategory(category: string, item: string) {
    Object.keys(this.isSelected).forEach(
      (key) => (this.isSelected[key] = false)
    );
    Object.keys(this.expandedCategories).forEach(
      (key) => (this.expandedCategories[key] = false)
    );

    this.isSelected['category-selected'] = true;
    this.isSelected[category] = true;
    this.isSelected[item] = true;
    this.expandedCategories[category] = true;

    this.router.navigate([`/app/${category}`, item]);
  }
}
