<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function portrait(Request $request)
    {

    	$data = $request->all()['data'];

    	$view = \View::make('portrait', compact('data'))->render();

        $pdf = \App::make('dompdf.wrapper');

        $pdf->loadHTML($view);

        $ROUTE_FILE = 'portraits/' . $this->generateRandomString() . '.pdf';

        $pdf->save($ROUTE_FILE);

        return $ROUTE_FILE;

		//return $pdf->stream();
    }

    private function generateRandomString($length = 50) { 
	    return substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length); 
	}
}
