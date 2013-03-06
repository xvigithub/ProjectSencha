Ext.define('Sencha.view.Account', {
    extend: 'Ext.TabPanel',
    xtype: 'accountPanel',

    config:
        {
            iconCls: 'user',
            title: 'Account',

            items: [
                {
                    xtype: 'formpanel',
                    title: 'My Task',
                    scrollable: 'vertical',
                    items: [
                        {
                            xtype: 'fieldset',
                            items: [
                                {
                                    xtype: 'checkboxfield',
                                    label: 'Task 1',
                                    checked: true
                                },
                                {
                                    xtype: 'checkboxfield',
                                    label: 'Task 2',
                                    checked: true
                                }, {
                                    xtype: 'checkboxfield',
                                    label: 'Task 3',
                                    checked: true
                                }, {
                                    xtype: 'checkboxfield',
                                    label: 'Task 4',
                                    checked: true
                                }, {
                                    xtype: 'checkboxfield',
                                    label: 'Task 5',
                                    checked: true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
})