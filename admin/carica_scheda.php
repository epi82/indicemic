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
$spe=$_POST['spe'];
$aut=$_POST['aut'];
$scheda=$_POST['scheda'];
$topic=$_POST['topic'];
$data=$_POST['data'];
$step=$_POST['step'];

?>

<script src="../js/jquery.min.js" type="text/javascript"></script>
<!-- Include Ext and app-specific scripts: -->
<script type="text/javascript" src="../adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="../ext-all.js"></script>
<!--<script type="text/javascript" src="../ext-all-debug.js"></script>-->
 
<!-- Include your own Javascript file here - adapt the filename to your filename-->
<script type="text/javascript" src="../js/FormScheda.js"></script>
<script type="text/javascript" src="../js/FormScheda_Step2.js"></script>
<script type="text/javascript" src="../js/FormScheda_Step3.js"></script>
<script type="text/javascript" src="../js/FormScheda_Step4.js"></script>
<script type="text/javascript" src="../js/FormScheda_Sino.js"></script>
 
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
                <div id="FormScheda"></div>
            </div>
         </td>
     </tr>
<? 
    }
elseif ($gen!="" AND $spe=="")
    {
?>
     <script type="text/javascript">var gen="<? echo $gen;?>"</script>
     <tr class="testo1" height="327">
         <td height="327" valign="top" width="954">
         <br />
            <div align="center">
                <div id="FormScheda_Step2"></div>
            </div>
         </td>
     </tr>
<?
    }
elseif ($gen!="" AND $spe!="" AND $step=="1")
    {
?>
     <script type="text/javascript">var gen="<? echo $gen;?>"</script>
     <script type="text/javascript">var spe="<? echo $spe;?>"</script>
     <tr class="testo1" height="327">
         <td height="327" valign="top" width="954">
         <br />
            <div align="center">
                <div id="FormScheda_Step3"></div>
            </div>
         </td>
     </tr>
<?
    }
elseif ($gen!="" AND $spe!="" AND $step=="2")
    {
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
        if ($scheda!='S')
            { 
              $query = "SELECT * FROM gendivordclafam WHERE genere='$gen'"; 
              $result = mysql_query($query, $db);
              while ($row = mysql_fetch_array($result))
                  {
                    $div=$row[divisione];
                    $cla=$row[classe];
                    $ord=$row[ordine];
                    $fam=$row[famiglia];
                  }
              mysql_close($db);                                   
?>
             <script type="text/javascript">var gen="<? echo $gen;?>"</script>
             <script type="text/javascript">var spe="<? echo $spe;?>"</script>
             <script type="text/javascript">var aut="<? echo $aut;?>"</script>
             <script type="text/javascript">var scheda="<? echo $scheda;?>"</script>
             <script type="text/javascript">var descr_scheda="<? echo $descr_scheda;?>"</script>  
             <script type="text/javascript">var topic="<? echo $topic;?>"</script>
             <script type="text/javascript">var data="<? echo $data;?>"</script>
             <script type="text/javascript">var div="<? echo $div;?>"</script>
             <script type="text/javascript">var cla="<? echo $cla;?>"</script>  
             <script type="text/javascript">var ord="<? echo $ord;?>"</script>
             <script type="text/javascript">var fam="<? echo $fam;?>"</script>                  
             <tr class="testo1" height="327">
                 <td height="327" valign="top" width="954">
                 <br />
                    <div align="center">
                        <div id="FormScheda_Step4"></div>
                    </div>
                 </td>
             </tr>
<?
            }
        else
            {
?>
             <script type="text/javascript">var gen="<? echo $gen;?>"</script>
             <script type="text/javascript">var spe="<? echo $spe;?>"</script>
             <script type="text/javascript">var aut="<? echo $aut;?>"</script>
             <script type="text/javascript">var scheda="<? echo $scheda;?>"</script>
             <script type="text/javascript">var descr_scheda="<? echo $descr_scheda;?>"</script>  
             <script type="text/javascript">var topic="<? echo $topic;?>"</script>
             <script type="text/javascript">var data="<? echo $data;?>"</script>
             <tr class="testo1" height="327">
                 <td height="327" valign="top" width="954">
                 <br />
                    <div align="center">
                        <div id="FormScheda_Sino"></div>
                    </div>
                 </td>
             </tr>
<?
            }                        
    }
?>                    
  </tbody>
</table>
<?
foot();
?>
<br />