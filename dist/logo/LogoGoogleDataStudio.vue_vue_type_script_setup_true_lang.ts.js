import { defineComponent as h, computed as o, openBlock as p, createElementBlock as r, normalizeStyle as s, createStaticVNode as c } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoGoogleDataStudio",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (n, t) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "239",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 239",
      style: s(l.value)
    }, t[0] || (t[0] = [
      c('<g><path fill="#669DF6" d="M224.022 173.159h-92.959c-22.48 0-35.07 15.736-35.07 32.485 0 15.455 10.679 32.484 35.07 32.484h92.959z"></path><ellipse cx="224.022" cy="205.587" fill="#1A73E8" rx="31.979" ry="32.485"></ellipse><path fill="#669DF6" d="M128.028 86.551H35.07C12.59 86.551 0 102.288 0 119.036c0 15.456 10.678 32.485 35.07 32.485h92.958z"></path><ellipse cx="128.028" cy="119.036" fill="#1A73E8" rx="31.979" ry="32.485"></ellipse><path fill="#669DF6" d="M224.022 0h-92.959c-22.48 0-35.07 15.737-35.07 32.485 0 15.455 10.679 32.485 35.07 32.485h92.959z"></path><ellipse cx="224.022" cy="32.485" fill="#1A73E8" rx="31.979" ry="32.485"></ellipse></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};
