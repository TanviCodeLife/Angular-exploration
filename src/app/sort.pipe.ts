import {Pipe, PipeTransform} from '@angular/core';
import { Album } from './album.model'
import { FirebaseListObservable } from 'angularfire2/database';

@Pipe({
  name: "sort",
  pure: false
})

export class SortPipe implements PipeTransform {
  transform(input: Album[], property) {
    console.log(input);
    if(input){
      if (property === "PriceAscending") {
        return input.sort((a, b) => (a.price > b.price) ? 1 : -1);
      } else if (property === "PriceDescending") {
        return input.sort((a, b) => (a.price > b.price) ? -1 : 1);
      }
    }
  }
}
