Ext.define('MiAppSencha.view.empleado.Empleado',{
    extend: 'MiAppSencha.view.ListadoBase',
    xtype: 'empleado',
    leyenda: 'empleado',
    controller: 'empleado',

    items: {
        region: 'center',
        layout: 'fit',
        xtype: 'grid',
        store: {type: 'empleados'},
        title: 'Empleados',
        columns: [
            {text: 'Id', dataIndex: 'id', align: 'center'},
            {text: 'Nombre', dataIndex: 'nombre', align: 'center', flex: 1},
            {text: 'Apellido', dataIndex: 'apellido', align: 'center', flex: 1},
            {text: 'Email', dataIndex: 'email', align: 'center', flex: 2},
            {text: 'Direccion', dataIndex: 'direccion', align: 'center', flex: 1},  
        ],
        listeners: {
            itemcontextmenu: function(grid,record,item,Index, e){
                var contextMenu = Ext.create('Ext.menu.Menu',{
                    controller: 'empleado',
                    items: 
                    [
                        {
                            text: 'Editar',
                            itemId: 'editar',
                            iconCls: 'x-fa fa-edit',
                            handler: function(){
                                this.fireEvent("editar",grid, Index)
                            }
                        },
                        {
                            text: 'Eliminar',
                            itemId: 'eliminar',
                            iconCls: 'x-fa fa-trash',
                            handler: function(){
                                this.fireEvent("eliminar",grid, Index)
                            }
                        }
                    ]

                });
                contextMenu.showAt(e.getXY());
                e.stopEvent();
            }
        }
        
    }
})