$(document).ready(function(){

  $pckWeight = $('#pckWeight');
  $pckL = $('#pckL');
  $pckW = $('#pckW');
  $pckH = $('#pckH');
  $calculate = $('#calculate');
  $airCargo = $('#air-cargo');
  $airCargoSH = $('#air-cargo-sh');
  $seaCargo = $('#sea-cargo');
  $reset = $('#reset');

  function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

  $calculate.on('click', function(){
    event.preventDefault();
    let weight = [];
    const dWeight = $pckL.val() * $pckW.val() * $pckH.val() / 166;
    const pckWeight = $pckWeight.val();

    if (pckWeight > dWeight) {
      weight = pckWeight;
    } else {
      weight = dWeight;
    }
    const airCargo = (weight * 7.99) * 55;
    $airCargo.text(commaSeparateNumber(airCargo.toFixed(2)));
    const airCargoSH = (weight * 12.99) * 55;
    $airCargoSH.text(commaSeparateNumber(airCargoSH.toFixed(2)));
    const seaCargo = (dWeight * 2.75) * 55;
    $seaCargo.text(commaSeparateNumber(seaCargo.toFixed(2)));

  });

  $reset.on('click', function (){
    $airCargo.text('0.00');
    $airCargoSH.text('0.00');
    $seaCargo.text('0.00');
    $pckWeight.val('');
    $pckL.val('');
    $pckW.val('');
    $pckH.val('');
  })
});
