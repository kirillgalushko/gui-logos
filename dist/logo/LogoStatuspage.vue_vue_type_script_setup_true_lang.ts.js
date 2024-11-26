import { defineComponent as s, computed as a, openBlock as r, createElementBlock as p, normalizeStyle as c, createStaticVNode as l } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoStatuspage",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, o = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (r(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "189",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 189",
      style: c(o.value)
    }, e[0] || (e[0] = [
      l('<defs><linearGradient id="statuspage-gui-asset-a" x1="50%" x2="50%" y1="82.799%" y2="-5.781%"><stop offset="0%" stop-color="#2684FF"></stop><stop offset="82%" stop-color="#0052CC"></stop></linearGradient></defs><g><circle cx="128" cy="128.433" r="59.865" fill="url(#statuspage-gui-asset-a)"></circle><path fill="#2684FF" d="M1.616 59.255 33.8 97.374a6.86 6.86 0 0 0 9.744.72c52.118-46.73 116.657-46.73 168.912 0a6.86 6.86 0 0 0 9.744-.72l32.184-38.12a6.86 6.86 0 0 0-.79-9.64c-75.483-66.152-175.568-66.152-251.189 0a6.86 6.86 0 0 0-.789 9.64"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
