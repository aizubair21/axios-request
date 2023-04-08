<?php

namespace App\Http\Controllers\test;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\crud;
use Illuminate\Support\Facades\DB;

class crudController extends Controller
{
    // get data by axus request
    public function dataIndex()
    {
        $data = crud::orderBy("id", "DESC")->get();
        return response()->json($data);
    }

    // store data by ajux
    public function store(Request $req)
    {
        // return response()->json($req->all());
        crud::insert($req->all());
        return response()->json("success");
    }

    //update data by ajux   
    public function update(Request $req)
    {
        // return response()->json($req->all());
        $updated = crud::where("id", $req->id)->update($req->except("id"));
        return response()->json("success");
    }


    // destroy data
    public function destroy(Request $req)
    {
        crud::where("id", $req->id)->delete();
        return response()->json("success");
    }
}
