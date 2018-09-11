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
      new NavigationItem(1, 'Completed Learning', true, 'fas fa-graduation-cap'),
      new NavigationItem(2, 'Continuing education credits', false, 'fas fa-graduation-cap'),
      new NavigationItem(3, 'Order history', false, 'fas fa-history '),
      new NavigationItem(4, 'Learning requests', true, 'fab fa-leanpub'),
      new NavigationItem(5, 'Profile', false, 'fas fa-user'),
      new NavigationItem(6, 'Plan', true, 'fas fa-th-large'),
      new NavigationItem(7, 'Activity', false, 'fas fa-tasks'),
      new NavigationItem(8, 'Impressions', false, 'far fa-id-badge'),
      new NavigationItem(9, 'Manage survey', true, 'fas fa-columns'),
      new NavigationItem(10, 'Recommendations', false, 'fas fa-slideshare'),
      new NavigationItem(11, 'Rewards', false, 'fas fa-trophy'),
      new NavigationItem(12, 'User follows', false, 'fab fa-google-wallet'),
      new NavigationItem(13, 'Following user', false, 'fas fa-user-plus'),
      new NavigationItem(14, 'collections', false, 'fas fa-bookmark'),
      new NavigationItem(15, 'Groups', false, 'fas fa-users'),
      new NavigationItem(16, 'Video channels', false, 'fab fa-vimeo-square'),
      new NavigationItem(17, 'Ideas', false, 'fas fa-deaf'),
      new NavigationItem(18, 'Issues', false, 'fas fa-bug'),
      new NavigationItem(19, 'files', false, 'fas fa-file'),
      new NavigationItem(20, 'Links', false, 'fas fa-link')
    );
    return navigationItems;
  }

}
