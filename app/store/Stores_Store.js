Ext.define('CocaCola.store.Stores_Store', {
    extend: 'Ext.data.Store',

    config: {
        model: 'CocaCola.model.Stores_Model',
        data: [
            {
                name: 'SHOPWISE'
            },
            {
                name: 'RUSTANS'
            },
            {
                name: 'SUPER8'
            },
            {
                name: 'UNIMEC'
            },
            {
                name: 'PUREGOLD'
            }
        ]
    }
})