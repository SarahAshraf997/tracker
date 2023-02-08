import axios from "axios";
import { createStore } from "vuex";
const backend_url = "https://localhost";
const backend_port = "7031";
export const store = createStore({
  state: {
    apointments: [],
    time_mintues: "",
    time_hours: "",
  },
  mutations: {},
  actions: {
    setTime_mintues(context, data) {
      context.state.time_mintues = data.data;
    },
    getTime_mintues() {
      return this.state.time_mintues;
    },
    getTime_houers() {
      return this.state.time_hours;
    },
    setTime_hours(context, data) {
      context.state.time_hours = data.data;
    },
    getTime() {
      return this.state.time_hours + ":" + this.state.time_mintues;
    },
    getAllApointments(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .get(backend_url + ":" + backend_port + "/api/Apointment")
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    creatApointment(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .post(backend_url + ":" + backend_port + "/api/Apointment", data)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    updateApointment(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .put(backend_url + ":" + backend_port + "/api/Apointment", data)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deleteApointment(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .delete(backend_url + ":" + backend_port + "/api/Apointment", data)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  modules: {},
});
