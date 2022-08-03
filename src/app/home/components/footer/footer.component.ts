import { Component, Input, OnInit } from '@angular/core';
import { IFooter } from '../../model/ihome';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input () public footer!: IFooter;

  constructor() { }

  ngOnInit(): void {
  }

}
