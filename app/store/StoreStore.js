Ext.define('CocaCola.store.StoreStore', {
	extend: 'Ext.data.Store',

	config: {
		model: 'CocaCola.model.StoreModel',
		data: [
			{
				name: 'Shopwise'
			},
			{
				name: 'Rustans'
			},
			{
				name: 'PureGold'
			},
			{
				name: 'Super8'
			},
			{
				name: 'UniMec'
			},
		]
	}
})