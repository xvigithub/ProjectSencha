Ext.define('CocaCola.view.CategoryList', {
	extend: 'Ext.List',
	alias: 'widget.categoryList',

	config: {

		items:[
			{
				xtype: 'searchfield',
				placeHolder: 'Enter category name...',
				docked: 'top',
				itemId: 'searchBox'
			}
		],

		xtype: 'list',
		store: 'CategoriesStore',
		itemTpl : '{name}'
	}
})