import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msg: any;
  flag: any;
  search: any;
  constructor(private router: Router) {
    this.msg = '这是一个home组件';
    this.flag = 'true';
    this.search = '';
  }

  ngOnInit() {
  }

  getMsg() {
    alert(this.msg);
  }
  keyupFn(e) {
    console.log(e);
    if (e.keyCode === 13) {
      console.log('Enter');
    }
  }
  getSearch() {
    console.log(this.search);
  }
  run () {
    alert('Home run');
  }
  parent (fn) {
    alert(fn + '1111');
  }
  foo (e) {
    alert(e + 'Output');
  }
  goNews() {
    this.router.navigate(['/new-content', '123']);
  }
}
