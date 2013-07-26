// Ext.define('AM.store.Events', {
// 			// model: 'Extensible.calendar.data.EventModel',
// 			extend: 'Extensible.calendar.data.MemoryEventStore',
//      // data :  Extensible.calendar.data.Events.getData() ,
// 
// 			data: Extensible.example.calendar.data.EventsCustom.getData(),
// 			 
// });
// 
// 
// this.eventStore = Ext.create("Extensible.calendar.data.EventStore", {
//     id: "event-store",
//     proxy: this.eventProxy,
//     autoLoad: true
// });

Ext.define('AM.store.Events', {
			// model: 'Extensible.calendar.data.EventModel',
			extend: 'Extensible.calendar.data.EventStore',
			id: "event-store", 
			
	    autoLoad: true,
	
			idProperty: 'id' ,
			
			
			// proxy: this.eventProxy,
			
			// this.eventProxy = Ext.create("Ext.data.proxy.Ajax", {
			//           noCache: false,
			//           model: "Extensible.calendar.data.EventModel",
			//           api: {
			//               read: b.apiRoot + "read/key/" + b.appKey,
			//               create: b.apiRoot + "create/key/" + b.appKey,
			//               update: b.apiRoot + "update/key/" + b.appKey,
			//               destroy: b.apiRoot + "destroy/key/" + b.appKey
			//           },
			//           reader: {
			//               type: "json",
			//               root: "data"
			//           },
			//           writer: {
			//               type: "json",
			//               nameProperty: "mapping"
			//           },
			//           pageParam: undefined,
			//           startParam: undefined,
			//           limitParam: undefined,
			//           listeners: {
			//               exception: function (k, j, m, c) {
			//                   var l = j.message ? j.message : Ext.decode(j.responseText).message;
			//                   Ext.Msg.alert("Server Error", l)
			//               }
			//           }
			//       });
			// 

			
			
			proxy: {
				url: 'api/bookings',
				type: 'rest',
				format: 'json',

				reader: {
					root: 'bookings',
					successProperty: 'success',
					totalProperty : 'total'
				},

				writer: {
					getRecordData: function(record) {
						return { booking : record.data };
					}
				}
			}
			
			
			
	
});