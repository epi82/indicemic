<?
include ("../config.inc.php");
$query=($_POST['query']!="")? $_POST['query'] :"";
$gensel=($_GET['gensel']!="")? $_GET['gensel'] :"";

sql2json("SELECT * FROM genspecie WHERE specie LIKE '$query%' AND genere='$gensel' ORDER BY specie",$db_host,$db_user,$db_password,$db_name);

function sql2json($query,$db_host,$db_user,$db_password,$db_name) {

    $db = mysql_connect($db_host, $db_user, $db_password);
    if ($db == FALSE)
      die ("Errore nella connessione. Verificare i parametri nel file config.inc.php");
    mysql_select_db($db_name, $db)
      or die ("Errore nella selezione del database. Verificare i parametri nel file config.inc.php");
    
    $data_sql = mysql_query($query,$db) or die("'';//" . mysql_error());// If an error has occurred, 
            //    make the error a js comment so that a javascript error will NOT be invoked
    $json_str = ""; //Init the JSON string.

    if($total = mysql_num_rows($data_sql)) { //See if there is anything in the query
        $json_str .= "[\n";

        $row_count = 0;    
        while($data = mysql_fetch_assoc($data_sql)) {
            if(count($data) > 1) $json_str .= "{\n";

            $count = 0;
            foreach($data as $key => $value) {
                //If it is an associative array we want it in the format of "key":"value"
                if(count($data) > 1) $json_str .= "\"$key\":\"$value\"";
                else $json_str .= "\"$value\"";

                //Make sure that the last item don't have a ',' (comma)
                $count++;
                if($count < count($data)) $json_str .= ",\n";
            }
            $row_count++;
            if(count($data) > 1) $json_str .= "}\n";

            //Make sure that the last item don't have a ',' (comma)
            if($row_count < $total) $json_str .= ",\n";
        }

        $json_str .= "]\n";
    }

    //Replace the '\n's - make it faster - but at the price of bad redability.
    $json_str = str_replace("\n","",$json_str); //Comment this out when you are debugging the script

    //Finally, output the data
    echo $json_str;
}

?>