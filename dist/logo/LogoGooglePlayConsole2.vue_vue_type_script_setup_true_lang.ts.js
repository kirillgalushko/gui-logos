import { defineComponent as n, computed as h, openBlock as m, createElementBlock as s, normalizeStyle as p, createElementVNode as t } from "vue";
const a = /* @__PURE__ */ n({
  __name: "LogoGooglePlayConsole2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, o) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "283",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 283",
      style: p(l.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("path", {
          fill: "#2F80ED",
          d: "M0 251.173V31.325C0 7.244 26.368-7.807 47.474 4.243l192.703 109.919c21.097 12.04 21.097 42.124 0 54.156L47.474 278.246C26.376 290.286 0 275.245 0 251.173"
        }),
        t("path", {
          fill: "#CCF6FF",
          d: "m192.941 87.22-101.25 58.306-19.333-34.25a16.54 16.54 0 0 0-10.045-7.84 16.77 16.77 0 0 0-12.703 1.501L0 132.48v33.774l52.753-29.299 19.42 34.427c2.172 3.84 5.88 6.71 10.17 7.874a16.97 16.97 0 0 0 12.817-1.65l127.503-73.436z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
