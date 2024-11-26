import { defineComponent as s, computed as p, openBlock as r, createElementBlock as a, normalizeStyle as n, createStaticVNode as l } from "vue";
const g = /* @__PURE__ */ s({
  __name: "LogoOpsgenie",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, i = p(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, t) => (r(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "305",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 305",
      style: n(i.value)
    }, t[0] || (t[0] = [
      l('<defs><linearGradient id="opsgenie-gui-asset-a" x1="50%" x2="50%" y1="16.62%" y2="119.283%"><stop offset="0%" stop-color="#2684FF"></stop><stop offset="82%" stop-color="#0052CC"></stop></linearGradient><linearGradient id="opsgenie-gui-asset-b" x1="41.18%" x2="67.714%" y1="31.16%" y2="78.678%"><stop offset="0%" stop-color="#2684FF"></stop><stop offset="62%" stop-color="#0052CC"></stop></linearGradient></defs><g><circle cx="127.996" cy="76.058" r="76.058" fill="url(#opsgenie-gui-asset-a)"></circle><path fill="url(#opsgenie-gui-asset-b)" d="M121.516 302.953A366.9 366.9 0 0 1 1.076 177.056a8.527 8.527 0 0 1 3.71-11.81l57.597-28.265a8.527 8.527 0 0 1 11.128 3.41 284.75 284.75 0 0 0 123.636 111.913 368.8 368.8 0 0 1-62.67 50.649 12.24 12.24 0 0 1-12.961 0"></path><path fill="#2684FF" d="M134.476 302.953a366.65 366.65 0 0 0 120.44-125.897 8.527 8.527 0 0 0-3.667-11.81l-57.64-28.265a8.527 8.527 0 0 0-11.127 3.41A284.6 284.6 0 0 1 58.845 252.305a366.7 366.7 0 0 0 62.67 50.649 12.24 12.24 0 0 0 12.961 0"></path></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
