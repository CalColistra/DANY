NWF$().ready(function () {
    NWF$('.ctl_clc_date1SelectionsAm').change(function() {
        var timeSlot1 = NWF$("#"+ctl_clc_date1TimeSlot);
        timeSlot1 = timeSlot1.val();
        var selectionsAm = NWF$("#"+ctl_clc_date1SelectionsAm);
        selectionsAm = selectionsAm.val();
        var selectionsPm = NWF$("#"+ctl_clc_date1SelectionsPm);
        selectionsPm = selectionsPm.val();
        checkSelection(timeSlot1, 1, selectionsAm, selectionsPm);
    });
    NWF$('.ctl_clc_date1SelectionsPm').change(function() {
        var timeSlot1 = NWF$("#"+ctl_clc_date1TimeSlot);
        timeSlot1 = timeSlot1.val();
        var selectionsAm = NWF$("#"+ctl_clc_date1SelectionsAm);
        selectionsAm = selectionsAm.val();
        var selectionsPm = NWF$("#"+ctl_clc_date1SelectionsPm);
        selectionsPm = selectionsPm.val();
        checkSelection(timeSlot1, 1, selectionsAm, selectionsPm);
    });
    NWF$('.ctl_clc_date2SelectionsAm').change(function() {
        var timeSlot2 = NWF$("#"+ctl_clc_date2TimeSlot);
        timeSlot2 = timeSlot2.val();
        var selectionsAm = NWF$("#"+ctl_clc_date2SelectionsAm);
        selectionsAm = selectionsAm.val();
        var selectionsPm = NWF$("#"+ctl_clc_date2SelectionsPm);
        selectionsPm = selectionsPm.val();
        checkSelection(timeSlot2, 2, selectionsAm, selectionsPm);
    });
    NWF$('.ctl_clc_date2SelectionsPm').change(function() {
        var timeSlot2 = NWF$("#"+ctl_clc_date2TimeSlot);
        timeSlot2 = timeSlot2.val();
        var selectionsAm = NWF$("#"+ctl_clc_date2SelectionsAm);
        selectionsAm = selectionsAm.val();
        var selectionsPm = NWF$("#"+ctl_clc_date2SelectionsPm);
        selectionsPm = selectionsPm.val();
        checkSelection(timeSlot2, 2, selectionsAm, selectionsPm);
    });
    NWF$('.ctl_clc_date3SelectionsAm').change(function() {
        var timeSlot3 = NWF$("#"+ctl_clc_date3TimeSlot);
        timeSlot3 = timeSlot3.val();
        var selectionsAm = NWF$("#"+ctl_clc_date3SelectionsAm);
        selectionsAm = selectionsAm.val();
        var selectionsPm = NWF$("#"+ctl_clc_date3SelectionsPm);
        selectionsPm = selectionsPm.val();
        checkSelection(timeSlot3, 3, selectionsAm, selectionsPm);
    });
    NWF$('.ctl_clc_date3SelectionsPm').change(function() {
        var timeSlot3 = NWF$("#"+ctl_clc_date3TimeSlot);
        timeSlot3 = timeSlot3.val();
        var selectionsAm = NWF$("#"+ctl_clc_date3SelectionsAm);
        selectionsAm = selectionsAm.val();
        var selectionsPm = NWF$("#"+ctl_clc_date3SelectionsPm);
        selectionsPm = selectionsPm.val();
        checkSelection(timeSlot3, 3, selectionsAm, selectionsPm);
    });
    NWF$('.ctl_clc_date4SelectionsAm').change(function() {
        var timeSlot4 = NWF$("#"+ctl_clc_date4TimeSlot);
        timeSlot4 = timeSlot4.val();
        var selectionsAm = NWF$("#"+ctl_clc_date4SelectionsAm);
        selectionsAm = selectionsAm.val();
        var selectionsPm = NWF$("#"+ctl_clc_date4SelectionsPm);
        selectionsPm = selectionsPm.val();
        checkSelection(timeSlot4, 4, selectionsAm, selectionsPm);
    });
});
async function checkSelection(timeSlot, date, selectionsAm, selectionsPm) {
    var selectionCount = 0;
    console.log("Am selections: "+selectionsAm);
    console.log("TimeSlot: "+timeSlot);
    for (let i = 0; i < selectionsAm.length; i++) {
        var currentChar = selectionsAm.charAt(i);
        if (currentChar == ";") selectionCount = selectionCount+1;
    }
    for (let i = 0; i < selectionsPm.length; i++) {
        var currentChar = selectionsPm.charAt(i);
        if (currentChar == ";") selectionCount = selectionCount+1;
    }
    var timeSelected = selectionCount*15;
    console.log("Selected Time: "+timeSelected);
    var timeSlotFilledResult;
    if (timeSelected == timeSlot) timeSlotFilledResult = "exact";
    else if (timeSelected > timeSlot) timeSlotFilledResult = "over";
    else if (timeSelected < timeSlot) timeSlotFilledResult = "under";
    if (date == 1) {
        var txtBoxFilled = NWF$('#'+ctl_txt_timeSlot1Filled);
        txtBoxFilled.val(timeSlotFilledResult);
    }
    else if (date == 2) {
        var txtBoxFilled = NWF$('#'+ctl_txt_timeSlot2Filled);
        txtBoxFilled.val(timeSlotFilledResult);
    }
    else if (date == 3) {
        var txtBoxFilled = NWF$('#'+ctl_txt_timeSlot3Filled);
        txtBoxFilled.val(timeSlotFilledResult);
    }
    else if (date == 4) {
        var txtBoxFilled = NWF$('#'+ctl_txt_timeSlot4Filled);
        txtBoxFilled.val(timeSlotFilledResult).trigger("blur");
    }
}