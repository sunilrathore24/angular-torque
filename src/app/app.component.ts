import { Component } from '@angular/core';
import { TrqButtonType, TrqRegisterIconService } from '@torque/ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Torque';
  buttonType = TrqButtonType;

  constructor(
    _iconService: TrqRegisterIconService
  ) {
    _iconService.registerDefaultIcons();
  }
}
