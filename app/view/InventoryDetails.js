Ext.define('CocaCola.view.InventoryDetails', {
    extend: 'Ext.Panel',
    xtype: 'inventoryDetails',
    alias: 'widget.inventoryDetails',

    config: {
        modal: true,
        floating: true,
        hideOnMaskTap: true,
        layout : {
        	type: 'vbox',
        	align: 'center',
        	pack: 'center'
        },
        items: [
            {
                xtype: 'fieldset',
                title: 'Mode',

                items: [
                    {
                        xtype: 'numberfield',
                        label: 'Pieces',
                        name: 'pieces'
                    },
                    {
                    	xtype: 'numberfield',
                        label: 'Pack',
                        name: 'pack'
                    },
                    {
                    	xtype: 'numberfield',
                        label: 'Case',
                        name: 'case'

                    },
                    {
                        xtype: 'selectfield',
                        name: 'inventorySelection',
                        label: 'Inv Selection',
						usePicker: false,
                        options: [
                            { text: 'S01', value: '1' },
                            { text: 'S02', value: '2' },
                            { text: 'S03', value: '3' },
                            { text: 'S04', value: '4' }
                        ]
                    }
                ]
            }
        ]
    }
})