Ext.onReady(function(){ 
  
  Ext.QuickTips.init();
  Ext.form.Field.prototype.msgTarget = 'side';  
 
  var ModFam = new Ext.form.FormPanel
  ({
 
        standardSubmit: true,
        frame:true,
        title: 'Inserimento nuova Scheda - Verifica dati',
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
                    inputType: 'hidden',
                    id: 'submitbutton',
                    name: 'step',
                    value: '3'
                },
                {
                    inputType: 'hidden',
                    id: 'submitbutton2',
                    name: 'scheda',
                    value: scheda
                },
                {
                    inputType: 'hidden',
                    id: 'submitbutton4',
                    name: 'myhiddenbutton',
                    value: 'new_scheda_sino'
                }                                               
              ],
        buttons: [{
                      text: 'Inserisci',
                      handler: function() {
                      ModFam.getForm().getEl().dom.action = 'save_carica.php';
                      ModFam.getForm().getEl().dom.method = 'POST';
                      ModFam.getForm().submit();
                  }
                }]
 
  });

if ($("#formSchedaSinoEnd").length>0)
  {
    ModFam.render('formSchedaSinoEnd');
  }
    
});