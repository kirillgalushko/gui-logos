import { defineComponent as l, computed as n, openBlock as c, createElementBlock as s, normalizeStyle as m, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoElasticsearch",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, o = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (c(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "288",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 288",
      style: m(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#343741",
          d: "M0 143.82c0 12.44 1.744 24.441 4.71 35.956h175.067c19.856 0 35.955-16.1 35.955-35.956 0-19.865-16.1-35.955-35.955-35.955H4.71C1.744 119.371 0 131.38 0 143.82"
        }),
        t("path", {
          fill: "#FEC514",
          d: "M242.013 68.863c5.025-4.629 9.7-9.6 13.987-14.93C229.636 21.079 189.213 0 143.82 0 87 0 38.101 33.052 14.775 80.9h196.559c11.38 0 22.319-4.324 30.678-12.037"
        }),
        t("path", {
          fill: "#00BFB3",
          d: "M211.334 206.742H14.774c23.336 47.839 72.226 80.9 129.045 80.9 45.393 0 85.816-21.088 112.18-53.933a136.6 136.6 0 0 0-13.987-14.94c-8.36-7.721-19.299-12.027-30.678-12.027"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
