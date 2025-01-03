import { defineComponent as n, computed as h, openBlock as m, createElementBlock as l, normalizeStyle as s, createElementVNode as c } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoDaemonTools",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, i = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "2500",
      height: "2500",
      viewBox: "0 0 1267.68 1267.504",
      style: s(i.value)
    }, t[0] || (t[0] = [
      c("path", {
        fill: "#399CE5",
        d: "M78.642 325.354C178.732 141.392 375.182 13.694 584.465 0c10.255 7.906-2.69 21.484-4.468 31.165-69.781 228.19-137.727 456.954-207.564 685.143-3.611 10.371-4.297 21.428-3.727 32.37 77.745-9.685 155.662-17.416 233.29-27.673a369 369 0 0 1 23.891-.457c1.605 3.322 4.812 10.024 6.358 13.349-25.781 85.422-48.009 171.872-72.415 257.637-17.59 64.794-37.009 129.134-53.223 194.329C666.68 953.494 825.316 720.09 984.527 487.088c-12.834-10.655-29.501-2.979-44.281-2.521-79.81 7.562-159.387 18.332-239.371 24.176-1.314-9.053-.794-18.104 3.963-26.125C768.54 347.184 831.102 211.175 894.872 75.851c3.775-11.856 18.1-11.972 27.671-7.904 185.738 92.753 318.076 283.304 340.535 489.722 18.161 146.777-17.938 299.752-99.517 423.208-72.468 110.979-180.695 198.347-304.733 245.376-143.567 55.002-307.305 55.002-450.878 0-143.742-54.31-265.601-163.333-336.468-299.63-97.51-185.106-95.389-418.625 7.16-601.269"
      }, null, -1)
    ]), 4));
  }
});
export {
  d as _
};
