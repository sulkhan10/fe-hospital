import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
axios.defaults.baseURL = "http://localhost:8000/";
export default function usePatients() {
  const patients = ref([]);
  const patient = ref([]);
  const errors = ref([]);
  const router = useRouter();
  const getPatients = async () => {
    try {
      const response = await axios.get("users");
      // console.log(response.data);
      patients.value = response.data.result;
    } catch (error) {
      console.log(error);
    }
  };

  const getPatient = async (id) => {
    try {
      const response = await axios.get(`users/${id}`);
      patient.value = response.data.result;
    } catch (error) {
      console.log(error);
    }
  };

  const storePatient = async (data) => {
    try {
      await axios.post("users", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // const response = await axios.post('patients', data)
      // patients.value.push(response.data.data)
      await router.push({ name: "PatientList" });
    } catch (error) {
      if (error.response.status === 409) {
          let errorsTemp = error.response.data.errors;
          let newErrors = {};
          errorsTemp.forEach((error, index) => {
            newErrors[`${error.field}`] = error.message;
          });
          
          console.log(newErrors);
          errors.value = newErrors;
      }
      console.log(errors);
    }
  };

  const updatePatient = async (id) => {
    try {
      await axios.put(`users/${id}`, patient.value);
      await router.push({ name: "PatientList" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
        // errors.value = error.response.data.status;
      }
      console.log(error);
    }
  };

  const deletePatient = async (id) => {
    if (!window.confirm("Are you sure you want to delete this patient?")) {
      return;
    }
    await axios.delete(`users/${id}`);
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
