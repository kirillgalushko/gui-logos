import { defineComponent as c, computed as a, openBlock as h, createElementBlock as n, normalizeStyle as m, createElementVNode as t } from "vue";
const r = /* @__PURE__ */ c({
  __name: "LogoNaiveui",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, o = a(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "312",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 312",
      style: m(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#4C9717",
          d: "M181.252 154.622c.173-1.039.268-2.09.283-3.143v98.197l-51.453-47.052-25.886-23.607-15.582-14.324-6.927-6.323-2.552-2.33-.185-.16c-.629-.506-1.233-1.036-1.812-1.517-.58-.48-1.085-.9-1.775-.69a1.54 1.54 0 0 0-.974 1.11V62.33l.53.481 10.564 9.553c5.56 4.931 11.169 9.862 16.716 14.793a3586 3586 0 0 1 23.594 21.326q9.306 8.456 18.589 16.937c7.396 6.743 14.693 13.56 22.09 20.253 3.328 3.008 6.68 5.954 10.046 8.912.715.629 1.418 1.233 2.145 1.874.5.363 1.15.447 1.726.222.341-.19.59-.51.69-.888.099-.468.099-.789.173-1.17"
        }),
        t("path", {
          fill: "#5FBC21",
          d: "M74.278 155.325c-.14 1.12-.18 2.25-.123 3.378 0 31.433 0 62.867.234 94.289v11.192a18.3 18.3 0 0 1-7.236 13.671c-8.394 7.014-16.222 14.681-24.32 22.053-3.39 3.082-6.756 6.163-10.245 9.171s-12.462 3.378-17.43-.776a97 97 0 0 1-10.527-10.676 15.73 15.73 0 0 1-4.598-10.712c0-.887-.074-1.861 0-2.933 0-1.85 0-3.699.062-5.56.061-5.3 0-10.613 0-15.914V89.635a15.6 15.6 0 0 1 .468-3.92c.327-1.115.74-2.203 1.233-3.255a27.3 27.3 0 0 1 2.49-4.413l19.723-19.723L36.57 45.775a9.7 9.7 0 0 1 2.268-1.7 9.9 9.9 0 0 1 3.957-1.234c4.126-.76 8.386.026 11.97 2.207.919.56 1.781 1.209 2.576 1.935l17.048 15.31v92.453q-.076.285-.11.579m179.122 75.453-36.229 33.283q-.213.16-.443.296l-.136.099-.247.148a17.26 17.26 0 0 1-20.66-2.034l-2.181-1.911-12.02-10.983V46.453a64 64 0 0 1 .827-5.103c.863-4.376 4.709-6.546 7.642-9.282 6.373-5.917 12.944-11.612 19.44-17.406 4.475-3.994 8.937-8 13.449-11.97 3.932-3.463 11.55-3.29 15.248-1.146a12.4 12.4 0 0 1 2.564 1.985l4.167 4.018 3.365 3.218 3.07 2.97a14 14 0 0 1 2.194 2.577 14.46 14.46 0 0 1 2.095 7.963c-.061 18.071.074 36.143.111 54.239q.111 46.041.197 92.082 0 23.594.087 47.175v2.158c.185 4.684.086 7.778-2.54 10.847"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};