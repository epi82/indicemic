Ext.onReady(function(){ 
  
if ($("#FormModScheda_Step2").length>0)
    { 
  
      Ext.QuickTips.init();
      Ext.form.Field.prototype.msgTarget = 'side';
      
      var rd_specie_data = new Ext.data.JsonReader({}, ['id','speaut']);    
      var ds_specie_data_active = new Ext.data.Store({  
      proxy: new Ext.data.HttpProxy({  
          url: 'get-spe-by-gen-from-db-archivio.php?gensel='+gen  
      }),  
      reader: rd_specie_data,  
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
                        fieldLabel: 'Genere',   
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        value: gen,                                      
                        style:'background-color:transparent; background-image: none;',
                        readOnly: true                 
                    },                    
                    {
                        id: 'id_scheda',
                        name: 'spe',
                        xtype: 'combo',
                        store: ds_specie_data_active,
                        fieldLabel: 'Specie',  
                        displayField: 'speaut',
                        valueField: 'id',
                        hiddenName : 'scheda_id',                    
                        emptyText:'Seleziona specie...',  
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
      
    simple.render('FormModScheda_Step2');
    }
 
});