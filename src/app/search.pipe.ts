import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(watch:any[] , searchText:string):any[] {
    return watch.filter( (watch) => {
      if (watch.title) {
          return watch.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      }
      else
      {
        return watch.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      }
    });
  }

}
