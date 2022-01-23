import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectDropdownComponent } from './select-dropdown.component';
import { StoreModule } from '@ngrx/store';

describe('SelectDropdownComponent', () => {
  let selectDropdownComponent: SelectDropdownComponent;
  let fixture: ComponentFixture<SelectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectDropdownComponent]
      , imports: [StoreModule.forRoot({})]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDropdownComponent);
    selectDropdownComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should be created', () => {
    expect(selectDropdownComponent).toBeTruthy();
  });

  it('Should emit an event when an option is selected', () => {
    const selected = 'Europe';
    const select = selectDropdownComponent.regionsForm.controls.area.setValue(selected);
    spyOn(selectDropdownComponent.selectedItemEvent, 'emit');
    selectDropdownComponent.getSelectedOption();
    expect(selectDropdownComponent.selectedItemEvent.emit).toHaveBeenCalledWith(selected);
  });
});
