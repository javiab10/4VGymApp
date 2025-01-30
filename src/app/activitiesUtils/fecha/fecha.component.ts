import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormatDatePipe } from "../../pipes/format-date.pipe";

@Component({
  selector: 'app-fecha',
  imports: [FormatDatePipe],
  templateUrl: './fecha.component.html',
  styleUrl: './fecha.component.scss'
})
export class FechaComponent {
  @Input() date: Date = new Date();
  @Output() dateChange = new EventEmitter<Date>();
  todayDate: Date = new Date();

  ngOnChanges(){
    
  }
  prevDate(){
    const newDate = new Date(this.date.getTime() - 86400000);

    this.dateChange.emit(newDate);
  }

  nextDate(){
    const newDate = new Date(this.date.getTime() + 86400000);

    this.dateChange.emit(newDate);
  }
}
