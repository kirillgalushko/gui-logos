import { defineComponent as l, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as a, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ l({
  __name: "LogoAdobeLightroom",
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
    return (s, i) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "250",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 250",
      style: a(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("rect", {
          width: "256",
          height: "249.6",
          x: "0",
          y: "0",
          fill: "#001E36",
          rx: "42.5"
        }),
        t("path", {
          fill: "#31A8FF",
          d: "M134.443 176.409H66.78q-1.719 0-1.717-1.89V65.47a1.366 1.366 0 0 1 1.545-1.546H87.56a1.064 1.064 0 0 1 1.202 1.203v89.645h49.287q1.545 0 1.203 1.545l-3.092 18.547a1.64 1.64 0 0 1-.687 1.288 2.3 2.3 0 0 1-1.03.258m17-85.352h18.719c1.044.01 1.956.71 2.232 1.718a8.3 8.3 0 0 1 .86 2.404q.358 1.659.514 3.349.17 1.803.172 3.864a40.1 40.1 0 0 1 11.42-9.188 32.15 32.15 0 0 1 15.886-3.864 1.366 1.366 0 0 1 1.545 1.546v20.78q0 1.203-1.717 1.202a43.36 43.36 0 0 0-20.179 3.606 18.2 18.2 0 0 0-5.753 3.95v54.44q0 1.545-1.374 1.545h-20.78a1.517 1.517 0 0 1-1.717-1.717v-59.077q0-2.157-.028-4.457l-.035-2.334q-.01-.593-.023-1.194a418 418 0 0 0-.178-6.263l-.08-2.066a54.5 54.5 0 0 0-.686-7.041.987.987 0 0 1 1.075-1.227z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};