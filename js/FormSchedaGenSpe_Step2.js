Ext.onReady(function(){ 
  
  Ext.QuickTips.init();
  Ext.form.Field.prototype.msgTarget = 'side';
  
  var rd_random_employee_data = new Ext.data.JsonReader({}, ['specie']);
    
  var ds_random_employee_data_active = new Ext.data.Store({  
  proxy: new Ext.data.HttpProxy({  
      url: 'get-spe_by_gen-from-db.php?gensel='+gensel  
  }),  
  reader: rd_random_employee_data,  
  remoteSort: false  
  });
 
  var simple = new Ext.form.FormPanel
  ({
 
        standardSubmit: true,
        frame:true,
        title: 'Seleziona Genere-specie',
        bodyStyle:'padding:15px 5px 0',
        width: 500,
        defaults: {width: 300},
        defaultType: 'textfield',
        
        items: [
                {
                    id: 'specie',
                    name: 'spe',
                    xtype: 'combo',
                    store: ds_random_employee_data_active,
                    fieldLabel: 'Specie',  
                    displayField: 'specie',
                    emptyText:'Seleziona specie...',  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnFocus:true,
                    forceSelection:true,
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'                     
                },
                {
                    inputType: 'hidden',
                    id: 'submitbutton',
                    name: 'gen',
                    value: gensel
                }                
              ],
        buttons: [{
                      text: 'Seleziona',
                      handler: function() {
                      simple.getForm().getEl().dom.action = 'carica_scheda.php';
                      simple.getForm().getEl().dom.method = 'POST';
                      simple.getForm().submit();
                  }
                }]
 
  });
  
if ($("#formSchedaGenSpe_Step2").length>0)
    {
     simple.render('formSchedaGenSpe_Step2'); 
    }
    
});