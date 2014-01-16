<?
include ("config.inc.php");
include ("top_foot.inc.php");
include ("functions.php");
top();

?>
    <link rel="stylesheet" type="text/css" href="resources/css/ext-all.css" />
    <link rel="stylesheet" type="text/css" href="css/PanelResizer.css" />        
    
    <!-- LIBS -->
    <script type="text/javascript" src="adapter/ext/ext-base.js"></script>
    <!-- ENDLIBS -->

    <script type="text/javascript" src="ext-all.js"></script>


    <script type="text/javascript" src="js/ProgressBarPager.js"></script>
    <script type="text/javascript" src="js/PanelResizer.js"></script>
    <script type="text/javascript" src="js/datagrid.js"></script>
    
    <!-- FilterRow -->
    <link rel="stylesheet" type="text/css" href="css/FilterRow.css"/>
    <script type="text/javascript" src="js/FilterRow.js"></script>     
    
    <!-- highlightSort -->
    <link rel="stylesheet" type="text/css" href="css/highlightSort.css"/>
    <script type="text/javascript" src="js/highlightSort.js"></script>     
    
    <!-- CellToolTips -->
    <script type="text/javascript" src="js/ToolTipTarget.js"></script> 
    <script type="text/javascript" src="js/CellToolTips.js"></script>        
      
    <style type="text/css">
            .chat {
                background-image:url(images/chat.png) !important;
            }
            .shop {
                background-image:url(images/shop.png) !important;
            }    
            .bota {
                background-image:url(images/bota.png) !important;
            } 
            .mico {
                background-image:url(images/mico.png) !important;
            }   
            .forum {
                background-image:url(images/forum.png) !important;
            }                            
    </style> 
      <table width="64" border="0" cellspacing="0" cellpadding="0" height="13">
  <tr height="13">
    <td width="64" height="13"></td>
  </tr>
</table>

<table width="980">
  <tr>
    <td>
      <div align="center">
              <table width="970" border="0" cellspacing="0" cellpadding="1" height="26">
                <tr height="26">                       
                  <td width="970" height="26">                        
                    <div align="center">
                            <table width="970" border="0" cellspacing="0" cellpadding="0" >                        
                              <tr>                        
                                <td width="970">                                    
                                  <div align="center">                                    
                                          <table width="970" border="0" cellspacing="2" cellpadding="4" style="border:1px solid #ffffff">                                    
                                            <tr>
                                              <td>
                                                <div id="grid-example"></div>                                                
                                              </td>                                                                                                              
                                            </tr>                                                                                   
                                          </table>                        
                                  </div>                        
                                </td>                        
                              </tr>                            </table>
                    </div>
                  </td>
                </tr>
              </table>
      </div>
    </td>
  </tr>
</table>
<?
foot();
?>