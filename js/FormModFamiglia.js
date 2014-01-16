Ext.onReady(function(){ 
  
  Ext.QuickTips.init();
  Ext.form.Field.prototype.msgTarget = 'side';
  
  var ModFam = new Ext.form.FormPanel
  ({
 
        standardSubmit: true,
        frame:true,
        title: 'Modifica Famiglia',
        bodyStyle:'padding:15px 5px 0',
        width: 500,
        defaults: {width: 300},
        defaultType: 'textfield',
        
        items: [
                {
                    name: 'mod_fam',
                    fieldLabel: 'Famiglia',  
                    displayField: 'famiglia',  
                    mode: 'remote',
                    minChars: 0,
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnFocus:true,
                    forceSelection:true,
                    value: nome_fam,
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
                    inputType: 'hidden',
                    id: 'submitbutton',
                    name: 'myhiddenbutton',
                    value: 'mod_fam'
                },
                {
                    inputType: 'hidden',
                    id: 'submitbutton2',
                    name: 'id',
                    value: id
                },
                {
                    inputType: 'hidden',
                    id: 'submitbutton3',
                    name: 'fam_old',
                    value: nome_fam
                }                
              ],
        buttons: [{
                      text: 'Modifica',
                      handler: function() {
                      ModFam.getForm().getEl().dom.action = 'save_carica.php';
                      ModFam.getForm().getEl().dom.method = 'POST';
                      ModFam.getForm().submit();
                  }
                }]
 
  });

if ($("#formModFamiglia").length>0)
  {
    ModFam.render('formModFamiglia');
  }
    
});