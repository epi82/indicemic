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
$scheda_id=$_POST['scheda_id'];

?>

<script src="../js/jquery.min.js" type="text/javascript"></script>
<!-- Include Ext and app-specific scripts: -->
<script type="text/javascript" src="../adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="../ext-all.js"></script>
<!--<script type="text/javascript" src="../ext-all-debug.js"></script>-->
 
<!-- Include your own Javascript file here - adapt the filename to your filename-->
<script type="text/javascript" src="../js/FormDelScheda.js"></script>
<script type="text/javascript" src="../js/FormDelScheda_Step2.js"></script>
<script type="text/javascript" src="../js/FormDelScheda_Step3.js"></script>
 
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
if ($gen=="" AND $scheda_id=="")
    {
?>   
     <tr class="testo1" height="327">
         <td height="327" valign="top" width="954">
         <br />
            <div align="center">
                <div id="FormDelScheda"></div>
            </div>
         </td>
     </tr>
<? 
    }
elseif ($gen!="" AND $scheda_id=="")
    {
?>
     <script type="text/javascript">var gen="<? echo $gen;?>"</script>
     <tr class="testo1" height="327">
         <td height="327" valign="top" width="954">
         <br />
            <div align="center">
                <div id="FormDelScheda_Step2"></div>
            </div>
         </td>
     </tr>
<?
    }
elseif ($scheda_id!="")
    {
      $query = "SELECT * FROM archivio WHERE id='$scheda_id'"; 
      $result = mysql_query($query, $db);
      while ($row = mysql_fetch_array($result))
          {
            $gen=$row[genere];
            $spe=$row[specie];
            $aut=$row[autore];
            $scheda=$row[scheda];
            $datains=$row[datains];
          }
      mysql_close($db);
      
      $anno=substr($datains, -8, 4);
      $mese=substr($datains, -4, 2);
      $giorno=substr($datains, -2, 2);
      $data=$giorno.'-'.$mese.'-'.$anno;
      
      // carica descrizione scheda
      //---------------------------  
      switch ($scheda)
      {
        case 'A':
          $descr_scheda='Scheda AMINT';
        break;
        case 'B':
          $descr_scheda='Scheda Breve';
        break;  
        case 'S':
          $descr_scheda='Scheda Sinonimo';
        break;                            
      }
      // --------------------------                        
?>           
     <script type="text/javascript">var gen="<? echo $gen;?>"</script>
     <script type="text/javascript">var spe="<? echo $spe;?>"</script>
     <script type="text/javascript">var aut="<? echo $aut;?>"</script>
     <script type="text/javascript">var descr_scheda="<? echo $descr_scheda;?>"</script>
     <script type="text/javascript">var data="<? echo $data;?>"</script>
     <script type="text/javascript">var scheda_id="<? echo $scheda_id;?>"</script>           
     <tr class="testo1" height="327">
         <td height="327" valign="top" width="954">
         <br />
            <div align="center">
                <div id="FormDelScheda_Step3"></div>
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