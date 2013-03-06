Ext.define('Sencha.view.Product', {
    extend: 'Ext.TabPanel',
    xtype: 'productPanel',

    config:
        {
            iconCls: 'organize',
            title: 'Product',

            items: [
                {
                    xtype: 'formpanel',
                    title: 'Add',
                    scrollable: 'vertical',
                    items: [
                    {
                        xtype: 'fieldset',
                        title: 'New Product',

                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Name',
                                name: 'name'
                            },
                            {
                                xtype: 'textfield',
                                label: 'Category',
                                name: 'category'
                            },
                            {
                                xtype: 'numberfield',
                                label: 'Quantity',
                                name: 'quantity'
                            },
                            {
                                xtype: 'textareafield',
                                label: 'Comments',
                                maxRows: 4,
                                name: 'comments'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        ui: 'confirm',
                        text: 'Save Product',
                        width: 200,
                        handler: function ()
                        {
                        	Ext.Msg.alert('PROJECT X')
                        }
                    }
                    ]
                },
                {
                    title: 'View',
                    scrollable: 'vertical',
                    items: [
						{
							html:'This is product view'
						}
                    ]
                }
            ]
        }
})