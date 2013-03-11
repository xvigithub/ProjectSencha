Ext.define('CocaCola.view.ProductCodeCokeList', {
	extend: 'Ext.List',
	xtype: 'cokeList',

	config: {
		xtype: 'list',
		store: 'ProductCodeCokeStore',
		itemTpl: '{code} - {name}'
	}
})