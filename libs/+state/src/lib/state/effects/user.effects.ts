import { Injectable } from '@angular/core';
import * as ArrivalActions from '../actions/arrivals.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { MartaArrivalResponse } from '../../models';