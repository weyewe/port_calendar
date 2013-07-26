Ext.define('AM.view.calendar.Basic', {
    extend: 'Extensible.calendar.CalendarPanel',
		alias : 'widget.basicCalendar',
    title: 'Basic  Haha Calendar' ,

		initComponent: function(){ 
			this.eventStore = Ext.create('AM.store.Events');
 			console.log("The event store");
			console.log( this.eventStore ) ;
			
			this.calendarStore =  Ext.create('AM.store.Calendars'); 
			
			this.callParent( arguments );
			
		} 
});