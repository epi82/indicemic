Ext.onReady(function(){ 
  
  Ext.QuickTips.init();
  Ext.form.Field.prototype.msgTarget = 'side'; 
  
  //carica genere
  var rd_genere_data = new Ext.data.JsonReader({}, ['genere']);    
  var ds_genere_data_active = new Ext.data.Store({  
  proxy: new Ext.data.HttpProxy({  
      url: 'get-genere-from-db.php'  
  }),  
  reader: rd_genere_data,  
  remoteSort: false  
  });
  
  //carica regno
  var rd_reg_data = new Ext.data.JsonReader({}, ['regno']);    
  var ds_reg_data_active = new Ext.data.Store({  
  proxy: new Ext.data.HttpProxy({  
      url: 'get-regno-from-db.php'  
  }),  
  reader: rd_reg_data,  
  remoteSort: false  
  });
  
  //carica divisione
  var rd_div_data = new Ext.data.JsonReader({}, ['divisione']);    
  var ds_div_data_active = new Ext.data.Store({  
  proxy: new Ext.data.HttpProxy({  
      url: 'get-div-from-db.php'  
  }),  
  reader: rd_div_data,  
  remoteSort: false  
  });
  
  //carica classe
  var rd_cla_data = new Ext.data.JsonReader({}, ['classe']);    
  var ds_cla_data_active = new Ext.data.Store({  
  proxy: new Ext.data.HttpProxy({  
      url: 'get-cla-from-db.php'  
  }),  
  reader: rd_cla_data,  
  remoteSort: false  
  });
  
  //carica ordine
  var rd_ord_data = new Ext.data.JsonReader({}, ['ordine']);    
  var ds_ord_data_active = new Ext.data.Store({  
  proxy: new Ext.data.HttpProxy({  
      url: 'get-ord-from-db.php'  
  }),  
  reader: rd_ord_data,  
  remoteSort: false  
  });    

  //carica famiglia
  var rd_fam_data = new Ext.data.JsonReader({}, ['famiglia']);    
  var ds_fam_data_active = new Ext.data.Store({  
  proxy: new Ext.data.HttpProxy({  
      url: 'get-fam-from-db.php'  
  }),  
  reader: rd_fam_data,  
  remoteSort: false  
  });    
  
  var simple = new Ext.form.FormPanel
  ({
 
        standardSubmit: true,
        frame:true,
        title: 'Inserimento nuova relazione Divisione-Classe-Ordine-Famiglia',
        bodyStyle:'padding:15px 5px 0',
        width: 500,
        defaults: {width: 300},
        defaultType: 'textfield',
        
        items: [
                {
                    name: 'gen',
                    xtype: 'combo',
                    store: ds_genere_data_active,
                    fieldLabel: 'Genere',  
                    displayField: 'genere',  
                    emptyText:'Seleziona Genere...',  
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
                    name: 'reg',
                    xtype: 'combo',
                    store: ds_reg_data_active,
                    fieldLabel: 'Regno',  
                    displayField: 'regno',  
                    emptyText:'Inserisci Regno...',  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnFocus:true,
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'                    
                },
                {
                    name: 'div',
                    xtype: 'combo',
                    store: ds_div_data_active,
                    fieldLabel: 'Divisione',  
                    displayField: 'divisione',  
                    emptyText:'Inserisci Divisione...',  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnFocus:true,
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'                    
                },
                {
                    name: 'cla',
                    xtype: 'combo',
                    store: ds_cla_data_active,
                    fieldLabel: 'Classe',  
                    displayField: 'classe',  
                    emptyText:'Inserisci Classe...',  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnFocus:true,
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'                    
                },
                {
                    name: 'ord',
                    xtype: 'combo',
                    store: ds_ord_data_active,
                    fieldLabel: 'Ordine',  
                    displayField: 'ordine',  
                    emptyText:'Inserisci Ordine...',  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnFocus:true,
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'                    
                },           
                {
                    name: 'fam',
                    xtype: 'combo',
                    store: ds_fam_data_active,
                    fieldLabel: 'Famiglia',  
                    displayField: 'famiglia',  
                    emptyText:'Inserisci Famiglia...',  
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
                    value: 'new_divclaordfam'
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
  
simple.render('FormDivClaOrdFam');
 
});