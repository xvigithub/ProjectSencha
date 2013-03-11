Ext.define('CocaCola.view.Login', {
	extend: 'Ext.form.Panel',
	xtype: 'login',

	config: {
		title: 'COCA ~ COLA',

		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				title: 'COCA ~ COLA'
			},
			{
				xtype: 'toolbar',
				docked: 'bottom',
				title: 'COCA ~ COLA'
			},
			{
				xtype: 'fieldset',
				title: 'Account Login',
				textalign: 'center',
				items: [
					{
						xtype: 'textfield',
						name: 'username',
						label: 'Username'
					},
					{
						xtype: 'passwordfield',
						name: 'password',
						label: 'Password'
					}
				]
			},
			{
				xtype: 'button',
				text: 'SIGN - IN',
				ui: 'decline-round'
			}
		]
	}
})