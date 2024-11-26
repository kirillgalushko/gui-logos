import { defineComponent as n, computed as l, openBlock as p, createElementBlock as m, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoOpensearch2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (p(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#005EB8",
          d: "M246.95 94a9.05 9.05 0 0 0-9.05 9.05c0 74.476-60.374 134.85-134.85 134.85a9.05 9.05 0 1 0 0 18.1C187.522 256 256 187.522 256 103.05a9.05 9.05 0 0 0-9.05-9.05"
        }),
        t("path", {
          fill: "#003B5C",
          d: "M192.326 152c8.703-14.198 17.12-33.129 15.464-59.632C204.36 37.47 154.636-4.179 107.682.335c-18.38 1.767-37.255 16.75-35.578 43.587.729 11.662 6.437 18.546 15.714 23.838 8.83 5.037 20.173 8.228 33.033 11.844 15.534 4.37 33.553 9.277 47.401 19.483 16.598 12.231 27.944 26.41 24.074 52.913"
        }),
        t("path", {
          fill: "#005EB8",
          d: "M15.674 56C6.971 70.198-1.446 89.129.21 115.632c3.43 54.899 53.154 96.546 100.108 92.033 18.38-1.767 37.255-16.75 35.578-43.587-.729-11.662-6.437-18.546-15.714-23.838-8.83-5.037-20.173-8.228-33.033-11.844-15.534-4.37-33.553-9.277-47.401-19.483C23.15 96.682 11.804 82.503 15.674 56"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
