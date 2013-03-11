Ext.define('CocaCola.view.Stores', {
    extend: 'Ext.Panel',
    xtype: 'storeNavView',

    config: {
        items: [
             {
                 xtype: 'list',
                 store: 'Stores_Store',
                 itemTpl: '{name}'
             }
        ]
    }
})