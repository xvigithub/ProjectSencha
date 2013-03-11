Ext.define('CocaCola.view.CategoryList', {
	extend: 'Ext.List',
	xtype: 'categoryList',

	config: {
		xtype: 'list',
		store: 'CategoriesStore',
		itemTpl : '{name}'
	}
})