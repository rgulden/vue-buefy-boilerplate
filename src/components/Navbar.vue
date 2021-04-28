<template>
  <b-navbar type="is-black" fixed-top=true>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <p><l>Gulden</l> Technology</p>
      </b-navbar-item>
            <b-navbar-item href="#" target="_blank">
        <b-icon pack="fab" size="is-small" icon="github"></b-icon>
      </b-navbar-item>
            <b-navbar-item href="#" target="_blank" >
        <b-icon pack="fab" size="is-small" icon="instagram"></b-icon>
      </b-navbar-item>
            <b-navbar-item href="#" target="_blank">
        <b-icon pack="fab" size="is-small" icon="facebook"></b-icon>
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        About
      </b-navbar-item>
      <b-navbar-item href="#">
        Services
      </b-navbar-item>
      <b-navbar-item href="#">
        Products
      </b-navbar-item>
      <b-navbar-item href="#">
        Store
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<style>
l {
  color: #cfb53b;
  margin: 0 0 2em 0;
}
</style>