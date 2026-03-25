import { Component, inject } from '@angular/core';
import { Itemsapi } from '../../Services/itemsapi';

@Component({
  selector: 'app-list-items',
  imports: [],
  templateUrl: './list-items.html',
  styleUrl: './list-items.css',
})
export class ListItems {

  itemsApi = inject(Itemsapi);

  constructor() {
    this.itemsApi.getItems();
  }

  delete(id: string) {
    this.itemsApi.deleteItem(id);
  }
}
