<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        $user = $request->input('usuario');
        $password = $request->input('password');
        $usuario = DB::select("SELECT * FROM erp.usuario u WHERE u.Usuario=?",[$user]);

        foreach ($usuario as $user) {
            if($password == $user->Password){
                    $obj = ["codigo" => "01","usuario" => $user->Usuario, "nombre" => $user->Nombre." ".$user->Apellido, "email" => $user->Email, "IdRol" => $user->IdRol, "token" => md5("activa")];
                }else{
                    $obj = ["codigo" => "99", "error" => "Credenciales incorrectas"];
                }
            }

        return response()->json($obj);
    }

    public function mostrarModulo($id)
    {
        // return response()->json(Modulo::find($id));
    }
}
