Ext.define('CocaCola.store.ProductCodeRoyalStore', {
	extend: 'Ext.data.Store',

	config: {
		model: 'CocaCola.model.ProductCodeModel',
		data: [
			{
				code: 'R101',
				name: 'Royal 8oz'
			},
			{
				code: 'R102',
				name: 'Royal 12oz'
			},
			{
				code: 'R103',
				name: 'Royal 22oz'
			},
			{
				code: 'R104',
				name: 'Royal 1L'
			},
			{
				code: 'R105',
				name: 'Royal 1.5L'
			}
		]
	}
})