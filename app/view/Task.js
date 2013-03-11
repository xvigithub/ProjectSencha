Ext.define('CocaCola.view.Task', {
	extend: 'Ext.NavigationView',
	xtype: 'task',

	config: {
		title: 'Task',
		iconCls: 'star',

		items: [
			{
				xtype: 'storeTab'
			}
		]
	}
})