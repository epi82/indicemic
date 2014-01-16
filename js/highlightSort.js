Ext.ns('Ext.ux.plugins.grid');

Ext.ux.plugins.grid.highlightSort = Ext.extend( Ext.util.Observable, {
  init: function(grid) {
    this.grid = grid;
    if( ! grid.highlightClasses ) {
      grid.highlightClasses = {};
    }
    if( ! grid.highlightClasses.ASC ) {
      grid.highlightClasses.ASC = 'x-ux-col-sort-asc';
    }
    if( ! grid.highlightClasses.DESC ) {
      grid.highlightClasses.DESC = 'x-ux-col-sort-desc';
    }
    grid.on( 'sortchange', this.highlight.createDelegate(this) );
    grid.getView().afterMove = grid.getView().afterMove.createSequence(this.highlightMoved, this);
  },
  highlight: function(grid, sortinfo) {
    if( this.oldSort && this.oldDir ) {
      this.removeClass( grid, this.oldSort, grid.highlightClasses[this.oldDir] );
    }
    this.oldSort = sortinfo.field;
    this.oldDir  = sortinfo.direction;
    this.applyClass( grid, this.oldSort, grid.highlightClasses[this.oldDir] );
  },
  highlightMoved: function( newidx ) {
    if( this.oldSort && this.oldDir ) {
      this.applyClass( this.grid, this.oldSort, this.grid.highlightClasses[this.oldDir] );
    }
  },
  removeClass: function( grid, fld, cls ) {
    var colidx = grid.getColumnModel().getIndexById(fld);
    if( colidx == -1 ) {
      return;
    }
    for( var i = 0; i < grid.getStore().getCount(); i++ ) {
      Ext.Element.get(grid.getView().getCell(i,colidx)).removeClass(cls);
    }
  },
  applyClass: function( grid, fld, cls ) {
    var colidx = grid.getColumnModel().getIndexById(fld);
    if( colidx == -1 ) {
      return;
    }
    for( var i = 0; i < grid.getStore().getCount(); i++ ) {
      Ext.Element.get(grid.getView().getCell(i,colidx)).addClass(cls);
    }
  }
});