<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PatientListView from './views/PatientListView.vue';
</script>

<template>
  <!-- <header>

    <div class="bg-red-900">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/patients">Patients</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

