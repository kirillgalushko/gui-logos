import { defineComponent as h, computed as m, openBlock as l, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoUdemy2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (l(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "497",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 497",
      style: s(n.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#A435F0",
          points: "255.981781 147.795317 127.972671 73.8976585 0 147.795317 0 73.8976585 127.99089 0 256 73.8976585 256 147.795317"
        }),
        t("path", {
          fill: "#000",
          d: "M0 209.85h67.047v162.9c0 42.086 31.429 62.601 60.944 62.601 29.77 0 60.962-21.061 60.962-63.166V209.85H256v166.78c0 38.771-12.189 68.687-36.566 89.202-24.396 20.497-54.859 30.481-92.008 30.481-37.113 0-67.594-9.966-91.406-30.48C12.189 445.334 0 416.53 0 378.287z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
