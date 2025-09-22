<?php

if (!function_exists('recaptcha_site_key')) {
    function recaptcha_site_key()
    {
        return env('RECAPTCHA_SITE_KEY');
    }
}

if (!function_exists('recaptcha_secret_key')) {
    function recaptcha_secret_key()
    {
        return env('RECAPTCHA_SECRET_KEY');
    }
}