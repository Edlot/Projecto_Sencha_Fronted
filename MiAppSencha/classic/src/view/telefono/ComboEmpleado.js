Ext.define('MiAppSencha.view.telefono.ComboEmpleado',{
    extend: 'Ext.form.ComboBox',

    xtype: 'comboempleado',
    fieldLabel: 'Empleado',
    store: {type: 'empleados'},
    displayField: 'nombre',
    valueField: 'id'
})