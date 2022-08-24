Ext.define('MiAppSencha.view.telefono.Telefono',{
    extend: 'MiAppSencha.view.ListadoBase',
    xtype: 'telefono',
    leyenda: 'telefono',
    controller: 'telefono',

    items: {
        region: 'center',
        layout: 'fit',
        xtype: 'grid',
        store: {type: 'telefono'},
        title: 'Telefonos',
        columns: [
            {text: 'Id', dataIndex: 'id', align: 'center', flex: 1},
            {text: 'Tipo', dataIndex: 'tipo', align: 'center', flex: 1},
            {text: 'Pais', dataIndex: 'pais', align: 'center', flex: 1},
            {text: 'Numero', dataIndex: 'numero', align: 'center', flex: 1},
            {
                text: "Acciones",
                align: "center",
                xtype: "actioncolumn",

                items: [{
                    iconCls: 'x-fa fa-edit',
                    tooltip: 'Editar',
                    handler: function(grid, rowIndex){
                        this.fireEvent("editar",grid, rowIndex)
                    }
                },'->',
                {
                    iconCls: 'x-fa fa-trash',
                    tooltip: 'Eliminar',
                    handler: function(grid, rowIndex){
                        this.fireEvent("eliminar",grid, rowIndex)
                    }
                }]
            }
        ]
        
    }
})