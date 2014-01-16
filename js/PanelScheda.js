/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
//Panel
Ext.onReady(function(){
    var p = new Ext.Panel({
        title: '<div style="text-align:left;">&nbsp;&nbsp;<u>Tabella</u>:&nbsp;&nbsp;Archivio schede micologiche</div>',
        collapsible:true,
        renderTo: 'panel-basic',
        width:350,
        html: html.join('')
    });
    
//Button    
    function renderButtons(title){

        new ButtonPanel(
            '',
            [{
                text: 'Aggiungi',
                iconCls: 'add',
                scale: 'medium',
                iconAlign: 'top',
                handler: onItemClick,
                handler: function(e, target, panel){
                    location.href="carica_scheda.php";
                }                              
            },{
                text: 'Modifica',
                iconCls: 'mod',
                scale: 'medium',
                iconAlign: 'top',
                handler: onItemClick,
                handler: function(e, target, panel){
                    location.href="edit_scheda.php";
                }                
            },{
                text: 'Cancella',
                iconCls: 'del',
                scale: 'medium',
                iconAlign: 'top',
                handler: onItemClick,
                handler: function(e, target, panel){
                    location.href="delete_scheda.php";                              
                }
              }  
            ]
        );              
    }

    renderButtons('Normal Buttons');
});

// Helper class for organizing the buttons
ButtonPanel = Ext.extend(Ext.Panel, {
    layout:'table',
    defaultType: 'button',
    baseCls: 'x-plain',
    cls: 'btn-panel',
    renderTo : 'doc_scheda',
    menu: undefined,
    split: false,

    layoutConfig: {
        columns:3
    },

    constructor: function(desc, buttons){
        // apply test configs
        for(var i = 0, b; b = buttons[i]; i++){
            b.menu = this.menu;
            b.enableToggle = this.enableToggle;
            b.split = this.split;
            b.arrowAlign = this.arrowAlign;
        }
        var items = [{
            xtype: 'box',
            autoEl: {tag: 'h3', html: desc, style:"padding 3px 0 3px;"},
            colspan: 3
        }].concat(buttons);

        ButtonPanel.superclass.constructor.call(this, {
            items: items
        });
    }
});

// Some sample html
var html = [
  '<table>',
    '<tr height="50">',
      '<td bgcolor="#FFFFFF" width="40"></td>',
      '<td bgcolor="#FFFFFF" width="150"><img src="../images/indice_schede.gif"></td>',      
      '<td bgcolor="#FFFFFF" id="doc_scheda" width="160"></td>',      
    '</tr>',  
  '</table>'
];