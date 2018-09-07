import { Injectable } from '@angular/core';
import { NavigationItem } from '../models/navigationItems.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor() { }

  getNavItems(): NavigationItem[] {
    const navigationItems = [];
    navigationItems.push(
      new NavigationItem(1, 'Completed Learning', true),
      new NavigationItem(2, 'Continuing education credits', false),
      new NavigationItem(3, 'Order history', false),
      new NavigationItem(4, 'Learning requests', true),
      new NavigationItem(5, 'Profile', false),
      new NavigationItem(6, 'Plan', true),
      new NavigationItem(7, 'Activity', false),
      new NavigationItem(8, 'Impressions', false),
      new NavigationItem(9, 'Manage survey', true),
      new NavigationItem(10, 'Recommendations', false),
      new NavigationItem(11, 'Rewards', false),
      new NavigationItem(12, 'User follows', false),
      new NavigationItem(13, 'Following user', false),
      new NavigationItem(14, 'collections', false),
      new NavigationItem(15, 'Groups', false),
      new NavigationItem(16, 'Video channels', false),
      new NavigationItem(17, 'Ideas', false),
      new NavigationItem(18, 'Issues', false),
      new NavigationItem(19, 'files', false),
      new NavigationItem(20, 'Links', false)
    );
    return navigationItems;
  }

}
