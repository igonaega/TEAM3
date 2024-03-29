/*
 * File: app/view/Root.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.Root', {
    extend: 'Ext.Container',

    config: {
        id: 'Root',
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'panel',
                id: 'Menu',
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        title: '차 례'
                    },
                    {
                        xtype: 'button',
                        itemId: 'button_Chapter1',
                        ui: 'round',
                        text: 'Chapter1'
                    }
                ]
            },
            {
                xtype: 'panel',
                id: 'ContentView1',
                layout: {
                    type: 'card'
                },
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        defaults: {
                            iconMask: true,
                            ui: 'plain'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'Toolbar_Pre',
                                iconCls: 'arrow_left',
                                iconMask: true,
                                text: '이전으로'
                            },
                            {
                                xtype: 'button',
                                itemId: 'Toolbar_Home',
                                iconAlign: 'center',
                                iconCls: 'home',
                                iconMask: true
                            },
                            {
                                xtype: 'button',
                                itemId: 'Toolbar_Refresh',
                                iconAlign: 'center',
                                iconCls: 'refresh',
                                iconMask: true
                            },
                            {
                                xtype: 'button',
                                itemId: 'Toolbar_Next',
                                iconAlign: 'right',
                                iconCls: 'arrow_right',
                                iconMask: true,
                                text: '다음으로'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        id: 'page0',
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                title: '탭'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        id: 'page1',
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                title: '더블 탭'
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onButton_Chapter1Tap',
                event: 'tap',
                delegate: '#button_Chapter1'
            },
            {
                fn: 'onToolbar_PreTap',
                event: 'tap',
                delegate: '#Toolbar_Pre'
            },
            {
                fn: 'onToolbar_HomeTap',
                event: 'tap',
                delegate: '#Toolbar_Home'
            },
            {
                fn: 'onToolbar_NextTap',
                event: 'tap',
                delegate: '#Toolbar_Next'
            }
        ]
    },

    onButton_Chapter1Tap: function(button, e, options) {
        Ext.getCmp('Root').setActiveItem(1);
    },

    onToolbar_PreTap: function(button, e, options) {
        var rootPanel = Ext.getCmp('ContentView1');//card속성을 가진 RootPanel
        var num_currentView = eval(rootPanel._activeItem.id.slice(4,5) - 1);//현재뷰에서 한칸 위로


        if( num_currentView < 0 ){
            alert( "홈으로 : ");

            num_currentView = 0;//초기화
            rootPanel.setActiveItem( Ext.getCmp('page' + num_currentView ) );
        }
        else{
            alert("이전으로");

            rootPanel.setActiveItem( Ext.getCmp('page' + num_currentView ) );
        }

    },

    onToolbar_HomeTap: function(button, e, options) {
        Ext.getCmp('Root').setActiveItem(0);
    },

    onToolbar_NextTap: function(button, e, options) {
        var rootPanel = Ext.getCmp('ContentView1');//card속성을 가진 RootPanel
        var num_currentView = eval(rootPanel._activeItem.id.slice(4,5) + 1);//현재뷰에서 한칸 위로


        if( num_currentView >= rootPanel.innerItems.length ){
            alert( "홈으로 : ");

            num_currentView = 0;//초기화
            rootPanel.setActiveItem( Ext.getCmp('page' + num_currentView ) );
        }
        else{
            alert("다음으로");

            rootPanel.setActiveItem( Ext.getCmp('page' + num_currentView ) );
        }

    }

});