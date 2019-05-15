
import{ TestService} from "../test.service"
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
    
  userResponse: any ={}
  userRegister:any ={}
  listOfUsers:any ={}
  username:any={}
  viewOfUsers:any={}
  constructor(private service:TestService){

  }

  userRegistration(userRegister){
    
    this.service.userRegistration(userRegister).subscribe(
      output=>{
        console.log('The output' ,  output)
        this.userResponse = output;
        
      }
    )
  }
  getAllUsers(){
    this.service.getAllUsers().subscribe(
      output=>{
        console.log('The output' ,  output)
        this.listOfUsers = output;
      }
    )
  }
  deleteUser(username){
    this.service.deleteUser(username).subscribe(
      output=>{
        console.log('The output' ,  output)
        this.listOfUsers = output;
      }
    )
  }
  viewUser(username){
    this.service.viewUser(username).subscribe(
      output=>{
        console.log('The output' ,  output)
        this.viewOfUsers = output;
      }
    )
  }
}

