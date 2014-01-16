<?
include ("../config.inc.php");
include ("../top_foot.inc.php");

//intestazione
$db = mysql_connect($db_host, $db_user, $db_password);

if ($db == FALSE)
  die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
mysql_select_db($db_name, $db)
or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");

top_admin();
link_admin();

$gen=$_POST['gen'];

?>

<script src="../js/jquery.min.js" type="text/javascript"></script>
<!-- Include Ext and app-specific scripts: -->
<script type="text/javascript" src="../adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="../ext-all.js"></script>
<!--<script type="text/javascript" src="../ext-all-debug.js"></script>-->
 
<!-- Include your own Javascript file here - adapt the filename to your filename-->
<script type="text/javascript" src="../js/FormModDivClaOrdFam.js"></script>
<script type="text/javascript" src="../js/FormModDivClaOrdFam_Step2.js"></script>
 
<!-- Include Ext stylesheets here: -->
<link rel="stylesheet" type="text/css" href="../resources/css/ext-all.css" />
<link rel="stylesheet" type="text/css" href="../resources/css/xtheme-blue.css" />

<!-- ComboBox -->
<link rel="stylesheet" type="text/css" href="../css/combos.css" />

<style type="text/css">
        p { width:650px; }
</style>

<table class="Table_Corpo_Admin" cellpadding="10" height="351" width="980">
  <tbody>
<?
  if ($gen=="")
  {
?>  
     <tr class="testo1" height="327">
         <td height="327" valign="top" width="954">
         <br />
            <div align="center">
                <div id="FormModDivClaOrdFam"></div>
            </div>
        </td>
     </tr>   
<?
  }
  else 
  {
    $query = "SELECT * FROM gendivordclafam WHERE genere='$gen'";
    $result = mysql_query($query, $db);
    while ($row = mysql_fetch_array($result))
        {
          $div=$row[divisione];  
          $cla=$row[classe];
          $ord=$row[ordine];
          $fam=$row[famiglia];
		  $reg=$row[regno];	
        }
    mysql_close($db);
?>
     <script type="text/javascript">var gen="<? echo $gen;?>"</script>
     <script type="text/javascript">var div="<? echo $div;?>"</script>
     <script type="text/javascript">var cla="<? echo $cla;?>"</script>
     <script type="text/javascript">var ord="<? echo $ord;?>"</script>
     <script type="text/javascript">var fam="<? echo $fam;?>"</script>
     <script type="text/javascript">var reg="<? echo $reg;?>"</script>
     <tr class="testo1" height="327">
         <td height="327" valign="top" width="954">
         <br />
            <div align="center">
                <div id="FormModDivClaOrdFam_Step2"></div>
            </div>
        </td>
     </tr>     
<?       
  }
?>        
  </tbody>
</table>
<?
foot();
?>
<br />