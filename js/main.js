// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

var blueberries = {
  name: 'Blueberries',
  latin: 'Vaccinium corymbosum',
  onShrub: true,
  energy: 240,
  carbs: 14.49,
  protein: 0.74
};

var grapes = {
  name: 'Grapes',
  latin: 'Vitis vinifera',
  onShrub: false,
  energy: 288,
  carbs: 18.1,
  protein: 0.72
};

var redCurrant = {
  name: 'Red currant',
  latin: 'Ribes rubrum',
  onShrub: true,
  energy: 234,
  carbs: 13.8,
  protein: 1.4
};

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################


// Write your function here, name it `writeBerries`

var writeBerries = function (berries){
  document.write('<h1>Berries</h1>');

  berries.forEach(function (berry){

    document.write('<h2>' + berry.name + '</h2>');
    document.write('<dl>');
    document.write('<dt>Grows on a shrub?</dt>');
    if (berry.onShrub) {
      document.write('<dd>Yes.</dd>');
    } else{
      document.write('<dd>No.</dd>');
    }
    document.write('<dt>Energy</dt>');
    document.write('<dd>' + berry.energy + 'kJ' + '</dd>');
    document.write('<dt>Carbohydrates</dt>');
    document.write('<dd>' + berry.carbs + 'g' + '</dd>');
    document.write('<dt>Protein</dt>');
    document.write('<dd>' + berry.protein + 'g' + '</dd>');
    document.write('</dl>');
  });
};

// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

// This code will execute your function
writeBerries([blueberries, grapes, redCurrant]);

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################
