Ext.define('CocaCola.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'home',

	config: {
		title: 'Home',
		iconCls: 'home',
		
		items:[
			{
				xtype: 'titlebar',
				title: 'Home',
				items: [
					{
						xtype: 'button',
						layout: 'fit',
						text: 'SIGN OUT',
						ui: 'decline-round',
						align: 'right'
					}
				]
			}
		]
	}
})