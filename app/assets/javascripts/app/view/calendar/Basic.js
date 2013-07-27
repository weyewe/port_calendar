Ext.define('AM.view.calendar.Basic', {
    extend: 'Extensible.calendar.CalendarPanel',
		alias : 'widget.basicCalendar',
    title: 'Basic  Haha Calendar' ,
		// eventStore: Ext.create('AM.store.Events'), 
		// calendarStore : Ext.create('AM.store.Calendars'),
		readOnly : true, 

		initComponent: function(){ 
			var me = this; 
			var calendar = this; 
			console.log("Creating eventStore");
			var resultObject = {
				'name' : 'willy',
				'who' : 'awesome'
			} 
			this.eventStore = Ext.create('AM.store.Events');
			
			 			console.log("The events store");
			 				console.log( this.eventStore ) ;
			 				
			 				this.eventStore.addListener('load', function(store, operation, calendar, resultObject ){
								console.log("*********** awesome inside eventStore load callback");
			 					console.log("The event store loaded");
								var viewport = Ext.ComponentQuery.query('viewport')[0];
								// viewport.setLoading( false ) ;
								viewport.fireEvent("eventsStoreLoaded");
			 					console.log(resultObject );
								console.log("after the calendar");
			 					// me.setLoading( true ); 
			 				}); 
			 				this.eventStore.addListener('beforeload', function(store,operation, resultObject ){
			 					console.log("Before event store load ")
			 					console.log(calendar ) ;
			 					// me.setLoading(false); 
								var viewport = Ext.ComponentQuery.query('viewport')[0];
								// viewport.setLoading( true ) ;
								viewport.fireEvent("beforeEventsStoreLoad");
			 				});
			
			
			console.log("Creating calendarStore");
			this.calendarStore =  Ext.create('AM.store.Calendars'); 
			
			this.callParent( arguments );
			
		} 
});