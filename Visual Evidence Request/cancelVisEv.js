NWF$().ready(function () {
    var status = NWF$('#'+status);
    var cancelStr = 'cancel';
    status.val(cancelStr).trigger("blur");
  });
function cancel() {
    alert("in cancel");
    var status = NWF$('#status');
    var cancelStr = 'cancel';
    status.val(cancelStr).trigger("blur");
    }