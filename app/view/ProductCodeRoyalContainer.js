Ext.define('CocaCola.view.ProductCodeRoyalContainer', {
    extend: 'Ext.Panel',
    xtype: 'productCodeRoyalContainer',

	config: {
		title: 'SKU - Royal',
		layout: 'fit',
		scrollable: true,
		items: [
			{
				xtype: 'royalList'
			}
		]
	}
})