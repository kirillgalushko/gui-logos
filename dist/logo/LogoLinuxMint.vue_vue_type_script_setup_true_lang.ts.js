import { defineComponent as o, computed as h, openBlock as n, createElementBlock as m, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoLinuxMint",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, c = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (n(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(c.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("circle", {
          cx: "128",
          cy: "128",
          r: "118",
          fill: "#69B53F"
        }),
        t("path", {
          fill: "#FFF",
          d: "M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0m0 20c59.647 0 108 48.353 108 108s-48.353 108-108 108S20 187.647 20 128 68.353 20 128 20"
        }),
        t("path", {
          fill: "#F8F8F8",
          d: "M78.5 62.5V153c0 10.772 8.43 19.317 19.153 19.497l.347.003h60c10.772 0 19.317-8.43 19.497-19.153l.003-.347v-50c0-5.365-4.135-9.5-9.5-9.5-5.273 0-9.357 3.994-9.496 9.224l-.004.276v50.5h-21V103c0-5.365-4.135-9.5-9.5-9.5-5.273 0-9.357 3.994-9.496 9.224l-.004.276v50.5h-21V103c0-16.726 13.774-30.5 30.5-30.5 7.038 0 13.734 2.515 19.179 6.997l.396.331.425.368.434-.376c5.25-4.46 11.71-7.064 18.538-7.302l.526-.014.502-.004c16.559 0 30.224 13.5 30.496 30l.004.5v50c0 22.027-17.888 40.135-39.834 40.495l-.666.005H98c-22.027 0-40.135-17.888-40.495-39.834L57.5 153V62.5z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
