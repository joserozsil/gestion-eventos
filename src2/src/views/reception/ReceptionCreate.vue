<template>
<div class="animated fadeIn">
  <b-row>
    <b-col sm="12">
      <b-card>
        <div slot="header">
          <strong>Crear Nueva Novedad</strong>
        </div>
        <b-row>
          <b-col sm="6">
            <b-form-group 
              description="Ej: Recibo de Guardia"
              label="Tipo"
              laber-for="type"
              :horizontal="false">
              <b-form-select class="received" id="type"
                :plain="true"
                :options="['Recibo de Memoradum', 'Recibo de Guardia', 'Presentación de Jefe', 'Presentación de Funcionario', 'Recibo de Oficio', 'Recibo de Guardia']">
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group 
          description="Ej: Descripción de memorandum"
          label="Descripción"
          laber-for="description"
          :horizontal="false">
          <b-form-input id="description" :textarea="true" :rows="10" type="text" ></b-form-input>
        </b-form-group>
      </b-card>
      <div class="form-actions">
        <b-button class="mr" type="submit" variant="primary">Registrar</b-button>
        <b-button type="button" variant="secondary">Cancelar</b-button>
      </div>
    </b-col>
  </b-row>
</div>
</template>

<style>

.mr {
  margin-right: 10px;
}

.received {
  height: calc(2.0625rem + 2px)!important;
}

</style>