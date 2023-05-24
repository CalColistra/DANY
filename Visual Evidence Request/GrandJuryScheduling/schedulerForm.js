var callCounter = 1;
NWF$().ready(function () {
    NWF$('.ctl_clc_date1Selections').change(function() {
        var timeSlot1 = NWF$("#"+ctl_clc_date1TimeSlot);
        timeSlot1 = timeSlot1.val();
        var selections = NWF$("#"+ctl_clc_date1Selections);
        selections = selections.val();
        checkSelection(timeSlot1, 1, selections);
    });

    NWF$('.ctl_clc_date2Selections').change(function() {
        var timeSlot2 = NWF$("#"+ctl_clc_date2TimeSlot);
        timeSlot2 = timeSlot2.val();
        var selections = NWF$("#"+ctl_clc_date2Selections);
        selections = selections.val();
        checkSelection(timeSlot2, 2, selections);
    });
    NWF$('.ctl_clc_date3Selections').change(function() {
        var timeSlot3 = NWF$("#"+ctl_clc_date3TimeSlot);
        timeSlot3 = timeSlot3.val();
        var selections = NWF$("#"+ctl_clc_date3Selections);
        selections = selections.val();
        checkSelection(timeSlot3, 3, selections);
    });
    NWF$('.ctl_clc_date4Selections').change(function() {
        var timeSlot4 = NWF$("#"+ctl_clc_date4TimeSlot);
        timeSlot4 = timeSlot4.val();
        var selections = NWF$("#"+ctl_clc_date4Selections);
        selections = selections.val();
        checkSelection(timeSlot4, 4, selections);
    });
});
async function checkSelection(timeSlot, date, selections) {
    if (callCounter < 5) {
        callCounter = callCounter +1;
        return;
    }
    else {
        var selectionCount = 0;
        for (let i = 1; i < selections.length; i++) {
            var currentChar = selections.charAt(i);
            if (currentChar == ";") selectionCount = selectionCount+1;
        }
        var timeSelected = selectionCount*15;
        var timeSlotFilledResult = timeSelected - timeSlot;
        if (date == 1) {
            var txtBoxFilled = NWF$('#'+ctl_txt_timeSlot1Filled);
            txtBoxFilled.val(timeSlotFilledResult).trigger("blur");
        }
        else if (date == 2) {
            var txtBoxFilled = NWF$('#'+ctl_txt_timeSlot2Filled);
            txtBoxFilled.val(timeSlotFilledResult).trigger("blur");
        }
        else if (date == 3) {
            var txtBoxFilled = NWF$('#'+ctl_txt_timeSlot3Filled);
            txtBoxFilled.val(timeSlotFilledResult).trigger("blur");
        }
        else if (date == 4) {
            var txtBoxFilled = NWF$('#'+ctl_txt_timeSlot4Filled);
            txtBoxFilled.val(timeSlotFilledResult).trigger("blur");
        }
        var allIdsBox = NWF$('#'+ctl_txt_allSelectedIds); 
        allIdsBox.val();
    }
    
}