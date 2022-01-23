// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions. 
// Return new state
import { Action, createReducer, on } from '@ngrx/store';
import { VehicleAction } from '../actions';

export interface State {
  years: any,
  makes: any,
  models: any,
  trims: any,
  year: string,
  make: string,
  model: string,
  trim: string,
  error: string;
}

export const vehiclesFeatureKey = 'vehicle';

export const initialState: State = {
  years: [],
  makes: [],
  models: [],
  trims: [],
  year: '',
  make: '',
  model: '',
  trim: '',
  error: ''
}

export const vehicleReducer = createReducer(
  initialState,
  on(VehicleAction.loadYears, (state) => {
    return {
      ...state,
      error: ''
    };
  }),
  on(VehicleAction.loadYearsSuccess, (state, { years }) => {
    return {
      ...state,
      error: '',
      years,
    };
  }),
  on(VehicleAction.loadYearsError, (state, { errorMsg }) => {
    return {
      ...state,
      error: errorMsg
    };
  }),
  on(VehicleAction.loadMakes, (state, { year }) => {
    return {
      ...state,
      error: '',
      year
    };
  }),
  on(VehicleAction.loadMakesSuccess, (state, { makes }) => {
    return {
      ...state,
      error: '',
      makes,
      region: state.year,
    };
  }),
  on(VehicleAction.loadMakesError, (state, { errorMsg }) => {
    return {
      ...state,
      error: errorMsg
    };
  }),
  on(VehicleAction.loadModels, (state, { year, make }) => {
    return {
      ...state,
      error: '',
      year,
      make
    };
  }),
  on(VehicleAction.loadModelsSuccess, (state, { models }) => {
    return {
      ...state,
      error: '',
      models,
      year: state.year,
      make: state.make,
    };
  }),
  on(VehicleAction.loadModelsError, (state, { errorMsg }) => {
    return {
      ...state,
      error: errorMsg
    };
  }),
  on(VehicleAction.loadTrims, (state, { year, make }) => {
    return {
      ...state,
      error: '',
      year,
      make
    };
  }),
  on(VehicleAction.loadTrimsSuccess, (state, { trims }) => {
    return {
      ...state,
      error: '',
      trims,
      year: state.year,
      make: state.make,
      model: state.model,
    };
  }),
  on(VehicleAction.loadTrimsError, (state, { errorMsg }) => {
    return {
      ...state,
      error: errorMsg
    };
  }),
  on(VehicleAction.resetAll, () => {
    return {
      ...initialState
    };
  }),
  on(VehicleAction.clearMake, (state) => {
    return {
      ...state,
      makes: initialState.makes,
      make: initialState.make,
    };
  }),
  on(VehicleAction.clearModel, (state) => {
    return {
      ...state,
      models: initialState.models,
      model: initialState.model,

    };
  }),
  on(VehicleAction.clearTrim, (state) => {
    return {
      ...state,
      trims: initialState.trims,
      trim: initialState.trim,
    };
  }),
);

export const resetAll = (state: State) => state;
export const getError = (state: State) => state.error;
export const loadYears = (state: State) => state.years;
export const loadMakes = (state: State) => state.makes;
export const loadModels = (state: State) => state.models;
export const loadTrims = (state: State) => state.trims;

export const getSelectedYear = (state: State) => state.year;
export const getSelectedMake = (state: State) => state.make;
export const getSelectedModel = (state: State) => state.model;