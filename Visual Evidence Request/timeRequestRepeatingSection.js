NWF$().ready(function () {
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

function calcDiff() {
  var difference = 0;
  var testString = "";
  NWF$(".requestTimeRepeatingSection .nf-repeater-row:not('.nf-repeater-row-hidden')").each(function () {
    var row = NWF$(this);
    var dvrStartHr = row.find(".dvrStartHr input").val();
    var dvrStartMin = row.find(".dvrStartMin input").val();
    var dvrStartSec = row.find(".dvrStartSec input").val();
    dvrStartHr = Number(dvrStartHr);
    dvrStartMin = Number(dvrStartMin);
    dvrStartSec = Number(dvrStartSec);
    
    var dvrEndHr = row.find(".dvrEndHr input").val();
    var dvrEndMin = row.find(".dvrEndMin input").val();
    var dvrEndSec = row.find(".dvrEndSec input").val();
    dvrEndHr = Number(dvrEndHr);
    dvrEndMin = Number(dvrEndMin);
    dvrEndSec = Number(dvrEndSec);
    
    if ( (isNaN(dvrStartHr)) || (isNaN(dvrStartMin)) ||(isNaN(dvrStartSec)) ||
       (isNaN(dvrEndHr)) ||(isNaN(dvrEndMin)) ||(isNaN(dvrEndSec)) ) {
      alert("You must only enter numbers in DVR Times.");
      NWF$('#'+totalDuration).val("You must only enter numbers in DVR Times.");
    }
    else {
      hrDif = dvrEndHr - dvrStartHr;
      minDif = dvrEndMin - dvrStartMin;
      secDif = dvrEndSec - dvrStartSec;
      //convert min to hour:
      minDif = minDif/60;
      //convert sec to hour:
      secDif = secDiff/3600;
      // calc difference in hours:
      difference = hrDif + minDif + secDif;
      NWF$('#'+totalDuration).val(difference)
    }
    
  });
}