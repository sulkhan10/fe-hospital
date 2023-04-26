<template>
  <main class="px-4 py-8 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-200 to-blue-500 min-h-screen">
    <h1 class="text-4xl font-bold mb-4">Patient List</h1>
    <div class="mb-4">
      <router-link to="/patients/create" class="inline-block px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 transition duration-200">Add Patient</router-link>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse rounded">
        <thead class="bg-gray-100 font-bold">
          <tr class="text-sm text-gray-600 uppercase border-b border-gray-300">
            <th scope="col" class="px-6 py-4 ">ID</th>
            <th scope="col" class="px-6 py-4 ">NIK</th>
            <th scope="col" class="px-6 py-4 ">Name</th>
            <th scope="col" class="px-6 py-4 ">Sex</th>
            <th scope="col" class="px-6 py-4 ">Religion</th>
            <th scope="col" class="px-6 py-4 ">Phone</th>
            <th scope="col" class="px-6 py-4 ">Address</th>
            <th scope="col" class="px-6 py-4 ">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-gray-100">
          <tr v-for="patient in patients" :key="patient.id" class="border-b border-gray-300">
            <td class="px-6 py-4">{{ patient.id }}</td>
            <td class="px-6 py-4">{{ patient.nik }}</td>
            <td class="px-6 py-4">{{ patient.name }}</td>
            <td class="px-6 py-4">{{ patient.sex }}</td>
            <td class="px-6 py-4">{{ patient.religion }}</td>
            <td class="px-6 py-4">{{ patient.phone }}</td>
            <td class="px-6 py-4">{{ patient.address }}</td>
            <td class="px-6 py-4 space-x-2">
              <router-link :to="{ name: 'PatientEdit', params: { id: patient.id }}" >
                <button class="px-2 py-1 text-white bg-green-600 rounded hover:bg-green-700 transition duration-200">Edit</button>
              </router-link>
              <button @click="deletePatient(patient.id)" class="px-2 py-1 text-white bg-red-600 rounded hover:bg-red-700 transition duration-200">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script setup>
import usePatients from '../composables/patients';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const { patients, getPatients, deletePatient } = usePatients();

onMounted(() => {
  getPatients();
});
</script>
