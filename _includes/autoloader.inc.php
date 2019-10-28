<?php
spl_autoload_register("Loader::myAutoloader");


class Loader
{
    static $jump = "";

    static function myAutoloader($className)
    {
        $dir = dirname(__DIR__);
        $path = $dir .  DIRECTORY_SEPARATOR . "assets" . DIRECTORY_SEPARATOR ."php" . DIRECTORY_SEPARATOR ;
        $extension = ".php";
        $fullPath = $path . $className . $extension;
        if (!file_exists($fullPath)) return;
        include_once $fullPath;
    }

    static function stylesheetLoader()
    {
        $path = self::$jump . "assets/css/";

        if (file_exists($path)) {
            echo "<!--Stylesheets-->\n";
            $dirHandler = opendir($path);
            while ($file = readdir($dirHandler)) {
                if ($file != "." && $file != "..") {
                    $fullPath = Config::$folder ."/". $path . $file;
                    echo "<link rel=\"stylesheet\" href=\"" . $fullPath . "\">\n";

                }
            }
            return true;
        }
        return false;
    }

    static function javascriptLoader()
    {
        $path = self::$jump  . "assets/js/";
        if (file_exists($path)) {
            echo "<!--JavaScript Files-->\n";
            $dirHandler = opendir($path);
            while ($file = readdir($dirHandler)) {
                if ($file != "." && $file != "..") {
                    $fullPath = Config::$folder ."/". $path . $file;
                    echo "<script src=\"" . $fullPath . "\"></script>\n";
                }
            }
            return true;
        }
        return false;
    }
}