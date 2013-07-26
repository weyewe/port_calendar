

Ext.define('AM.store.Calendars', {
			// model: 'Extensible.calendar.data.EventModel',
			extend: 'Extensible.calendar.data.MemoryCalendarStore',
     // data : Extensible.calendar.data.Calendars.getData()  

data: Extensible.example.calendar.data.CalendarsCustom.getData()
			 
 });
