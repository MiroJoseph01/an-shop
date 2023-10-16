import { Component, inject } from '@angular/core';
import { First } from '../first.model';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  item!: First;
  items!: Array<First>;

  private listService = inject(FirstService);

  ngOnInit(): void {
    this.item = this.listService.getItem();
    this.items = this.listService.getItems();
  } 
}
