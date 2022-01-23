import { createAction, props } from '@ngrx/store';
// import model/interface from db.json here...

// Action constants
export const loadYears = createAction('[Fitment] Load Years');
export const loadYearsSuccess = createAction('[Fitment] Load Years Success', props<{ years: any }>());
export const loadYearsError = createAction('[Fitment] Load Years Fail', props<{ errorMsg: string; }>());

export const loadMakes = createAction('[Fitment] Load Makes', props<{ year: string; }>());
export const loadMakesSuccess = createAction('[Fitment] Load Makes Success', props<{ makes: any }>());
export const loadMakesError = createAction('[Fitment] Load Makes Fail', props<{ errorMsg: string; }>());


export const loadModels = createAction('[Fitment] Load Models', props<{ year: string, make: string; }>());
export const loadModelsSuccess = createAction('[Fitment] Load Models Success', props<{ models: any }>());
export const loadModelsError = createAction('[Fitment] Load Models Fail', props<{ errorMsg: string; }>());

export const loadTrims = createAction('[Fitment] Load Trims', props<{ year: string, make: string, model: string; }>());
export const loadTrimsSuccess = createAction('[Fitment] Load Trims Success', props<{ trims: any }>());
export const loadTrimsError = createAction('[Fitment] Load Trims Fail', props<{ errorMsg: string; }>());

export const resetAll = createAction('[Fitment] Reset All');
export const clearMake = createAction('[Fitment] Clear Make');
export const clearModel = createAction('[Fitment] Clear Model');
export const clearTrim = createAction('[Fitment] Clear Trim');