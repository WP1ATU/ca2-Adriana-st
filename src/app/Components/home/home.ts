import { Component } from '@angular/core';
import { AddItem } from '../add-item/add-item';
import { ListItems } from '../list-items/list-items';

@Component({
  selector: 'app-home',
  imports: [AddItem, ListItems],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
