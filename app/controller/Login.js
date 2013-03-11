Ext.define('CocaCola.controller.Login',{
	extend: 'Ext.app.Controller',

	config: {
		refs: {

		},
		control: {
			'login button': {
				tap: function (button, e, eOpts)
				{
					Ext.Viewport.add(Ext.create('CocaCola.view.Main')).show();
				}
			}
		}
	}
})