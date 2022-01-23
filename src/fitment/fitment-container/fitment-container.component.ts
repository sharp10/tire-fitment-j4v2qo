import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { VehicleAction } from '../store/actions';
import * as fromVehicle from '../store/reducers';

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit {
  years$: Observable<any>;
  makes$: Observable<any>;
  models$: Observable<any>;
  trims$: Observable<any>;

  selectedYear: string;
  selectedMake: string;
  selectedModel: string;
  selectedTrim: string;
  // import the store into the constructor
  constructor(private store: Store) { }

  ngOnInit() {
  }

  resetAll() {    
    this.store.dispatch(VehicleAction.resetAll());
    this.years$ = this.store.select(fromVehicle.getYears);
    this.makes$ = this.store.select(fromVehicle.getMakes);
    this.models$ = this.store.select(fromVehicle.getModels);
    this.trims$ = this.store.select(fromVehicle.getTrims);
    this.selectedYear = this.selectedMake = this.selectedModel = this.selectedTrim = ''
  }

  getYears() {
    // Year
    // https://6080be3273292b0017cdbf2a.mockapi.io/years
    this.store.dispatch(VehicleAction.loadYears());
    this.years$ = this.store.select(fromVehicle.getYears);
  }

  getMakes(year: string) {
    // Make with year (2021)
    // https://6080be3273292b0017cdbf2a.mockapi.io/makes
    this.store.dispatch(VehicleAction.clearMake());
    this.store.dispatch(VehicleAction.clearModel());
    this.store.dispatch(VehicleAction.clearTrim());
    this.store.dispatch(VehicleAction.loadMakes({ year }));
    this.makes$ = this.store.select(fromVehicle.getMakes);
    this.selectedYear = year;
    this.selectedMake = this.selectedModel = this.selectedTrim = ''
  }

  getModels(make: string) {
    // Model with year and make (Acura)
    // https://6080be3273292b0017cdbf2a.mockapi.io/models
    this.store.dispatch(VehicleAction.clearModel());
    this.store.dispatch(VehicleAction.clearTrim());
    var payload = { year: this.selectedYear, make: make };
    this.store.dispatch(VehicleAction.loadModels(payload));
    this.selectedMake = make;
    this.models$ = this.store.select(fromVehicle.getModels);
    this.selectedModel = this.selectedTrim = ''
  }

  getTrims(model: string) {
    // Trim with year, make, model (RDX)
    // https://6080be3273292b0017cdbf2a.mockapi.io/trim
    this.store.dispatch(VehicleAction.clearTrim());
    var payload = { year: this.selectedYear, make: this.selectedMake, model: model };
    this.store.dispatch(VehicleAction.loadTrims(payload));
    this.selectedModel = model;
    this.trims$ = this.store.select(fromVehicle.getTrims);
    this.selectedTrim = ''
  }

  getData(trim: string) {
    this.selectedTrim = trim;
    // Trim with year, make, model (RDX)
    // https://6080be3273292b0017cdbf2a.mockapi.io/trim
  }
}
