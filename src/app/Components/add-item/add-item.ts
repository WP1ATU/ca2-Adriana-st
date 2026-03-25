import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itemsapi } from '../../Services/itemsapi';

@Component({
  selector: 'app-add-item',
  imports: [FormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
})
export class AddItem {
  private _itemsApi = inject(Itemsapi);

  make = '';
  model = '';
  year = '';
  image = '';

  addItem() {
    if (!this.make || !this.model || !this.year) return;
    
    this._itemsApi.addItem(this.make, this.model, this.year, this.image);

    // Clear the form after adding the item
    this.make = '';
    this.model = '';
    this.year = '';
    this.image = '';
  }
}
