Ext.onReady(function(){ 
  
if ($("#FormScheda_Step3").length>0)
    { 
  
      Ext.QuickTips.init();
      Ext.form.Field.prototype.msgTarget = 'side';
      
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
                        selectOnFocus:true,
                        forceSelection:true,
                        allowBlank: false,
                        blankText: 'Campo obbligatorio'                    
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
                        emptyText:'Seleziona tipo scheda...',
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
                        maskRe: /[0-9]/i                     
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
                        emptyText:'Seleziona data aggiornamento...'                      
                    },
                    {
                        inputType: 'hidden',
                        id: 'submitbutton',
                        name: 'step',
                        value: '2'
                    }                                         
                  ],
            buttons: [{
                          text: 'Continua',
                          handler: function() {
                          simple.getForm().getEl().dom.action = 'carica_scheda.php';
                          simple.getForm().getEl().dom.method = 'POST';
                          simple.getForm().submit();
                      }
                    }]
     
      });
      
    simple.render('FormScheda_Step3');
    }
 
});