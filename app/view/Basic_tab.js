Ext.define('team3.view.Basic_tab', {
		extend: 'Ext.Panel',
		xtype: 'Basic_tab',
		
		
		config: {
			//title: '이전단계',
			iconCls: 'arrow_left',
			//cls: 'home',
			//iconMask : true,
			iconAlign : 'left',
			
			scrollable: true,
			styleHtmlContent: true,
			
			items: {
				docked : 'top',
				xtype : 'titlebar',
				title: 'Tab'
			},
			
	        html: [
	           '<img src="http://staging.sencha.com/img/sencha.png" />',
	        ].join(""),
	        
	        listeners: {
	        	touchstart: {
					fn:function(event) {
						console.log("touchstart:" + event.touch.pageX + "," + event.touch.pageY);
					},
					element: "element"						
				},
	        }
		}
	});
