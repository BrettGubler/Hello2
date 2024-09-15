import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:
  `<div *ngIf="serverStatus; else elseBlock">
"Yes"</div>
<ng-template #elseBlock>"Okay Dokey"</ng-template>

 "TEst"
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverStatus:boolean = false;
}
