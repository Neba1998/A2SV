/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
      let onOffLog = []
    for(const [passengers, start, end] of trips)
        onOffLog.push([start, passengers], [end, -passengers])
    onOffLog.sort((a,b) => a[0] - b[0] || a[1] - b[1])
    let passengerCount = 0
    for(const [, people] of onOffLog){
        passengerCount += people
        if(passengerCount > capacity)
            return false
    }
    return true
};
