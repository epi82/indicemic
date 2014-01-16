Ext.onReady(function(){ 
  
  Ext.QuickTips.init();
  Ext.form.Field.prototype.msgTarget = 'side';
  
  var ModFam = new Ext.form.FormPanel
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
                    name: 'id_scheda',
                    fieldLabel: 'Id',  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    value: id_scheda,                   
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
                    value: genere,                   
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
                    value: specie,                                      
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
                    xtype     : 'datefield',
                    name      : 'data',
                    fieldLabel: 'Data',
                    value: data,
                    format: 'd-m-Y',
                    altFormats: 'd-m-Y', 
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
                      ModFam.getForm().getEl().dom.action = 'save_carica.php';
                      ModFam.getForm().getEl().dom.method = 'POST';
                      ModFam.getForm().submit();
                  }
                }]
 
  });

if ($("#formDelSchedaSino").length>0)
  {
    ModFam.render('formDelSchedaSino');
  }
    
});