<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function portrait(Request $request)
    {
        try {
            $data = $request->all()['data'];

            $view = \View::make('portrait', compact('data'))->render();

            $pdf = \App::make('dompdf.wrapper');

            $pdf->loadHTML($view);

            $ROUTE_FILE = 'portraits/' . $this->generateRandomString() . '.pdf';

            $pdf->save($ROUTE_FILE);

            return $ROUTE_FILE;
            
        } catch (Exception $e) {
            return $e->message;
        }
    	

		//return $pdf->stream();
    }

    public function arm(Request $request)
    {

    	$data = $request->all()['data'];

    	$view = \View::make('arm', compact('data'))->render();

        $pdf = \App::make('dompdf.wrapper');

        $pdf->loadHTML($view);

        $ROUTE_FILE = 'arms/' . $this->generateRandomString() . '.pdf';

        $pdf->save($ROUTE_FILE);

        return $ROUTE_FILE;

		//return $pdf->stream();
    }

    public function clothes(Request $request)
    {

    	$data = $request->all()['data'];

    	$view = \View::make('clothes', compact('data'))->render();

        $pdf = \App::make('dompdf.wrapper');

        $pdf->loadHTML($view);

        $ROUTE_FILE = 'clothes/' . $this->generateRandomString() . '.pdf';

        $pdf->save($ROUTE_FILE);

        return $ROUTE_FILE;

		//return $pdf->stream();
    }

    public function reception(Request $request)
    {
        $data = $request->all()['data']['data'];
        $initialDate = $request->all()['data']['initialDate'];
        $finalDate = $request->all()['data']['finalDate'];
        
    	$view = \View::make('reception', compact('data', 'initialDate', 'finalDate'))->render();

        $pdf = \App::make('dompdf.wrapper');

        $pdf->loadHTML($view);

        $ROUTE_FILE = 'reception/' . $this->generateRandomString() . '.pdf';

        $pdf->save($ROUTE_FILE);

        return $ROUTE_FILE;

		//return $pdf->stream();
    }

    private function generateRandomString($length = 50) { 
	    return substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length); 
	}
}
