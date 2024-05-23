import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';
import { CircularSpinnerComponent } from './shared/components/circular-spinner/circular-spinner.component';
import { NgxDynamicDiagramComponent, Trace } from '../../../ngx-dynamic-diagram/src/public-api';
import { Dashboard1Component } from './dashbords/dashboard1/dashboard1.component';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CircularSpinnerComponent,
    Dashboard1Component,
    FormsModule,
    JsonPipe,
    NgxDynamicDiagramComponent,
    PlotlyModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  isVisible: boolean = false
  isSpinnerVisible: boolean = true;

  // alternative 2
  // diagram 1
  public diagram1 = {
    title: 'Scatter (lines+markers)',
    showlegend: true,
    xaxis: {
      title: 'x-Achse',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true
    },
    yaxis: {
      title: 'y-Achse',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true
    },
    options: {
      // responsive: true,
      // scrollZoom: true,
      staticPlot: false
    }
  }
  // chart 1
  public trace1: Trace[] = [
    {
      type: 'scatter',
      x: ['WSP Mitte', 'WSP Ost', 'WSP West'],
      y: [20, 14, 23],
      line: {color: '#2563eb'}, // rgb(37, 99, 235) or #2563eb
      // marker: {color: ['#2563eb']}, // rgb(37, 99, 235) or #2563eb
      mode: 'lines', // lines, markers, lines+markers
    },
    {
      type: 'scatter',
      x: ['WSP Mitte', 'WSP Ost', 'WSP West'],
      y: [5, 23, 10],
      line: {color: 'rgb(0, 255, 0)'}, // rgb(37, 99, 235) or #2563eb
      // marker: {color: ['#2563eb']}, // rgb(37, 99, 235) or #2563eb
      mode: 'lines', // lines, markers, lines+markers
    }
  ]

  // diagram 2
  public diagram2 = {
    title: 'Barchart (vertical)',
    xaxis: {
      title: 'x-Achse',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true
    },
    yaxis: {
      title: 'y-Achse',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true
    }
  }
  // chart 2
  public trace2: Trace[] = [
    {
      type: 'bar',
      x: [1, 2, 3],
      y: [10, 20, 23]
    },
    {
      type: 'bar',
      x: [1, 2, 3],
      y: [11, 24, 22]
    },
  ]

  // diagram 3
  public diagram3 = {
    title: 'Barchart (horizontal)',
    xaxis: {
      title: 'x-Achse',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true
    },
    yaxis: {
      title: 'y-Achse',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true
    }
  }
  // chart 3
  public trace3: Trace[] = [
    {
      type: 'bar',
      x: [10, 20, 23],
      y: [1, 2, 3],
      orientation: 'h'
    },
  ]
  
  // diagram 4
  public diagram4 = {
    title: 'Scatter (markers -> size)',
    xaxis: {
      title: 'x-Achse',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true
    },
    yaxis: {
      title: 'y-Achse',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true
    }
  }
  // chart 4
  public trace4: Trace[] = [{
    type: 'scatter',
    x: [0, 1, 2, 3, 4, 5, 6],
    y: [1, 9, 4, 7, 5, 2, 4],
    mode: 'markers',
    marker: {
      size: [20, 40, 25, 10, 60, 90, 30],
    }
  }]

  // diagram 5
  public diagram5 = {
    title: 'Scatter (markers -> size)',
    xaxis: {
      title: 'x-Achse',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true
    },
    yaxis: {
      title: 'y-Achse',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true
    }
  }
  // chart 4
  public trace5: Trace[] = [
    {
      type: 'scatter',
      x: [0.1, 0.2, 0.3, 0.4],
      y: ['A', 'B', 'C', 'D'],
      mode: 'markers',
      name: 'Percent of estimated voting age population',
      marker: {
        color: 'rgba(156, 165, 196, 0.95)',
        line: {
          color: 'rgba(156, 165, 196, 1.0)',
          width: 1,
        },
        symbol: 'circle',
        size: 16
      }
    },
    {
      type: 'scatter',
      x: [0.3, 0.4, 0.5, 0.6],
      y: ['A', 'B', 'C', 'D'],
      mode: 'markers',
      name: 'Percent of estimated voting age population',
      marker: {
        color: 'rgba(204, 204, 204, 0.95)',
        line: {
          color: 'rgba(156, 165, 196, 1.0)',
          width: 1,
        },
        symbol: 'circle', // 'triangle', 'square', 'diamond', 'circle-stroked' siehe: https://labs.mapbox.com/maki-icons/
        size: 16
      }
    }
  ]

  // diagram 6
  public diagram6 = {
    title: 'Pie',

    // xaxis: {
    //   title: 'x-Achse',
    //   linecolor: 'black',
    //   linewidth: 2,
    //   mirror: true,
    //   automargin: true
    // },
    // yaxis: {
    //   title: 'y-Achse',
    //   linecolor: 'black',
    //   linewidth: 2,
    //   mirror: true,
    //   automargin: true
    // }
  }
  // chart 6
  public trace6: Trace[] = [
    {
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie',
      name: 'The Night Cafe',
      marker: {
        colors: ['rgba(204, 204, 204, 0.95)']
      },
      domain: {
        x: [0.52,1],
        y: [0, 0.48]
      },
      hoverinfo: 'label+percent+name',
      textinfo: 'none'
    }
  ]

  // diagram 7
  public diagram7 = {
    barmode: "stack",
    title: 'Satcked Barchart (vertical)',
    xaxis: {
      title: 'x-Achse',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true
    },
    yaxis: {
      title: 'y-Achse',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true
    }
  }
  // chart 7
  public trace7: Trace[] = [
    {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [20, 14, 23],
      name: 'SF Zoo',
      type: 'bar'
    },
    {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [12, 18, 29],
      name: 'LA Zoo',
      type: 'bar'
    }
  ]

  // diagram 8
  public diagram8 = {
    title: 'Linechart (vertical)',
    xaxis: {
      title: 'x-Achse',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true
    },
    yaxis: {
      title: 'y-Achse',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true
    }
  }
  // chart 8
  public trace8: Trace[] = [
    {
      x: [1, 2, 3, 4],
      y: [0, 2, 3, 5],
      fill: 'tozeroy',
      type: 'scatter'
    },
    {
      x: [1, 2, 3, 4],
      y: [3, 5, 4, 7],
      fill: 'tonexty',
      type: 'scatter'
    }
  ]

  // diagram 9
  public diagram9 = {
    title: 'Sunburst'
  }
  // chart 9
  public trace9: Trace[] = [
    {
      type: "sunburst",
      labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
      parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
      values:  [10, 14, 12, 10, 2, 6, 6, 4, 4],
      outsidetextfont: {size: 20, color: "#377eb8"},
      leaf: {opacity: 0.4},
      marker: {line: {width: 2}},
    }
  ]

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = true
    },2000)
  }
}