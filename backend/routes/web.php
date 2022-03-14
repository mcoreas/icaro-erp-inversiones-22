<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('modulos/{id}',  ['uses' => 'ModuloController@mostrarModulos']);

    $router->get('modulo/{id}', ['uses' => 'ModuloController@mostrarModulo']);

    $router->post('modulo', ['uses' => 'ModuloController@crearModulo']);

    $router->delete('modulo/{id}', ['uses' => 'ModuloController@eliminarModulo']);

    $router->put('modulo/{id}', ['uses' => 'ModuloController@actualizarModulo']);
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('empleados/',  ['uses' => 'EmpleadoController@mostrarEmpleados']);
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('clientes/',  ['uses' => 'ClienteController@mostrarClientes']);
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->post('login/',  ['uses' => 'AuthController@login']);
});
