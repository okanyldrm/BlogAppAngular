import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css'],
})
export class SideComponent implements OnInit {
  constructor(private router: Router) {}

  navlink = true;
  activehome = false;
  activeservice = false;
  activework = false;
  activeabout = false;
  activeblog = false;

  ngOnInit(): void {}

  activehomef() {
    this.activehome = true;
    this.activeservice = false;
    this.activework = false;
    this.activeabout = false;
    this.activeblog = false;
  }
  activeservicef() {
    this.activehome = false;
    this.activeservice = true;
    this.activework = false;
    this.activeabout = false;
    this.activeblog = false;
  }
  activeworkf() {
    this.activehome = false;
    this.activeservice = false;
    this.activework = true;
    this.activeabout = false;
    this.activeblog = false;
  }
  activeaboutf() {
    this.activehome = false;
    this.activeservice = false;
    this.activework = false;
    this.activeabout = true;
    this.activeblog = false;
  }
  activeblogf() {
    this.activehome = false;
    this.activeservice = false;
    this.activework = false;
    this.activeabout = false;
    this.activeblog = true;
  }
}
