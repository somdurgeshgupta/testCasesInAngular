import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {


  messeges: string[] = [];
  
  constructor(){
  }

  
  log(messege:string){
    this.messeges.push(messege)
  }

  clear(){
    this.messeges = [];
  }
}
