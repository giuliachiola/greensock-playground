<?php // © MODO Srl http://modo.md
define("START","<!-- Begin Pattern Lab -->");
define("END","<!-- End Pattern Lab -->");
function rsearch($folder, $pattern) {
    $dir = new RecursiveDirectoryIterator($folder);
    $ite = new RecursiveIteratorIterator($dir);
    $files = new RegexIterator($ite, $pattern, RegexIterator::GET_MATCH);
    $fileList = array();
    foreach($files as $file) {
        $fileList = array_merge($fileList, $file);
    }
    return $fileList;
}
foreach(rsearch(__DIR__."/$argv[1]","#^.*\.html$#")as $file){
	if(!file_exists($file)||!strlen($file))continue;
	echo($file."\n");
	$content=file_get_contents($file);
	while(($start=strpos($content,START))!==false)
		$content=substr($content,0,$start).substr($content,strpos($content,END,$start)+strlen(END));
	file_put_contents($file,$content);
}
