Ext.define("AM.controller.Calendars", {
	extend : "Ext.app.Controller",
	views : [
		"calendar.Basic",
		'Viewport' 
	],
	 
	
	refs: [
		{
			ref: 'viewport',
			selector: 'vp'
		} ,
		{
			ref : 'basicCal',
			selector : 'basicCalendar'
		}
	],
	
 
	onLaunch : function(){
	 
		
	},
	
	
	onViewportLoaded: function(){
		console.log("onViewportLoaded");
		var me = this;
		
		var basicCal = this.getBasicCal();
		console.log('the basicCal');
		console.log( basicCal ) ;
		
		// basicCal.eventStore =   Ext.create('Extensible.calendar.data.MemoryEventStore', {
		//         // defined in ../data/EventsCustom.js
		//         // data:Extensible.example.calendar.data.EventsCustom.getData() // Ext.create('Extensible.example.calendar.data.EventsCustom')
		//     data:Extensible.calendar.data.Events.getData() 
		// });
			
			
	},
	
	addEventStoreToCalendar: function(){
		console.log("==========>addEventStoreToCalendar ")
		var basicCal = this.getBasicCal();
		console.log('the basicCal');
		console.log( basicCal ) ;
		
		basicCal.eventStore =   Ext.create('Extensible.calendar.data.MemoryEventStore', {
		        // defined in ../data/EventsCustom.js
		        // data:Extensible.example.calendar.data.EventsCustom.getData() // Ext.create('Extensible.example.calendar.data.EventsCustom')
		    data:Extensible.calendar.data.Events.getData() 
		});
	},
	
	init : function( application ) {
		var me = this; 
		
		me.control({
		 
			'vp' : {
				'render' : this.onViewportLoaded
			} ,
			
			'basicCalendar' : {
				'beforerender': this.addEventStoreToCalendar
			}
		});
	},
  
});