import { Pipe, PipeTransform } from '@angular/core';
// "omar"   ==> omer 
// !! "ahmed"
//! "A" != "a"
@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(list : any[] , term: string): any[] {
   

    return list.filter((item)=>{ return item.title  .toLowerCase()  .includes(term.toLowerCase())})

  }

}


// !!!cost result =  [1 , 2 ].filter((item)=>{return item > 5})