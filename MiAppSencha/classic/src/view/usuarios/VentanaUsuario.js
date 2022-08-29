Ext.define('MiAppSencha.view.usuarios.VentanaUsuario',{
    extend: 'MiAppSencha.view.FormBase',
    controller: 'usuarios',

    title: 'Agregar Usuario',
    

    scrollable: true,

    layout:{
        type: 'vbox',
        align: 'middle'
    },

    height: 200,
    width: 400,

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
                    itemId: 'email',
                    vtype: 'email'
                },
                {
                    fieldLabel: 'Contraseña',
                    name: 'password',
                    itemId: 'password',
                    inputType: 'password'
                },
            ]
        }
    ]    
})