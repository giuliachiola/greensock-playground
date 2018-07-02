<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit938e0a4a2e1a608988ba88a9b3437fbf
{
    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Twig\\' => 5,
        ),
        'S' => 
        array (
            'Symfony\\Component\\Yaml\\' => 23,
            'Symfony\\Component\\Process\\' => 26,
            'Symfony\\Component\\Finder\\' => 25,
            'Symfony\\Component\\Filesystem\\' => 29,
            'Symfony\\Component\\EventDispatcher\\' => 34,
            'Shudrum\\Component\\ArrayFinder\\' => 30,
            'Seld\\JsonLint\\' => 14,
        ),
        'M' => 
        array (
            'Michelf\\' => 8,
        ),
        'A' => 
        array (
            'Alchemy\\Zippy\\' => 14,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Twig\\' => 
        array (
            0 => __DIR__ . '/..' . '/twig/twig/src',
        ),
        'Symfony\\Component\\Yaml\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/yaml',
        ),
        'Symfony\\Component\\Process\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/process',
        ),
        'Symfony\\Component\\Finder\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/finder',
        ),
        'Symfony\\Component\\Filesystem\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/filesystem',
        ),
        'Symfony\\Component\\EventDispatcher\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/event-dispatcher',
        ),
        'Shudrum\\Component\\ArrayFinder\\' => 
        array (
            0 => __DIR__ . '/..' . '/shudrum/array-finder',
        ),
        'Seld\\JsonLint\\' => 
        array (
            0 => __DIR__ . '/..' . '/seld/jsonlint/src/Seld/JsonLint',
        ),
        'Michelf\\' => 
        array (
            0 => __DIR__ . '/..' . '/michelf/php-markdown/Michelf',
        ),
        'Alchemy\\Zippy\\' => 
        array (
            0 => __DIR__ . '/..' . '/alchemy/zippy/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'T' => 
        array (
            'Twig_' => 
            array (
                0 => __DIR__ . '/..' . '/twig/twig/lib',
            ),
        ),
        'P' => 
        array (
            'PatternLab\\PatternEngine\\Twig' => 
            array (
                0 => __DIR__ . '/..' . '/pattern-lab/patternengine-twig/src',
            ),
            'PatternLab' => 
            array (
                0 => __DIR__ . '/../..' . '/core/src',
                1 => __DIR__ . '/..' . '/pattern-lab/core/src',
            ),
        ),
        'D' => 
        array (
            'Doctrine\\Common\\Collections\\' => 
            array (
                0 => __DIR__ . '/..' . '/doctrine/collections/lib',
            ),
        ),
        'C' => 
        array (
            'Colors' => 
            array (
                0 => __DIR__ . '/..' . '/kevinlebrun/colors.php/src',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit938e0a4a2e1a608988ba88a9b3437fbf::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit938e0a4a2e1a608988ba88a9b3437fbf::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit938e0a4a2e1a608988ba88a9b3437fbf::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}