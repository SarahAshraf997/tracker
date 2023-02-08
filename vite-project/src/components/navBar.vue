<script setup>
import { reactive, onMounted } from "vue";
import inputForm from "./inputForm.vue";
import Time from "./Time.vue";
import container from "./container.vue";
import { useStore } from "vuex";

const store = useStore();
let state = reactive({
  stringDay: "",
  time: "",
  userdetails: {
    name: "",
    email: "",
    phone: "",
  },
  days: [
    { date: "", day: "", status: false },
    { date: "", day: "", status: false },
    { date: "", day: "", status: false },
    { date: "2023-02-15", day: "15", status: false },
    { date: "2023-02-16", day: "16", status: false },
    { date: "2023-02-17", day: "17", status: false },
    { date: "2023-02-18", day: "18", status: false },
    { date: "2023-02-19", day: "19", status: false },
    { date: "2023-02-20", day: "20", status: false },
    { date: "2023-02-21", day: "21", status: false },
    { date: "2023-02-22", day: "22", status: false },
    { date: "2023-02-23", day: "23", status: false },
    { date: "2023-02-24", day: "24", status: false },
    { date: "2023-02-25", day: "25", status: false },
    { date: "2023-02-26", day: "26", status: false },
    { date: "2023-02-27", day: "27", status: false },
    { date: "2023-02-28", day: "28", status: false },
  ],
  WeekDays: [
    { dayName: "Sun", status: false },
    { dayName: "Mon", status: false },
    { dayName: "Tue", status: false },
    { dayName: "Wed", status: false },
    { dayName: "Thu", status: false },
    { dayName: "Fri", status: false },
    { dayName: "Sat", status: false },
  ],
});
onMounted(() => {
  getappontment();
  state.time = store.dispatch("getTime");
  console.log(state.time);
});
function getappontment() {
  store
    .dispatch("getAllApointments")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
function createAppointment() {
  store
    .dispatch("createAppointment", {
      date: state.stringDay,
      time: "12:00",
      name: "test",
      email: "",
      phone: "",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
function time() {
  store
    .dispatch("getTime")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
function GetSelectedDate(day) {
  if (day.date == "" && day.day == "") {
    return;
  }
  state.stringDay = day.date;
  day.status = !day.status;
  let _dayname = new Date(day.date).toLocaleString("en-us", {
    weekday: "short",
  });
  state.WeekDays.find((element) => element.dayName == _dayname).status = true;
  if (!day.status) {
    state.stringDay = "";
    state.WeekDays.find((element) => element.dayName == _dayname).status = false;
  }
}
</script>
<template>
  <h2 class="flex-auto font-serif font-semibold text-gray-500 text-center mb-3 text-xl">What Day is Best For You?</h2>
  <div class="flex justify-center pt-7 pb-8 m-8">
    <div class="w-1/2 border border-color-red px-4 drop-shadow-xl bg-cyan-500 shadow-lg shadow-gray-900 rounded-t-lg rounded-b-lg">
      <div class="pt-16 px-10">
        <inputForm></inputForm>
      </div>

      <div class="pt-16 pb-8">
        <div class="w-2/3 px-4 sm:px-7 grid grid-rows-3 grid-flow-col gap-4">
          <!-- <div class="grid grid-cols-1 divide-y divide-gray-200 w-full p-8"> -->
          <div class="w-full">
            <!-- feb+buttons -->

            <div class="flex items-center">
              <h2 class="flex-auto font-serif font-semibold text-gray-500 text-center mb-3 text-xl">What Time Works?</h2>
            </div>
            <!-- days at the top -->
            <div class="w-full px-4 drop-shadow-xl bg-blue-900 shadow-lg shadow-gray-900 rounded-t-lg rounded-b-lg">
              <div class="grid bg-blue-900 grid-cols-7 mt-5 text-xs leading-6 text-center text-white">
                <div v-for="_Day in state.WeekDays" class="flex h-8 w-8 items-center justify-center">
                  <p v-if="_Day.status" class="rounded-full px-2 bg-green-500">
                    {{ _Day.dayName }}
                  </p>
                  <p v-else>{{ _Day.dayName }}</p>
                </div>
              </div>
            </div>

            <!-- GRID OF DAYS -->
            <div class="w-full px-0 drop-shadow-xl bg-cyan-500 shadow-lg shadow-gray-900 rounded-t-lg rounded-b-lg">
              <div class="mt-0 gap-0 justify-items-stretch">
                <div class="flex justify-between pt-3">
                  <button type="button" class="bg-blue-900 -my-1.5 flex flex-none bg-gray-900 hover:bg-gray-200 items-center justify-center p-1.5 text-white hover:text-gray-500 rounded-full">
                    <span class="sr-only">Previous month</span
                    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                      <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                  <button type="button" class="bg-blue-900 -my-1.5 flex flex-none bg-gray-900 hover:bg-gray-200 items-center justify-center p-1.5 text-white hover:text-gray-500 rounded-full">
                    <span class="sr-only">Next month</span
                    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-5 h-5">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </div>
                <div class="justify-self-center">
                  <div class="grid grid-cols-7 mt-2 text-sm text-xs leading-6 text-center">
                    <!-- start col m4 48ala -->

                    <div v-for="_data in state.days" class="py-1.5 flex justify-center items-center">
                      <button v-if="_data.status" type="button" class="text-white bg-green-500 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full" @click="GetSelectedDate(_data)">
                        <time :datetime="_data.date">{{ _data.day }}</time>
                      </button>
                      <button v-else type="button" class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full" @click="GetSelectedDate(_data)">
                        <time :datetime="_data.date">{{ _data.day }}</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-10 w-3/5">
                <Time :selectedDay="state.stringDay"></Time>
              </div>
              <div class="pt-10 w-2/5 flex">
                <container :selectedDate="state.stringDay"></container>
              </div>
            </div>
            <!-- </div> -->

            <section class="mt-12 md:mt-0 md:pl-14">
              <!-- <h2 class="font-semibold text-gray-900">"Schedule for"</h2> -->
            </section>
          </div>
          <!-- buttonSubmit -->
          <div class="grid grid-cols-4 gap-4">
            <div></div>
            <div class="col-span-2 pt-10">
              <button
                type="submit"
                @click="createAppointment(state)"
                class="justify-self-center w-full ocus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
