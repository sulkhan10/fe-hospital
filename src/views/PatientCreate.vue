<script setup>
import { reactive } from "vue";
// import {storePatient, errors} from '../store/patient';
import usePatients from "../composables/patients";
const { storePatient, errors } = usePatients();
const form = reactive({
  nik: "",
  name: "",
  sex: "",
  religion: "",
  phone: "",
  address: "",
});
</script>
<template>
  <div class="relative">
    <img
      src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
      class="absolute inset-0 object-cover w-full h-full"
      alt=""
    />
    <div class="relative bg-gray-900 bg-opacity-75">
      <div
        class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div class="flex flex-col items-center justify-between xl:flex-row">
          <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2
              class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
            >
              Add New Patient
              <span class="text-blue-400">Data Page</span>
            </h2>
            <h2
              class="max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-white sm:text-2xl sm:leading-none"
            >
              All Fields Are <span class="text-blue-400">Required</span>
            </h2>
            <p class="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
              Please fill out the form to add a new patient. The patient will be
              added to the list of patients. Double check the information before
              submitting.
            </p>
            <a
              href="/"
              aria-label=""
              class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-blue-400 hover:text-teal-accent-700"
            >
              Back To Patient List
              <svg
                class="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path
                  d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
                ></path>
              </svg>
            </a>
          </div>
          <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div class="bg-white rounded-2xl shadow-2xl p-7">
              <div class="flex justify-end">
                <router-link to="/" class="text-gray-500 hover:text-gray-700">
                  <svg
                    class="h-8"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </router-link>
              </div>
              <h3 class="mb-2 text-xl font-semibold sm:text-center sm:text-2xl">
                Add Patient
              </h3>
              <form class="space-y-2" @submit.prevent="storePatient(form)">
                <div class="rounded-md shadow-sm space-y-4">
                  <div>
                    <label
                      for="nik"
                      class="block text-sm font-medium text-gray-700"
                      >NIK</label
                    >
                    <div class="mt-1">
                      <input
                        v-model="form.nik"
                        id="nik"
                        name="nik"
                        type="text"
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div v-if="errors.nik">
                      <ul>
                        <li
                          v-for="(item, index) in errors.nik"
                          :key="index"
                          class="text-red-600"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-medium text-gray-700"
                      >Name</label
                    >
                    <div class="mt-1">
                      <input
                        v-model="form.name"
                        id="name"
                        name="name"
                        type="text"
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div v-if="errors.name">
                      <ul>
                        <li
                          v-for="(item, index) in errors.name"
                          :key="index"
                          class="text-red-600"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <label
                      for="sex"
                      class="block text-sm font-medium text-gray-700"
                      >Sex</label
                    >
                    <div class="mt-1">
                      <select
                        v-model="form.sex"
                        id="sex"
                        name="sex"
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div v-if="errors.sex">
                      <ul>
                        <li
                          v-for="(item, index) in errors.sex"
                          :key="index"
                          class="text-red-600"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <label
                      for="religion"
                      class="block text-sm font-medium text-gray-700"
                      >Religion</label
                    >
                    <div class="mt-1">
                      <input
                        v-model="form.religion"
                        id="religion"
                        name="religion"
                        type="text"
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div v-if="errors.religion">
                      <ul>
                        <li
                          v-for="(item, index) in errors.religion"
                          :key="index"
                          class="text-red-600"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <label
                      for="phone"
                      class="block text-sm font-medium text-gray-700"
                      >Phone</label
                    >
                    <div class="mt-1">
                      <input
                        v-model="form.phone"
                        id="phone"
                        name="phone"
                        type="tel"
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div v-if="errors.phone">
                      <ul>
                        <li
                          v-for="(item, index) in errors.phone"
                          :key="index"
                          class="text-red-600"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <label
                      for="address"
                      class="block text-sm font-medium text-gray-700"
                      >Address</label
                    >
                    <div class="mt-1">
                      <textarea
                        v-model="form.address"
                        id="address"
                        name="address"
                        rows="3"
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      ></textarea>
                    </div>
                    <div v-if="errors.address">
                      <ul>
                        <li
                          v-for="(item, index) in errors.address"
                          :key="index"
                          class="text-red-600"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex space-x-4">
                    <button
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Add Patient
                    </button>
                    <router-link to="/">
                      <button
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Cancel
                      </button>
                    </router-link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
