Ext.define("team3.view.Basic_Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    xtype : 'Basic_Main',

    config: {
        tabBarPosition: 'bottom',

        items: [
            {
            	xtype: 'Basic_tab'
            },
        ]
    }
});
