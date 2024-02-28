<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita05f8702c6623699538163b31c14e14f
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita05f8702c6623699538163b31c14e14f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita05f8702c6623699538163b31c14e14f::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInita05f8702c6623699538163b31c14e14f::$classMap;

        }, null, ClassLoader::class);
    }
}