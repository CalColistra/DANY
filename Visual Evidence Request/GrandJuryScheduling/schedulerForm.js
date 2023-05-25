var callCounter = 1;
var date1SelectionIds = [];
var date2SelectionIds = [];
var date3SelectionIds = [];
var date4SelectionIds = [];
NWF$().ready(function () {

    var timeSlot1 = NWF$("#"+ctl_clc_date1TimeSlot);
    timeSlot1 = timeSlot1.val();
    var selections = NWF$("#"+ctl_clc_date1Selections);
    selections = selections.val();
    checkSelection(timeSlot1, 1, selections);
    updateSelectionIds(1,selections);

    var timeSlot2 = NWF$("#"+ctl_clc_date2TimeSlot);
    timeSlot2 = timeSlot2.val();
    var selections = NWF$("#"+ctl_clc_date2Selections);
    selections = selections.val();
    checkSelection(timeSlot2, 2, selections);
    updateSelectionIds(2,selections);

    var timeSlot3 = NWF$("#"+ctl_clc_date3TimeSlot);
    timeSlot3 = timeSlot3.val();
    var selections = NWF$("#"+ctl_clc_date3Selections);
    selections = selections.val();
    checkSelection(timeSlot3, 3, selections);
    updateSelectionIds(3,selections);

    var timeSlot4 = NWF$("#"+ctl_clc_date4TimeSlot);
    timeSlot4 = timeSlot4.val();
    var selections = NWF$("#"+ctl_clc_date4Selections);
    selections = selections.val();
    checkSelection(timeSlot4, 4, selections);
    updateSelectionIds(4,selections);

    NWF$('.ctl_clc_date1Selections').change(function() {
        var timeSlot1 = NWF$("#"+ctl_clc_date1TimeSlot);
        timeSlot1 = timeSlot1.val();
        var selections = NWF$("#"+ctl_clc_date1Selections);
        selections = selections.val();
        checkSelection(timeSlot1, 1, selections);
        updateSelectionIds(1,selections);
    });
    NWF$('.ctl_clc_date2Selections').change(function() {
        var timeSlot2 = NWF$("#"+ctl_clc_date2TimeSlot);
        timeSlot2 = timeSlot2.val();
        var selections = NWF$("#"+ctl_clc_date2Selections);
        selections = selections.val();
        checkSelection(timeSlot2, 2, selections);
        updateSelectionIds(2,selections);
    });
    NWF$('.ctl_clc_date3Selections').change(function() {
        var timeSlot3 = NWF$("#"+ctl_clc_date3TimeSlot);
        timeSlot3 = timeSlot3.val();
        var selections = NWF$("#"+ctl_clc_date3Selections);
        selections = selections.val();
        checkSelection(timeSlot3, 3, selections);
        updateSelectionIds(3,selections);
    });
    NWF$('.ctl_clc_date4Selections').change(function() {
        var timeSlot4 = NWF$("#"+ctl_clc_date4TimeSlot);
        timeSlot4 = timeSlot4.val();
        var selections = NWF$("#"+ctl_clc_date4Selections);
        selections = selections.val();
        checkSelection(timeSlot4, 4, selections);
        updateSelectionIds(4,selections);
    });
});
async function updateSelectionIds(date,selections) {
    var splitSelections = selections.split(",");
    var tempIdArray = [];
    for (let i = 0; i<splitSelections.length; i++) {
        var currentSelection = splitSelections[i];
        var currentId = "";
        for (let j = 0; j < currentSelection.length; j++) {
            var currentChar = currentSelection.charAt(j);
            if (currentChar == ";") break;
            else if ((currentChar != "[")&&(currentChar!= "]")) currentId = currentId + currentChar;
        }
        if (currentId != "")  tempIdArray.push(currentId);
    }
    if (date == 1) {
        date1SelectionIds = tempIdArray;
        var date1IdtxtBox = NWF$("#"+ctl_txt_date1SelectionIds);
        date1IdtxtBox.val(date1SelectionIds).trigger("blur");
    }
    else if (date == 2) {
        date2SelectionIds = tempIdArray;
        var date2IdtxtBox = NWF$("#"+ctl_txt_date2SelectionIds);
        date2IdtxtBox.val(date2SelectionIds).trigger("blur");
    }
    else if (date == 3) {
        date3SelectionIds = tempIdArray;
        var date3IdtxtBox = NWF$("#"+ctl_txt_date3SelectionIds);
        date3IdtxtBox.val(date3SelectionIds).trigger("blur");
    }
    else if (date == 4) {
        date4SelectionIds = tempIdArray;
        var date4IdtxtBox = NWF$("#"+ctl_txt_date4SelectionIds);
        date4IdtxtBox.val(date4SelectionIds).trigger("blur");
    }
    var allIds = [];
    for (let i = 0; i<date1SelectionIds.length; i++) {
        currentId = date1SelectionIds[i];
        allIds.push(currentId);
    }
    for (let i = 0; i<date2SelectionIds.length; i++) {
        currentId = date2SelectionIds[i];
        allIds.push(currentId);
    }
    for (let i = 0; i<date3SelectionIds.length; i++) {
        currentId = date3SelectionIds[i];
        allIds.push(currentId);
    }
    for (let i = 0; i<date4SelectionIds.length; i++) {
        currentId = date4SelectionIds[i];
        allIds.push(currentId);
    }
    var allIdsString = "";
    for (let i =0; i<allIds.length; i++) {
        var currentId = allIds[i];
        if (i == 0) allIdsString = currentId;
        else allIdsString = allIdsString + ","+currentId
    }
    var allIdsTxtBox = NWF$('#'+ctl_txt_allSelectedIds);
    allIdsTxtBox.val(allIdsString).trigger("blur"); 
    checkForDupeIds(allIds);
}
async function checkForDupeIds(allIds) {
    var uniqueIds = [];
    for (let i = 0; i<allIds.length; i++) {
        var currentId = allIds[i];
        var dupeIdTxtBox = NWF$('#'+ctl_txt_duplicateIdsBool);
        dupeIdTxtBox.val("false").trigger("blur");
        if (!(uniqueIds.includes(currentId))) uniqueIds.push(currentId);
        else if (uniqueIds.includes(currentId)){
            var dupeIdTxtBox = NWF$('#'+ctl_txt_duplicateIdsBool);
            dupeIdTxtBox.val("true").trigger("blur");
            break;
        }
    }
}

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
    }
    
}