Ext.define('CocaCola.controller.StoreList', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			task: 'task',
			myList: 'storeList'
		},
		control: {
			'task storeTab list': {
				itemtap: function (list, index, target, record) {
					var categoriesView = Ext.create('CocaCola.view.CategoryContainer');
					this.getTask().push(categoriesView);
				}
			},
			'storeList searchfield[itemId=searchBox]': {
				clearicontap: 'onClearSearch',
				keyup: 'onSearchKeyUp'
			}
		}
	},
		onSearchKeyUp: function (searchField)
		{
			queryString = searchField.getValue();

			var store = Ext.getStore('StoreStore');
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
			var store = Ext.getStore('StoreStore');
			store.clearFilter();
		}
	}
)