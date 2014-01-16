Ext.onReady(function(){

        Ext.MessageBox.show
            ({
                 msg: 'Elaborazione dati in corso... attendi',
                 progressText: 'Salvataggio in corso...',
                 width:300,
                 wait:true,
                 waitConfig: {interval:200},
                 icon:'ext-mb-download' //custom class in msg-box.html
            });
        
        setTimeout(function()
            {
                 Ext.MessageBox.hide();
                 Ext.MessageBox.show
                    ({
                         title: 'Messaggio',
                         msg: '<b>Elaborazione terminata</b>',
                         buttons: Ext.MessageBox.OK,
                         icon: Ext.MessageBox.INFO
                    });
            }, 2000);

});