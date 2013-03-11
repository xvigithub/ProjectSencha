Ext.define('CocaCola.view.ProductDetails', {
	extend: 'Ext.form.Panel',
	xtype: 'productDetails',
	fullscreen: true,

	config: {
		title: 'Details',
	
		items:
            [
				{
					xtype: 'button',
					docked: 'top',
					ui: 'confirm-round',
					text: 'Update Inventory',
					margin : 25
				},
                {
                	xtype: 'fieldset',
                	title: 'Product Detail',
                	items:
                    [
                        {
                        	xtype: 'textfield',
                        	name: 'dateNow',
                        	label: 'Date',
                        	disabled: true,
                        	value: Ext.Date.format(new Date(), 'n/j/Y')
                        },
                        {
                        	xtype: 'textfield',
                        	name: 'code',
                        	label: 'SKU',
                        	disabled: true,
                        	textAlign: 'center'
                        },
                        {
                        	xtype: 'textfield',
                        	name: 'name',
                        	label: 'Name',
                        	id: 'productName',
                        	disabled: true
                        },
						{
							xtype: 'numberfield',
							name: 'beginningInv',
							label: 'Beginning Inv.',
							disabled: true
						},
                        {
                        	xtype: 'selectfield',
                        	name: 'inventorySelection',
                        	label: 'Inv Selection',
                        	usePicker: false,
                        	options: [
                                { text: 'Pulled out Items', value: '1' },
                                { text: 'Transferred Items', value: '2' },
                                { text: 'Adjustments', value: '3' },
                                { text: 'Items Sold', value: '4' }
                        	],
                        	listeners: {
                        		change: function (select, newValue, oldValue) {
                        			if (newValue) {
                        				var form = Ext.Viewport.down('inventoryDetails');
                        				//create the form if it doesn't exists
                        				if (!form) {
                        					form = Ext.widget('inventoryDetails');
                        				}
                        				//form.getComponent('inputText').setValue(record.get('text'));
                        				form.showBy(select, "cc-cc?");
                        			}
                        		}
                        	}
                        },
						{
							xtype: 'numberfield',
							name: 'endingInv',
							label: 'End Inv.'
						},
						{
							xtype: 'numberfield',
							name: 'competitorPrice',
							label: 'Competitor Price'
						},
						{
							xtype: 'textareafield',
							name: 'comments',
							label: 'Comments'
						}
                    ]
                }
            ]
	}
})