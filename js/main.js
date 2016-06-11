// Function that returns the data that is Gram-negative
var getNegativeData = function(data) {
  var negativeData = [];
  for(var i = 0; i < originalData.length; i++) {
    if(originalData[i]['Gram Staining'] == 'negative') {
      negativeData.push(data[i]);
    } 
  }
    return negativeData;
};
  
// Function that returns the data that is Gram-positive
var getPositiveData = function(data) {
  var positiveData = [];
  for(var i = 0; i < originalData.length; i++) {
    if(originalData[i]['Gram Staining'] == 'positive') {
      positiveData.push(data[i]);
    } 
  }
  console.log("posdata " + positiveData)
  return positiveData;
};
  
// The full dataset
var originalData = [
  {
    "Bacteria": "Aerobacter aerogenes",
    "Penicilin": 870,
    "Streptomycin": 1,
    "Neomycin": 1.6,
    "Gram Staining": "negative"
  },
  {
    "Bacteria": "Brucella abortus",
    "Penicilin": 1,
    "Streptomycin": 2,
    "Neomycin": 0.02,
    "Gram Staining": "negative"
  },
  {
    "Bacteria": "Brucella anthracis",
    "Penicilin": 0.001,
    "Streptomycin": 0.01,
    "Neomycin": 0.007,
    "Gram Staining": "positive"
  },
  {
    "Bacteria": "Diplococcus pneumoniae",
    "Penicilin": 0.005,
    "Streptomycin": 11,
    "Neomycin": 10,
    "Gram Staining": "positive"
  },
  {
    "Bacteria": "Escherichia coli",
    "Penicilin": 100,
    "Streptomycin": 0.4,
    "Neomycin": 0.1,
    "Gram Staining": "negative"
  },
  {
    "Bacteria": "Klebsiella pneumoniae",
    "Penicilin": 850,
    "Streptomycin": 1.2,
    "Neomycin": 1,
    "Gram Staining": "negative"
  },
  {
    "Bacteria": "Mycobacterium tuberculosis",
    "Penicilin": 800,
    "Streptomycin": 5,
    "Neomycin": 2,
    "Gram Staining": "negative"
  },
  {
    "Bacteria": "Proteus vulgaris",
    "Penicilin": 3,
    "Streptomycin": 0.1,
    "Neomycin": 0.1,
    "Gram Staining": "negative"
  },
  {
    "Bacteria": "Pseudomonas aeruginosa",
    "Penicilin": 850,
    "Streptomycin": 2,
    "Neomycin": 0.4,
    "Gram Staining": "negative"
  },
  {
    "Bacteria": "Salmonella typhosa",
    "Penicilin": 1,
    "Streptomycin": 0.4,
    "Neomycin": 0.008,
    "Gram Staining": "negative"
  },
  {
    "Bacteria": "Salmonella schottmuelleri",
    "Penicilin": 10,
    "Streptomycin": 0.8,
    "Neomycin": 0.09,
    "Gram Staining": "negative"
  },
  {
    "Bacteria": "Staphylococcus albus",
    "Penicilin": 0.007,
    "Streptomycin": 0.1,
    "Neomycin": 0.001,
    "Gram Staining": "positive"
  },
  {
    "Bacteria": "Staphylococcus aureus",
    "Penicilin": 0.03,
    "Streptomycin": 0.03,
    "Neomycin": 0.001,
    "Gram Staining": "positive"
  },
  {
    "Bacteria": "Streptococcus fecalis",
    "Penicilin": 1,
    "Streptomycin": 1,
    "Neomycin": 0.1,
    "Gram Staining": "positive"
  },
  {
    "Bacteria": "Streptococcus hemolyticus",
    "Penicilin": 0.001,
    "Streptomycin": 14,
    "Neomycin": 10,
    "Gram Staining": "positive"
  },
  {
    "Bacteria": "Streptococcus viridans",
    "Penicilin": 0.005,
    "Streptomycin": 10,
    "Neomycin": 40,
    "Gram Staining": "positive"
  }
];

//**********************DATA**********************//
var lineChartData = [
    {
        name: 'Penicilin',
        x: originalData.map(function(d) {return d['Bacteria']}),
        y: originalData.map(function(d) {return d['Penicilin']}),
        type: 'scatter',
        mode: 'markers',
        marker: { size: 12 }
    },
    {
        name: 'Streptomycin',
        x: originalData.map(function(d) {return d['Bacteria']}),
        y: originalData.map(function(d) {return d['Streptomycin']}),
        type: 'scatter',
        mode: 'markers',
        marker: { size: 12 }
    },
    {
        name: 'Neomycin',
        x: originalData.map(function(d) {return d['Bacteria']}),
        y: originalData.map(function(d) {return d['Neomycin']}),
        type: 'scatter',
        mode: 'markers',
        marker: { size: 12 }
    }
];
var barChartData = [
    {
        name: 'Penicilin',
        x: originalData.map(function(d) {return d['Bacteria']}),
        y: originalData.map(function(d) {return d['Penicilin']}),
        type: 'bar'
    },
    {
        name: 'Streptomycin',
        x: originalData.map(function(d) {return d['Bacteria']}),
        y: originalData.map(function(d) {return d['Streptomycin']}),
        type: 'bar'
    },
    {
        name: 'Neomycin',
        x: originalData.map(function(d) {return d['Bacteria']}),
        y: originalData.map(function(d) {return d['Neomycin']}),
        type: 'bar'
    },
];

var posBoxPlotData = [
    {
        name: 'Penicilin',
        y: getPositiveData(originalData.map(function(d) {return d['Penicilin']})),
        type: 'box'
    },
    
    {
        name: 'Streptomycin',
        y: getPositiveData(originalData.map(function(d) {return d['Streptomycin']})),
        type: 'box'
    },
    {
        name: 'Neomycin',
        y: getPositiveData(originalData.map(function(d) {return d['Neomycin']})),
        type: 'box'
    }
]

var negBoxPlotData = [
    {
        name: 'Penicilin',
        y: getNegativeData(originalData.map(function(d) {return d['Penicilin']})),
        type: 'box'
    },
    {
        name: 'Streptomycin',
        y: getNegativeData(originalData.map(function(d) {return d['Streptomycin']})),
        type: 'box'
    },
    {
        name: 'Neomycin',
        y: getNegativeData(originalData.map(function(d) {return d['Neomycin']})),
        type: 'box'
    }
]

//**********************LAYOUT**********************//
var barChartLayout = {
    barmode: 'group',
    margin: {
        l: 40,
        b: 110,
    },
    xaxis: {
      title: 'Bacteria'
    },
    yaxis: {
      title: 'MIC',
      type: 'log',
      autorange: true
    }
};

var lineChartLayout = {
    margin: {
        l: 40,
        b: 105,
    },
    xaxis: {
      title: 'Bacteria'
    },
    yaxis: {
      title: 'MIC',
      type: 'log',
      autorange: true
    }
};

var posBoxPlotLayout = {
    title: 'Gram-Positive',
    xaxis: {
      title: 'Antibiotics (Gram-positive)'
    },
    yaxis: {
      title: 'MIC',
      type: 'log',
      autorange: true
    }
}

var negBoxPlotLayout = {
    title:'Gram-Negative',
    xaxis: {
      title: 'Antibiotics'
    },
    yaxis: {
      title: 'MIC',
      type: 'log',
      autorange: true
    }
}

Plotly.plot('line-chart-div', lineChartData, lineChartLayout);
Plotly.plot('bar-chart-div', barChartData, barChartLayout);
Plotly.plot('box-plot-div1', posBoxPlotData, posBoxPlotLayout);
Plotly.plot('box-plot-div2', negBoxPlotData, negBoxPlotLayout);

