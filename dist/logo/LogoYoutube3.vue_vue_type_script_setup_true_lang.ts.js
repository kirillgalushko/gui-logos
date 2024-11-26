import { defineComponent as h, computed as s, openBlock as l, createElementBlock as m, normalizeStyle as p, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoYoutube3",
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
    return (r, o) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "180",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 180",
      style: p(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("path", {
          fill: "red",
          d: "M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
        }),
        t("polygon", {
          fill: "#FFF",
          points: "102.420513 128.06 168.749025 89.642 102.420513 51.224"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
