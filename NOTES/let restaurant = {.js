let restaurant = {
    name:'ASB',
    guestCapacity:75,
    guestCount:0,
    checkAvailability: function(partySize){
        let seatsleft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft
    },
    seatParty:function(partySize){
        this.guestCount = this.guestCount + (partySize)
        }
        removeParty:function (partySize){
            this.guestCount = this.guestCount -partySize
        
}
restaurant.seatParty(73)
console.log(restaurant.checkAvailability(1));