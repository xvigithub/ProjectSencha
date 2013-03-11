Ext.define('CocaCola.controller.StoreList', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			task: 'task'
		},
		control: {
			'task storeTab list': {
				itemtap: function (list, index, target, record) {
					var categoriesView = Ext.create('CocaCola.view.CategoryContainer');
					this.getTask().push(categoriesView);
				}
			}
		}
	}
})