<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClienteController extends Controller
{

    public function mostrarClientes()
    {
        $clientes = DB::select("
        select c.Id, t.Nombre as TipoPersona, c.Dui, c.RazonSocial, c.Giro, c.RegistroFiscal, t2.Nombre as TamanoEmpresa,
        c.Nombre , c.Direccion, d.Nombre as Departamento, m.Nombre as Municipio, c.Telefono, c.NombreContacto, c.NIT,
        c.Email, c.Observaciones, c.Percepcion, c.Retencion, c.Exento, c.Credito, c.LimiteCredito, d2.Nombre as DiasCredito,
        c.Activo, c2.Nombre as CuentaContable, e.Nombre as Empresa, c.Saldo, c.FechaIngreso, s.Nombre as Sucursal
        from erp.cliente c
        left join erp.tipopersona t
        on t.Id = c.IdTipoPersona
        left join erp.tamanoempresa t2
        on t2.Id = c.IdTamanoEmpresa
        left join erp.departamento d
        on d.Id = c.IdDepartamento
        left join erp.municipio m
        on m.Id = c.IdMunicipio
        left join erp.diascredito d2
        on d2.Id = c.IdDiasCredito
        left join erp.cuentacontable c2
        on c2.Id = c.IdCuentacontable
        left join erp.tipoprecio t3
        on t3.Id = c.IdTipoPrecio
        left join erp.empresa e
        on e.Id = c.IdEmpresa
        left join erp.sucursal s
        on s.Id = c.IdSucursal ");

        return response()->json($clientes);
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
