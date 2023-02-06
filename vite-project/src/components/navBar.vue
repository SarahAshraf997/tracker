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
  <div class="flex pt-16 pb-8 m-8">
    <div
      class="mx-auto w-1/2 px-4 ring-2 ring-gray-900 drop-shadow-xl bg-cyan-500 shadow-lg shadow-gray-900 rounded-t-lg rounded-b-lg"
    >
      <div class="pt-16 px-16">
        <inputForm></inputForm>
      </div>

      <div class="pt-16 pb-8">
        <div
          class="w-fyll px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6 flex items-center justify-center"
        >
          <!-- <div class="grid grid-cols-1 divide-y divide-gray-200 w-full p-8"> -->
          <div class="w-full">
            <!-- feb+buttons -->

            <div class="flex items-center">
              <h2 class="flex-auto font-semibold text-gray-900">
                February 2023
              </h2>
            </div>
            <!-- days at the top -->
            <div
              class="mx-auto w-3/4 px-4 ring-2 ring-gray-900 drop-shadow-xl bg-grey-500 shadow-lg shadow-gray-900 rounded-t-lg rounded-b-lg"
            >
              <div
                class="grid bg-blue-900 grid-cols-7 mt-10 text-xs leading-6 text-center text-white"
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
              class="mx-auto w-full px-0 ring-2 ring-gray-900 drop-shadow-xl bg-cyan-500 shadow-lg shadow-gray-900 rounded-t-lg rounded-b-lg"
            >
              <div class="mt-0 gap-0 justify-items-stretch">
                <div class="grid grid-cols-4 flex flex-col">
                  <div class="justify-items-end">
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
                  </div>
                  <div></div>
                  <div></div>
                  <div class="justify-items-end">
                    <button
                      type="button"
                      class="bg-blue-900 flex flex-none p-1.5 text-white hover:text-gray-500 rounded-full"
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
                </div>
                <div class="justify-self-center">
                  <div class="grid grid-cols-7 mt-2 text-sm">
                    <!-- start col m4 48ala -->
                    <div class="col-start-4 py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-01">1</time>
                      </button>
                      <div
                        class="w-1 h-1 mx-auto mt-1 __web-inspector-hide-shortcut__"
                      ></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-02">2</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-03">3</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-04">4</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-05">5</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <!-- background change -->
                      <button
                        type="button"
                        class="text-black bg-cyan-500 font-semibold mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-06">6</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-07">7</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-08">8</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-09">9</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-10">10</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-11">11</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-12">12</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-13">13</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-14">14</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-15">15</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-16">16</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-17">17</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-18">18</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-19">19</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-20">20</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-21">21</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-22">22</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-23">23</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-24">24</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-25">25</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-26">26</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-27">27</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                    <div class="py-1.5">
                      <button
                        type="button"
                        class="text-gray-900 hover:bg-gray-200 mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                        @click="GetSelectedDate"
                      >
                        <time datetime="2023-02-28">28</time>
                      </button>
                      <div class="w-1 h-1 mx-auto mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-10 w-3/5">
                <Time :selectedDay="state.stringDay"></Time>
              </div>
              <div class="pt-10 w-3/5">
                <container :selectedDate="state.stringDay"></container>
              </div>
            </div>
            <!-- </div> -->

            <section class="mt-12 md:mt-0 md:pl-14">
              <!-- <h2 class="font-semibold text-gray-900">"Schedule for"</h2> -->
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
