Ext.define('CocaCola.view.StoreContainer', {
	extend: 'Ext.Panel',
	xtype: 'storeContainer',

	config: {
		layout: 'fit',
		title: 'Stores',
		items: [
			{
				xtype: 'storeList'
			}
		]
	}
})