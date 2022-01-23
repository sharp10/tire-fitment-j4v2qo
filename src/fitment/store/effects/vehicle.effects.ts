import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { VehicleAction } from '../actions';
import { VehicleServices } from '../services/vehicle.services';


@Injectable()
export class VehicleEffects {
  years$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehicleAction.loadYears),
      mergeMap(
        () => {
          return this.vehicleServices.getYears().pipe(
            map(years => VehicleAction.loadYearsSuccess({ years })),
            catchError((err) => of(VehicleAction.loadYearsError({ errorMsg: err.message })))
          );
        }
      )
    )
  );

  makes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehicleAction.loadMakes),
      mergeMap(
        ({ year }) => {
          return this.vehicleServices.getMakes(year).pipe(
            map(makes => VehicleAction.loadMakesSuccess({ makes })),
            catchError((err) => of(VehicleAction.loadMakesError({ errorMsg: err.message })))
          );
        }
      )
    )
  );

  models$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehicleAction.loadModels),
      mergeMap(
        ({ year, make }) => {
          return this.vehicleServices.getModels(year, make).pipe(
            map(models => VehicleAction.loadModelsSuccess({ models })),
            catchError((err) => of(VehicleAction.loadModelsError({ errorMsg: err.message })))
          );
        }
      )
    )
  );

  trims$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehicleAction.loadTrims),
      mergeMap(
        ({ year, make, model }) => {
          return this.vehicleServices.getTrims(year, make, model).pipe(
            map(trims => VehicleAction.loadTrimsSuccess({ trims })),
            catchError((err) => of(VehicleAction.loadTrimsError({ errorMsg: err.message })))
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private vehicleServices: VehicleServices
  ) { }

}