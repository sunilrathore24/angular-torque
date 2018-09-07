import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { NavigationItem } from '../models/navigationItems.model';
import { TrqIconShape, TrqIconSize } from '@torque/ui';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {
  NavigationItemName: string;
  navigationItems: NavigationItem[];
  navigationItemsToDisplay: NavigationItem[];
  iconName = TrqIconShape;
  iconSize = TrqIconSize;
  constructor( private navService: NavigationService) { }

  ngOnInit() {
    this.navigationItems = this.navService.getNavItems();
    this.configureData();
  }

  configureData(): void {
    // filter those items who are marked as favourite
    this.navigationItemsToDisplay =  this.navigationItems.filter(item => item.isFavourite);
  }
  showAllItems(): void {
    this.navigationItemsToDisplay =  this.navigationItems.filter(
      item => item.name.toLocaleLowerCase().startsWith('')
    );
  }
  searchItems(itemName: string): void {
    if (itemName !== '') {
      if (Array.isArray(this.navigationItems)) {
        this.navigationItemsToDisplay =  this.navigationItems.filter(
          item => item.name.toLocaleLowerCase().startsWith(itemName.toLocaleLowerCase())
        );
      }
    } else {
      this.configureData();
    }
}
}
