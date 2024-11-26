import { defineComponent as n, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as l, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoDreamhost",
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
    return (p, i) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "253",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 253",
      style: l(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#1F3244",
          d: "M252.69 189.792c-20.743 11.573-44.823 17.998-70.423 17.474-75.461-1.519-135.419-62.678-133.94-136.567.53-25.094 8.032-48.384 20.718-68.196C28.643 25.06 1.03 67.243.027 116.07c-1.493 73.9 58.513 135.053 133.995 136.577 49.838 1.013 94.018-24.254 118.668-62.856"
        }),
        t("path", {
          fill: "#3E95BE",
          d: "M180.943 191.375c.836.015 1.677.03 2.518.03 19.694 0 39.12-4.877 56.391-14.056 10.178-17.449 16.103-37.701 16.103-59.388C255.955 52.825 203.293 0 138.316 0c-20.485 0-39.739 5.272-56.505 14.506a114.56 114.56 0 0 0-17.236 58.053c-1.285 64.18 50.912 117.495 116.368 118.816"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
