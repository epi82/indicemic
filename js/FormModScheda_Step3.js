Ext.onReady(function(){ 
  
if ($("#FormModScheda_Step3").length>0)
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
                        maskRe: /[0-9]/i,
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
                        name: 'div',
                        fieldLabel: 'Divisione',   
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        value: div,                                      
                        style:'background-color:transparent; background-image: none;',
                        readOnly: true                 
                    },
                    {
                        name: 'cla',
                        fieldLabel: 'Classe',   
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        value: cla,                                      
                        style:'background-color:transparent; background-image: none;',
                        readOnly: true                 
                    },
                    {
                        name: 'ord',
                        fieldLabel: 'Ordine',   
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        value: ord,                                      
                        style:'background-color:transparent; background-image: none;',
                        readOnly: true                 
                    },
                    {
                        name: 'fam',
                        fieldLabel: 'Famiglia',   
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        value: fam,                                      
                        style:'background-color:transparent; background-image: none;',
                        readOnly: true                 
                    },
                    {
                        id:             'id_comme',
                        xtype:          'combo',
                        mode:           'local',                    
                        triggerAction:  'all',
                        forceSelection: true,
                        editable:       false,
                        allowBlank:     false,
                        blankText:      'Campo obbligatorio',
                        fieldLabel:     'Commestibilit&agrave;',
                        name:           'combo_comme',
                        displayField:   'name',
                        valueField:     'value',
                        hiddenName :    'comme',
                        value: comme,
                        emptyText:'Seleziona commestibilita...',
                        store:          new Ext.data.JsonStore({
                            fields : ['name', 'value'],
                            data   : [
                                {name : 'Commestibile',   value: 'C'},
                                {name : 'Commestibilit&agrave condizionata',  value: 'C1'},
                                {name : 'Non commestibile', value: 'N'},
                                {name : 'Velenoso', value: 'V'},
                                {name : 'Mortale', value: 'M'}
                            ]
                        })                  
                    },
                    {
                        name: 'tossi',
                        xtype: 'combo',
                        store: ds_tossi_data_active,
                        fieldLabel: 'Tossicologia',  
                        displayField: 'tossi',  
                        emptyText:'Seleziona Tossicologia...',  
                        mode: 'remote',
                        minChars: 0,
                        typeAhead: true,
                        triggerAction: 'all',
                        selectOnFocus:true,
                        forceSelection:true,
                        value: tossi                  
                    },
                    {
                        xtype: 'checkbox',
                        fieldLabel: 'Micro',
                        name: 'micro',
                        value: '1',
                        checked: micro
                    },                                        
                    {
                        inputType: 'hidden',
                        id: 'submitbutton2',
                        name: 'scheda_id',
                        value: scheda_id
                    },
                    {
                        inputType: 'hidden',
                        id: 'submitbutton3',
                        name: 'myhiddenbutton',
                        value: 'mod_scheda'
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
      
    simple.render('FormModScheda_Step3');
    }
 
});