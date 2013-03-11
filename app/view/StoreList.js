Ext.define('CocaCola.view.StoreList', {
	extend: 'Ext.List',
	xtype: 'storeList',

	config: {
		xtype: 'list',
		store: 'StoreStore',
		itemTpl: '{name}'
	}
})