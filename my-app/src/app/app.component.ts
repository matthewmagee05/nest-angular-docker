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
    this.http.get('/api/', {responseType: 'text'}).subscribe(res => {
      this.loudNoises = res;
    });

    this.http.get('/api/test',{responseType: 'text'}).subscribe(res => {
      console.log(res)
    });
  }


}
