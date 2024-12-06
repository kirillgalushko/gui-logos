import { defineComponent as h, computed as r, openBlock as l, createElementBlock as m, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoFirefox",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = r(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, o) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "0 -2.5 48 48",
      style: s(n.value)
    }, o[0] || (o[0] = [
      t("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        t("g", { fill: "#FF8000" }, [
          t("path", { d: "M16.688 7.73c.187-1.59 1.256-3.65 3.267-4.595-3.022-.458-5.476.945-6.698 2.748-1.94-.415-3.132-.438-5.082-.076-1.238-.93-2.694-3.05-2.58-5.267C3.253 3.275 2.771 5.337 3.06 7.798-5.954 23.781 6.173 43 23.458 43 38.988 43 48 31.227 48 19.163c0-8.135-3.715-15.197-7.508-16.724 1.415 1.546 3.023 5.573 2.715 8.36C40.145 2.897 32.502-.156 29.926.006 38.393 3.28 40.42 14.421 39.669 17.71c-.737-3.856-3.086-7.177-4.491-8.055 8.2 19.045-11.605 24.896-17.648 18.286 1.558.401 4.634.204 6.939-1.326 2.156-1.431 2.359-1.515 3.744-1.622 1.645-.126-.1-3.347-3.693-2.802-1.48.224-3.916 1.948-6.914.812-3.617-1.371-3.503-6.265.232-4.793.808-1.04.212-3.005.212-3.005 1.085-.985 2.455-1.68 3.29-2.167.546-.32 1.989-1.205 1.907-2.928-.294-.227-.769-.518-1.838-.458-4.168.262-4.447-1.23-4.721-1.922" })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};