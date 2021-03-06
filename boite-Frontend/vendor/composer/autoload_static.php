<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5b8abd8a687add615e82b408e798e0e9
{
    public static $files = array (
        '3b5531f8bb4716e1b6014ad7e734f545' => __DIR__ . '/..' . '/illuminate/support/Illuminate/Support/helpers.php',
    );

    public static $prefixesPsr0 = array (
        'I' => 
        array (
            'Illuminate\\Support' => 
            array (
                0 => __DIR__ . '/..' . '/illuminate/support',
            ),
        ),
        'G' => 
        array (
            'Gufy\\GoogleCharts\\' => 
            array (
                0 => __DIR__ . '/..' . '/gufy/google-charts/src',
            ),
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'WorkbenchTestCase' => __DIR__ . '/..' . '/gufy/google-charts/tests/WorkbenchTestCase.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixesPsr0 = ComposerStaticInit5b8abd8a687add615e82b408e798e0e9::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit5b8abd8a687add615e82b408e798e0e9::$classMap;

        }, null, ClassLoader::class);
    }
}
