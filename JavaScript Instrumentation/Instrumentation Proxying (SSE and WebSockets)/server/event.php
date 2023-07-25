<?php
date_default_timezone_set("America/New_York");
header("Access-Control-Allow-Origin: *");
header("X-Accel-Buffering: no");
header("Content-Type: text/event-stream");
header("Cache-Control: no-cache");

$counter = 1;// a random counter
while ($counter > 0) {
// 1 is always true, so repeat the while loop forever (aka event-loop)
  $curDate = date("d/m/Y h:i:sa");
  // Send a simple message at random intervals.
  $counter--;
  echo 'data: This is a message at date ' . $curDate, "\n\n";
  // flush the output buffer and send echoed messages to the browser

  while (ob_get_level() > 0) {
    ob_end_flush();
  }
  flush();

  // break the loop if the client aborted the connection (closed the page)
  
  if ( connection_aborted() ) break;

  // sleep for 1 second before running the loop again
  
  sleep(1);

}
?>