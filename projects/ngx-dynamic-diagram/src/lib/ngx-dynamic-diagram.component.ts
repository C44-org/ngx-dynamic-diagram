import { Component, ElementRef, Input, ViewChild } from '@angular/core';


import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';
import { Diagram } from './models/diagram.model';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'ngx-dynamic-diagram',
  standalone: true,
  imports: [],
  templateUrl: './ngx-dynamic-diagram.component.html',
  styleUrls: ['./ngx-dynamic-diagram.component.sass']
})
export class NgxDynamicDiagramComponent {
  @ViewChild("Graph", { static: true }) private Graph!: ElementRef // #Graph
  @Input() traces: any
  @Input() height: number = 300
  @Input() diagram: Diagram = {
    title: 'Diagramtitle',
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
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

  data: any

  constructor() {}

  ngOnInit(): void {   
    this.data = this.traces

    let layout: any = {
      // annotations: [
      //   {
      //     font: {
      //       size: 20
      //     },
      //     showarrow: false,
      //     x: 0.17,
      //     y: 0.5
      //   }
      // ],
      autosize: true,
      hovermode: "closest",
      showlegend: this.diagram.showlegend || false,
      title: this.diagram.title,
      paper_bgcolor: this.diagram.paper_bgcolor || 'rgba(0,0,0,0)',
      plot_bgcolor: this.diagram.plot_bgcolor || 'rgba(0,0,0,0)',
      margin: { l: 20, r: 20, b: 20, t: 20 },
      height: this.height,
      modebar: {
        bgcolor: 'transparent', 
        // color: 'blue', 
        // activecolor: 'green',
        orientation: 'v',      // "v" | "h",
        position: 'left'      // "top" | "bottom" | "left" | "right"
      },
      legend: {
        x: 1,
        y: 0.5,
        // orientation: "h"
      }
    }

    let config: any = {
      displaylogo: false,
      // displayModeBar: true,
      responsive: true,
      staticPlot: this.diagram.options?.staticPlot || false, 
      // toImageButtonOptions: {
      //   format: 'svg', // one of png, svg, jpeg, webp
      //   filename: 'custom_image',
      //   height: 500,
      //   width: 700,
      //   scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
      // }
    }

    switch (true) {
      case this.data.some((trace: any) => trace.type === 'bar' || trace.type === 'scatter' || trace.type === 'line'):
        layout = { ...layout, 
          barmode: this.diagram.barmode || 'group', // 'stack' | 'group' | 'overlay' | 'relative'
          xaxis: this.diagram.xaxis,
          yaxis: this.diagram.yaxis,
        }
        break
      case this.data.some((trace: any) => trace.type === 'pie' || trace.type === 'sunburst'):
        layout = { ...layout }
        break
      default:
        console.warn('Diagramm-Typ nicht erkannt')
        break
    }

    this.Graph.nativeElement = PlotlyJS.newPlot( 
      this.Graph.nativeElement, //our viewchild element
      this.data,
      layout,
      config
    )
  }
}
