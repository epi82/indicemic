<?
include("../top_foot.inc.php");
include("../config.inc.php");
include("../functions.php");
top_admin();
link_admin();

$id=$_POST['id'];
$tossi=$_POST['tossi'];
$tossi_old=$_POST['tossi_old'];
$gen_old=$_POST['gen_old'];
$spe_old=$_POST['spe_old'];
$posttossi=$_POST['posttossi'];
$tipo=$_POST['myhiddenbutton'];
$gen=$_POST['gen'];
$spe=$_POST['spe'];
$aut=$_POST['aut'];
$scheda=$_POST['scheda'];
$topic=$_POST['topic'];
$data=$_POST['data'];
$div=$_POST['div'];
$cla=$_POST['cla'];
$ord=$_POST['ord'];
$fam=$_POST['fam'];
$reg=$_POST['reg'];
$comme=$_POST['comme'];
$micro=$_POST['micro'];
$archivio=$_POST['archivio'];
$divclaordfam=$_POST['divclaordfam'];
$scheda_id=$_POST['scheda_id'];

switch ($tipo)
  {
  case 'new_tossi':
      $tabella="tossicologia";
      $campo="tossi";
      $tossi = addslashes(stripslashes($tossi));
      $tossi = str_replace("<", "&lt;", $tossi);
      $tossi = str_replace(">", "&gt;", $tossi);
      $posttossi = addslashes(stripslashes($posttossi));
      $posttossi = str_replace("<", "&lt;", $posttossi);
      $posttossi = str_replace(">", "&gt;", $posttossi);      
      $presente=verifica_tossi($tabella,$campo,$tossi,$db_host,$db_user,$db_password,$db_name);
        
        if ($presente == '1') $stampa2="Link tossicologia gi&agrave; presente in archivio per la tabella [Tossicologia]";
        else 
        {                    
          $db = mysql_connect($db_host, $db_user, $db_password);
        
          if ($db == FALSE)
            die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
      
          mysql_select_db($db_name, $db)
            or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");
      
          $query = "INSERT INTO tossicologia (tossi, post) VALUES ('$tossi', '$posttossi')";
            if (mysql_query($query, $db))
            $stampa='Link Tossicologia inserito correttamente';
            else
            $stampa='Errore inserimento dati!!!'.mysql_error();
        mysql_close($db);
        }
  break;
  case 'mod_tossi':        
      $tossi = addslashes(stripslashes($tossi));
      $tossi = str_replace("<", "&lt;", $tossi);
      $tossi = str_replace(">", "&gt;", $tossi);
      $posttossi = addslashes(stripslashes($posttossi));
      $posttossi = str_replace("<", "&lt;", $posttossi);
      $posttossi = str_replace(">", "&gt;", $posttossi);
                    
      $db = mysql_connect($db_host, $db_user, $db_password);
    
      if ($db == FALSE)
        die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
  
      mysql_select_db($db_name, $db)
        or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");
  
      $query = "UPDATE tossicologia SET tossi='$tossi', post='$posttossi' WHERE id='$id'";
        if (mysql_query($query, $db))
        $stampa='Link Tossicologia modificato correttamente';
        else
        $stampa='Errore aggiornamento dati!!!'.mysql_error();
        
      if ($archivio=='on')
      {
        $query_archivio="UPDATE archivio SET tossi='$tossi', posttossi='$posttossi' WHERE tossi='$tossi_old'";
          if (mysql_query($query_archivio, $db))
          $stampa2='Modifica tabella Archivio avvenuta con successo.';
          else
          $stampa2='Errore aggiornamento tabella Archivio!!!'.mysql_error();;              
      }        
    mysql_close($db);
  break;
  case 'new_divclaordfam':
      $tabella="gendivordclafam";    
      $div = addslashes(stripslashes($div));
      $div = str_replace("<", "&lt;", $div);
      $div = str_replace(">", "&gt;", $div);
      $cla = addslashes(stripslashes($cla));
      $cla = str_replace("<", "&lt;", $cla);
      $cla = str_replace(">", "&gt;", $cla);
      $ord = addslashes(stripslashes($ord));
      $ord = str_replace("<", "&lt;", $ord);
      $ord = str_replace(">", "&gt;", $ord);
      $fam = addslashes(stripslashes($fam));
      $fam = str_replace("<", "&lt;", $fam);
      $fam = str_replace(">", "&gt;", $fam);      
      $reg = addslashes(stripslashes($reg));
      $reg = str_replace("<", "&lt;", $reg);
      $reg = str_replace(">", "&gt;", $reg); 	                  
      $presente=verifica_divclaordfam($tabella,$gen,$div,$cla,$ord,$fam,$db_host,$db_user,$db_password,$db_name);
        
        if ($presente == '1') $stampa2="Relazione Divisione-Classe-Ordine-Famiglia gi&agrave; presente in archivio per la tabella [GenDivOrdClaFam]";
        else 
        {                    
          $db = mysql_connect($db_host, $db_user, $db_password);
        
          if ($db == FALSE)
            die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
      
          mysql_select_db($db_name, $db)
            or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");
      
          $query = "INSERT INTO gendivordclafam (genere, regno, divisione, ordine, classe, famiglia) VALUES ('$gen', '$reg', '$div', '$ord', '$cla', '$fam')";
            if (mysql_query($query, $db))
            $stampa='Relazione Divisione-Classe-Ordine-Famiglia inserita correttamente';
            else
            $stampa='Errore inserimento dati!!!'.mysql_error();
        mysql_close($db);
        }
  break;
  case 'mod_divclaordfam':
      $tabella="gendivordclafam";    
      $div = addslashes(stripslashes($div));
      $div = str_replace("<", "&lt;", $div);
      $div = str_replace(">", "&gt;", $div);
      $cla = addslashes(stripslashes($cla));
      $cla = str_replace("<", "&lt;", $cla);
      $cla = str_replace(">", "&gt;", $cla);
      $ord = addslashes(stripslashes($ord));
      $ord = str_replace("<", "&lt;", $ord);
      $ord = str_replace(">", "&gt;", $ord);
      $fam = addslashes(stripslashes($fam));
      $fam = str_replace("<", "&lt;", $fam);
      $fam = str_replace(">", "&gt;", $fam);                                        
      $reg = addslashes(stripslashes($reg));
      $reg = str_replace("<", "&lt;", $reg);
      $reg = str_replace(">", "&gt;", $reg);                                              
      $db = mysql_connect($db_host, $db_user, $db_password);
    
      if ($db == FALSE)
        die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
  
      mysql_select_db($db_name, $db)
        or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");
  
      $query = "UPDATE gendivordclafam SET divisione='$div', ordine='$ord', classe='$cla', famiglia='$fam', regno='$reg' WHERE genere='$gen'";
        if (mysql_query($query, $db))
        $stampa='Relazione Divisione-Classe-Ordine-Famiglia modificata correttamente';
        else
        $stampa='Errore modifica dati!!!'.mysql_error();
      
      if ($archivio=='on')
      {
        $query_archivio="UPDATE archivio SET divisione='$div', ordine='$ord', classe='$cla', famiglia='$fam', regno='$reg' WHERE genere='$gen' AND scheda!='S'";
          if (mysql_query($query_archivio, $db))
          $stampa2='Modifica tabella Archivio avvenuta con successo.';
          else
          $stampa2='Errore aggiornamento tabella Archivio!!!'.mysql_error();              
      }           
    mysql_close($db);
  break;       
  case 'new_genspe':
      $tabella="genspecie";
      $campo1="genere";
      $campo2="specie";
      $gen = addslashes(stripslashes($gen));
      $spe = addslashes(stripslashes($spe));
      $gen = str_replace("<", "&lt;", $gen);
      $gen = str_replace(">", "&gt;", $gen);
      $spe = str_replace("<", "&lt;", $spe);
      $spe = str_replace(">", "&gt;", $spe);      
      $presente=verifica_genspe($tabella,$gen,$spe,$db_host,$db_user,$db_password,$db_name);
      
      if ($presente == '1') $stampa2="Genere-specie gi&agrave; presenti in archivio";
      else {
      $db = mysql_connect($db_host, $db_user, $db_password);
      if ($db == FALSE)
        die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
  
      mysql_select_db($db_name, $db)
        or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");
    
      $query = "INSERT INTO genspecie (genere, specie) VALUES ('$gen', '$spe')";
          if (mysql_query($query, $db))
          $stampa='Genere-specie inseriti correttamente';
          else
        $stampa='Errore inserimento dati!!!'.mysql_error();
      mysql_close($db);
        }            
  break;
  case 'mod_genspe':
          $gen = addslashes(stripslashes($gen));
          $spe = addslashes(stripslashes($spe));
          $gen = str_replace("<", "&lt;", $gen);
          $gen = str_replace(">", "&gt;", $gen);
          $spe = str_replace("<", "&lt;", $spe);
          $spe = str_replace(">", "&gt;", $spe);
          
          $db = mysql_connect($db_host, $db_user, $db_password);
        
          if ($db == FALSE)
            die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
      
          mysql_select_db($db_name, $db)
            or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");
      
          $query = "UPDATE genspecie SET genere='$gen',specie='$spe' WHERE id='$id'";
            if (mysql_query($query, $db))
            $stampa='Genere-specie modificato correttamente';
            else
            $stampa='Errore modifica dati!!!'.mysql_error();
            
          if ($archivio=='on')
          {
            $query_archivio="UPDATE archivio SET genere='$gen', specie='$spe' WHERE (genere='$gen_old' AND specie='$spe_old')";
              if (mysql_query($query_archivio, $db))
              $stampa2='Modifica tabella Archivio avvenuta con successo.';
              else
              $stampa2='Errore aggiornamento tabella Archivio!!!'.mysql_error();             
          }
          
          if ($divclaordfam=='on')
          {
            $query_archivio="UPDATE gendivordclafam SET genere='$gen' WHERE genere='$gen_old'";
              if (mysql_query($query_archivio, $db))
              $stampa2=$stampa2 . '<br>Modifica tabella [Div-Cla-Ord-Fam] avvenuta con successo.';
              else
              $stampa2=$stampa2 . '<br>Errore aggiornamento tabella [Div-Cla-Ord-Fam]!!!'.mysql_error();             
          }          
        mysql_close($db);
  break;
  case 'new_scheda':                  
          $anno=substr($data, -4);
          $mese=substr($data, -7, 2);
          $giorno=substr($data, -10, 2);
          $datains="$anno$mese$giorno";
          $autore = addslashes(stripslashes($autore));
          $topic = addslashes(stripslashes($topic));           
          
          if ($tossi=='Seleziona Tossicologia...')
          {
            $tossi='';
          }  
          
          if ($micro=='on')
          {
            $micro=1;
          }
          else
          {
            $micro=0;
          }                               
          
          $db = mysql_connect($db_host, $db_user, $db_password);
        
          if ($db == FALSE)
            die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
      
          mysql_select_db($db_name, $db)
            or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");
          
          //carica post tossicologia
          $query_tossi = "SELECT * FROM tossicologia WHERE tossi='$tossi'"; 
          $result = mysql_query($query_tossi, $db);
          while ($row = mysql_fetch_array($result))
              {
                $posttossi=$row[post];  
              }                      
          
          $query = "INSERT INTO archivio (genere,specie,autore,scheda,micro,ca,ordine,famiglia,topic,tossi,posttossi,datains,classe,divisione) VALUES ('$gen','$spe','$aut','$scheda', '$micro', '$comme', '$ord', '$fam', '$topic', '$tossi', '$posttossi', '$datains', '$cla', '$div')";
            if (mysql_query($query, $db))
            $stampa='Nuova scheda inserita correttamente';
            else
            $stampa='Errore inserimento dati dati!!!'.mysql_error();
            
          mysql_close($db);
  break;
  case 'new_scheda_sino':                  
          $anno=substr($data, -4);
          $mese=substr($data, -7, 2);
          $giorno=substr($data, -10, 2);
          $datains="$anno$mese$giorno";
          $autore = addslashes(stripslashes($autore));
          $topic = addslashes(stripslashes($topic));   
          
          $db = mysql_connect($db_host, $db_user, $db_password);
        
          if ($db == FALSE)
            die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
      
          mysql_select_db($db_name, $db)
            or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");
      
          $query = "INSERT INTO archivio (topic,scheda,genere,specie,autore,datains) VALUES ('$topic','$scheda','$gen','$spe','$aut','$datains')";
            if (mysql_query($query, $db))
            $stampa='Nuova scheda inserita correttamente';
            else
            $stampa='Errore inserimento dati dati!!!'.mysql_error();
            
        mysql_close($db);
  break;
  case 'mod_scheda':         
          $anno=substr($data, -4);
          $mese=substr($data, -7, 2);
          $giorno=substr($data, -10, 2);
          $datains="$anno$mese$giorno";    
          $autore = addslashes(stripslashes($autore));
          $topic = addslashes(stripslashes($topic));
          
          if ($tossi=='Seleziona Tossicologia...')
          {
            $tossi='';
          }  
          
          if ($micro=='on')
          {
            $micro=1;
          }
          else
          {
            $micro=0;
          }                       
          
          $db = mysql_connect($db_host, $db_user, $db_password);
        
          if ($db == FALSE)
            die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
      
          mysql_select_db($db_name, $db)
            or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");
      
          if ($scheda!='S')
          {
              //carica post tossicologia
              $query_tossi = "SELECT * FROM tossicologia WHERE tossi='$tossi'"; 
              $result = mysql_query($query_tossi, $db);
              while ($row = mysql_fetch_array($result))
                  {
                    $posttossi=$row[post];  
                  }               
              $aut=utf8_encode($aut);                   
              $query = "UPDATE archivio SET autore='$aut', scheda='$scheda', micro='$micro', ca='$comme', ordine='$ord', famiglia='$fam', topic='$topic', tossi='$tossi', posttossi='$posttossi', datains='$datains', classe='$cla', divisione='$div' WHERE id='$scheda_id'";
              if (mysql_query($query, $db))
              $stampa='Scheda modificata correttamente';
              else
              $stampa='Errore modifica dati!!!'.mysql_error();
          }
          else
          {
              $query = "UPDATE archivio SET autore='$aut', scheda='$scheda', micro=NULL, ca=NULL, ordine=NULL, famiglia=NULL, topic='$topic', tossi=NULL, posttossi=NULL, datains='$datains', classe=NULL, divisione=NULL WHERE id='$scheda_id'";
              if (mysql_query($query, $db))
              $stampa='Scheda modificata correttamente';
              else
              $stampa='Errore modifica dati!!!'.mysql_error();            
          }  
          mysql_close($db);
  break;
  case 'del_scheda':         
          
          $db = mysql_connect($db_host, $db_user, $db_password);
        
          if ($db == FALSE)
            die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
      
          mysql_select_db($db_name, $db)
            or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");
      
          $query = "DELETE FROM archivio WHERE id='$id'";
            if (mysql_query($query, $db))
            $stampa='[<i>Id=</i>'.$id.' <i>Genere=</i>'.$gen.' <i>specie=</i>'.$spe.' <i>Autore=</i>'.$aut.']<br />Scheda cancellata correttamente';
            else
            $stampa='Errore cancellazione dati!!!'.mysql_error();
            
        mysql_close($db);
  break;                                                                                                                   
  }    

?>

<script type="text/javascript">var stampa1="<? echo $stampa;?>"</script>
<script type="text/javascript">var stampa2="<? echo $stampa2;?>"</script>
<link rel="stylesheet" type="text/css" href="../resources/css/ext-all.css" />
<script type="text/javascript" src="../adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="../ext-all.js"></script>
<script type="text/javascript" src="../js/msg-box.js"></script>
<script type="text/javascript" src="../js/FormShowResults.js"></script>
<style type="text/css">
    .x-window-dlg .ext-mb-download {
        background:transparent url(../images/download.gif) no-repeat top left;
        height:46px;
</style>
<script type="text/javascript">
//setTimeout("('#TableResults').show()",3);
setTimeout("ShowResults()", 3000);

function ShowResults() {
document.getElementById("TableResults").style.display = 'block';
}
</script>
<table class="Table_Corpo" width="980" cellpadding="10" height="351">
    <tr class="testo1" height="327">
       <td valign="top" bgcolor="#e6e6fa" width="954" height="327">
           <div id="TableResults" style= "display:none;" align="center">
                   <table width="940" border="0" cellspacing="0" cellpadding="3" align="center" height="50">
                      <tbody>                    
                         <tr class="testo1">
                             <td valign="top" width="954">
                             <br />  
                                <div align="center">
                                    <div id="formShowResults"></div>                
                                </div>
                            </td>
                         </tr>
                      </tbody>
                  </table>
           </div>
       </td>
    </tr>                   
</table>

<?
// chiude la verifica della presenza dei dati

foot();
?>