Ext.onReady(function(){ 
  
if ($("#FormModGenSpe").length>0)
    {    
      Ext.QuickTips.init();
      Ext.form.Field.prototype.msgTarget = 'side';
      
      var rd_gen_data = new Ext.data.JsonReader({}, ['genere']);        
      var ds_gen_data_active = new Ext.data.Store({  
      proxy: new Ext.data.HttpProxy({  
          url: 'get-genere-from-db.php'  
      }),  
      reader: rd_gen_data,  
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
                        id: 'genere',
                        name: 'gen',
                        xtype: 'combo',
                        store: ds_gen_data_active,
                        fieldLabel: 'Genere',  
                        displayField: 'genere',
                        emptyText:'Seleziona genere...',  
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
                          simple.getForm().getEl().dom.action = 'edit_genspe.php';
                          simple.getForm().getEl().dom.method = 'POST';
                          simple.getForm().submit();
                      }
                    }]
     
     });
  
     simple.render('FormModGenSpe'); 
    }
    
});