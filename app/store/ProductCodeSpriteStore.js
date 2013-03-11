Ext.define('CocaCola.store.ProductCodeSpriteStore', {
	extend: 'Ext.data.Store',

	config: {
		model: 'CocaCola.model.ProductCodeModel',
		data: [
			{
				code: 'S101',
				name: 'Sprite 8oz'
			},
			{
				code: 'S102',
				name: 'Sprite 12oz'
			},
			{
				code: 'S103',
				name: 'Sprite 22oz'
			},
			{
				code: 'S104',
				name: 'Sprite 1L'
			},
			{
				code: 'S105',
				name: 'Sprite 1.5L'
			}
		]
	}
})