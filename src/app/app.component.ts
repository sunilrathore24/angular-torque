import {Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { SpeechRecognitionService } from './voice-record/speech-recognition.service';
import { TrqButtonType, TrqIconShape, TrqIconSize } from '@torque/ui';
import { NavigationService } from './services/navigation.service';
import { NavigationItem } from './models/navigationItems.model';
import groupBy from 'lodash-es/groupBy';
import concat from 'lodash-es/concat';
import {Router, ActivatedRoute} from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { listener } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  @ViewChild('fabdiv')
  febdivref: ElementRef;
  @ViewChild('overlay')
  overlaydiv: ElementRef;
  buttonType = TrqButtonType;
  iconShape = TrqIconShape;
  iconSize = TrqIconSize;
  sometext: string;
  showModel = false;
  readytospeack = false;
  cordy: number;
  pageName: string;
  transformclass: string;
  objCource = {};
  popperModifiers = {
    offset: { enabled: true, offset: '0, 3' },
    preventOverflow: { boundariesElement: 'viewport' }
  };

  // side nave data
  @ViewChild('inputChoice')
  inputChoice: ElementRef;
  NavigationItemName: string;
  toggleShowAll = true;
  navigationItems: NavigationItem[];
  navigationItemsToDisplay: NavigationItem[];
  ///////////////
  constructor(
    private navService: NavigationService,
    private speechRecognitionService: SpeechRecognitionService,
    private router: Router,
    private changedetectionref: ChangeDetectorRef
  ) {
    this.pageName = window.location.pathname.replace('%20', ' ').replace('/', '');
    this.pageName = this.pageName.replace(/(^[a-z])|(\s+[a-z])/g, txt => txt.toUpperCase());

    this.objCource = {
      CourceTitle: 'Natural Language Processing and Text Mining Without Coding',
      Learning_Event_Id: '00201312',
      Version: '1',
      Source: `User One, SPC124618 Learner Data Scientist was recently dubbed
                  “The Sexiest Job of the 21st Century” by Harvard Business Review,
                  Glassdoor reports that Data Scientist was named the “Best Job in
                  America for 2016,” and business`,
      Available_from: '08-AUG-2018'
    };
  }

  ngOnInit() {
    this.navigationItems = this.navService.getNavItems();
    this.configureData();
  }
  configureData(): void {
    // filter those items who are marked as favourite
    this.navigationItemsToDisplay = this.navigationItems.filter(
      item => item.isFavourite
    );
  }
  showAllItems(): void {
    if (this.toggleShowAll) {
      this.navigationItemsToDisplay = this.navigationItems.filter(item =>
        item.name.toLocaleLowerCase().startsWith('')
      );
      const v = groupBy(this.navigationItemsToDisplay, 'isFavourite');
      this.navigationItemsToDisplay = concat(v['true'], v['false']);
    } else {
      this.navigationItemsToDisplay = this.navigationItems.filter(
        item => item.isFavourite
      );
    }
    this.inputChoice.nativeElement.value = '';
    this.toggleShowAll = !this.toggleShowAll;
  }
  searchItems(itemName: string): void {
    if (itemName !== '') {
      if (Array.isArray(this.navigationItems)) {
        this.navigationItemsToDisplay = this.navigationItems.filter(item =>
          item.name.toLocaleLowerCase().startsWith(itemName.toLocaleLowerCase())
        );
      }
    } else {
      this.configureData();
    }
  }

  closeFeatureModel() {
    this.showModel = false;
    this.speechRecognitionService.DestroySpeechObject();
    this.febdivref.nativeElement.setAttribute('class', 'fab fab-icon-button');
    this.overlaydiv.nativeElement.setAttribute('class', '');
  }

  showFabDiv() {
    this.showModel = true;
    this.activateSpeechSearchMovie();
    this.febdivref.nativeElement.setAttribute('class', 'fab active');
    this.overlaydiv.nativeElement.setAttribute('class', 'dark-overlay');
  }

  ngOnDestroy() {
    this.speechRecognitionService.DestroySpeechObject();
  }

  feature_click(featureName: string) {
    this.pageName = featureName;
    this.router.navigate([featureName.toLocaleLowerCase()]);
  }

  activateSpeechSearchMovie(): void {
    // this.showSearchButton = false;
    if (this.readytospeack === true) {
      this.NavigationItemName = 'listening...';
    }
    this.NavigationItemName = 'say hi..';
    this.speechRecognitionService.record().subscribe(
      // listener

      value => {
        if (value === '') {
          this.NavigationItemName = 'Listening...';
        } else if (value.toLowerCase() === 'hi') {
          this.readytospeack = true;
          this.NavigationItemName = 'Hi, feature name please...';
        } else {
          if (this.readytospeack === true) {
            this.NavigationItemName = value;
            if (value === 'show all') {
              this.toggleShowAll = true;
              this.showAllItems();
            } else if (value === 'show favourite') {
              this.toggleShowAll = false;
              this.showAllItems();
            } else {
              this.searchItems(value);
            }
          } else {
            this.NavigationItemName = value + '..(say Hi...)';
          }
        }

        console.log(value);
      },
      // errror
      err => {
        console.log(err);
        if (err.error === 'no-speech') {
          console.log('--restatring service--');
          this.activateSpeechSearchMovie();
        }
      },
      // completion
      () => {
        // this.showSearchButton = true;
        console.log('--complete--');
        this.readytospeack = false;
        if (this.showModel === true) {
          this.NavigationItemName = 'say hello saba...';
          this.activateSpeechSearchMovie();
         this.changedetectionref.detectChanges();
        }
      }
    );
  }
}
