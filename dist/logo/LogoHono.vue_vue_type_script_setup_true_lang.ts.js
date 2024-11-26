import { defineComponent as h, computed as l, openBlock as m, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoHono",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "330",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 330",
      style: r(n.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#FF5B11",
          d: "M134.129.029q1.315-.17 2.319.662a1256 1256 0 0 1 69.573 93.427q24.141 36.346 41.082 76.862 27.055 72.162-28.16 125.564-48.313 40.83-111.318 31.805-75.312-15.355-102.373-87.133Q-1.796 217.85.614 193.51q4.014-41.896 19.878-80.838 6.61-15.888 17.228-29.154a382 382 0 0 1 16.565 21.203q3.66 3.825 7.62 7.289Q92.138 52.013 134.13.029",
          opacity: ".993"
        }),
        t("path", {
          fill: "#FF9758",
          d: "M129.49 53.7q36.47 42.3 65.93 90.114a187.3 187.3 0 0 1 15.24 33.13q12.507 49.206-26.836 81.169-38.05 26.774-83.488 15.902-48.999-15.205-56.653-65.929-1.857-15.993 3.314-31.142a225.4 225.4 0 0 1 17.89-35.78l19.878-29.155a5510 5510 0 0 0 44.726-58.31"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
