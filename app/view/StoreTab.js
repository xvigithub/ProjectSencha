Ext.define('CocaCola.view.StoreTab', {
	extend: 'Ext.Panel',
	xtype: 'storeTab',

	config: {
		layout: 'fit',
		title: 'Stores',

		items: [
			{
				xtype: 'spacer'
			},
			{
				xtype: 'storeList'
			}
		]
	}
})