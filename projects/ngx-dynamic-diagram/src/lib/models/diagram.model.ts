export interface Axis {
    title       : string
    linecolor   : string
    linewidth   : number
    mirror      : boolean
    automargin  : boolean

    // grid
    autorange?  : boolean,
    showgrid?   : boolean,
    zeroline?   : boolean,
    showline?   : boolean,
    gridcolor?  : string | string[],
    gridwidth?  : number,

    // ticks
    showticklabels?: boolean
    autotick?   : boolean
    ticks?      : 'outside' | 'inside' | ''
    tick0?      : number
    dtick?      : number
    ticklen?    : number,
    /**
    @example test
    */
    tickwidth?  : number,
    tickcolor?  : string | string[]
}

export interface Options {
    responsive?: boolean
    scrollZoom?: boolean
    staticPlot?: boolean    // statisches Diagramm
}

export interface Diagram {
    title           : string
    paper_bgcolor?   : string
    plot_bgcolor?    : string
    barmode?        : string
    options?        : Options
    showlegend?     : boolean
    xaxis?          : Axis
    yaxis?          : Axis
}