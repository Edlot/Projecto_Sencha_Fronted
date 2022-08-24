Ext.define('MiAppSencha.view.empresa.Empresa',{
    extend: 'MiAppSencha.view.ListadoBase',
    xtype: 'empresa',
    controller: 'empresa',

    leyenda: 'empresa',
    

    items:[
        {
        region:'center',
        layout:'fit',
        xtype:'grid',
        title:'Empresas',
        store:{type: 'empresas'},
        columns: [
                {
                    text:'Id',dataIndex:'id',align:'center',flex:1
                },
                {
                    text:'Nombre',dataIndex:'nombre',align:'center',flex:1
                },
                {
                    text:'Fecha de Inicio',dataIndex:'fechaInicio',align:'center',flex:1,xtype:"datecolumn",format: "m-d-y"
                },
                {
                    text:'Hora de Inicio',dataIndex:'horaInicio',align:'center',flex:1
                },
                {
                    text:'Direccion',dataIndex:'direccion',align:'center',flex:1
                }
            ],
            listeners: {
                itemcontextmenu: function(grid,record,item,Index, e){
                    var contextMenu = Ext.create('Ext.menu.Menu',{
                        controller: 'empresa',
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