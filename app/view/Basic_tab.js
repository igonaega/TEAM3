Ext.define('team3.view.Basic_tab', {
    extend: 'Ext.Panel',
    xtype: 'Basic_tab',
    
    config: {
    	title: 'Blog',
        iconCls: 'star',
        
    	items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Tab'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'spacer',
                        ui: ''
                    },
                    {
                        xtype: 'button',
                        iconCls: 'arrow_left',
                        iconMask: true,
                        text: '이전'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'home',
                        iconMask: true,
                        text: ''
                    },
                    {
                        xtype: 'button',
                        iconCls: 'refresh',
                        iconMask: true,
                        text: ''
                    },
                    {
                        xtype: 'button',
                        iconAlign: 'right',
                        iconCls: 'arrow_right',
                        iconMask: true,
                        text: '다음'
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            }
        ]
    }

});