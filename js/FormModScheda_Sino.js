Ext.onReady(function(){ 
  
if ($("#FormModScheda_Sino").length>0)
    { 
  
      Ext.QuickTips.init();
      Ext.form.Field.prototype.msgTarget = 'side';        
      
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
                        selectOnFocus:true,
                        forceSelection:true,
                        allowBlank: false,
                        blankText: 'Campo obbligatorio',
                        value: aut                    
                    },
                    {
                        id:             'id_scheda',
                        xtype:          'combo',
                        mode:           'local',                    
                        triggerAction:  'all',
                        forceSelection: true,
                        editable:       false,
                        allowBlank:     false,
                        blankText:      'Campo obbligatorio',
                        fieldLabel:     'Scheda',
                        name:           'combo_scheda',
                        displayField:   'name',
                        valueField:     'value',
                        hiddenName :    'scheda',
                        value: scheda,
                        store:          new Ext.data.JsonStore({
                            fields : ['name', 'value'],
                            data   : [
                                {name : 'Scheda AMINT',   value: 'A'},
                                {name : 'Scheda Breve',  value: 'B'},
                                {name : 'Scheda Sinonimo', value: 'S'}
                            ]
                        })                  
                    },
                    {
                        name: 'topic',
                        fieldLabel: 'Topic',  
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        selectOnFocus:true,
                        forceSelection:true,
                        allowBlank: false,
                        blankText: 'Campo obbligatorio',
                        maskRe: /[1-9]/i,
                        value: topic                     
                    },
                    {
                        xtype     : 'datefield',
                        name      : 'data',
                        fieldLabel: 'Data',
                        format: 'd-m-Y',
                        altFormats: 'd-m-Y', 
                        allowBlank: false,
                        blankText: 'Campo obbligatorio',
                        invalidText: 'Data non valida - Formato richiesto: (gg-mm-aaaa)',
                        emptyText:'Seleziona data aggiornamento...',
                        value: data                      
                    },
                    {
                        inputType: 'hidden',
                        id: 'submitbutton',
                        name: 'step',
                        value: 'sino'
                    },                             
                    {
                        inputType: 'hidden',
                        id: 'submitbutton2',
                        name: 'scheda_id',
                        value: scheda_id
                    }                                                                                
                  ],
            buttons: [{
                          text: 'Continua',
                          handler: function() {
                          simple.getForm().getEl().dom.action = 'edit_scheda.php';
                          simple.getForm().getEl().dom.method = 'POST';
                          simple.getForm().submit();
                      }
                    }]
     
      });
      
    simple.render('FormModScheda_Sino');
    }
 
});