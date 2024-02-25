var ENERGY_TOTAL = 21000000;
var energyCostTotal;
var EnergyCosts;
var energyKeys = {'Listing Wallet':1,'Prize Portfolio':2,'Pre Sale':3, 'Pancakeswap':4}
var energyContributions = [
            ['Listing Wallet 5%', 1050000],
            ['Prize Portfolio 5%', 1050000],
            ['Pre Sale 54.5% (70 BNB)', 11410000],
            ['Pancakeswap 35.4% (49 BNB)', 7416500],
        ];
var chart = c3.generate({
      size: {
        height: 280,
        width: 300
    },
    bindto: '#energyAllocationMobile',
    data: {
        columns: energyContributions,
        type : 'donut',
    },
    color: {
      pattern: ['#F02F6E', '#F55359', '#FA7645','#FF9A30']
    },
    donut: {
        label: {show: false},
    },
    legend: {
        position: 'bottom',
        item: {
          onclick: function () { return false; }
        }
    }
});

/* set a new value for a piece of the energy budget */
