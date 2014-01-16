Ext.onReady(function(){ 
  
  Ext.QuickTips.init();
  Ext.form.Field.prototype.msgTarget = 'side';
  
  var rd_random_employee_data = new Ext.data.JsonReader({}, ['famiglia']);
    
  var ds_random_employee_data_active = new Ext.data.Store({  
  proxy: new Ext.data.HttpProxy({  
      url: 'get-data-from-db.php'  
  }),  
  reader: rd_random_employee_data,  
  remoteSort: false  
  });
 
  var ModFam = new Ext.form.FormPanel
  ({
 
        standardSubmit: true,
        frame:true,
        title: 'Inserimento nuova Scheda',
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
                    style:'background-color:transparent; background-image: none;',
                    readOnly: true     
                },
                {
                    name: 'spe',
                    fieldLabel: 'specie',   
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    value: spesel,                                      
                    style:'background-color:transparent; background-image: none;',
                    readOnly: true                 
                },
                {
                    name: 'autore',
                    fieldLabel: 'Autore',  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    value: autore,                                      
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
                    name: 'fam',
                    xtype: 'combo',
                    store: ds_random_employee_data_active,
                    fieldLabel: 'Famiglia',  
                    displayField: 'famiglia',
                    emptyText:'Seleziona famiglia...',  
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
                            {name : 'Piante officinali - Aromatiche e cosmetiche',   value: 'PO'},
                            {name : 'Piante commestibili',  value: 'PC'},
                            {name : 'Piante commestibili e officinali', value: 'PCO'},
                            {name : 'Piante velenose', value: 'PV'},
                            {name : 'Piante velenose e officinali', value: 'PVO'},
                            {name : 'Pianta senza indicazioni di proprieta', value: 'P'}
                        ]
                    })                  
                },
                {
                    name: 'nom_comune',
                    fieldLabel: 'Nome Comune',  
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
                    inputType: 'hidden',
                    id: 'submitbutton',
                    name: 'step',
                    value: '2'
                },
                {
                    inputType: 'hidden',
                    id: 'submitbutton2',
                    name: 'scheda',
                    value: scheda
                }              
              ],
        buttons: [{
                      text: 'Avanti',
                      handler: function() {
                      ModFam.getForm().getEl().dom.action = 'carica_scheda.php';
                      ModFam.getForm().getEl().dom.method = 'POST';
                      ModFam.getForm().submit();
                  }
                }]
 
  });

if ($("#formSchedaStep2").length>0)
  {
    ModFam.render('formSchedaStep2');
  }
    
});