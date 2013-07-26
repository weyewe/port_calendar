Ext.define("AM.view.Viewport" , {
	extend : "Ext.container.Viewport",
	alias : 'widget.vp',
	
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	 
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
