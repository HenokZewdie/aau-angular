
import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  signin:any ={}
  userResponse:any= {}

    constructor(private service:TestService,
      private router:Router){

  }

  signinUser(signin){
    console.log("The signin ids" + signin.username)
    this.service.signin(signin).subscribe(
      output=>{
        console.log('The output' ,  output)
        this.userResponse = output;
        if(output){
          this.router.navigate(['/register'])
        }
      }
    )
  }

}