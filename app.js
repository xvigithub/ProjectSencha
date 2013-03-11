Ext.application({
	name: 'CocaCola',

	models: ['StoreModel','CategoryModel','ProductCodeModel'],

	views: [
		'Login', 'Main', 'Task',
		'Home', 'StoreTab', 'StoreContainer',
		'StoreList', 'CategoryList', 'CategoryContainer',
		'ProductCodeCokeContainer', 'ProductCodeCokeList',
		'ProductCodeSpriteContainer', 'ProductCodeSpriteList',
		'ProductCodeRoyalContainer', 'ProductCodeRoyalList',
		'Account','ProductDetails','InventoryDetails'
	],

	controllers: ['Login','StoreList','CategoryList','ProductCode'],

	stores: ['StoreStore', 'CategoriesStore', 'ProductCodeCokeStore', 'ProductCodeSpriteStore','ProductCodeRoyalStore'],

	launch: function ()
	{
		Ext.Viewport.add(Ext.create('CocaCola.view.Login'));
	}
})