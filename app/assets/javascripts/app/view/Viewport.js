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
			flex : 1,
			id : 'indicator'
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
