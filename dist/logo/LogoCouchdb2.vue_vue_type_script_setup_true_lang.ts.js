import { defineComponent as h, computed as n, openBlock as m, createElementBlock as s, normalizeStyle as v, createElementVNode as o } from "vue";
const p = /* @__PURE__ */ h({
  __name: "LogoCouchdb2",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const e = c, i = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "168",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 168",
      style: v(i.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("path", {
          fill: "#E42528",
          "fill-rule": "nonzero",
          d: "M207.999 112c0 10.609-5.588 15.808-16 15.992v.007H64.001v-.007c-10.412-.184-16-5.383-16-15.993 0-10.607 5.588-15.808 16-15.99v-.01h127.998v.01c10.412.182 16 5.383 16 15.99m-16 24.01V136H64.001v.01c-10.412.182-16 5.383-16 15.993s5.588 15.806 16 15.99V168h127.998v-.01c10.412-.181 16-5.38 16-15.99s-5.588-15.808-16-15.99m40-87.992v-.009c-10.41.184-16 5.383-16 15.993V152c0 10.61 5.59 15.806 16 15.99v-.016C247.616 167.425 256 151.827 256 120V80c0-21.217-8.384-31.614-24-31.983m-208-.009v.01C8.385 48.385 0 58.782 0 80v40c0 31.827 8.384 47.423 24 47.973v.017c10.412-.182 16-5.381 16-15.99V64c0-10.609-5.588-15.808-16-15.992M232 40C232 13.477 218.027.48 192 .021V0H64v.021c-26.025.46-40 13.456-40 39.98v.013c15.617.275 24.001 8.073 24.001 23.987s8.384 23.71 24 23.986V88h112v-.012c15.614-.275 23.998-8.073 23.998-23.986s8.384-23.712 24-23.987z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
