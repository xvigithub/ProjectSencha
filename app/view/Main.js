Ext.define('CocaCola.view.Main', {
	extend: 'Ext.TabPanel',
	
	config:
		{
			tabBarPosition: 'bottom',
			items: [
				{
					xtype: 'home',
				},
				{
					xtype: 'task'
				},
				{
					xtype: 'account'
				}
			],
			
		}
})