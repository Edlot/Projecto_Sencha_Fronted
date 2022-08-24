Ext.define('MiAppSencha.view.usuarios.Usuarios',{
    extend: 'MiAppSencha.view.ListadoBase',
    xtype: 'usuarios',
    controller: 'usuarios',

    leyenda: 'usuario',
    

    items:[
        {
        region:'center',
        layout:'fit',
        xtype:'grid',
        title:'Usuarios',
        store:{type: 'usuarios'},
        columns: [
                {
                    text:'Id',dataIndex:'id',align:'center',flex:1
                },
                {
                    text:'Email',dataIndex:'email',align:'center',flex:1
                },
                {
                    text:'Contraseña',dataIndex:'password',align:'center',flex:1
                },
                {
                    text: 'Acciones',
                    align: 'center',
                    xtype: 'actioncolumn',
                    items: [
                        {
                            iconCls: 'x-fa fa-edit',
                            tooltip: 'Editar',
                            handler: function(grid,rowIndex){
                                this.fireEvent("editar",grid,rowIndex)
                            }
                        },'->',
                        {
                            iconCls: 'x-fa fa-trash',
                            tooltip: 'Eliminar',
                            handler: function(grid,rowIndex){
                                this.fireEvent('eliminar',grid,rowIndex)
                            }
                        }
                    ]
                }
            ]
    }
]
})