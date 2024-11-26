import { defineComponent as h, computed as n, openBlock as a, createElementBlock as r, normalizeStyle as m, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoCodersrank2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (a(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "164",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 164",
      style: m(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#19223C",
          d: "M139.54.23 9.01 82.4C2.863 86.117-.142 90.28.005 94.892v12.506q.22 6.923 9.233 12.28l64.599 37.286a3.047 3.047 0 0 0 4.393-1.565l14.504-35.05-30.761-17.417a5.5 5.5 0 0 1-2.157-2.001 5.645 5.645 0 0 1 .278-6.332 5.7 5.7 0 0 1 1.656-1.49l56.474-34.61 23.287-56.705a1.36 1.36 0 0 0-.432-1.511 1.3 1.3 0 0 0-.765-.284 1.3 1.3 0 0 0-.783.23z"
        }),
        t("path", {
          fill: "#67A4AC",
          d: "M246.763 46.002 183.05 7.376a3.046 3.046 0 0 0-4.394 1.343l-14.94 35.05 30.32 18.088a5.5 5.5 0 0 1 2.107 2.048 5.65 5.65 0 0 1 0 5.72 5.5 5.5 0 0 1-2.106 2.056l-56.911 33.49-24.173 56.264a1.357 1.357 0 0 0 .11 1.897 1.31 1.31 0 0 0 1.457.206 1.3 1.3 0 0 0 .41-.316l41.752-25.23 16.48 23.67a3.97 3.97 0 0 0 3.295 1.783h39.553a3.91 3.91 0 0 0 3.492-2.124 4.07 4.07 0 0 0-.197-4.13l-26.809-41.084 54.276-32.818Q256 77.706 256 70.783v-12.28c0-4.616-3.076-8.779-9.233-12.501z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
