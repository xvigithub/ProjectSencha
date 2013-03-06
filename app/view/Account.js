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
							title: 'Tasks',
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
                                	label: 'Task 3'
                                }, {
                                	xtype: 'checkboxfield',
                                	label: 'Task 4'
                                }, {
                                	xtype: 'checkboxfield',
                                	label: 'Task 5'
                                }
                        	]
                        },

						{
							xtype: 'fieldset',
							title: 'Shifts',
							items: [
                                {
                                	xtype: 'radiofield',
                                	label: 'Morning Shift',
                                	name: 'shift',
                                	value: 'morning',
                                	checked: true
                                },
								{
									xtype: 'radiofield',
									label: 'Night Shift',
									name: 'shift',
									value: 'night'
								},
								{
									xtype: 'radiofield',
									label: 'None',
									name: 'shift',
									value: 'none'
								},
							]
						}
                	]
                }
        	]
        }
})