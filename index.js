function getrandom(num , mul) {
    var value = [ ];
    for ( i=0; i <= num; i++ ) {
        var rand = Math.random() * mul;
        value.push(rand);
    }
    return value;
}

var TestTruns = 10
var BatchTimeout = [0.75,0.75,0.75,0.75,1,1,1,1,2,2,2,2,1.5,1.5,1.5,1.5]//getrandom(TestTruns,1.5)
var TPS = [180,291,333,351,172,291,337,319,182,260,323.54,323.52,172,268,348,310]//getrandom(TestTruns,600)
var MaxMessageCount = [10,40,80,120,10,40,80,120,10,40,80,120,10,40,80,120]//getrandom(TestTruns,120)
var AbsoluteMaxBytes = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]//getrandom(TestTruns,128)
var PreferredMaxBytes = [256,256,256,256,256,256,256,256,256,256,256,256,256,256,256,256]//getrandom(TestTruns,2048)

var Turn1 =  {
     opacity: 0.5,
     color: 'rgba(255,127,80,0.7)',
     type: 'scatter3d',
     x: BatchTimeout,
     y: MaxMessageCount,
     z: TPS,
     scene: "scene1"
    };

var Turn2 =  {
     opacity: 0.5,
     color: 'pink',
     type: 'scatter3d',//'mesh3d',
     x: BatchTimeout,
     y: AbsoluteMaxBytes,
     z: TPS,
     scene: "scene2"
    };

var Turn3 = {
     opacity:0.4,
     color:'rgb(033,255,100)',
     type: 'scatter3d',
     x: BatchTimeout,
     y: PreferredMaxBytes,
     z: TPS,
     scene: "scene3",
    };

var Turn4 = {
     opacity: 0.5,
     color:'rgb(200,100,200)',
     type: 'scatter3d',
     x: MaxMessageCount,
     y: AbsoluteMaxBytes,
     z: TPS,
     scene: "scene4"
    };
    
var Turn5 =  {
    opacity: 0.5,
    color:'rgb(00,150,200)',
    type: 'scatter3d',
    x: MaxMessageCount,
    y: PreferredMaxBytes,
    z: TPS,
    scene: "scene5",
    }

var Turn6 =  {
    opacity: 0.5,
    color:'rgb(033,150,200)',
    type: 'scatter3d',
    x: AbsoluteMaxBytes,
    y: PreferredMaxBytes,
    z: TPS,
    scene: "scene6",
    }

var layout = {
    scene1: {
        domain: {
            x: [0.0,  0.33],
            y: [0.5, 1.0]
        },},
    scene2: {
        domain: {
            x: [0.33, 0.66],
            y: [0.5, 1.0]
        }},
    scene3: {
        domain: {
            x: [0.66, 0.99],
            y: [0.5, 1.0]
        }},
     scene4: {
        domain: {
            x: [0.0,  0.33],
            y: [0, 0.5]
        },},
    scene5: {
        domain: {
            x: [0.33, 0.66],
            y: [0, 0.5]
        }},
    scene6: {
        domain: {
            x: [0.66, 0.99],
            y: [0, 0.5]
        },},
  height: 600,
   margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 0,
    pad: 0
  },
}    
     
Plotly.newPlot('myDiv', [Turn1,Turn2,Turn3,Turn4,Turn5,Turn6], layout);