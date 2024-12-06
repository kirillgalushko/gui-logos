import { defineComponent as i, computed as a, openBlock as p, createElementBlock as r, normalizeStyle as l, createStaticVNode as h } from "vue";
const m = /* @__PURE__ */ i({
  __name: "LogoBamboo",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, s = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, o) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "296",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 296",
      style: l(s.value)
    }, o[0] || (o[0] = [
      h('<defs><linearGradient id="bamboo-gui-asset-a" x1="50.016%" x2="50.016%" y1="-98.299%" y2="38.217%"><stop offset="0%" stop-color="#0052CC"></stop><stop offset="100%" stop-color="#2684FF"></stop></linearGradient><linearGradient id="bamboo-gui-asset-b" x1="50.016%" x2="50.016%" y1=".763%" y2="138.581%"><stop offset="0%" stop-color="#0052CC"></stop><stop offset="100%" stop-color="#2684FF"></stop></linearGradient></defs><g><path fill="#2684FF" d="M247.206 167.896h-61.4a8.03 8.03 0 0 0-8.032 6.827c-3.487 24.952-24.84 43.511-50.035 43.49l16.625 75.936c60.232-7.87 106.592-57.067 110.873-117.66a8.03 8.03 0 0 0-8.031-8.593m-106.256-1.928 88.346-75.936a8.03 8.03 0 0 0 0-12.047L140.95 1.928a8.031 8.031 0 0 0-13.212 6.103v151.833a8.031 8.031 0 0 0 13.212 6.104"></path><path fill="url(#bamboo-gui-asset-a)" d="M1.205 184.48c8.45 63.437 62.537 110.83 126.534 110.874v-77.142c-27.809 0-50.37-22.508-50.437-50.316z"></path><path fill="url(#bamboo-gui-asset-b)" d="M0 166.691v1.205h77.302c.066-27.809 22.628-50.317 50.437-50.317l-16.585-75.936C48.145 49.853.767 103.153 0 166.69"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};