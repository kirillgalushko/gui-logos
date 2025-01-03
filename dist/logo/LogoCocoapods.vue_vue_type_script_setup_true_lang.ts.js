import { defineComponent as n, computed as m, openBlock as p, createElementBlock as s, normalizeStyle as l, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoCocoapods",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, o) => (p(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(h.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("path", {
          fill: "#FA2A00",
          d: "M255.349 255.35H0V0h255.349z"
        }),
        t("path", {
          fill: "#FFF",
          d: "M160.993 135.984c-3.837 21.052-21.917 38.274-49.807 38.274-33.316 0-53.375-24.471-53.375-52.361 0-27.33 19.066-52.389 53.084-52.389 29.18 0 47.261 18.357 49.956 41.267H136.8c-2.128-11.667-10.959-20.484-25.613-20.484-19.08 0-29.89 15.086-29.89 31.606 0 17.499 12.094 31.593 30.174 31.593 13.377 0 22.2-7.689 25.045-17.506zm27.937-64.149-14.698 6.298 18.42 43.076-18.427 43.09 14.704 6.285 12.363-29.117.064.134 8.554-20.392z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
