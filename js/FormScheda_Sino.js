Ext.onReady(function(){ 
  
if ($("#FormScheda_Sino").length>0)
    { 
  
      Ext.QuickTips.init();
      Ext.form.Field.prototype.msgTarget = 'side';
      
      var rd_tossi_data = new Ext.data.JsonReader({}, ['tossi']);    
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
            title: 'Inserimento Nuova Scheda',
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
                        name: 'spe',
                        fieldLabel: 'Specie',   
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        value: spe,                                      
                        style:'background-color:transparent; background-image: none;',
                        readOnly: true                 
                    },
                    {
                        name: 'aut',
                        fieldLabel: 'Autore',   
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        value: aut,                                      
                        style:'background-color:transparent; background-image: none;',
                        readOnly: true                 
                    },
                    {
                        name: 'descr_scheda',
                        fieldLabel: 'Scheda',   
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        value: descr_scheda,                                      
                        style:'background-color:transparent; background-image: none;',
                        readOnly: true                 
                    },
                    {
                        name: 'topic',
                        fieldLabel: 'Topic',   
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        value: topic,                                      
                        style:'background-color:transparent; background-image: none;',
                        readOnly: true                 
                    },
                    {
                        name: 'data',
                        fieldLabel: 'Data',   
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        value: data,                                      
                        style:'background-color:transparent; background-image: none;',
                        readOnly: true                 
                    },                                                                                                               
                    {
                        inputType: 'hidden',
                        id: 'submitbutton',
                        name: 'step',
                        value: 'end'
                    },
                    {
                        inputType: 'hidden',
                        id: 'submitbutton2',
                        name: 'scheda',
                        value: scheda
                    },
                    {
                        inputType: 'hidden',
                        id: 'submitbutton3',
                        name: 'myhiddenbutton',
                        value: 'new_scheda_sino'
                    }                                                                                  
                  ],
            buttons: [{
                          text: 'Salva',
                          handler: function() {
                          simple.getForm().getEl().dom.action = 'save_carica.php';
                          simple.getForm().getEl().dom.method = 'POST';
                          simple.getForm().submit();
                      }
                    }]
     
      });
      
    simple.render('FormScheda_Sino');
    }
 
});