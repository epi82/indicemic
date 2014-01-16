Ext.onReady(function(){ 
  
if ($("#FormDelScheda_Step3").length>0)
    { 
  
      Ext.QuickTips.init();
      Ext.form.Field.prototype.msgTarget = 'side'; 
      
      var simple = new Ext.form.FormPanel
      ({
     
            standardSubmit: true,
            frame:true,
            title: 'Cancella Scheda',
            bodyStyle:'padding:15px 5px 0',
            width: 500,
            defaults: {width: 300},
            defaultType: 'textfield',
            
            items: [
                    {
                        name: 'id',
                        fieldLabel: 'Id',   
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        value: scheda_id,                                      
                        style:'background-color:transparent; background-image: none;',
                        readOnly: true                 
                    },             
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
                        name: 'scheda',
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
                        name: 'myhiddenbutton',
                        value: 'del_scheda'
                    }                                                                                                    
                  ],
            buttons: [{
                          text: 'Cancella',
                          handler: function() {
                          simple.getForm().getEl().dom.action = 'save_carica.php';
                          simple.getForm().getEl().dom.method = 'POST';
                          simple.getForm().submit();
                      }
                    }]
     
      });
      
    simple.render('FormDelScheda_Step3');
    }
 
});