import { defineComponent as h, computed as m, openBlock as l, createElementBlock as s, normalizeStyle as n, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ h({
  __name: "LogoGusto",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (l(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "195",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 195",
      style: n(o.value)
    }, t[0] || (t[0] = [
      c("g", null, [
        c("path", {
          fill: "#F45D48",
          d: "M454.641 28.464c-31.633 0-57.374 25.853-57.374 57.634s25.741 57.633 57.374 57.633c31.625 0 57.359-25.852 57.359-57.633s-25.734-57.634-57.359-57.634m0 87.953c-16.636 0-30.186-13.616-30.186-30.32 0-16.71 13.55-30.319 30.186-30.319 16.622 0 30.178 13.61 30.178 30.32s-13.549 30.319-30.185 30.319zM285.696 74.426l-10.032-5.031c-4.356-2.167-7.087-3.844-8.185-5.083a6.05 6.05 0 0 1-1.67-4.067c0-1.944.876-3.584 2.598-4.86 1.706-1.336 4.133-1.944 7.212-1.944 5.632 0 11.873 3.398 18.744 10.247l16.933-17.014a44.6 44.6 0 0 0-15.88-13.431 44 44 0 0 0-19.975-4.69c-10.336 0-18.87 3.05-25.518 9.194-6.641 6.144-9.98 13.527-9.98 22.187 0 13.43 8.793 24.62 26.438 33.502l9.238 4.638c7.962 4.03 11.925 8.133 11.925 12.377 0 2.3-1.106 4.289-3.302 6.055-2.197 1.773-5.106 2.612-8.712 2.612-3.339 0-7.168-1.15-11.479-3.488a38.6 38.6 0 0 1-11.264-9.112l-16.844 18.432c9.498 12.466 22.164 18.744 38.088 18.744 11.97 0 21.52-3.272 28.598-9.773 7.124-6.492 10.685-14.625 10.685-24.353 0-7.294-1.973-13.698-5.891-19.137-3.955-5.439-11.212-10.737-21.727-15.998zm-170.34 56.75V30.757H88.123v6.723a56.8 56.8 0 0 0-30.764-9.016C25.734 28.464 0 54.317 0 86.098s25.734 57.633 57.366 57.633a56.8 56.8 0 0 0 30.446-8.793c0 .883-.045 1.677-.045 2.211 0 16.703-13.55 30.32-30.178 30.32a30 30 0 0 1-15.969-4.646l-13.467 23.693a56.8 56.8 0 0 0 29.48 8.311c31.633 0 57.723-25.86 57.723-57.64 0-1.232.081-4.861 0-6.011m-57.99-14.766c-16.621 0-30.178-13.61-30.178-30.312 0-16.71 13.55-30.32 30.178-30.32 16.63 0 30.179 13.61 30.179 30.32 0 16.703-13.55 30.319-30.179 30.319zm166.467-85.69h-27.366v54.791c.045 7.784.045 21.222-5.67 26.966-2.73 2.738-5.72 5.216-12.013 5.216-6.336 0-9.327-2.478-12.05-5.216-5.721-5.751-5.677-19.226-5.64-26.966V30.72h-27.358v54.628c-.09 11.264-.223 32.175 13.505 46.05 8.05 8.133 17.645 12.288 31.499 12.288 13.861 0 23.448-4.11 31.5-12.288 13.727-13.875 13.593-34.83 13.504-46.05l.089-54.635zm155.077 80.792c-2.197 1.677-7.524 5.395-13.55 4.556-4.927-.668-8.926-4.289-9.542-16.399V54.235h32.16V30.63h-32.16V0H328.54v6.01h-.045v90.083c0 14.32 3.606 47.593 36.82 47.593 16.807-.26 27.01-9.408 31.284-12.985l.571-.445-16.37-20.243c-.044.037-1.186.965-1.891 1.5"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};