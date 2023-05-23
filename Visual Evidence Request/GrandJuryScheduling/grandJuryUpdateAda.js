
NWF$().ready(function () {
    var requesterTitle = NWF$("#"+ctl_requesterTitle);
    var titleVal = requesterTitle.val();
    updateFields(titleVal);
  NWF$('.ctl_requesterTitle').change(function() {
    console.log('changed');
    var requesterTitle = NWF$("#"+ctl_requesterTitle);
    var titleVal = requesterTitle.val();
    updateFields(titleVal);
    });
    NWF$('.ctl_btn_changeAda').change(function() {
        var emptyString = "";
        NWF$('#'+adaName).val(emptyString).trigger("blur");
    });
});
async function updateFields(titleVal) {
    console.log(titleVal);
    if (titleVal.includes("ADA")) {
        var theRequestor = NWF$('#'+requester);
        NWF$('#'+adaName).val(theRequestor.val()).trigger("blur");
    }
}
