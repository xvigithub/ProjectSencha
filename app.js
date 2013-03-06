Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Sencha',

    controllers: ['Main'],

    views: ['Home', 'Gallery', 'Product', 'Settings', 'Account'],

    launch: function () {
        Ext.create('Ext.TabPanel', {
            fullscreen: true,
            tabBarPosition: 'bottom',

            items: [
                {
                    xtype: 'homePanel'
                },
                {
                    xtype: 'galleryPanel'
                },
                {
                    xtype: 'productPanel'
                },
                {
                    xtype: 'accountPanel'
                },
                {
                    xtype: 'settingsPanel'
                }
            ]
        });
    }
})