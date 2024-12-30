import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() items: any[] = []; 
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>(); 

  onEdit(item: any) {
    this.edit.emit(item);
  }

  onDelete(item: any) {
    this.delete.emit(item);
  }
}
