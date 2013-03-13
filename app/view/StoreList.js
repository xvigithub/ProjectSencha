Ext.define('CocaCola.view.StoreList', {
	extend: 'Ext.List',
	alias: 'widget.storeList',

	config: {
		
		items: [
			{
				xtype: 'searchfield',
				placeHolder: 'Enter store name...',
				docked: 'top',
				itemId: 'searchBox'
			}
		],
		xtype: 'list',
		store: 'StoreStore',
		itemTpl: '{name}'
	}
})