Ext.define('Sencha.view.Gallery', {
    extend: 'Ext.Carousel',
    xtype: 'galleryPanel',

    config: {
        title: 'Gallery',
        iconCls: 'star',
        items: [
            {
                xtype: 'image',
                src: 'resources/images/picA.jpg',
                style: 'background-repeat: no-repeat;background-size: auto;background-position: center;'

            },
            {
                xtype: 'image',
                src: 'resources/images/picB.jpg',
                style: 'background-repeat: no-repeat;background-size: auto;background-position: center;'
            },
			{
				xtype: 'image',
				src: 'resources/images/picC.jpg',
				style: 'background-repeat: no-repeat;background-size: auto;background-position: center;'
			},
			{
				xtype: 'image',
				src: 'resources/images/picD.jpg',
				style: 'background-repeat: no-repeat;background-size: auto;background-position: center;'
			},
			{
				xtype: 'image',
				src: 'resources/images/picE.jpg',
				style: 'background-repeat: no-repeat;background-size: auto;background-position: center;'
			}
        ]
    }
})