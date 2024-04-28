## Room creation side

You will be handling staffPage.html

Room creation side requires:
1. Room creation system
    * A way to designate a location and its attributes (eg, A.1.08, capacity, available from 2pm-6pm)
    * A way to schedule the room for release (eg, only can be booked from 1pm onwards)
    * Assigning a $/hr cost for renting/bookng the room (help me leave a comment line here or write me a text what you'll name this function so I can find this easily)
    * This should attempt to CREATE a new list on the main page.  
    * optional: A method to show that the staff created a time slot could be to change the background tiles for a chosen time period on the targeted location.  
    * optional: A way to force format types (eg time, cost etc must be in numbers). This usually has to be during the input stage. You'll need this for (2.) too.
    * optional: A way to add remarks to about the location (eg, "last thursday got house fire")
2. Room modification system
    * A way to remove a room for booking
    * A way to modify the location, time period, time scheduled to release, cost, etc.
        * If strapped for time or really don't know, drop modifications to time period and scheduling.
    * This should attempt to MODIFY a list that's already on the given calendar
3. PromoCode Creation system
    * A way to CREATE PromoCodes by assigning a string to a discount value. 
        * You can create a simple system to generate PromoCodes first (eg ABC123 gives a 20% discount -- store it in an Array with 'ABC123', 0.2. if need be, can modify after both ends are done)
        * For simplicity, these codes will be "permanent" and Global use (not assigned to a specific room)
* Additional Considerations (optional):
    * Display username(staff123) as a greeting
    * A way to track earnings from bookings, if needed. At most, funny editing part 3
* Stuff in the code that could help:
    * For (1.), there is a prototype room adding system i made in debugPanel.js under addTable(). You can edit that to be usable for (1.), but hopefully add some of the optional tags too.
    * Check the format in debugPanel's addTable() to see the data format.
    * There's a function in localStorageHandler.js that lets you do "storeData('key',name). You can use this to store your created rooms. Refer to addTable() if you need it to be a bit clearer.
    * For (2.), in debugPanel.js under hardReset(), the code CLEARS all tables at once. If possible, you'd want to try to clear a certain index within the array instead. For example, referring to resetTable(), A.2.06A is the second index in tableStorage. You could try finding a method to tableStorage.splice(1, 1) from a button. It might be helpful to find a method to index, or determine which button is to which table (eg one remove button per room).

    (do take note that it may not be named as tableStorage elsewhere. you can declare it as you'd like within a function itself, as long as it is not a global declaration elsewhere)

    * If there are any sections where you create a temporary test function, eg to test how value works, promocodes etc, please mark them out for me so I'm aware of them during merge process.