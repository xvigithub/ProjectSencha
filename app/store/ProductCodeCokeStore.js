Ext.define('CocaCola.store.ProductCodeCokeStore', {
	extend: 'Ext.data.Store',

	config: {
		model: 'CocaCola.model.ProductCodeModel',
		data: [
			{
				code: 'C101',
				name: 'Coke Zero 12oz'
			},
			{
				code: 'C102',
				name: 'Coke Lite 22oz'
			},
			{
				code: 'C103',
				name: 'Coke Litro'
			},
			{
				code: 'C104',
				name: 'Coke Sakto'
			},
			{
				code: 'C105',
				name: 'Coke 1.5L'
			}
		]
	}
})