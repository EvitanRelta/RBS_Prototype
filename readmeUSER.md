## Room booking side

You will be handling userPage.html

Room booking side requires:
1. Room booking system
    * A way to book a room that's CURRENTLY active and open for booking
    * You don't have to make the user book ALL timeslots at once (eg if a booking is available from 2pm-6pm, maybe i only want to book it from 3pm-4pm)
    * Calculate total cost of booking (I'll merge the creation and booking side's code at the end, just create an arbitrary and temporary design first if needed to simulate it. Leave a comment line close to it in case I can't find it though.)
    * A way to USE PromoCodes before checkout. 
        * You can create a temporary PromoCode for self-testing if you wish to help with this part, but at minimum just help me make a simple framework for this (eg when calculating totalCostX with discountPercentageY, x = x * (1-y))
    * This should attempt to create a "booked section" within a list on the mainb page
    * optional: A method to show that the user booked a certain time slot could be to change the background tiles for a chosen time period on the location code targeted
2. Booking modification system
    * A way to cancel a booking and possible credit refunds if this was done
        * optional: cannot cancel if time is close to booking time (eg, it's 1:59pm, can't cancel a 2pm booking)
        * In order to work with this optional task, you likely need to make a "Mock clock".
    * A way to modify the time period booked and possible credit refunds if this was done
        * To note, it should not change to a time "behind" present. At most, funny editing part 3
        * If strapped for time or really don't know, drop the time period modification and just have a method of cancellation.  
        * optional: cannot change if time is close to booking time (eg, it's 1:59pm, can't change a 2pm booking)
* Additional Considerations (optional):
    * Do take note that most of your page is a direct mirror of staffPage.html, with a few changes. 
    * Display username(user123) as a greeting
* Stuff in the code that could help:
    * The localStorageHandler has a function "retrieveData('tableStorage')" that will pull most of the data out, this is in a nested array. Using a foreach function, you should be able to lay out each of the arrays linearly and handle them. This could be useful for measuring the "available time slots" in (1.). A (somewhat messy) example can be seen in tableCreator.js, using a foreach funcion to access a specific index.
    * Also in the localStorageHandler, there's a "storeData('key', data)". You can likely use that to store user data instead (eg with storeData('userData', data). This stores data under a key named userData.)
    * If you wish to view what is stored in Local Storage, right click inspect the page, go to "Application" and look for the Local Storage there. It should provide an idea of what the Key and Data pair looks like.
    * In debugPanel.js, there's a function addTable(). There's a simple checker there to ensure that the user does not attempt to create a room with an already existing ID that uses .toUpperCase(). You can reimplement that to ensure the user does not attempt to create a booking for the same room twice.
    * If there are any sections where you create a temporary test function, eg to test how value works, promocodes etc, please mark them out for me so I'm aware of them during merge process.