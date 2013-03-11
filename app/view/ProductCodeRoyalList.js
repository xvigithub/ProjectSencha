Ext.define('CocaCola.view.ProductCodeRoyalList', {
	extend: 'Ext.List',
	xtype: 'royalList',

	config: {
		xtype: 'list',
		store: 'ProductCodeRoyalStore',
		itemTpl: '{code} - {name}'
	}
})