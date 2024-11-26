import { defineComponent as l, computed as n, openBlock as m, createElementBlock as d, normalizeStyle as p, createElementVNode as t } from "vue";
const f = /* @__PURE__ */ l({
  __name: "LogoFirstChannelRussia",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (m(), d("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "2500",
      height: "2500",
      viewBox: "0 0 192.756 192.756",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd"
      }, [
        t("path", {
          fill: "#254185",
          d: "M0 0h192.756v192.756H0z"
        }),
        t("path", {
          fill: "#fefbfd",
          d: "m53.48 64.941 92.11-31.331-30.141 109.939-34.816 9.736 25.027-91.292-56.655 19.272z"
        }),
        t("path", {
          fill: "#fff",
          d: "m80.384 75.565 17.659-6.008-23.417 85.408-17.34 4.851z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  f as _
};
