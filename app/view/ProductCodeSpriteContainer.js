Ext.define('CocaCola.view.ProductCodeSpriteContainer', {
    extend: 'Ext.Panel',
    xtype: 'productCodeSpriteContainer',

	config: {
		title: 'SKU - Sprite',
		layout: 'fit',
		scrollable: true,
		items: [
			{
				xtype: 'spriteList'
			}
		]
	}
})