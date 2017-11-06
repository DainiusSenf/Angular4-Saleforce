import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { FancyGridComponent } from '../fancy-grid';

@Component({
  selector: 'my-app',
  template: `
    <app-fancy-grid [grid]='config'></app-fancy-grid>
  `,
})
export class RootFancyGridComponent implements OnInit {

  public config;
  public data;

  constructor() { 
    this.data = [
      ['Ted', 'Smith', 'Java Developer', 'ted.smith@gmail.com', 'Electrical Systems', 30, 'Java, Ruby'],
      ['Ed', 'Johnson', 'C/C++ Market Data Developer', 'ed.johnson@gmail.com', 'Energy and Oil', 35, 'C++'],
      ['Sam', 'Williams', 'Technical Analyst', 'sam.williams@gmail.com', 'Airbus', 38, ''],
      ['Alexander', 'Brown', 'Project Manager', 'alexander.brown@gmail.com', 'Renault', 24, ''],
      ['Nicholas', 'Miller', 'Senior Software Engineer', 'nicholas.miller@gmail.com', 'Adobe', 33, 'Unix, C/C++'],
      ['Andrew', 'Thompson', 'Agile Project Manager', 'andrew.thompson@gmail.com', 'Google', 28, ''],
      ['Ryan', 'Walker', 'Application Support Engineer', 'ryan.walker@gmail.com', 'Siemens', 39, 'ActionScript']
    ];

    this.config = {
      title: 'Title',
      renderTo: 'grid-1',
      width: 450,
      height: 400,
      selModel: 'cell',
      data: {
        fields: ['name', 'surname', 'position', 'email', 'company', 'age', 'knowledge'],
        items: this.data
      },
      defaults: {
        type: 'string',
        width: 100
      },
      columns: [{
        index: 'company',
        title: 'Company'
      }, {
        index: 'name',
        title: 'Name'
      }, {
        index: 'surname',
        title: 'Sur Name'
      }, {
        index: 'age',
        title: 'Age',
        width: 50,
        type: 'number'
      }]
    };

  }

  ngOnInit() { 
    console.log('root grid')
    console.log(this.config)
  }

}
