Ext.onReady(function(){ 
  
  Ext.QuickTips.init();
  Ext.form.Field.prototype.msgTarget = 'side';
  
  //carica genere
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
        title: 'Inserimento Nuovo Link Tossicologia',
        bodyStyle:'padding:15px 5px 0',
        width: 500,
        defaults: {width: 300},
        defaultType: 'textfield',
        
        items: [
                {
                    name: 'tossi',
                    xtype: 'combo',
                    store: ds_tossi_data_active,
                    fieldLabel: 'Tossicologia',  
                    displayField: 'tossi',  
                    emptyText:'Inserisci Tossicologia...',  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnFocus:true,
                    allowBlank: false,
                    blankText: 'Campo obbligatorio'                    
                },
                {
                    name: 'posttossi',
                    fieldLabel: 'Post',
                    emptyText:'Inserisci Post...',  
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
                    inputType: 'hidden',
                    id: 'submitbutton',
                    name: 'myhiddenbutton',
                    value: 'new_tossi'
                }
              ],
        buttons: [{
                      text: 'Inserisci',
                      handler: function() {
                      simple.getForm().getEl().dom.action = 'save_carica.php';
                      simple.getForm().getEl().dom.method = 'POST';
                      simple.getForm().submit();
                  }
                }]
 
  });
  
simple.render('FormTossi');
 
});