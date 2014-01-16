Ext.onReady(function(){ 
  
  Ext.QuickTips.init();
  Ext.form.Field.prototype.msgTarget = 'side';
  
  //carica genere
  var rd_gen_data = new Ext.data.JsonReader({}, ['genere']);    
  var ds_gen_data_active = new Ext.data.Store({  
  proxy: new Ext.data.HttpProxy({  
      url: 'get-genere-from-db.php'  
  }),  
  reader: rd_gen_data,  
  remoteSort: false  
  });
  
  //carica specie
  var rd_specie_data = new Ext.data.JsonReader({}, ['specie']);    
  var ds_specie_data_active = new Ext.data.Store({  
  proxy: new Ext.data.HttpProxy({  
      url: 'get-specie-from-db.php'  
  }),  
  reader: rd_specie_data,  
  remoteSort: false  
  });
 
  var simple = new Ext.form.FormPanel
  ({
 
        standardSubmit: true,
        frame:true,
        title: 'Inserimento nuovo Genere-specie',
        bodyStyle:'padding:15px 5px 0',
        width: 500,
        defaults: {width: 300},
        defaultType: 'textfield',
        
        items: [
                {
                    name: 'gen',
                    xtype: 'combo',
                    store: ds_gen_data_active,
                    fieldLabel: 'Genere',  
                    displayField: 'genere',  
                    emptyText:'Inserisci Genere...',  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnFocus:true,
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'                    
                },
                {    
                    name: 'spe',
                    xtype: 'combo',
                    store: ds_specie_data_active,
                    fieldLabel: 'Specie',  
                    displayField: 'specie',  
                    emptyText:'Inserisci specie...',  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnFocus:true,
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'                    
                },                
                {
                    inputType: 'hidden',
                    id: 'submitbutton',
                    name: 'myhiddenbutton',
                    value: 'new_genspe'
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
  
simple.render('FormGenSpe');
 
});