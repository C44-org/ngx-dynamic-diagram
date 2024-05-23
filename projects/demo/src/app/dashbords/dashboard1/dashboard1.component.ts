import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Diagram, NgxDynamicDiagramComponent, Trace } from '../../../../../ngx-dynamic-diagram/src/public-api';
import { DashboardIconsComponent } from '../../../../../ngx-dynamic-diagram/src/lib/components/icons/dashboard-icons.component';
import { StyleService } from '../../../../../ngx-dynamic-diagram/src/lib/services/colors/style.service';

@Component({
  selector: 'dashboard1',
  standalone: true,
  imports: [
    CommonModule,
    DashboardIconsComponent,
    NgxDynamicDiagramComponent
  ],
  providers: [
    StyleService
  ],
  templateUrl: './dashboard1.component.html',
  styleUrl: './dashboard1.component.sass'
})
export class Dashboard1Component {

  // private: any = colors['custom-color-one']

  constructor(private _styleService: StyleService) {
    console.log('Style: ', _styleService.getSpecificStyle('--primary'))
  }

  // pie diagram
  public diagram: Diagram = {
    title: '',
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    showlegend: true
  }
  // pie chart
  public trace: Trace[] = [
    {
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie',
      hole: .4,
      name: 'The Night Cafe',
      marker: {
        colors: ['rgba(58, 115, 238, 1)', 'rgba(58, 115, 238, 0.8)', 'rgba(58, 115, 238, 0.6)'],
        line: {
          color: 'rgba(58, 115, 238, 0)',
          width: 3
        }
      },

      // domain: {
      //   x: [0.52,1],
      //   y: [0, 0.48]
      // },

      // hoverinfo: 'label+percent',
      // textinfo: "label+percent",
      // textposition: "outside",
      // automargin: true,
      // outsidetextfont: {
      //   'color': 'color: var(--accent)',
      //   'size': 14
      // }
    }
  ]

  private legend: boolean = true

  public barchart: Diagram = {
    barmode: "stack",
    title: '',
    showlegend: this.legend,
    xaxis: {
      title: '',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true,

      // grid
      showline: false
    },
    yaxis: {
      title: '',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true,

      // grid
      showgrid: true,
      showline: false,
      gridcolor: '#323232',
      gridwidth: 2,

      // ticks
      dtick: 500,
      tickcolor: '#323232',
    }
  }
  // chart 2
  public bars: Trace[] = [
    {
      type: 'bar',
      x: ['Now', 'LQ'],
      y: [250, 400],
      name: 'Utility',
      marker: {
        color: 'rgba(58, 115, 238, 1)'
      }
    },
    {
      type: 'bar',
      x: ['Now', 'LQ'],
      y: [500, 150],
      name: 'Non-Residential',
      marker: {
        color: 'rgba(58, 115, 238, 0.8)'
      }
    },
    {
      type: 'bar',
      x: ['Now', 'LQ'],
      y: [250, 240],
      text: ['+25 %', '-7 %'],
      textposition: 'auto',
      name: 'Residential',
      marker: {
        color: 'rgba(58, 115, 238, 0.6)'
      }
    }
  ]
  // diagram linechart
  public linechart: Diagram = {
    title: '',
    xaxis: {
      title: '',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true,

      // grid
      showline: false,
      gridcolor: '#323232',
    },
    yaxis: {
      title: '',
      linecolor: 'black',
      linewidth: 2,
      mirror: true,
      automargin: true,

      // grid
      showgrid: true,
      showline: false,
      gridcolor: '#323232',
      gridwidth: 2,

      // ticks
      dtick: 50,
      tickcolor: '#323232',
    }
  }
  // trace linechart
  public line: Trace[] = [
    {
      x: ['01.01.2024', '02.01.2024', '03.01.2024', '04.01.2024', '05.01.2024', '06.01.2024', ],
      y: [50, 45, 43, 44, 51, 50],
      type: 'scatter',
      fill: 'tozeroy',
      mode: 'lines+markers',
      marker: {
        color: 'rgba(58, 115, 238, 1)',
        size: 10
      }
    },
    {
      x: ['01.01.2024', '02.01.2024', '03.01.2024', '04.01.2024', '05.01.2024', '06.01.2024', ],
      y: [20, 21, 24, 23, 25, 20],
      type: 'scatter',
      fill: 'tozeroy',
      mode: 'lines+markers',
      marker: {
        color: 'rgba(58, 115, 238, 0.8)',
        size: 10
      }
    }
  ]
  daten: any = {
    x: ['01.01.2024', '02.01.2024', '03.01.2024', '04.01.2024', '05.01.2024', '06.01.2024', ],
    y: [250, 245, 243, 244, 251, 250],
  }

  // diagram sunburst
  public sunburst: Diagram = {
    title: '',
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    showlegend: false
  }

  // trace sunburst
  public sun: Trace[] = [
    {
      type: "sunburst",
      labels: ["WSP", "WSP Mitte", "WSP Ost", "WSP West", "Streifenboote Mitte", "Streifenboote Ost", "Streifenboote West", "Zivilboote Mitte", "Zivilboote Ost", "Zivilboote West", "RIB Ost", "WSP50 Rib", "WSP10 Wannsee", "WSP11 Mollymauk", "WSP12 Graureiher", "WSP14 Pelikan" ],
      parents: ["", "WSP", "WSP", "WSP", "WSP Mitte", "WSP Ost", "WSP West", "WSP Mitte", "WSP Ost", "WSP West", "WSP West", "RIB Ost", "Streifenboote Ost", "Streifenboote Ost", "Streifenboote Ost", "Streifenboote Ost" ],
      values: [6, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      outsidetextfont: {size: 20, color: "#377eb8"},
      leaf: {opacity: 0.4},
      marker: {line: {width: 2}},
    }
  ]
}
