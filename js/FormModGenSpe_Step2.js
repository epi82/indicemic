Ext.onReady(function(){

if ($("#FormModGenSpe_Step2").length>0)
    {     
      Ext.QuickTips.init();
      Ext.form.Field.prototype.msgTarget = 'side';
      
      var rd_specie_data = new Ext.data.JsonReader({}, ['specie']);
        
      var ds_specie_data_active = new Ext.data.Store({  
      proxy: new Ext.data.HttpProxy({  
          url: 'get-spe-by-gen-from-db.php?gensel='+gensel  
      }),  
      reader: rd_specie_data,  
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
                        store: ds_specie_data_active,
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
                          simple.getForm().getEl().dom.action = 'edit_genspe.php';
                          simple.getForm().getEl().dom.method = 'POST';
                          simple.getForm().submit();
                      }
                    }]
     
     });      

     simple.render('FormModGenSpe_Step2'); 
    }
    
});