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
    
    var dvrEndHr = row.find(".dvrEndHr input").val();
    var dvrEndMin = row.find(".dvrEndMin input").val();
    var dvrEndSec = row.find(".dvrEndSec input").val();
    
    testString = "DVR Start: "+dvrStart+" DVR End: "+ dvrEnd+",";
  });
  testString = testString.toString();
  NWF$('#'+totalDuration).val(testString)
}
