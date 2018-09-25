
<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Reporte de Laboratorio</title>
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
                <p style="margin: 0" class="uppercase">Area de laboratorio</p>
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
                <p class="uppercase"><strong>Textura:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['textura'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>Color</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['color'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>Talla:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['talla'] }}</p>
            </td>
          </tr>

          <tr>
            <td>
                <p class="uppercase"><strong>Marca</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['marca'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>Fabricante:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['fabricante'] }}</p>
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

