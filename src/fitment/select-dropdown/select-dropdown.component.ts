import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.css']
})
export class SelectDropdownComponent implements OnInit {

  constructor() { }

  @Input() dropDownData!: any;
  @Input() actionType!: string;
  @Output() selectedItemEvent = new EventEmitter<any>();

  selectForm = new FormGroup({
    data: new FormControl('')
  });

  getSelectedOption() {
    this.selectedItemEvent.emit(this.selectForm.controls.data.value);
  };

  ngOnInit(): void {

  }

}
