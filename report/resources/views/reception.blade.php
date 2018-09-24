
<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Reporte de Novedades</title>
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

        .container {
          margin: 1em 0;
        }

        .align-r {
            text-align: right;
        }

        .subtitle {
          text-decoration: underline;
          text-align: center;
          text-transform: uppercase;
        }

        .hour, .type {
          font-weight: bold;
          text-decoration: underline;
        }

        .type {
          text-transform: uppercase;
        }

        .description {
          text-align: justify;
        }
    </style>
    <body>
        <table style="width:100%">
          <tr>
            <td><p class="label align-r">{{ $date }}</p></td>
          </tr>
        </table>
        <table style="width:100%; margin: 5mm 0">
          <tr>
            <td>
                <img style="margin-left: 15mm" src="cicpc.jpg" height="100px">
            </td>
            <td width="75%" >
                <h3 style="margin: 0" class="uppercase title">Delegación Estadal Bolívar</h3>
                <p style="margin: 0" class="uppercase">Departamento de Criminalística</p>
            </td>
          </tr>
        </table>
        <h3 class="subtitle">Novedades</h3>
        @foreach($data as $key => $value)
        <div class="container">
          <p>
            <strong>{{ $key + 1 }}.-</strong>
          </p>
          <p class="description"><span class="hour">{{ $value['f_creacion']}}</span> <span class="type">{{ $value['tipo_recepcion'] }}:</span> {{ $value['descripcion'] }}</p>
        </div>
        @endforeach
    </body>
</html>

