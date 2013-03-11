Ext.define('CocaCola.store.CategoriesStore', {
	extend: 'Ext.data.Store',

	config: {
		model: 'CocaCola.model.CategoryModel',
		data: [
			{
				name: 'Coke'
			},
			{
				name: 'Sprite'
			},
			{
				name: 'Royal'
			}
		]
	}
})