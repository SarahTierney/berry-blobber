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

var writeBerries = function (berries) {
  document.write('<h1>Berries</h1>');

  bugs.forEach(function (berry) {
    document.write('<h2>' + berry.name + '</h2>');
    document.write('<dl>');
    document.write('<dt>Grows on a shrub?</dt>');
    if (berry.onShrub) {
      document.write('<dd>Yes.</dd>');
    } else {
      document.write('<dd>No.</dd>');
    }

    document.write('<dd><i>' + berry.onShrub + '</i></dd>');
    document.write('<dd>' + berry.energy[0] + ' kj</dd>');
    document.write('<dd><i>' + berry.carbs[0] + ' g</i></dd>');
    document.write('<dd><i>' + berry.protein[0] + ' g</i></dd>');
    document.write('<dt>Size</dt>');
    document.write('<dt>Eats</dt>');

    document.write('<dd>');



    if (bug.food.eatsDung) {
      document.write('Dung');
    }

    if (bug.food.eatsPlants) {
      document.write('Plants');
    }

    document.write('</dd>');

    document.write('</dl>');
    document.write('</li>');
  });

  document.write('</ol>');
};

writeInsects(insects);



// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

// This code will execute your function
writeBerries([blueberries, grapes, redCurrant]);

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################
