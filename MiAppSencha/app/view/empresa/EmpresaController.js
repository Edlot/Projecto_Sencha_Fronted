Ext.define('MiAppSencha.view.empresa.EmpresaController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.empresa',

    mostrarFormulario: function(){
        var window = Ext.create('MiAppSencha.view.empresa.VentanaEmpresa');
        window.show();
    },

    enviarDatos: function(){
        var vista = this.getView();
        var formulario = vista.down('form');

        if(formulario.isValid()){
            var datos = formulario.getValues();

            if(vista.title !== "Editar empresa"){
                Ext.Ajax.request({
                    url: Ext.manifest.url_backend + 'empresas',
                    jsonData: Ext.util.JSON.encode(datos),
                    scope: vista,
                    success: function(response,opts){
                        console.log(datos);
                        Ext.Msg.alert('ok','Empresa creada correctamente', function(){
                            vista.close();
                        })
                    },
                    failure: function(response,opts){
                        console.log('El servido fallo con el codigo ' + response.status);
                    }
                })
            }else{
                var id = vista.down("#id").value
                Ext.Ajax.request({
                    url: Ext.manifest.url_backend + 'empresas/' + id,
                    method: 'PUT',
                    jsonData: Ext.util.JSON.encode(datos),
                    scope: vista,
                    success: function(response,opts){
                        Ext.Msg.alert('Ok','Empresa Editada correctamente',function(){
                            this.close();
                        },this)
                    },
                    failure: function(response,opts){
                        console.log('El servido fallo con el codigo ' + response.status);
                    }
                })
            }

        }
    },

    llenarDatos: function(){
        var vista = this.getView()
        var empresa = vista.store
        if(empresa){
            vista.setTitle("Editar empresa")
            vista.down("form").getForm().setValues(empresa)
        }
    },

    onEditar: function(grid,rowIndex){
        var empresa = grid.getStore().getAt(rowIndex).data;
        var formulario = Ext.create('MiAppSencha.view.empresa.VentanaEmpresa',{
            store: empresa
        })
        formulario.show();
    },

    onEliminar: function(grid,rowIndex){
        var empresa = grid.getStore().getAt(rowIndex).data;
        Ext.Msg.confirm('Eliminar empresa','??Seguro que desea eliminar esta empresa?',function(respuesta){
            if(respuesta === 'yes'){
                Ext.Ajax.request({
                    url: Ext.manifest.url_backend + 'empleados?empresa=' + empresa.id,
                    success: function(response,opts){
                        var empleados = Ext.decode(response.responseText)
                        if(empleados.length > 0){
                            Ext.Msg.alert('No Permitido','No se puede eliminar empresa con empleados asociados')
                        }else{
                            Ext.Ajax.request({
                                url: Ext.manifest.url_backend + 'empresas/' + empresa.id,
                                method: 'DELETE',
                                success: function(response,opts){
                                    Ext.Msg.alert('Ok','Empresa eliminada correctamente',function(){
                                        Ext.getStore('empresas-listado').reload();
                                    })
                                },
                                failure: function(response,opts){
                                    console.log('El servido fallo con el codigo ' + response.status);
                                }
                            })
                        }
                    },
                    failure: function(response,opts){
                        console.log('El servido fallo con el codigo ' + response.status);
                    }
                })
            }
        })
    },

    reloadStore: function(){
        Ext.getStore('empresas-listado').reload();
    },

    control: {
        '#editar': {
            editar: "onEditar",
            
        },
        '#eliminar': {
            eliminar: "onEliminar"
        }
    }
})