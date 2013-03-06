Ext.define('Sencha.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homePanel',

    config: { 
        title: 'Home',
        iconCls: 'home',
        cls: 'home',
        html: [
            '<img src="http://staging.sencha.com/img/sencha.png" />',
            '<h1>Welcome to <b>PROJECT X</b></h1>',
            "<p>Mobile Application for Merchandising Solution</p>",
			"<br />",
			"<h1><b>Cormant Technologies Inc.</b><h1>"
        ].join("")
    }
})