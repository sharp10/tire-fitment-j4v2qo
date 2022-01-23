/*
    This file is a master reducer file that will create and compose state
    taking multiple reducers and building the state tree

    The role of reducers is to deal with pure state and immutable objects
*/
import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import * as fromVehicle from './vehicle.reducer';
// Composing the parent state (FitmentState) that will encompass smaller chunks of state (vehicleState)
// This is the interface used by the reducers below.
export interface FitmentState {
  [fromVehicle.vehiclesFeatureKey]: fromVehicle.State
}

// Assigning our reducers to the state, 
  // ActionReducerMap uses the FitmentState interface 
  // to describe what all reducers should look like and how they are composed
export const reducers: ActionReducerMap<FitmentState> = {
  [fromVehicle.vehiclesFeatureKey]: fromVehicle.vehicleReducer
}


// console.log all actions
export function logger(reducer: ActionReducer<FitmentState>): ActionReducer<FitmentState> {
  return (state, action) => {
      const result = reducer(state, action);
      console.groupCollapsed(action.type);
      console.log('prev state', state);
      console.log('action', action);
      console.log('next state', result);
      console.groupEnd();
      return result;
  };
}
export const metaReducers: MetaReducer<FitmentState>[] = [logger] ;

// Composing the vehicles reducer's selectors.
export const selectVehicleState = createFeatureSelector<fromVehicle.State>(
  fromVehicle.vehiclesFeatureKey
);
export const selectVehiclesEntitiesState = createSelector(
  selectVehicleState,
  (state) => state
);

export const getYears = createSelector(
  selectVehicleState,
  fromVehicle.loadYears
);

export const getMakes = createSelector(
  selectVehicleState,
  fromVehicle.loadMakes
);

export const getModels = createSelector(
  selectVehicleState,
  fromVehicle.loadModels
)

export const getTrims = createSelector(
  selectVehicleState,
  fromVehicle.loadTrims
)

export const getyearData = (state:fromVehicle.State) => state.year;

export const getSelectedYear = createSelector(
  selectVehiclesEntitiesState,
  fromVehicle.getSelectedYear
);
export const getSelectedMake = createSelector(
  selectVehiclesEntitiesState,
  fromVehicle.getSelectedYear
);




