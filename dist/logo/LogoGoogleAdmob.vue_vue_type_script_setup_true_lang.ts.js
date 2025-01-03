import { defineComponent as c, computed as l, openBlock as n, createElementBlock as m, normalizeStyle as p, createElementVNode as t } from "vue";
const r = /* @__PURE__ */ c({
  __name: "LogoGoogleAdmob",
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
    return (s, i) => (n(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#FBBC04",
          d: "M122.163.41C125.85.102 129.433 0 133.12 0 199.782 2.458 253.338 55.91 256 122.573v100.659c-.102 18.227-14.95 32.87-33.075 32.769-16.589-2.561-29.287-16.078-30.823-32.769v-100.66c-2.764-35.122-33.484-61.44-68.608-58.674-.41 0-.819.102-1.228.102"
        }),
        t("path", {
          fill: "#4285F4",
          d: "M256 223.949c0 17.613-14.336 31.949-31.949 31.949s-31.949-14.336-31.949-31.95c0-17.612 14.336-31.948 31.95-31.948C241.663 192 256 206.336 256 223.949"
        }),
        t("path", {
          fill: "#EA4335",
          d: "M124.006 254.874c18.125.204 32.973-14.234 33.178-32.359v-.205c-.512-17.612-15.258-31.539-32.87-31.027h-.717c-34.919-2.662-61.235-32.973-58.778-67.993v-.512C67.38 91.238 92.467 66.355 124.006 64c17.613.717 32.461-13.005 33.178-30.618v-.512C156.979 14.746 142.131.102 124.006.305h-2.252C53.862 3.482.41 59.187 0 127.181v.512c0 79.77 69.94 127.283 122.06 127.283h1.946z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};
