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
			}
		}
	}
})