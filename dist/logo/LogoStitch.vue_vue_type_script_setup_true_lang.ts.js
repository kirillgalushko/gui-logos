import { defineComponent as n, computed as m, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoStitch",
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
    return (p, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#FFC600",
          "fill-rule": "nonzero",
          d: "M81.484 119.338v-17.965H256V0H0v137.303h182.216v17.965H0V256h256V118.697H81.484zm48.762-93.032c7.057 0 12.832 5.774 12.832 12.832 0 7.057-5.775 12.832-12.832 12.832s-12.832-5.775-12.832-12.832c.641-7.058 6.416-12.832 12.832-12.832M75.709 65.444h113.564l-5.133 17.965H80.842zm54.537 164.25c-7.058 0-12.832-5.774-12.832-12.832 0-7.057 5.774-12.832 12.832-12.832 7.057 0 12.832 5.775 12.832 12.832s-5.775 12.832-12.832 12.832m-54.537-39.138 4.492-17.965h103.94l5.132 17.965z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
