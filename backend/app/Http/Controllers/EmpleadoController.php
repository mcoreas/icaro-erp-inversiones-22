<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmpleadoController extends Controller
{

    public function mostrarEmpleados()
    {
        $empleados = DB::select("
        SELECT e.Id, e.CodigoEmpleado, e.Nombres, e.Apellidos, e.FechaNacimiento, e.NumeroDUI, e.NumeroNIT, e.Direccion, m.Nombre as Municipio,
d.Nombre as Departamento, e.Telefono, e.Celular, e.ContactoEmergencia, e.NumeroISSS, e.NumeroNUP, e.FechaIngreso, e.FechaEgreso, e.FechaContratacion,
e.FechaContratacion, e.SalarioBase, s.Nombre as Sucursal, i.Nombre as InstitucionPrevisional, e.TelefonoEmergencia , e.HorasLaborales,
b.Nombre as Banco, e.CuentaDeBanco, c.Nombre as CuentaPasivo, c2.Nombre as CuentaGasto, e.Comentario, c3.Nombre as CategoriaEmpleado,
e.Fotografia, e2.Nombre as Estado, e.Profesion, e3.Nombre as EstadoCivil, e.PermiteCuadre, c4.Nombre, e.FechaExpedicionDUI, m2.Nombre as LugarExpedicionDUI,
e.Sexo, p.Nacionalidad, e.SaltoMarcacion , e.PoseeLicencia, p2.Nombre as ParentescoEmergencia, c5.Nombre as Horario, e.PagoCheque, e.NombresNIT, e.ApellidosNIT,
e.TelefonoLaboral
FROM erp.empleado e
 LEFT JOIN erp.municipio m
ON m.Id = e.IdMunicipio
 LEFT JOIN erp.departamento d
ON d.Id = e.IdDepartamento
 LEFT JOIN erp.sucursal s
ON s.Id = e.IdSucursal
 LEFT JOIN erp.institucionprevisional i
ON i.Id = e.IdInstitucionPrevisional
 LEFT JOIN erp.banco b
ON b.Id = e.IdBanco
 LEFT JOIN erp.cuentacontable c
ON c.Id = e.IdCuentaPasivo
 LEFT JOIN erp.cuentacontable c2
ON c2.Id = e.IdCuentaGasto
 LEFT JOIN erp.categoriaempleado c3
ON c3.Id = e.IdCategoriaEmpleado
 LEFT JOIN erp.estado e2
ON e2.Id = e.IdEstado
 LEFT JOIN erp.estadocivil e3
ON e3.Id = e.IdEstadoCivil
 LEFT JOIN erp.cargoempleado c4
ON c4.Id = e.IdCargoEmpleado
 LEFT JOIN erp.municipio m2
ON m2.Id = e.LugarExpedicionDUI
 LEFT JOIN erp.pais p
ON p.Id = e.IdNacionalidad
 LEFT JOIN erp.parentesco p2
ON p2.Id = e.IdParentescoEmergencia
 LEFT JOIN erp.cargoempleadohorario c5
ON c5.Id = e.IdHorario
WHERE 1=1;");

        return response()->json($empleados);
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
