

Ext.define('AM.store.Events', {
			// model: 'Extensible.calendar.data.EventModel',
			extend: 'Extensible.calendar.data.MemoryEventStore',
     // data :  Extensible.calendar.data.Events.getData() ,

data: Extensible.example.calendar.data.EventsCustom.getData()
			 
 });
