Ext.define('Extensible.calendar.data.Calendars', {
    statics: {
        getData: function(){
            return {
                "calendars":[{
                    "id":    1,
                    "title": "Home",
										"color" : 2
                },{
                    "id":    2,
                    "title": "Work",
										"color" : 22
                },{
                    "id":    3,
                    "title": "School",
										"color" : 7
                }	,	{
		                    "id":    4,
		                    "title": "Sports",
												"color" : 26
		                }]
            };    
        }
    }
});