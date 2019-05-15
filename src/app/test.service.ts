import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions ={
    headers: new HttpHeaders({
        
})
};
@Injectable()
export class TestService {

  private url="http://localhost:5000";
  constructor(private http: HttpClient) { }
  
  calculateSum(body){
    
    const PCFurl = "https://aau-java.cfapps.io//findSum"
    console.log('values' , body)
     let result = this.http.post(PCFurl, body)
    return result;
  }

  userRegistration(body){
    
    //const url = this.url +"/registerUser"
    const url = this.url + "/registerUser"
    //const url = "http://newaau.us-east-2.elasticbeanstalk.com/registerUser"
    console.log('values for user' , body)
     let result = this.http.post(url, body)
    return result;
    
  }
  getAllUsers(){
    const url = this.url +"/getAllUsers"
    //const url = "https://aau-java.cfapps.io/getAllUsers"
    //const url = "http://newaau.us-east-2.elasticbeanstalk.com/getAllUsers"
     let result = this.http.get(url)
     console.log("This is the response" + result)
    return result;
  }
  deleteUser(username){
    console.log("THis is the response for " + username)
    //const url = this.url +"/deleteUser"
    const url = "https://aau-java.cfapps.io/deleteUser"
    let result = this.http.post(url, username)
     console.log("This is the response" + result)
    return result;
  }
  viewUser(username){
    console.log("The view for " + username)
    const url = this.url +"/viewUser"
    //const url = "https://aau-java.cfapps.io/viewUser"
     let result = this.http.post(url, username)
     console.log("This is the response for view:" + result)
    return result;
  }
  signin(signin){
    console.log("The signin data for " + signin.username + "and " + signin.password)
    //const url = this.url +"/signin"
    const url = "https://aau-java.cfapps.io/signin"
     let result = this.http.post(url, signin)
     console.log("This is the response for view:" + result)
    return result;
  }
}