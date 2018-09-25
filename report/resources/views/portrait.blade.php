
<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Retrato Hablado</title>
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
                <p style="margin: 0" class="uppercase">Area de análisis y reconstrucción de hechos</p>
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
          <tr>
            <td>
                <p class="uppercase"><strong>dependencia:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['dependencia'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>memo:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['memo'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>Fecha de Memo:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['f_memo'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>Solicitado por:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['solicitado_por'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>Fecha del caso:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['f_caso'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>Agraviado:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['agraviado'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>fecha de R.H:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['f_rh'] }}</p>
            </td>
          </tr>

          <!-- segundo encabezado -->
          <tr>
            <td>
                <p class="uppercase"><strong>Dependencia</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['dependencia2'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>Solicitado por:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['solicitado_por2'] }}</p>
            </td>
          </tr>
           <tr>
            <td>
                <p class="uppercase"><strong>Agraviado</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['agraviado2'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>Dirección S.S:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['direccion'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>Origen de datos</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['origen_datos'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>Dibujante</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['Usuario']['nombre'] }} {{ $data['Usuario']['apellido'] }}</p>
            </td>
          </tr>
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
        <table style="width:100%; margin: 10mm 0; border: 1px solid gray">
          <tr>
            <td>
                <p class="uppercase"><strong>Edad:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['edad'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>Ojos (iris):</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['ojos_iris'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>boca:</strong></p>
            </td>
            <td>
                <p class="uppercase"> {{ $data['boca'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>labios:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['labios'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>estatura:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['estatura'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>color de cabello:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['color_cabello'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>peso:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['peso'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>barba-bigote:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['barba_bigote'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>nariz:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['nariz'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>ojos:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['ojos'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>color de piel:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['color_piel'] }}</p>
            </td>
            <td>
                <p class="uppercase"><strong>tipo de cabello:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['tipo_cabello'] }}</p>
            </td>
          </tr>
          <tr>
            <td>
                <p class="uppercase"><strong>Cabeza:</strong></p>
            </td>
            <td>
                <p class="uppercase">{{ $data['cabeza'] }}</p>
            </td>
           
          </tr>
        </table>
        <table style="width:100%; margin: 10mm 0; border: 1px solid gray">
          <tr>
            <td>
                <p class="uppercase" style="margin-left: 10px; margin-top: 5px;"><strong>comentario:</strong></p>
                <p class="uppercase" style="padding: 10px">
                    {{ $data['comentarios']}}
                </p>
            </td>
          </tr>
        </table>
        <table style="width:100%; margin: 10mm 0;">
          <tr>
            <td>
                <p class="uppercase"><strong>Página: (2/2)</strong></p>
            </td>
            </td class="uppercase">(2 de 2)</p></td>
          </tr>
        </table>
    </body>
</html>

