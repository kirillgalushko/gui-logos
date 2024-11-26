import { defineComponent as p, computed as i, openBlock as r, createElementBlock as c, normalizeStyle as l, createStaticVNode as f } from "vue";
const a = /* @__PURE__ */ p({
  __name: "LogoZoom3",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, e = i(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (h, t) => (r(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(e.value)
    }, t[0] || (t[0] = [
      f('<defs><linearGradient id="zoom-3-gui-asset-a" x1="23.666%" x2="76.334%" y1="95.612%" y2="4.388%"><stop offset="0%" stop-color="#0845BF"></stop><stop offset="19.11%" stop-color="#0950DE"></stop><stop offset="38.23%" stop-color="#0B59F6"></stop><stop offset="50%" stop-color="#0B5CFF"></stop><stop offset="67.32%" stop-color="#0E5EFE"></stop><stop offset="77.74%" stop-color="#1665FC"></stop><stop offset="86.33%" stop-color="#246FF9"></stop><stop offset="93.88%" stop-color="#387FF4"></stop><stop offset="100%" stop-color="#4F90EE"></stop></linearGradient></defs><g><path fill="url(#zoom-3-gui-asset-a)" d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256s-27.136-1.024-40.192-3.328c-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128s1.024-27.136 3.328-40.192c6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0s27.136 1.024 40.192 3.328c43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128"></path><path fill="#FFF" d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744"></path></g>', 2)
    ]), 4));
  }
});
export {
  a as _
};
