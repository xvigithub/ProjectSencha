Ext.define('CocaCola.store.StoreStore', {
	extend: 'Ext.data.Store',

	config: {
		model: 'CocaCola.model.StoreModel',
		autoLoad: true,
		data: [
			{
				name: 'Shopwise'
			},
			{
				name: 'Unimec'
			},
			{
				name: 'Super8'
			},
			{
				name: 'Pure Gold'
			},
			{
				name: 'Walter Mart'
			}
		]
	}
})