import { defineComponent as n, computed as m, openBlock as r, createElementBlock as a, normalizeStyle as l, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoScribd2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (r(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "316",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 316",
      style: l(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#1E7B85",
          d: "M163.431 153.48a45.12 45.12 0 0 1 34.39-13.252 52.37 52.37 0 0 1 42.151 19.057Q256 178.34 256 212.29q0 46.82-29.468 73.386a119.9 119.9 0 0 1-73.702 28.71c-4.985.696-10.096.696-15.396.696h-1.406a190.13 190.13 0 0 1-125.743-48.147L0 257.722l40.448-47.893 23.726 18.299-22.464 26.25a160.1 160.1 0 0 0 96.04 31.55c41.267 0 69.852-15.649 80.957-42.908.633-2.774.95-5.61.947-8.456q0-12.115-10.033-12.115a47.3 47.3 0 0 0-9.024 1.704 58 58 0 0 1-11.295 1.45 38.56 38.56 0 0 1-26.25-11.042 37.86 37.86 0 0 1-12.241-29.531 44.17 44.17 0 0 1 12.62-31.55M123.173.018a173.97 173.97 0 0 1 112.004 38.555l10.853 8.519-33.696 48.082-24.861-16.406 17.92-25.745a145.13 145.13 0 0 0-82.03-23.852 101.5 101.5 0 0 0-41.963 8.33 96 96 0 0 0-12.178 7.445q-20.319 14.64-20.319 35.021 0 12.116 10.033 12.116a47.4 47.4 0 0 0 9.024-1.704 58.4 58.4 0 0 1 11.295-1.452 38.56 38.56 0 0 1 25.934 10.79 37.86 37.86 0 0 1 12.179 29.721 44.17 44.17 0 0 1-12.62 31.55 45.12 45.12 0 0 1-34.39 13.252 52.37 52.37 0 0 1-42.152-18.93c-10.727-12.684-16.47-30.604-16.532-53.258v-4.101C11.674 40.277 57.548.018 123.173.018"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
