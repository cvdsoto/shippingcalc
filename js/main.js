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
  $dValue = $('#dValue');
  $insurance = $('#insurance');

  function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

  $calculate.on('click', function(){
    event.preventDefault();
    let weight;
    let insurance;
    const dWeight = ($pckL.val() * $pckW.val() * $pckH.val() / 166).toFixed(2);
    const pckWeight = $pckWeight.val();

    // get the bigger weight
    if (pckWeight > dWeight) {
      weight = pckWeight;
    } else {
      weight = dWeight;
    }

    //Each shipment is insured for free up to 100. Anything in excess is charged at 4% of declared value.
    if ($dValue.val() > 100) {
      insurance = (($dValue.val() - 100) * 0.04) * 55;
      $insurance.text(commaSeparateNumber(insurance.toFixed(2)));
    }

    const airCargo = ((weight * 7.99) * 55) + insurance;
    $airCargo.text(commaSeparateNumber(airCargo.toFixed(2)));
    const airCargoSH = ((weight * 12.99) * 55) + insurance;
    $airCargoSH.text(commaSeparateNumber(airCargoSH.toFixed(2)));
    const seaCargo = ((dWeight * 2.75) * 55) + insurance;
    $seaCargo.text(commaSeparateNumber(seaCargo.toFixed(2)));

  });

  $reset.on('click', function (){
    $insurance.text('0.00');
    $airCargo.text('0.00');
    $airCargoSH.text('0.00');
    $seaCargo.text('0.00');
    $pckWeight.val('');
    $pckL.val('');
    $pckW.val('');
    $pckH.val('');
    $dValue.val('');
  });
});
