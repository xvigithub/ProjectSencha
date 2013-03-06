Ext.define('Sencha.view.Settings', {
    extend: 'Ext.form.FormPanel',
    xtype: 'settingsPanel',

    config: {
        iconCls: 'settings',
        title: 'Settings',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Settings',
                items: [
                    {
                        text: 'Save'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        name: 'name'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'togglefield',
                        label: 'Wifi',
                        name: 'wifi'
                    }
                ]
            }
        ]
    }
})