
NWF$().ready(function () {
  alert("hello");
  NWF$('.dvrStartHr').change(function() {
      calcDiff();
    });
    NWF$('.dvrStartMin').change(function() {
      calcDiff();
    });
    NWF$('.dvrStartSec').change(function() {
      calcDiff();
    });
    NWF$('.dvrEndHr').change(function() {
      calcDiff();
    });
    NWF$('.dvrEndMin').change(function() {
      calcDiff();
    });
    NWF$('.dvrEndSec').change(function() {
      calcDiff();
    });
});


async function calcDiff() {
  var difference = 0;   
  NWF$(".requestTimeRepeatingSection .nf-repeater-row:not('.nf-repeater-row-hidden')").each(function () {
  
    var row = NWF$(this);
    var dvrStartHr = row.find(".dvrStartHr input").val();
    var dvrStartMin = row.find(".dvrStartMin input").val();
    var dvrStartSec = row.find(".dvrStartSec input").val();
    dvrStartHr = parseFloat(dvrStartHr);
    dvrStartMin = parseFloat(dvrStartMin);
    dvrStartSec = parseFloat(dvrStartSec);
    
    var dvrEndHr = row.find(".dvrEndHr input").val();
    var dvrEndMin = row.find(".dvrEndMin input").val();
    var dvrEndSec = row.find(".dvrEndSec input").val();
    dvrEndHr = parseFloat(dvrEndHr);
    dvrEndMin = parseFloat(dvrEndMin);
    dvrEndSec = parseFloat(dvrEndSec);

    if ( (isNaN(dvrStartHr)) || (isNaN(dvrStartMin)) ||(isNaN(dvrStartSec)) ||
        (isNaN(dvrEndHr)) ||(isNaN(dvrEndMin)) ||(isNaN(dvrEndSec)) ) {
        difference = "You must only enter numbers in DVR Times.";
        }
    else {
    
      
      dvrStartHr = parseFloat(dvrStartHr);
      dvrStartHr = dvrStartHr*60;

      dvrStartMin = parseFloat(dvrStartMin);
      
      dvrStartSec = parseFloat(dvrStartSec);
      dvrStartSec = dvrStartSec/60;

      dvrEndHr = parseFloat(dvrEndHr);
      dvrEndHr = dvrEndHr*60;

      dvrEndMin = parseFloat(dvrEndMin)

      dvrEndSec = parseFloat(dvrEndSec);
      dvrEndSec = dvrEndSec/60;

      startMinValue = dvrStartHr+dvrStartMin+dvrStartSec;
      endMinValue = dvrEndHr+dvrEndMin+dvrEndSec;

      difference = endMinValue - startMinValue;
      difference = difference.toFixed(2);
    }
    
    difference = String(difference);
    /*
    var thisRowDiff = NWF$(this).find('.dvrDifference');
    console.log(thisRowDiff);
    
    thisRowDiff.val(difference);
    */
    NWF$('#'+totalDuration).val(difference);
  })
}
