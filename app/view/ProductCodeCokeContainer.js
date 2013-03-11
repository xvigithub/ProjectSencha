Ext.define('CocaCola.view.ProductCodeCokeContainer', {
    extend: 'Ext.Panel',
    xtype: 'productCodeCokeContainer',

	config: {
		title: 'SKU - Coke',
		layout: 'fit',
		scrollable: true,
		items: [
			{
				xtype: 'cokeList'
			}
		]
	}
})