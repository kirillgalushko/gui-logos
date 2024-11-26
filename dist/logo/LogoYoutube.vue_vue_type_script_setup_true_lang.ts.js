import { defineComponent as h, computed as s, openBlock as m, createElementBlock as l, normalizeStyle as r, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ h({
  __name: "LogoYoutube",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, o) => (m(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "0 -7 48 48",
      style: r(n.value)
    }, o[0] || (o[0] = [
      t("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        t("g", { fill: "#CE1312" }, [
          t("path", { d: "m19.044 23.27-.002-13.582 12.97 6.814zM47.52 7.334s-.47-3.33-1.908-4.798C43.786.61 41.74.601 40.803.49 34.086 0 24.011 0 24.011 0h-.022S13.914 0 7.197.49c-.939.11-2.983.12-4.81 2.045C.948 4.003.48 7.334.48 7.334S0 11.247 0 15.158v3.668c0 3.912.48 7.823.48 7.823s.468 3.331 1.907 4.798c1.827 1.926 4.225 1.866 5.293 2.067C11.52 33.885 24 34 24 34s10.086-.015 16.803-.505c.938-.113 2.983-.122 4.809-2.048 1.438-1.467 1.908-4.798 1.908-4.798s.48-3.91.48-7.823v-3.668c0-3.911-.48-7.824-.48-7.824" })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
