Ext.define("AM.view.Viewport" , {
	extend : "Ext.container.Viewport",
	alias : 'widget.vp',
	
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	// initComponent: function(){
	// 	console.log("inside initComponent");
	// 	
		// this.eventStore = Ext.create('Extensible.calendar.data.MemoryEventStore', {
		// 	        // defined in ../data/Events.js
		// 	        data: Extensible.calendar.data.Events.getData()
		// 	    });
	// 	// 	
	// 	// console.log("ending initComponent");
	// 	// console.log(this.eventStore);
	// 
	// },
	// 
	 
	items  : [
		{
			html : "First",
			xtype : 'panel',
			flex : 1 
		},
		{
			html : "Second",
			xtype : 'panel',
			flex: 1 
		},
		
		{
			xtype: 'basicCalendar', 
			flex: 5 
		},
		// {
		// 	xtype : 'basicCalendar'
		// }
	]
});
