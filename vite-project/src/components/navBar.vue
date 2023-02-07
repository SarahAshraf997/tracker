<script setup>
import { reactive } from "vue";
import inputForm from "./inputForm.vue";
import Time from "./Time.vue";
import container from "./container.vue";
let state = reactive({
  stringDay: "",
});
function GetSelectedDate(event) {
  //prints datetime attribute of time tag
  //console.log(event.target.children[0].getAttribute("datetime"));
  console.log(event.target);
  if (event.target.getAttribute("datetime") == null) {
    state.stringDay = event.target.children[0].getAttribute("datetime");
    //alert(event.target.children[0].getAttribute("datetime"));
  } else {
    state.stringDay = event.target.getAttribute("datetime");
    //alert(event.target.getAttribute("datetime"));
  }
}
</script>
<template>
  <div class="flex justify-center pt-16 pb-8 m-8">
    <div
      class="w-1/2 px-4 ring-2 ring-gray-900 drop-shadow-xl bg-cyan-500 shadow-lg shadow-gray-900 rounded-t-lg rounded-b-lg"
    >
      <div class="pt-16 px-10">
        <inputForm></inputForm>
      </div>

      <div class="pt-16 pb-8">
        <div class="w-2/3 px-4 sm:px-7 grid grid-rows-3 grid-flow-col gap-4">
          <!-- <div class="grid grid-cols-1 divide-y divide-gray-200 w-full p-8"> -->
          <div class="w-full">
            <!-- feb+buttons -->

            <div class="flex items-center">
              <h2
                class="flex-auto font-serif font-semibold text-gray-500 text-center mb-3 text-xl"
              >
                What Time Works?
              </h2>
            </div>
            <!-- days at the top -->
            <div
              class="w-full px-4 ring-2 ring-gray-900 drop-shadow-xl bg-blue-900 shadow-lg shadow-gray-900 rounded-t-lg rounded-b-lg"
            >
              <div
                class="grid bg-blue-900 grid-cols-7 mt-5 text-xs leading-6 text-center text-white"
              >
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
              </div>
            </div>

            <!-- GRID OF DAYS -->
            <div
              class="w-full px-0 ring-2 ring-gray-900 drop-shadow-xl bg-cyan-500 shadow-lg shadow-gray-900 rounded-t-lg rounded-b-lg"
            >
              <div class="mt-0 gap-0 justify-items-stretch">
                <div class="flex justify-between pt-3">
                  <button
                    type="button"
                    class="bg-blue-900 -my-1.5 flex flex-none bg-gray-900 hover:bg-gray-200 items-center justify-center p-1.5 text-white hover:text-gray-500 rounded-full"
                  >
                    <span class="sr-only">Previous month</span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="w-5 h-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="bg-blue-900 -my-1.5 flex flex-none bg-gray-900 hover:bg-gray-200 items-center justify-center p-1.5 text-white hover:text-gray-500 rounded-full"
                  >
                    <span class="sr-only">Next month</span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="w-5 h-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="justify-self-center">
                  <div
                    class="grid grid-cols-7 mt-2 text-sm text-xs leading-6 text-center"
                  >
                    <!-- start col m4 48ala -->
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-01">1</time>
                      </button>
                      <div
                        class="w-1 h-1 mt-1 __web-inspector-hide-shortcut__"
                      ></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-02">2</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-03">3</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-04">4</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-05">5</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <!-- background change -->
                      <button
                        type="button"
                        class="text-black bg-cyan-500 font-semibold flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-06">6</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-07">7</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-08">8</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-09">9</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-10">10</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-11">11</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-12">12</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-13">13</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-14">14</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-15">15</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-16">16</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-17">17</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-18">18</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-19">19</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-20">20</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-21">21</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-22">22</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-23">23</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-24">24</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-25">25</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-26">26</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-27">27</time>
                      </button>
                      <div class="w-1 h-1 mt-1"></div>
                    </div>
                    <div class="py-1.5 flex justify-center items-center">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-28">28</time>
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
                class="justify-self-center w-full ocus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Register new account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
