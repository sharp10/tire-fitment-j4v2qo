import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.css']
})
export class SelectDropdownComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() dropDownData!: any;
  @Input() label!: string;
  @Output() selectedItemEvent = new EventEmitter<any>();

  selectForm = new FormGroup({
    data: new FormControl('')
  });

  getSelectedOption() {
    this.selectedItemEvent.emit(this.selectForm.controls.data.value);
  };

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.dropDownData && changes.dropDownData.currentValue!=null && changes.dropDownData.currentValue.length == 0){
      this.selectForm = new FormGroup({
        data: new FormControl('')
      });
    }
  }
}
