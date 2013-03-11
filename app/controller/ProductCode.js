Ext.define('CocaCola.controller.ProductCode', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	task: 'task'
        },
        control:
            {
                'task productCodeCokeContainer list': {
                    itemtap: function (list, index, target, record) {
                        var productDetailsView = Ext.create('CocaCola.view.ProductDetails');
                       
                        var model = Ext.create('CocaCola.model.ProductCodeModel', {
                            code: record.data.code,
                            name: record.data.name
                        });

                        productDetailsView.setRecord(model);
                        this.getTask().push(productDetailsView);
                    }
                },
                'task productCodeSpriteContainer list': {
                    itemtap: function (list, index, target, record) {
                        var productDetailsView = Ext.create('CocaCola.view.ProductDetails');

                        var model = Ext.create('CocaCola.model.ProductCodeModel', {
                            code: record.data.code,
                            name: record.data.name
                        });

                        productDetailsView.setRecord(model);
                        this.getTask().push(productDetailsView);
                    }
                },
                'task productCodeRoyalContainer list': {
                    itemtap: function (list, index, target, record) {
                        var productDetailsView = Ext.create('CocaCola.view.ProductDetails');

                        var model = Ext.create('CocaCola.model.ProductCodeModel', {
                            code: record.data.code,
                            name: record.data.name
                        });

                        productDetailsView.setRecord(model);
                        this.getTask().push(productDetailsView);
                    }
                }
            }

    }
})