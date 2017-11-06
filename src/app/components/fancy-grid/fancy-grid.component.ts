import { Component, OnInit, NgZone, OnDestroy, AfterViewInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs/Rx'
import { Router } from '@angular/router';
let fancyGrid = require('fancygrid');

class Grid {
  constructor(config: Object) {
    for(var p in config){
      this[p] = config[p];
    }
  }
}

@Component({
  moduleId: module.id,
  selector: 'app-fancy-grid',
  templateUrl : 'fancy-grid.component.html',
  inputs : ['grid'], 
  styleUrls: ['../../../node_modules/fancygrid/client/fancy.css']
})
export class FancyGridComponent implements OnInit, AfterViewInit , OnDestroy {

  public grid;
  
  ngOnInit() { 
    console.log(this.grid);
    
  }
  
  constructor(private zone:NgZone) {
    var grid = new fancyGrid.FancyGrid();
    
  }
  
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      var myGrid = new fancyGrid.FancyGrid(this.grid);
    });
  }

  ngOnDestroy() {
    fancyGrid.FancyGrid.get(this.grid['renderTo']).destroy();
  }

}
