Ext.onReady(function(){
  
if ($("#FormModGenSpe_Step3").length>0)
  {      
    Ext.QuickTips.init();
    Ext.form.Field.prototype.msgTarget = 'side';
    
    var simple = new Ext.form.FormPanel
    ({   
          standardSubmit: true,
          frame:true,
          title: 'Modifica Genere-specie',
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
                    value: gensel,
                    selectOnFocus:true,
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'                      
                  },
                  {
                    name: 'spe',
                    fieldLabel: 'Specie',  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    value: spesel,
                    selectOnFocus:true,
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'                      
                  },
                  {
                      xtype: 'checkbox',
                      fieldLabel: '',
                      boxLabel: 'Aggiorna anche la tabella ARCHIVIO',
                      name: 'archivio',
                      value: '1',
                      checked: true
                  },
                  {
                      xtype: 'checkbox',
                      fieldLabel: '',
                      boxLabel: 'Aggiorna anche la tabella [Div-Cla-Ord-Fam]',
                      name: 'divclaordfam',
                      value: '1',
                      checked: true
                  },                  
                  {
                      inputType: 'hidden',
                      id: 'submitbutton',
                      name: 'myhiddenbutton',
                      value: 'mod_genspe'
                  },
                  {
                      inputType: 'hidden',
                      id: 'submitbutton2',
                      name: 'id',
                      value: id_genspe
                  },
                  {
                      inputType: 'hidden',
                      id: 'submitbutton3',
                      name: 'gen_old',
                      value: gensel
                  },
                  {
                      inputType: 'hidden',
                      id: 'submitbutton4',
                      name: 'spe_old',
                      value: spesel
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
    
    simple.render('FormModGenSpe_Step3');
  }
    
});