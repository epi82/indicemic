Ext.onReady(function(){ 
  
if ($("#FormModTossi").length>0)
    {  
  
      Ext.QuickTips.init();
      Ext.form.Field.prototype.msgTarget = 'side';
      
      //carica genere
      var rd_tossi_data = new Ext.data.JsonReader({}, ['id','tossi']);
        
      var ds_tossi_data_active = new Ext.data.Store({  
      proxy: new Ext.data.HttpProxy({  
          url: 'get-tossi-from-db.php'  
      }),  
      reader: rd_tossi_data,  
      remoteSort: false  
      });
      
      var simple = new Ext.form.FormPanel
      ({
     
            standardSubmit: true,
            frame:true,
            title: 'Modifica Link Tossicologia',
            bodyStyle:'padding:15px 5px 0',
            width: 500,
            defaults: {width: 300},
            defaultType: 'textfield',
            
            items: [
                    {
                        id: 'id_tossi',
                        name: 'tossi',
                        xtype: 'combo',
                        store: ds_tossi_data_active,
                        fieldLabel: 'Tossicologia',  
                        displayField: 'tossi',
                        valueField: 'id',
                        hiddenName : 'TossiId',   
                        emptyText:'Inserisci Tossicologia...',  
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
                          text: 'Modifica',
                          handler: function() {
                          simple.getForm().getEl().dom.action = 'edit_tossi.php';
                          simple.getForm().getEl().dom.method = 'POST';
                          simple.getForm().submit();
                      }
                    }]
     
      });
  
      simple.render('FormModTossi'); 
    }  
 
});