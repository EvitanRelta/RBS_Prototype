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
