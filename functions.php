<?
include ("config.inc.php");

function verifica_genspe($tabella,$gen,$spe,$db_host,$db_user,$db_password,$db_name){
 
 $presente=0;

 $db = mysql_connect($db_host, $db_user, $db_password);
    if ($db == FALSE)
      die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
    mysql_select_db($db_name, $db)
      or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");

  $controlla = "SELECT * FROM " . $tabella;
    $result = mysql_query($controlla, $db);
    while ($record = mysql_fetch_array($result)){
    if ($gen == $record[genere] AND $spe == $record[specie]) $presente=1;
    }
  mysql_close($db);
  return $presente;
}


function verifica_tossi($tabella,$campo,$valore,$db_host,$db_user,$db_password,$db_name){
 
 $presente=0;

 $db = mysql_connect($db_host, $db_user, $db_password);
    if ($db == FALSE)
      die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
    mysql_select_db($db_name, $db)
      or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");

  $controlla = "SELECT " . $campo . " FROM " . $tabella;
    $result = mysql_query($controlla, $db);
    while ($tossi = mysql_fetch_array($result)){
    if ($valore == $tossi[$campo]) $presente=1;
    }
  mysql_close($db);
  return $presente;
}

function verifica_divclaordfam($tabella,$valore1,$valore2,$valore3,$valore4,$valore5,$db_host,$db_user,$db_password,$db_name){
 
 $presente=0;

 $db = mysql_connect($db_host, $db_user, $db_password);
    if ($db == FALSE)
      die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
    mysql_select_db($db_name, $db)
      or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");

  $controlla = "SELECT * FROM " . $tabella . " WHERE genere='" . $valore1 . "'";
    $result = mysql_query($controlla, $db);
    while ($record = mysql_fetch_array($result)){
    if ($valore2 == $record[divisione] AND $valore3 == $record[classe] AND $valore4 == $record[ordine] AND $valore5 == $record[famiglia]) $presente=1;
    }
  mysql_close($db);
  return $presente;
}

?>