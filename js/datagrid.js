Ext.onReady(function(){      
    
    var store = new Ext.data.JsonStore({
      url: "get-data-for-grid.php",
      root: "rows",
      id:'id',   
      totalProperty:'totalCount',      
      remoteSort: true,
      sortInfo: {
            field: 'genere,specie',
            direction: 'ASC'
      },      
      autoDestroy: true,
      fields: [
         {name: 'scheda'},
         {name: 'topic'},
         {name: 'genere'},
         {name: 'specie'},
         {name: 'autore'},
         {name: 'micro'},
         {name: 'famiglia'},
         {name: 'ordine'},
         {name: 'classe'},
         {name: 'divisione'},
         {name: 'regno'},
         {name: 'comme'},
         {name: 'posttossi'},
         {name: 'tossi'},
         {name: 'datains'}        
      ]
    });
      
    var filterRow = new Ext.ux.grid.FilterRow({
      autoFilter: false,
      listeners: {
        change: function(data) {
          store.baseParams = data;
          store.load({
            params: {start: 0, limit: 15}
          });
        }
      }
    }); 
    
    var cellTips = new Ext.ux.plugins.grid.CellToolTips([
      { field: 'genere', tpl: '<b>Genere:</b> <i>{genere}</i><br /><b>Famiglia:</b> <i>{famiglia}</i><br /><b>Ordine:</b> <i>{ordine}</i><br /><b>Classe:</b> <i>{classe}</i><br /><b>Divisione:</b> <i>{divisione}</i><br />' },
      { field: 'comme', tpl: '<tpl if="comme==\'C\'"><b>C = Funghi commestibili</b></tpl><tpl if="comme==\'C1\'"><b>C1 = Funghi a commestibilit&agrave condizionata</b></tpl><tpl if="comme==\'N\'"><b>N = Funghi non commestibili o sospetti</b></tpl><tpl if="comme==\'V\'"><b>V = Funghi velenosi</b></tpl><tpl if="comme==\'M\'"><b>M = Funghi velenosi mortali</b></tpl>'}
    ]);    
    
    var panelResizer = new Ext.ux.PanelResizer({ minHeight: 200 });
    
    var highlightSort = new Ext.ux.plugins.grid.highlightSort({});
    
    var tbar = new Ext.Toolbar({
        items: 
        [
          {xtype: 'tbseparator'},
          {
            text:'<div align="center" class="testoicone">Il Meraviglioso Mondo dei Funghi e dei Fiori Spontanei</div>',
            iconCls:'forum',
            listeners: { 
                render: function(button){ 
                    button.getEl().on('click', function(){ 
                        //alert('works in IE6, IE8, FF');
                        location.href='http://www.funghiitaliani.it/';                
                    }); 
                } 
            }       
          },
          {xtype: 'tbseparator'},          
          {
            text:'<div align="center" class="testoicone">Micologia</div>',
            iconCls:'mico',
            listeners: { 
                render: function(button){ 
                    button.getEl().on('click', function(){ 
                        //alert('works in IE6, IE8, FF');
                        location.href='http://www.funghiitaliani.it/micologia/indice.html';                
                    }); 
                } 
            }       
          },                    
          {xtype: 'tbseparator'},          
          {
            text:'<div align="center" class="testoicone">Botanica</div>',
            iconCls:'bota',
            listeners: { 
                render: function(button){ 
                    button.getEl().on('click', function(){ 
                        //alert('works in IE6, IE8, FF');
                        location.href='http://www.funghiitaliani.it/botanica/indice.html';                
                    }); 
                } 
            }       
          },          
          {xtype: 'tbseparator'},
          {
            text:'<div align="center" class="testoicone">Iscriviti AMINT</div>',      
            iconCls:'shop',
            listeners: { 
                render: function(button){ 
                    button.getEl().on('click', function(){ 
                        //alert('works in IE6, IE8, FF');
                        location.href='http://www.funghiitaliani.it/index.php?app=nexus';                
                    }); 
                } 
            }       
          },          
          {xtype: 'tbseparator'},
          {
            text:'<div align="center" class="testoicone">Chat AMINT</div>',            
            iconCls:'chat',
            listeners: { 
                render: function(button){ 
                    button.getEl().on('click', function(){ 
                        //alert('works in IE6, IE8, FF');
                        location.href='http://www.funghiitaliani.it/index.php?app=chat';                
                    }); 
                } 
            }       
          },
          {xtype: 'tbseparator'}                                                                    
        ]        
    });               

      var grid = new Ext.grid.GridPanel({
        store: store,
        loadMask: new Ext.LoadMask(Ext.getBody(), {msg:"Caricamento..."}),
        columns: [
            {id:'scheda', header: "Scheda", width: 73, align: 'center', sortable: false, renderer: scheda, dataIndex: 'scheda',
              filter: 
              {
                field: 
                {
                  xtype: "combo",
                  mode: 'local',
                  //store: new Ext.data.ArrayStore
                  store: new Ext.data.JsonStore
                  ({
                    id: 0,
                    fields: ['name','value'],
                    //data: [['-'], ['A'], ['B'], ['S']]
                    data: 
                    [
                        {name : '-',   value: '-'},
                        {name : 'AMINT',   value: 'A'},
                        {name : 'Breve',  value: 'B'},
                        {name : 'Sinonimo', value: 'S'}
                    ]
                  }),
                  valueField: 'value',
                  displayField: 'name',
                  triggerAction: 'all',
                  value: "-"
                },
                fieldEvents: ["select"],
                test: function(filterValue, value) 
                      {
                        return filterValue === "-" || filterValue === value;
                      }
               }            
            },            
            {id:'genere', header: "Genere", width: 150, renderer: gen, sortable: true, dataIndex: 'genere', filter:{ }},
            {id:'specie', header: "Specie", width: 150, sortable: true, renderer: spe, dataIndex: 'specie', filter:{ }},
            {id:'autore', header: "Autore", width: 150, sortable: true, renderer: all, dataIndex: 'autore', filter:{ }},
            {id:'micro', header: "Micro", width: 53, align: 'center', sortable: false, renderer: micro, dataIndex: 'micro',
              filter: 
              {
                field: 
                {
                  xtype: "combo",
                  mode: 'local',           
                  store: new Ext.data.JsonStore
                  ({
                    id: 0,
                    fields: ['name','value'],      
                    data: 
                    [
                        {name : '-',   value: '-'},
                        {name : 'Si',   value: '1'},
                        {name : 'No',  value: '0'}                      
                    ]
                  }),
                  valueField: 'value',
                  displayField: 'name',
                  listWidth: 60,
                  triggerAction: 'all',
                  value: "-"
                },
                fieldEvents: ["select"],
                test: function(filterValue, value) 
                      {
                        return filterValue === "-" || filterValue === value;
                      }      
               }                           
            },
            {id:'regno', header: "Regno", width: 130, hidden: true, sortable: true, renderer: fam, dataIndex: 'regno', filter:{ }},
            {id:'divisione', header: "Divisione", width: 130, hidden: true, sortable: true, renderer: fam, dataIndex: 'divisione', filter:{ }},
            {id:'classe', header: "Classe", width: 130, hidden: true, sortable: true, renderer: fam, dataIndex: 'classe', filter:{ }},
            {id:'ordine', header: "Ordine", width: 130, hidden: true, sortable: true, renderer: fam, dataIndex: 'ordine', filter:{ }},
            {id:'famiglia', header: "Famiglia", width: 130, sortable: true, renderer: fam, dataIndex: 'famiglia', filter:{ }},                        
            {id:'comme', header: "Com.", width: 53, align: 'center', sortable: false, renderer: comme, dataIndex: 'comme',              
              filter: 
              {
                field: 
                {
                  xtype: "combo",
                  mode: 'local',
                  store: new Ext.data.JsonStore
                  ({
                    id: 0,                   
                    fields : ['name', 'value'], 
                    data: 
                    [
                        {name : '-',   value: '-'},
                        {name : 'C = Commestibili', value: 'C'},
                        {name : 'C1 = Funghi a commestibilit&agrave condizionata', value: 'C1'},
                        {name : 'N = Funghi non commestibili o sospetti', value: 'N'},
                        {name : 'V = Funghi velenosi', value: 'V'},
                        {name : 'M = Funghi velenosi mortali', value: 'M'}
                    ]
                  }),
                  valueField: 'value',
                  displayField: 'name',
                  listWidth: 220,                
                  triggerAction: 'all',
                  value: "-"
                },
                fieldEvents: ["select"],
                test: function(filterValue, value) 
                      {
                        return filterValue === "-" || filterValue === value;
                      }
               }                        
            },
            {id:'tossi', header: "Tossicologia", width: 140, sortable: true, renderer: tossi, dataIndex: 'tossi', filter:{ }},                        
            {id:'datains', header: "Aggior.", width: 78, sortable: true, renderer: data, dataIndex: 'datains'}   
        ],  
        highlightClasses: {
          ASC:  'x-custom-sort-asc'
          // DESC stays at default = x-ux-col-sort-desc
        },        
        bbar: new Ext.PagingToolbar({
            pageSize: 15,
            store: store,
            displayInfo: true,
            plugins: [new Ext.ux.ProgressBarPager()]
        }),    
        plugins: [filterRow, panelResizer, highlightSort, cellTips],
        
        tbar: tbar,
        /*footer: true,
        
        footerCfg: {
            cls: 'testo_foot',            
            html: '<br /><center>a cura di Elia Curti WebMaster A.M.I.N.T. - Grafica A.M.I.N.T. Tomaso Lezzi</center>'
        },*/         
        height:720,
        width:1010,
        frame:true,           
        title:
        '<div align="left"><img src="images/testata_micologia.jpg" alt="" height="68" width="974" border="0"></div>',
        renderTo: "grid-example"
      });
      
    grid.render('grid-example');    
    
    /*var myPanel = new Ext.Viewport({
    layout: 'fit',
    border: false,
    items: [grid]
  }); */ 

    store.load({params:{start:0, limit:15}});      
           
        
    function all(val){
            return '<span style="color:#000088;">' + val + '</span>';
    }
    
    function gen(val,meta,record){                   
            var topic = record.data.topic;
            var sino = record.data.scheda;
            if (sino == 'S'){
            return ('<a class="link20" style="color:#000088;" href="http://www.funghiitaliani.it/index.php?showtopic='+topic+'" target="_blank">' + val + '</a>');
            }
            return ('<a class="link20" href="http://www.funghiitaliani.it/index.php?showtopic='+topic+'" target="_blank">' + val + '</a>');
    }
    
    function spe(val,meta,record){
            var sino = record.data.scheda;
            if (sino == 'S'){
            return '<i><span style="color:#000088;">' + val + '</span></i>';
            }             
            return '<i><span style="color:#007883;">' + val + '</span></i>';
    }
    
    function fam(val){
            return '<i><span style="color:#000088;">' + val + '</span></i>';
    }
    
    function data(val){
        anno=val.substring(0,4);
        mese=val.substring(4,6);
        giorno=val.substring(6,8);
        date=giorno+"/"+mese+"/"+anno;
        if(val == '0'){            
            return '<span style="color:#000088;">' + "" + '</span>';
        }
        return '<span style="color:#000088;">' + date + '</span>';        
    }
    
    function scheda(val){
      if (val=='A')
        {
          return '<img align="center" src="images/scheda1.gif" alt="" height="21" width="25" border="0"/>';
        }
      else if (val=='B')
        {
          return '<img src="images/scheda2.gif" alt="" height="21" width="25" border="0"/>';
        }
      return '<img src="images/scheda3.gif" alt="" height="21" width="25" border="0"/>';       
    }
    
    function micro(val){
      if (val=='1')
        {
          return '<img align="center" src="images/micro.gif" alt="" height="21" width="25" border="0"/>';
        }
      else
        {
          return '<span style="color:#000088;">' + "" + '</span>';
        }         
    }           
    
    function tossi(val,meta,record){
          var linktossi = record.data.posttossi;
          return '<a class="linktossi" href="http://www.funghiitaliani.it/index.php?s=&showtopic=16820&view=findpost&p='+linktossi+'" target="_blank">' + val + '</a>';
    }    
    
    function comme(val){
      switch (val)
      {
        case 'C':
        return '<img align="center" src="images/bollino1.gif" border="0"/>';
        break;
        case 'C1':
        return '<img align="center" src="images/bollino1a.gif" border="0"/>';
        break;
        case 'N':
        return '<img align="center" src="images/bollino2.gif" border="0"/>';
        break;
        case 'V':
        return '<img align="center" src="images/bollino3.gif" border="0"/>';
        break;
        case 'M':
        return '<img align="center" src="images/bollino3a.gif" border="0"/>';
        break;                                      
      }      
    }        
        
});
