Ext.define('CocaCola.view.ProductCodeSpriteList', {
	extend: 'Ext.List',
	xtype: 'spriteList',

	config: {
		xtype: 'list',
		store: 'ProductCodeSpriteStore',
		itemTpl: '{code} - {name}'
	}
})