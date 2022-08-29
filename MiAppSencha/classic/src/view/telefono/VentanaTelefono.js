Ext.define('MiAppSencha.view.telefono.VentanaTelefono',{
    extend: 'MiAppSencha.view.FormBase',
   
    controller: 'telefono',
    title: 'Agregar Telefono',
    scrollable: true,

    layout:{
        type: 'vbox',
        align: 'middle'
    },
    
    items:[
        {
            xtype: 'form',
            bodyPadding: 10, 

            defaults: {
                xtype: 'textfield',
            },

            fieldDefaults:{
                msgTarget: 'under',
                anchor: '100%',
                allowBlank: false
            },

            items:[
                {
                    name: "id",
                    itemId: "id",
                    hidden: true,
                    allowBlank: true,
                },
                {
                    fieldLabel: 'Tipo',
                    name: 'tipo',
                    itemId: 'tipo'
                },
                {
                    fieldLabel: 'Pais',
                    name: 'pais',
                    itemId: 'pais'
                },
                {
                    fieldLabel: 'Numero',
                    name: 'numero',
                    itemId: 'numero',
                    placeholder: 'xxxxxxxx',
                    inputMask: '99999999'
                },
                {
                    xtype: 'comboempleado',
                    name: 'empleado',
                    itemId: 'empleado',
                    editable: false
                }

            ]
        }
    ]
})