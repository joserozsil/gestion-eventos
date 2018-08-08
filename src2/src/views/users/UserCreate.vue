<template>
<div class="animated fadeIn">
  <b-row>
    <b-col sm="12">
      <b-card>
        <div slot="header">
          <strong>Crear Nuevo Usuario</strong>
        </div>
        <b-row>
          <b-col sm="6">
            <b-form-group 
              description="Ej: José Angel"
              label="Nombre"
              laber-for="firstName"
              :horizontal="false">
              <b-form-input type="text" id="firstName"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group 
              description="Ej: Rodríguez"
              label="Apellido"
              laber-for="lastName"
              :horizontal="false">
              <b-form-input type="text" id="lastName"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group 
          description="Ej: Ud 104 San Félix, Edo Bolívar"
          label="Dirección"
          laber-for="address"
          :horizontal="false">
          <b-form-input type="text" id="address"></b-form-input>
        </b-form-group>
        <b-form-group 
          description="Ej: 04249566351"
          label="Teléfono"
          laber-for="phone"
          :horizontal="false">
          <b-form-input type="text" id="phone"></b-form-input>
        </b-form-group>
        <b-row>
          <b-col sm="12">
            <b-form-group 
              description="Ej: jrodriguez"
              label="Nombre de Usuario"
              laber-for="username"
              :horizontal="false">
              <b-form-input type="text" id="username"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="6">
            <b-form-group 
              description="Ej: Ayub*19_"
              label="Contraseña"
              laber-for="password"
              :horizontal="false">
              <b-form-input type="password" id="password"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group 
              description="Ej: Ayub*19_"
              label="Repetir Contraseña"
              laber-for="repeatPassword"
              :horizontal="false">
              <b-form-input type="text" id="repeatPassword"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
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

</style>