## Room booking side
Room booking side requires:
1. Room booking system
    * A way to book a room that's CURRENTLY active and open for booking
    * You don't have to make the user book ALL timeslots at once (eg if a booking is available from 2pm-6pm, maybe i only want to book it from 3pm-4pm)
    * Calculate total cost of booking (I'll merge the creation and booking side's code at the end, just create an arbitrary and temporary design first if needed to simulate it. Leave a comment line close to it in case I can't find it though.)
    * A way to USE PromoCodes before checkout. 
        * You can create a temporary PromoCode for self-testing if you wish to help with this part, but at minimum just help me make a simple framework for this (eg when calculating totalCostX with discountPercentageY, x = x * (1-y))
    * This should attempt to create a "block" within a list on the calendar page
    * A method to show that the user booked a certain time slot could be to change the background tiles for a chosen time period on the calendar
2. Booking modification system
    * A way to cancel a booking and possible credit refunds if this was done
        * optional: cannot cancel if time is close to booking time (eg, it's 1:59pm, can't cancel a 2pm booking)
    * A way to modify the time period booked and possible credit refunds if this was done
        * To note, it should not change to a time "behind" present. At most, funny editing part 3
        * If strapped for time or really don't know, drop the time period modification and just have a limited method of cancellation (can only cancel if >xMinutes before booking time)
        * optional: cannot change if time is close to booking time (eg, it's 1:59pm, can't change a 2pm booking)
* Additional Considerations:
    * Display username(user123) as a greeting, but we need to standardise this, just in case
    * 
