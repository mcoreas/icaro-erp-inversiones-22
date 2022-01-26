<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ModuloController extends Controller
{

    public function mostrarModulos($id)
    {
        $modulos = DB::select("
        SELECT DISTINCT m.Nombre as modulo, m.Id, m.icon FROM erp.permisosrol p
        INNER JOIN erp.accion a
        ON a.Id = p.IdAccion
        INNER JOIN erp.controlador c
        ON c.Id = a.IdControlador
        INNER JOIN erp.submodulo s
        ON s.Id = c.IdSubModulo
        INNER JOIN erp.modulo m
        ON m.Id = s.IdModulo
        WHERE p.IdRol =".intval($id).";
        ");

        $submodulos = DB::select("
        SELECT DISTINCT s.Nombre as submodulos, s.Id, s.IdModulo FROM erp.permisosrol p
        INNER JOIN erp.accion a
        ON a.Id = p.IdAccion
        INNER JOIN erp.controlador c
        ON c.Id = a.IdControlador
        INNER JOIN erp.submodulo s
        ON s.Id = c.IdSubModulo
        INNER JOIN erp.modulo m
        ON m.Id = s.IdModulo
        WHERE p.IdRol =".intval($id).";
        ");

        $acciones = DB::select("
        SELECT a.NombreAmigable as accion, m.Id as modulo, s.Id as submodulo FROM erp.permisosrol p
        INNER JOIN erp.accion a
        ON a.Id = p.IdAccion
        INNER JOIN erp.controlador c
        ON c.Id = a.IdControlador
        INNER JOIN erp.submodulo s
        ON s.Id = c.IdSubModulo
        INNER JOIN erp.modulo m
        ON m.Id = s.IdModulo
        WHERE p.IdRol =".intval($id).";
        ");

        $obj = ["modulos" => $modulos, "submodulos" => $submodulos, "acciones" => $acciones ];

        return response()->json($obj);
    }

    public function mostrarModulo($id)
    {
        // return response()->json(Modulo::find($id));
    }

    public function crearModulo(Request $request)
    {
        // $modulo = Modulo::create($request->all());

        // return response()->json($modulo, 201);
    }

    public function actualizarModulo($id, Request $request)
    {
        // $modulo = Modulo::findOrFail($id);
        // $modulo->update($request->all());

        // return response()->json($modulo, 200);
    }

    public function eliminarModulo($id)
    {
        // Modulo::findOrFail($id)->delete();
        // return response('Deleted Successfully', 200);
    }
}
