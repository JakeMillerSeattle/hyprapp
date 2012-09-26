var panels = Ext.create('Ext.TabPanel', {
    fullscreen: true,
    tabBarPosition: 'bottom',

    defaults: {
        styleHtmlContent: true
    },

	listeners: {
		tap: function (e) {
			console.log("boo!");
			picker.hide();
		} 
	},


    items: [
        {
			xtype: 'map',
            title: 'Location',
            iconCls: 'home',
            html: 'Loading map...'
        },
        {
            title: 'Scan',
            iconCls: 'user',
            html: 'Camera'
		 	
        },
		{
            title: 'History',
            iconCls: 'user',
            html: 'list of history',

        }
    ]
});



var picker = Ext.create('Ext.Picker', {
    slots: [
        {
            name : 'test',
            title: 'Are you here?',
            data : [
                {text: '50 KB/s', value: 50},
                {text: '100 KB/s', value: 100},
                {text: '200 KB/s', value: 200},
                {text: '300 KB/s', value: 300}
            ]
        }
    ]
});
panels.add(picker);
picker.show();



// var button = Ext.create('Ext.Button', {
//     iconCls: 'refresh',
//     iconMask: true,
// 	listeners : {
// 		tap : function() {
// 			console.log("Jake is an idiot.")
// 		}
// 	}
// });
// Ext.Viewport.add({ xtype: 'container', padding: 10, items: [button] });
