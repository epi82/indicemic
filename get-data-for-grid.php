<?
include ("config.inc.php");

$genere=($_POST['genere']!="")? $_POST['genere'] :"";
$specie=($_POST['specie']!="")? $_POST['specie'] :"";
$autore=($_POST['autore']!="")? $_POST['autore'] :"";
$scheda=($_POST['scheda']!="")? $_POST['scheda'] :"";
$comme=($_POST['comme']!="")? $_POST['comme'] :"";
$micro=($_POST['micro']!="")? $_POST['micro'] :"";
$ordine=($_POST['ordine']!="")? $_POST['ordine'] :"";
$famiglia=($_POST['famiglia']!="")? $_POST['famiglia'] :"";
$tossi=($_POST['tossi']!="")? $_POST['tossi'] :"";
$datains=($_POST['datains']!="")? $_POST['datains'] :"";
$classe=($_POST['classe']!="")? $_POST['classe'] :"";
$divisione=($_POST['divisione']!="")? $_POST['divisione'] :"";
$start=($_POST['start']!="")? $_POST['start'] :"";
$limit=($_POST['limit']!="")? $_POST['limit'] :"";
$dir=($_POST['dir']!="")? $_POST['dir'] :"";
$sort=($_POST['sort']!="")? $_POST['sort'] :"";
$regno=($_POST['regno']!="")? $_POST['regno'] :"";

$db = mysql_connect($db_host, $db_user, $db_password);

if ($db == FALSE)
  die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
mysql_select_db($db_name, $db)
or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");


$query_where .= " WHERE genere LIKE '".$genere."%'";

if ($specie!="") 
  {
    $query_where .= " AND specie LIKE '".$specie."%'";
  }

if ($autore!="") 
  {
    $query_where .= " AND autore LIKE '".$autore."%'";
  }

if ($comme!="" AND $comme!="-") 
  {
    $query_where .= " AND ca='".$comme."'";
  }  
  
if ($scheda!="" AND $scheda!="-") 
  {
    $query_where .= " AND scheda='".$scheda."'";
  }    
  
if ($micro!="" AND $micro!="-") 
  {
    $query_where .= " AND micro LIKE '".$micro."%'";
  }  

if ($ordine!="") 
  {
    $query_where .= " AND ordine LIKE '%".$ordine."%'";
  }
  
if ($famiglia!="") 
  {
    $query_where .= " AND famiglia LIKE '%".$famiglia."%'";
  }     
  
if ($tossi!="") 
  {
    $query_where .= " AND tossi LIKE '%".$tossi."%'";
  }  

if ($classe!="") 
  {
    $query_where .= " AND classe LIKE '%".$classe."%'";
  }
  
if ($divisione!="") 
  {
    $query_where .= " AND divisione LIKE '%".$divisione."%'";
  }  
  
if ($regno!="") 
  {
    $query_where .= " AND regno LIKE '%".$regno."%'";
  }      
  
$query_count="SELECT count(*) FROM archivio";
$query_count .= $query_where;
$sql = mysql_query($query_count) or die(mysql_error());
$count = mysql_result($sql, "0"); 


$query = "SELECT id,scheda,topic,genere,specie,autore,ca,micro,famiglia,ordine,classe,divisione,regno,tossi,posttossi,datains FROM archivio";
$query .= $query_where;

if ($sort!="")
  {
   $query .= " ORDER BY ".$sort." ".$dir;  
  }

$query .= " LIMIT ".$start.",".$limit;
 
$json = array();
$i = 0;

$result = mysql_query($query, $db);
while ($row = mysql_fetch_array($result))
    {
      $id_db=trim($row[id]);  
      $sch_db=trim($row[scheda]);
      $top_db=trim($row[topic]);      
      $gen_db=$row[genere];
      $spe_db=$row[specie];
      $aut_db=htmlentities(($row[autore]));
      $aut_db=str_replace("&amp;#", "&#",$aut_db);      
      $ca_db=trim($row[ca]);
      $mic_db=trim($row[micro]);
      $fam_db=trim($row[famiglia]);
      $ord_db=trim($row[ordine]);
      $cla_db=trim($row[classe]);
      $div_db=trim($row[divisione]);
      $tos_db=trim($row[tossi]);
      $pto_db=trim($row[posttossi]);
      $dat_db=trim($row[datains]);         	    
      $reg_db=trim($row[regno]);
	                                                                                 
        $json[]= array(
          "id" => $id_db,
          "scheda" => $sch_db,
          "topic" => $top_db,
          "genere" => $gen_db,
          "specie" => $spe_db,
          "autore" => $aut_db,
          "comme" => $ca_db,
          "micro" => $mic_db,
          "famiglia" => $fam_db,
          "ordine" => $ord_db,
          "classe" => $cla_db,
          "divisione" => $div_db,
          "regno" => $reg_db,
          "tossi" => $tos_db,
          "posttossi" => $pto_db,          
          "datains" => $dat_db                    
        );        
    }

echo $json_array= json_encode(array("totalCount" => $count,"rows" => $json));   
    
mysql_close($db); 

?>