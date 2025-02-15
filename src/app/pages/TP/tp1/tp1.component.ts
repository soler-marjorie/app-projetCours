import { Component } from '@angular/core';

import { Tp1enfant1Component } from '../../../components/TP/TP1/tp1enfant1/tp1enfant1.component';
import { Tp1enfant2Component } from '../../../components/TP/TP1/tp1enfant2/tp1enfant2.component';
import { Tp1enfant3Component } from '../../../components/TP/TP1/tp1enfant3/tp1enfant3.component';

@Component({
  selector: 'app-tp1',
  imports: [Tp1enfant1Component, Tp1enfant2Component, Tp1enfant3Component],
  templateUrl: './tp1.component.html',
  styleUrl: './tp1.component.css'
})
export class TP1Component {

}
