Ext.define('MiAppSencha.view.usuario.Usuario',{
    extend: 'Ext.window.Window',
    controller: 'usuarioctr',
    title: 'Login',
    scrollable: true,

            height: 200,
            width: 300,

            closable: false,
            draggable: false,
            resizable: false,
            modal: true,

            buttonAlign: 'center',

            
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,

                    reference: 'formulario',

                    defaults:{
                        xtype: 'textfield',
                        allowBlank: false,
                       
                    },

                    items:[
                        {
                            fieldLabel: 'Email',
                            name: 'email',
                            vtype: 'email'
                        },
                        {
                            fieldLabel: 'Password',
                            name: 'password',
                            inputType: 'password'
                        }
                    ]
                }
            ],

            buttons: [
                {
                    text: 'Ingresar',
                    iconCls: 'x-fa fa-user-check',
                    handler: 'hacerLogin'
                }
            ]
})