Ext.define('CocaCola.view.CategoryContainer', {
	extend: 'Ext.Panel',
	xtype: 'categoryContainer',

	config: {
		title: 'Category',
		layout: 'fit',
		scrollable: true,
		items: [
			{
				xtype: 'categoryList'
			}
		]
	}
})