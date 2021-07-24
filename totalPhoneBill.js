function totalPhoneBill(cost) {
    var call = [];
    var sms = [];
    const phoneBill = cost.split(", ");
    //console.log(phoneBill);

    for (var i=0; i<phoneBill.length;i++) {
        var billLogs = phoneBill[i];
        if (billLogs == 'call') {
            call.push(billLogs);
        } else if (billLogs == 'sms') {
            sms.push(billLogs);
        }
    }
    let total = (call.length*2.75) + (sms.length*0.6)
return "R" + total.toFixed(2);
}