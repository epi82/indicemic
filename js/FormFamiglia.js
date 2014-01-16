Ext.onReady(function(){ 
  
  Ext.QuickTips.init();
  Ext.form.Field.prototype.msgTarget = 'side';
  
  var rd_random_employee_data = new Ext.data.JsonReader({}, ['famiglia']);
    
  var ds_random_employee_data_active = new Ext.data.Store({  
  proxy: new Ext.data.HttpProxy({  
      url: 'get-data-from-db.php'  
  }),  
  reader: rd_random_employee_data,  
  remoteSort: false  
  });
 
  var simple = new Ext.form.FormPanel
  ({
 
        standardSubmit: true,
        frame:true,
        title: 'Inserimento nuova Famiglia',
        bodyStyle:'padding:15px 5px 0',
        width: 500,
        defaults: {width: 300},
        defaultType: 'textfield',
        
        items: [
                {
                    name: 'fam',
                    xtype: 'combo',
                    store: ds_random_employee_data_active,
                    fieldLabel: 'Famiglia',  
                    displayField: 'famiglia',  
                    emptyText:'Seleziona famiglia...',  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnFocus: true,
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'
                },
                {
                    inputType: 'hidden',
                    id: 'submitbutton',
                    name: 'myhiddenbutton',
                    value: 'new_fam'
                }
              ],
        buttons: [{
                      text: 'Inserisci',
                      handler: function() {
                      simple.getForm().getEl().dom.action = 'save_carica.php';
                      simple.getForm().getEl().dom.method = 'POST';
                      simple.getForm().submit();
                  }
                }]
 
  });
  
simple.render('formFamiglia');
 
});