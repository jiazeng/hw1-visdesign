
var getSignedData = function(data) {
    for (var i = 0; i < data.length; i++) {
        if (originalData[i]['Gram Staining'] == 'negative') {
            data[i] = data[i] * -1;
        }
    }

    return data;
};

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
    "Bacteria": "Salmonella (Eberthella) typhosa",
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

var lineChartData = [
    {
        name: 'Penicilin',
        x: originalData.map(function(d) {return d['Bacteria']}),
        y: getSignedData(originalData.map(function(d) {return d['Penicilin']})),
        type: 'scatter'
    },
    {
        name: 'Streptomycin',
        x: originalData.map(function(d) {return d['Bacteria']}),
        y: getSignedData(originalData.map(function(d) {return d['Streptomycin']})),
        type: 'scatter'
    },
    {
        name: 'Neomycin',
        x: originalData.map(function(d) {return d['Bacteria']}),
        y: getSignedData(originalData.map(function(d) {return d['Neomycin']})),
        type: 'scatter'
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

var pieChartDataPenicilin = [{
  values: originalData.map(function(d) {return d['Penicilin']}),
  labels: originalData.map(function(d) {return d['Bacteria']}),
  type: 'pie'
}];
var pieChartDataStreptomycin = [{
  values: originalData.map(function(d) {return d['Streptomycin']}),
  labels: originalData.map(function(d) {return d['Bacteria']}),
  type: 'pie'
}];
var pieChartDataNeomycin = [{
  values: originalData.map(function(d) {return d['Neomycin']}),
  labels: originalData.map(function(d) {return d['Bacteria']}),
  type: 'pie'
}];

var barChartLayout = {
    barmode: 'stack'
};

var lineChartLayout = {
    margin: {
        l: 10
    },
};

var pieChartLayoutPenicilin = {
    title: 'Penicilin'
};

var pieChartLayoutStreptomycin = {
    title: 'Streptomycin'
};

var pieChartLayoutNeomycin = {
    title: 'Neomycin'
};

Plotly.plot('line-chart-div', lineChartData, lineChartLayout);
Plotly.plot('bar-chart-div', barChartData, barChartLayout);

Plotly.plot('pie-chart-div-penicilin', pieChartDataPenicilin, pieChartLayoutPenicilin);
Plotly.plot('pie-chart-div-streptomycin', pieChartDataStreptomycin, pieChartLayoutStreptomycin);
Plotly.plot('pie-chart-div-neomycin', pieChartDataNeomycin, pieChartLayoutNeomycin);

