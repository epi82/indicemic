Ext.onReady(function(){ 
  
if ($("#FormModScheda").length>0)
    { 
  
      Ext.QuickTips.init();
      Ext.form.Field.prototype.msgTarget = 'side';
      
      //carica genere
      var rd_genere_data = new Ext.data.JsonReader({}, ['genere']);    
      var ds_genere_data_active = new Ext.data.Store({  
      proxy: new Ext.data.HttpProxy({  
          url: 'get-genere-from-db-archivio.php'  
      }),  
      reader: rd_genere_data,  
      remoteSort: false  
      });  
      
      var simple = new Ext.form.FormPanel
      ({
     
            standardSubmit: true,
            frame:true,
            title: 'Modifica Scheda',
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
                    }
                  ],
            buttons: [{
                          text: 'Seleziona',
                          handler: function() {
                          simple.getForm().getEl().dom.action = 'edit_scheda.php';
                          simple.getForm().getEl().dom.method = 'POST';
                          simple.getForm().submit();
                      }
                    }]
     
      });
      
    simple.render('FormModScheda');
    }
 
});