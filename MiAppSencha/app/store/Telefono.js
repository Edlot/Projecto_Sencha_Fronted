Ext.define('MiAppSencha.store.Telefono',{
    extend: 'Ext.data.Store',
    alias: 'store.telefono',
    storeId: 'telefonos-listado',
    requires: ['Ext.data.proxy.JsonP'],
    proxy:{
        type: 'jsonp',
        url: Ext.manifest.url_backend + 'telefonos',

        reader:{
            type: 'json'
        }
    },
    autoLoad: true
})