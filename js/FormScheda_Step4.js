Ext.onReady(function(){ 
  
if ($("#FormScheda_Step4").length>0)
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
                        forceSelection:true                  
                    },
                    {
                        xtype: 'checkbox',
                        fieldLabel: 'Micro',
                        name: 'micro',
                        value: '1'
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
                        value: 'new_scheda'
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
      
    simple.render('FormScheda_Step4');
    }
 
});