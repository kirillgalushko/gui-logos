import { defineComponent as n, computed as l, openBlock as m, createElementBlock as a, normalizeStyle as r, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ n({
  __name: "LogoAdobeIndesign",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, o = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (m(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "250",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 250",
      style: r(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("rect", {
          width: "256",
          height: "249.6",
          x: "0",
          y: "0",
          fill: "#49021F",
          rx: "42.5"
        }),
        t("path", {
          fill: "#F36",
          d: "M92.969 65.297v109.394q0 1.718-1.546 1.718h-20.78q-1.376 0-1.373-1.718V65.297q0-1.373 1.545-1.374h20.78a1.215 1.215 0 0 1 1.385 1.233zm62.586 112.818-1.106.011a53.2 53.2 0 0 1-22.926-4.808 36.45 36.45 0 0 1-16.057-14.512q-5.698-9.464-5.836-23.59l-.003-.71a44.84 44.84 0 0 1 5.84-22.497 42.87 42.87 0 0 1 16.443-16.183l.558-.304q11.16-6.182 26.962-6.182l.222.001.493.011.558.022.623.032.687.043.751.055 1.697.139.464.04v-33.83q0-1.201 1.03-1.203h21.639a.91.91 0 0 1 1.03 1.03v101.495a85 85 0 0 0 .258 6.354l.162 2.214.143 2.061.124 1.907a1.775 1.775 0 0 1-1.03 1.718 85.2 85.2 0 0 1-17.345 5.151 93 93 0 0 1-15.38 1.535m9.37-21.284v-46.883a17 17 0 0 0-2.833-.515 34 34 0 0 0-3.521-.172c-4.168-.041-8.286.9-12.021 2.748a23.5 23.5 0 0 0-9.016 7.9q-3.522 5.151-3.521 13.567a30.3 30.3 0 0 0 1.803 10.99 20.9 20.9 0 0 0 4.809 7.557 18.3 18.3 0 0 0 7.213 4.293 28.3 28.3 0 0 0 8.844 1.375q2.403 0 4.465-.173a18.4 18.4 0 0 0 3.248-.54z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
