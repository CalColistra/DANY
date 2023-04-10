NWF$().ready(function () {
    console.log("NEW INSTANCE");
    NWF$('.dvrDifferences').change(function() {
        calcDiff();
        });
    NWF$('.realTimeDifferences').change(function() {
        calcDiff();
        });
  });

async function calcDiff() {
    var dvrVals = NWF$(".dvrDifferences input").val();
    console.log("dvr values (STRING): "+dvrVals);
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
                console.log("pushing DVR: "+currentNum);
                currentNum = parseFloat(currentNum);
                
                dvrValsArr.push(currentNum.toFixed(2));
            }
        }
    }
    
   
    var realTimeVals = NWF$(".realTimeDifferences input").val();
    console.log("realTime values (STRING): "+realTimeVals);
/*
    var realTimeValsArr = [];
    var realTimeValsLen = realTimeVals.length;

    if (realTimeValsLen > 2){
        for (let i = 1; i < realTimeValsLen; i++) {
            var currentNum = '';
            var currentChar = realTimeValsArr[i];
            console.log(currentChar);
            while ((currentChar != ',') && (currentChar != ']') && (i < realTimeValsLen)) {
                currentNum = currentNum + realTimeValsArr[i];
                i = i + 1;
                currentChar = realTimeValsArr[i];
            }
            if ((currentNum != ',') && (currentNum != ']')&&(currentNum != '')&&(currentNum != undefined)) {
                console.log("pushing RealTime: "+currentNum);
                currentNum = parseFloat(currentNum);
                
                realTimeValsArr.push(currentNum.toFixed(2));
            }
            
        }
    }

    console.log("realTimeArr: ");
    console.log(realTimeValsArr);
*/
    
    var finalArr = [];
    if (dvrValsArr.length > 0) {
        for (let i = 0; i < dvrValsArr.length; i++) {
            finalArr.push(parseFloat(dvrValsArr[i]));
        }
    }
    console.log("DVRArr: ");
    console.log(dvrValsArr);
    console.log(typeof(finalArr[0]));
/*
    if (realTimeValsArr.length > 0) {
        for (let i = 0; i < realTimeValsArr.length; i++) {
            finalArr.push(realTimeValsArr[i]);
        }
    }
*/
    var totalDiff = 0;
    if (finalArr.length > 0) {
        for (let i = 0; i < finalArr.length; i++) {
            totalDiff = totalDiff + finalArr[i];
        }
    }
   var showDiff = NWF$('#'+totalDuration);
   showDiff.val(totalDiff);
}