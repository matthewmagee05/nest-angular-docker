import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  loudNoises;

  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.http.get('http://localhost:3005', {responseType: 'text'}).subscribe(res => {
      console.log(res)
      this.loudNoises = res;
    })
  }


}
