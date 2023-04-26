import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
axios.defaults.baseURL = "http://localhost:8000/api/v1";
export default function usePatients() {
  const patients = ref([]);
  const patient = ref([]);
  const errors = ref([]);
  const router = useRouter();
  const getPatients = async () => {
    try {
      const response = await axios.get("patients");
      patients.value = response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getPatient = async (id) => {
    try {
      const response = await axios.get(`patients/${id}`);
      patient.value = response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const storePatient = async (data) => {
    try {
      await axios.post("patients", data);
      // const response = await axios.post('patients', data)
      // patients.value.push(response.data.data)
      await router.push({ name: "PatientList" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
      console.log(error);
    }
  };

    const updatePatient = async (id) => {
    try {
        await axios.put(`patients/${id}`, patient.value);
        await router.push({ name: "PatientList" });
    } catch (error) {
        if (error.response.status === 422) {
            errors.value = error.response.data.errors;
        }
        console.log(error);
    }
    };


    const deletePatient = async (id) => {
        if (!window.confirm("Are you sure you want to delete this patient?")) {
            return;
        }
        await axios.delete(`patients/${id}`);
        await getPatients();

    };

  return {
    patients,
    patient,
    errors,
    getPatients,
    getPatient,
    storePatient,
    updatePatient,
    deletePatient,

   };
}
