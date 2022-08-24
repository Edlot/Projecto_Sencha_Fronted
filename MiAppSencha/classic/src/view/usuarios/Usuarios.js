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
                }
            ],
            listeners: {
                itemcontextmenu: function(grid,record,item,Index, e){
                    var contextMenu = Ext.create('Ext.menu.Menu',{
                        controller: 'usuarios',
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
]
})