Ext.define('CocaCola.controller.CategoryList', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			task: 'task'
		},
		control: {
			'task categoryContainer list': {
				itemtap: function (list, index, target, record) {
					var productCodeView;
					if (record.data.name === 'Coke')
					{
						productCodeView = Ext.create('CocaCola.view.ProductCodeCokeContainer');
					}
					else if (record.data.name === 'Sprite')
					{
						productCodeView = Ext.create('CocaCola.view.ProductCodeSpriteContainer');
					}
					else if (record.data.name === 'Royal')
					{
						productCodeView = Ext.create('CocaCola.view.ProductCodeRoyalContainer');
					}
					
					this.getTask().push(productCodeView);

					//console.log(record.data.name);
				}
			},
			'categoryList searchfield[itemId=searchBox]': {
				clearicontap: 'onClearSearch',
				keyup: 'onSearchKeyUp'
			}
		}
	},
	onSearchKeyUp: function (searchField) {
		queryString = searchField.getValue();

		var store = Ext.getStore('CategoriesStore');
		store.clearFilter();

		if (queryString) {
			var regExp = new RegExp(queryString, "i");
			store.filterBy(function (record) {
				if (regExp.test(record.get('name'))) {
					return true;
				};
				return false;
			});
		}
	},

	onClearSearch: function ()
	{
		var store = Ext.getStore('CategoriesStore');
		store.clearFilter();
	}
})