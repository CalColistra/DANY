NWF$().ready(function () {
    console.log("NEW FORM INSTANCE");
    NWF$('.dvrDifferences').change(function() {
        calcDiff();
        });
    NWF$('.realTimeDifferences').change(function() {
        calcDiff();
        });
  });

async function calcDiff() {

    var dvrVals = NWF$(".dvrDifferences input").val();
    var dvrValsArr = [];
    var dvrValsLen = dvrVals.length;
    if (dvrValsLen > 2){
        for (let i = 1; i < dvrValsLen; i++) {
            var currentNum = '';
            var currentChar = dvrVals[i];
            while ((currentChar != ',') && (currentChar != ']')&& (i < dvrValsLen)) {
                currentNum = currentNum + dvrVals[i];
                i = i + 1;
                currentChar = dvrVals[i];
            }
            if ((currentNum != ',') && (currentNum != ']')&&(currentNum != '')&&(currentNum != undefined)) {
                currentNum = parseFloat(currentNum);
                dvrValsArr.push(currentNum.toFixed(2));
            }
        }
    }
    
    var realTimeVals = NWF$(".realTimeDifferences input").val();
    var realTimeValsArr = [];
    var realTimeValsLen = realTimeVals.length;

    if (realTimeValsLen > 2) {
        for (let i = 1; i < realTimeValsLen; i++ ) {
            var currentNum = '';
            var currentChar = realTimeVals[i];
            while ((currentChar != ',') && (currentChar != ']') && (typeof currentChar != undefined)&&(i<realTimeValsLen)&&(currentChar!=NaN)){
                currentNum = currentNum + realTimeVals[i];
                i = i + 1;
                currentChar = realTimeVals[i];
            }
            if ((currentNum!=NaN) && (typeof currentNum != NaN)&&(currentNum!='')){
                realTimeValsArr.push(parseFloat(currentNum));
            }
        }
    }
    
    var finalArr = [];
    if (dvrValsArr.length > 0) {
        for (let i = 0; i < dvrValsArr.length; i++) {
            finalArr.push(parseFloat(dvrValsArr[i]));
        }
    }

    if (realTimeValsArr.length > 0) {
        for (let i = 0; i < realTimeValsArr.length; i++) {
            finalArr.push(parseFloat(realTimeValsArr[i]));
        }
    }

    var totalDiff = 0;
    if (finalArr.length > 0) {
        for (let i = 0; i < finalArr.length; i++) {
            totalDiff = totalDiff + finalArr[i];
        }
    }
   var showDiff = NWF$('#'+totalDuration);
   showDiff.val(totalDiff);
}