/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
//Panel
Ext.onReady(function(){
    var p = new Ext.Panel({
        title: '<div style="text-align:left;">&nbsp;&nbsp;<u>Tabella</u>:&nbsp;&nbsp;Link Tossicologia</div>',
        collapsible:true,
        renderTo: 'panel-tossi',
        width:350,
        html: html4.join('')
    });
    
//Button    
    function renderButtons(title){

        new ButtonPanel4(
            '',
            [{
                text: 'Aggiungi',
                iconCls: 'add',
                scale: 'medium',
                iconAlign: 'top',
                handler: function(e, target, panel){
                    location.href="carica_tossi.php";
                }                 
            },{
                text: 'Modifica',
                iconCls: 'mod',
                scale: 'medium',
                iconAlign: 'top',
                handler: function(e, target, panel){
                    location.href="edit_tossi.php";
                }                   
            },{
                text: 'Cancella',
                iconCls: 'del',
                scale: 'medium',
                iconAlign: 'top',
                disabled: true              
            }
            ]
        );              
    }

    renderButtons('Normal Buttons');
});

// Helper class for organizing the buttons
ButtonPanel4 = Ext.extend(Ext.Panel, {
    layout:'table',
    defaultType: 'button',
    baseCls: 'x-plain',
    cls: 'btn-panel',
    renderTo : 'doc_tossi',
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

        ButtonPanel3.superclass.constructor.call(this, {
            items: items
        });
    }
});

// Some sample html
var html4 = [
	'<table>',
		'<tr height="50">',
		  '<td bgcolor="#FFFFFF" width="40"></td>',
			'<td bgcolor="#FFFFFF" width="150"><img src="../images/indice_tossico.gif"></td>',			
			'<td bgcolor="#FFFFFF" id="doc_tossi" width="160"></td>',			
		'</tr>',	
	'</table>'
];