Ext.define('MiAppSencha.view.usuarios.VentanaUsuario',{
    extend: 'MiAppSencha.view.FormBase',
    controller: 'usuarios',

    title: 'Agregar Usuario',
    

   

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
                allowBlank: false
            },

            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 110,
                msgTarget: 'under',
                anchor: '100%'
            },

            items:[
                {
                    name: 'id',
                    itemId: 'id',
                    hidden: true,
                    allowBlank: true
                },
                {
                    fieldLabel: 'Email',
                    name: 'email',
                    itemId: 'email'
                },
                {
                    fieldLabel: 'Contraseña',
                    name: 'password',
                    itemId: 'password'
                },
            ]
        }
    ]    
})