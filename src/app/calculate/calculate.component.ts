import { Component } from '@angular/core';
import{ TestService} from "../test.service"

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {

  sumResult: any ={}
  add:any ={}
  
  constructor(private service:TestService){

  }

calculateSum(total){
    console.log('The call to  component', total)
    this.service.calculateSum(total).subscribe(
      output=>{
        console.log('The output' ,  output)
        this.sumResult = output;
        
      }
    )
  }

}