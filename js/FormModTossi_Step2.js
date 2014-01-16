Ext.onReady(function(){ 

  if ($("#FormModTossi_Step2").length>0)
  {    
      Ext.QuickTips.init();
      Ext.form.Field.prototype.msgTarget = 'side';
      
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
                        name: 'id',
                        fieldLabel: 'Id',   
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        value: id,                                      
                        style:'background-color:transparent; background-image: none;',
                        readOnly: true                 
                    },
                    {
                        name: 'tossi',
                        fieldLabel: 'Tossicologia',  
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        value: tossi,
                        selectOnFocus:true,
                        allowBlank: false,
                        blankText: 'Campo obbligatorio'                    
                    },
                    {
                        name: 'posttossi',
                        fieldLabel: 'Post',  
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        value: post,
                        selectOnFocus:true,
                        allowBlank: false,
                        blankText: 'Campo obbligatorio',
                        maskRe: /[0-9]/i                    
                    },
                    {
                        xtype: 'checkbox',
                        fieldLabel: '',
                        boxLabel: 'Aggiorna anche la tabella [Archivio]',
                        name: 'archivio',
                        value: '1',
                        checked: true
                    },                      
                    {
                        inputType: 'hidden',
                        id: 'submitbutton',
                        name: 'myhiddenbutton',
                        value: 'mod_tossi'
                    },
                    {
                        inputType: 'hidden',
                        id: 'submitbutton2',
                        name: 'tossi_old',
                        value: tossi_old
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
  
      simple.render('FormModTossi_Step2');   
    }
});