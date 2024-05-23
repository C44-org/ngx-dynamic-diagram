// export type Trace = {
//     type          : 'bar' | 'line' | 'scatter',
//     x             : number[] | string[],
//     y             : number[] | string[],
//     line?         : { color: string },
//     mode?         : 'lines' | 'markers' | 'lines+markers',
//     orientation?  : 'h' | 'v',
//     marker?       : { color?: string[], size?: number[] },
// }

export type Pie = {
    type            : 'pie',
    labels          : string[],
    values          : number[],
    marker?         : { 
        color?      : string | string[], 
        colors      : string[], 
        line?       : {
            color?   : string,
            width?   : number | number[]
        }
        symbol?     : 'circle' | 'triangle' | 'square' | 'diamond' | 'circle-stroked' | 'triangle-stroked' | 'square-stroked' | 'diamond-stroked',
        size?       : number | number[] 
    },
    name?           : string
    domain?         : any
    hole?           : number
    automargin?     : boolean
    hoverinfo?      : 'none' | 'label' | 'percent' | 'percent+name' | 'name' | 'label+percent' | 'label+percent+name'
    textinfo?       : 'none' | 'label' | 'percent' | 'percent+name' | 'name' | 'label+percent' | 'label+percent+name'
    textposition?   : 'inside' | 'outside' | 'auto' | 'none'
    outsidetextfont?: {
        color?      : string | string[] | any,
        family?     : string | string[],
        size?       : number | number[]
    }
}

export type Bar = {
    type            : 'bar',
    x               : number[] | string[],
    y               : number[] | string[],
    line?           : { color: string },
    mode?           : 'lines' | 'markers' | 'lines+markers',
    orientation?    : 'h' | 'v',
    // marker?       : { color?: string[], size?: number[] },
    name?           : string
    text?           : any,
    textposition?   : 'inside' | 'outside' | 'auto' | 'none'

    // color, stroke, width
    marker?         : {
        color?      : string | string[]
    }
}

export type Scatter = {
    type          : 'scatter' | 'line',
    x             : number[] | string[],
    y             : number[] | string[],
    fill?         : string
    line?         : { color: string },
    mode?         : 'lines' | 'markers' | 'lines+markers',
    marker?       : { color?: string | string[], line?: any, symbol?: 'circle', size?: number | number[] },
    name?         : string
}

export type Sunburst = {
    type          : 'sunburst',
    labels          : string[],
    parents         : string[],
    values          : number[],
    outsidetextfont : {
        size        : number, 
        color       : string
    },
    leaf            : {
        opacity     : number
    },
    marker          : {
        line        : {
            width   : number
        }
    }
}

export type Trace = Bar | Pie | Scatter | Sunburst