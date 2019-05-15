import { Component } from '@angular/core';
import{ TestService} from "./test.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hello: any;

  total:any ={}
  sumResult:any ={}
  caughtError=false;
  

  constructor(private service:TestService){

  }

  calculateSum(total){
    this.service.calculateSum(total).subscribe(
      output=>{
        this.sumResult = output;
      }
    )
  }

}