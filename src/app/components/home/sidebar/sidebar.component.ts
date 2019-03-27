import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private siderbarComponents : Array<object> = new Array<object>();

  constructor(private router:Router) { 
    this.siderbarComponents = [
      {
        name : "e Folder Home",
        path : "home/dashboard",
        iconClass : "fa fa-caret-square-o-down fa-2x sidebar-icon",
        active : true
      },
      {
        name : "User Profile",
        path : "home/profile",
        iconClass : "fa fa-user fa-2x sidebar-icon",
        active : false
      }
    ]
  }

  ngOnInit() {
  }

  menuItemChanged(element) {
    let path = element.path
    this.siderbarComponents.forEach((component, i) => {
      if (component["name"] == element["name"]) {
        component["active"] = true
        path = component["path"]
      }
      else component["active"] = false

      if (i == this.siderbarComponents.length -1) {this.router.navigate(["./" + path])}
    });
  }
}
