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
			xtype : 'panel',
			flex :  5, 
			layout : {
				type : 'hbox',
				align : 'stretch'
			},
			items : [
				{
					flex : 1,
					xtype: 'datepicker' 
				},
				{
					xtype: 'basicCalendar', 
					flex: 5 
				}
			]
		}
		
		// {
		// 	xtype: 'basicCalendar', 
		// 	flex: 5 
		// } 
	]
});
