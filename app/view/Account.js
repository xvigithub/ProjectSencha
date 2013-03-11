Ext.define('CocaCola.view.Account', {
	extend: 'Ext.TabPanel',
	xtype: 'account',

	config: {
		title: 'User',
		iconCls: 'user',
		
		items: [
			{
				xtype: 'formpanel',
				title: 'My Account',
				scrollable: 'vertical',

				items: [
					{
						html: [
								'<h1><b>First Name:</b> Bernadeth Mae</h1>',
								'<br />',
								'<h1><b>Middle Name:</b> Nagal</h1>',
								'<br />',
								'<h1><b>Last Name:</b> Arcigal</h1>',
								'<br />',
								'<h1><b>Email Address:</b> agent@cormanttect.com</h1>',
								'<br />',
								'<h1><b>Mobile Number</b> 0909 123 4567</h1>'
							].join("")
					}
				]
				
			},
			{
				title: 'Change Password',
				scrollable: 'vertical',
				xtype: 'formpanel',
				items: [
					{
						xtype: 'button',
						docked: 'top',
						ui: 'confirm-round',
						text: 'Save Changes',
						margin: 25
					},
					{
						xtype: 'fieldset',
						items: [
							{
								xtype: 'passwordfield',
								label: 'Current Password',
								name: 'currentPassword'
							},
							{
								xtype: 'passwordfield',
								label: 'New Password',
								name: 'newPassword'
							},
							{
								xtype: 'passwordfield',
								label: 'Confirm Password',
								name: 'confirmPassword'
							}
						]
					}
				]
			}
		]
	}
})