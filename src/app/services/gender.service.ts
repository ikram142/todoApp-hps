import { Injectable } from '@angular/core';
import { Gender } from '../model/gender.model';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor() { }
  private gender: Gender [] = [
    new Gender(1, 'M.'),
    new Gender(2, 'Mme'),
  ]
  getGenders()
{
  return this.gender ;
}
}
