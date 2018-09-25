
<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Reporte de Arma</title>
    </head>
    <style>
        body, table, tr, p {
            margin: 0;
        }
        table {
            margin: 0;
        }
        
        .title {
            font-size: 22px;
        }
        .uppercase {
            text-transform: uppercase; 
        }

        .label {
        }

        .align-r {
            text-align: right;
        }
    </style>
    <body>
        <table style="width:100%">
          <tr>
            <td><p class=" uppercase label">Clise: {{ $data['clise'] }}</p></td>
            <td><p class=" uppercase label align-r">Exp: {{ $data['exp'] }}</p></td>
          </tr>
        </table>
        <table style="width:100%; margin: 5mm 0">
          <tr>
            <td>
                <img style="margin-left: 15mm" src="cicpc.jpg" height="100px">
            </td>
            <td width="75%" >
                <h3 style="margin: 0" class="uppercase title">Delegación Estadal Bolívar</h3>
                <p style="margin: 0" class="uppercase">Departamento de Balística</p>
            </td>
          </tr>
        </table>
        <table style="width:100%; margin: 5mm 0">
          <tr>
            <td width="100%" style="text-align: center;">
                <img src="{{ $data['image'] }}" height="400px">
            </td>
          </tr>
        </table>
        <table style="width:100%; margin: 10mm 0; border: 1px solid gray">
          <!-- datos genericos -->
          <tr>
            <td>
                <p class="uppercase"><strong>Tipo</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['tipo'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>Color:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['color'] }}</p>
            </td>
          </tr>
           <tr>
            <td>
                <p class="uppercase"><strong>Calibre</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['calibre'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>Longitud Cañon:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['longitud_cañon'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>Dimensiones</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['dimensiones'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>Peso</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['peso'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>Peso Cargador</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['peso_cargador'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>Miras</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['miras'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>Capacidad Cargador</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['capacidad_cargador'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>Disparador</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['disparador'] }}</p>
            </td>
          </tr>
          <!-- datos genericos -->
        </table>

        <table style="width:100%; margin: 10mm 0;">
          <tr>
            <td>
                <p class="uppercase"><strong>Página: (1/2)</strong></p>
            </td>
          </tr>
        </table>
    </body>
    <body>
        <table style="width:100%">
          <tr>
            <td><p class=" uppercase label">Clise: {{ $data['clise'] }}</p></td>
            <td><p class=" uppercase label align-r">Exp: {{ $data['exp'] }}</p></td>
          </tr>
        </table>
        <table style="width:100%; margin: 5mm 0">
          <tr>
            <td>
                <img style="margin-left: 15mm" src="cicpc.jpg" height="100px">
            </td>
            <td width="75%" >
                <h3 style="margin: 0" class="uppercase title">Delegación Estadal Bolívar</h3>
                <p style="margin: 0" class="uppercase">Area de análisis y reconstrucción de hechos</p>
            </td>
          </tr>
        </table>
        <table style="width:100%; margin: 10mm 0; border: 1px solid gray">
          <!-- datos genericos -->
          <tr>
            <td>
                <p class="uppercase" style="margin-left: 10px; margin-top: 5px;"><strong>comentario:</strong></p>
                <p class="uppercase" style="padding: 10px">
                    {{ $data['comentarios']}}
                </p>
            </td>
          </tr>
          <!-- datos genericos -->
        </table>

        <table style="width:100%; margin: 10mm 0;">
          <tr>
            <td>
                <p class="uppercase"><strong>Página: (2/2)</strong></p>
            </td>
          </tr>
        </table>
    </body>
</html>

