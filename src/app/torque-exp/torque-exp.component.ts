import { Component, OnInit } from '@angular/core';
import { TrqButtonType, TrqIconShape, TrqIconSize } from '@torque/ui';

@Component({
  selector: 'app-torque-exp',
  templateUrl: './torque-exp.component.html',
  styleUrls: ['./torque-exp.component.css']
})
export class TorqueExpComponent implements OnInit {
  buttonType = TrqButtonType;
  iconShape = TrqIconShape;
  iconSize = TrqIconSize;
  showtile:boolean = false;
  cordy:number;
  transformclass:string;
  objCource = {};
  popperModifiers = {
    offset: { enabled: true, offset: '0, 3' },
    preventOverflow: { boundariesElement: 'viewport' }
  };
  constructor() {

    this.objCource = {
      'CourceTitle' : 'Natural Language Processing and Text Mining Without Coding',
      'Learning_Event_Id' : '00201312',
      'Version' : '1',
      'Source' : `User One, SPC124618 Learner Data Scientist was recently dubbed 
                  “The Sexiest Job of the 21st Century” by Harvard Business Review, 
                  Glassdoor reports that Data Scientist was named the “Best Job in 
                  America for 2016,” and business`,
      'Available_from' : '08-AUG-2018'
    };
   }

  ngOnInit() {
  }

  onMouseOver(event: any) {
    this.cordy = event.currentTarget.clientHeight + event.currentTarget.offsetTop + 5;
    this.transformclass = 'translate3d(' + event.currentTarget.offsetLeft + 'px, ' + this.cordy + 'px, 0px)';

    this.showtile = true;
  }

  onMouseLeave() {
    // setTimeout(() => {
    //   this.showtile = false;
    // }, 2000);
  }

  closeToolTip() {
    this.showtile = false;

  }

}
