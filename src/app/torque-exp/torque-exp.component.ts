import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { TrqButtonType, TrqIconShape, TrqIconSize } from "@torque/ui";
import { NavigationService } from "../services/navigation.service";
import { NavigationItem } from "../models/navigationItems.model";

@Component({
  selector: "app-torque-exp",
  templateUrl: "./torque-exp.component.html",
  styleUrls: ["./torque-exp.component.css"]
})
export class TorqueExpComponent implements OnInit {
  @ViewChild("fabdiv")
  febdivref: ElementRef;
  buttonType = TrqButtonType;
  iconShape = TrqIconShape;
  iconSize = TrqIconSize;
  sometext: string;
  showModel = false;
  cordy: number;
  transformclass: string;
  objCource = {};
  popperModifiers = {
    offset: { enabled: true, offset: "0, 3" },
    preventOverflow: { boundariesElement: "viewport" }
  };

  //side nave data
  @ViewChild("inputChoice")
  inputChoice: ElementRef;
  NavigationItemName: string;
  toggleShowAll = true;
  navigationItems: NavigationItem[];
  navigationItemsToDisplay: NavigationItem[];
  ///////////////
  constructor(private navService: NavigationService) {
    this.objCource = {
      CourceTitle: "Natural Language Processing and Text Mining Without Coding",
      Learning_Event_Id: "00201312",
      Version: "1",
      Source: `User One, SPC124618 Learner Data Scientist was recently dubbed 
                  “The Sexiest Job of the 21st Century” by Harvard Business Review, 
                  Glassdoor reports that Data Scientist was named the “Best Job in 
                  America for 2016,” and business`,
      Available_from: "08-AUG-2018"
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
        item.name.toLocaleLowerCase().startsWith("")
      );
    } else {
      this.navigationItemsToDisplay = this.navigationItems.filter(
        item => item.isFavourite
      );
    }
    this.inputChoice.nativeElement.value = "";
    this.toggleShowAll = !this.toggleShowAll;
  }
  searchItems(itemName: string): void {
    if (itemName !== "") {
      if (Array.isArray(this.navigationItems)) {
        this.navigationItemsToDisplay = this.navigationItems.filter(item =>
          item.name.toLocaleLowerCase().startsWith(itemName.toLocaleLowerCase())
        );
      }
    } else {
      this.configureData();
    }
  }

  onMouseOver(event: any) {
    this.cordy =
      event.currentTarget.clientHeight + event.currentTarget.offsetTop + 5;
    this.transformclass =
      'translate3d(' +
      event.currentTarget.offsetLeft +
      'px, ' +
      this.cordy +
      'px, 0px)';

    //this.showtile = true;
  }

  onMouseLeave() {
    // setTimeout(() => {
    //   this.showtile = false;
    // }, 2000);
  }

  closeFeatureModel(event) {
    //   if ( event.target.id !== 'model-div') {
    //   this.showModel = false;
    //   }

    //   if ( event.target.id !== 'fab-div' && event.target.parentElement.parentElement.id !== 'fab-div') {
    //   if (event) {
    //     event.preventDefault();
    //     event.stopImmediatePropagation();
    //   }
    //   this.febdivref.nativeElement.setAttribute('class', 'fab fab-icon-button');
    // }

    this.febdivref.nativeElement.setAttribute('class', 'fab fab-icon-button');
  }

  showFeatureModel(event) {
    // event.stopPropagation();
    this.showModel = true;
  }

  showFabDiv(event) {
    // if (event) { event.preventDefault();
    // }
    this.febdivref.nativeElement.setAttribute("class", "fab active");
  }
}
