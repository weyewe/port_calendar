Ext.define('AM.view.calendar.Basic', {
    extend: 'Extensible.calendar.CalendarPanel',
		alias : 'widget.basicCalendar',
    title: 'Basic  Haha Calendar' ,

		initComponent: function(){
			// this.eventStore = Ext.create('Extensible.calendar.data.MemoryEventStore', { 
			// 	data:Extensible.calendar.data.Events.getData() 
			// });
			this.eventStore = Ext.create('AM.store.Events');


			// this.calendarStore =   	Ext.create('Extensible.calendar.data.MemoryCalendarStore', {
			// 	data: Extensible.calendar.data.Calendars.getData()  
			// });
			
			this.calendarStore =  Ext.create('AM.store.Calendars'); 

			this.callParent( arguments );
			
		}
		// eventStore :   Ext.create('Extensible.calendar.data.MemoryEventStore', {
		//         // defined in ../data/EventsCustom.js
		//         // data:Extensible.example.calendar.data.EventsCustom.getData() // Ext.create('Extensible.example.calendar.data.EventsCustom')
		//     data:Extensible.calendar.data.Events.getData() 
		// }),
		// eventStore : Ext.create('AM.store.Events') 
		// calendarStore : 		Ext.create('Extensible.calendar.data.MemoryCalendarStore', {
		// 		        // defined in ../data/CalendarsCustom.js
		// 		        data: Extensible.example.calendar.data.CalendarsCustom.getData() // Ext.create('Extensible.example.calendar.data.CalendarsCustom')
		// 		    })
		// eventStore : 'Events',
		// calendarStore : 'Calendars'
});