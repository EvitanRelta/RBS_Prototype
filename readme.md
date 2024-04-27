# RBS Prototype
Attempt at an oversimplified room booking system using JavaScript/HTML/CSS

# **please don't upload this with the final code. once you read it you'll likely see why but basically i included some stuff for you to consider as a possible alternative "solution". we likely only need to dump code that's only in the .html and .js anyway**

## Things to note in general
If there's something you find yourself unable to do, it's alright to ask around, we're all learning and also likely confused.  
There is no need to optimise any of your code. Pre-Optimisation can be bad most of the times and you can Google about it, but basically don't optimise for 0 customers. You can go for the least efficient, most wordy system ever if you want to, I won't judge.  
I do not mind if you wish to use a LLM to generate your code (eg ChatGPT or it's alternatives, I won't snitch). Though, use it at your own/the group's risk if you are unable to explain your own code to yourself or the group.  
If you are unable to find a way to make, for example, A.1.08 be ready for booking or able to be booked at 2pm Real Life time, don't worry. At most we'll just make the video presentation "look like it works at 1:30pm". funny editing :)  
There will likely be no database. Most of this will either be output into a text file or, well, funny editing part 2. Open to discussion.  

## Room creation side
Room creation side requires:
1. Room creation system
    * A way to designate a location and its attributes (eg, A.1.08, capacity, available from 2pm-6pm)
    * A way to schedule the room for release (eg, only can be booked from 1pm onwards)
    * Assigning a $/hr cost for renting/bookng the room (help me leave a comment line here or write me a text what you'll name this function so I can find this easily)
    * This should attempt to CREATE a new list on the calendar page. Could try appending with a jQuery
    * A method to show that the staff created a time slot could be to change the background tiles for a chosen time period on the calendar
    * optional: a way to add remarks to about the location (eg, "last thursday got house fire")
2. Room modification system
    * A way to remove a room for booking
    * A way to modify the location, time period, time scheduled to release, cost, etc.
        * If strapped for time or really don't know, drop modifications to time period and scheduling.
    * This should attempt to MODIFY a list that's already on the given calendar
3. PromoCode Creation system
    * A way to CREATE PromoCodes by assigning a string to a discount value. 
        * You can create a simple system to generate PromoCodes first (eg ABC123 gives a 20% discount -- store it in an Array with 'ABC123', 0.2. if need be, can modify after both ends are done)
        * For simplicity, these codes will be "permanent" and Global use (not assigned to a specific room)
* Additional Considerations:
    * Display username(staff123) as a greeting, but we need to standardise this, just in case
    * A way to track earnings from bookings, if needed. At most, funny editing part 3

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

## Menu (Leave for last)
Menu requires:

More details to be added here as project progresses
