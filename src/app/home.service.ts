import { Injectable } from '@angular/core';
import axios from 'axios';
import {environment} from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor() { }
  public getLists() {
    return new Promise(((resolve, reject) => {
      axios.get(environment.apiServer + "/get/lists").then((lists) => {
        resolve(lists.data)
      }).catch((err) => {
        reject(err);
      })
    }))
  }
}
