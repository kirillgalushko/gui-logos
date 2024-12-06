import { defineComponent as h, computed as a, openBlock as p, createElementBlock as o, normalizeStyle as d, createStaticVNode as n } from "vue";
const m = /* @__PURE__ */ h({
  __name: "LogoXwiki2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, l = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, e) => (p(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: d(l.value)
    }, e[0] || (e[0] = [
      n('<g><path fill="#70B700" d="M127.612 0a8.85 8.85 0 0 1 8.844 8.51l.006.34v39.668a8.85 8.85 0 0 1-17.694.34l-.006-.34V8.85a8.85 8.85 0 0 1 8.85-8.85"></path><path fill="#F70" d="M247.143 117.992a8.85 8.85 0 0 1 .395 17.692l-.395.009h-39.667A8.85 8.85 0 0 1 207.08 118l.395-.009z"></path><path fill="red" d="M136.462 246.374a8.85 8.85 0 0 1-17.692.394l-.008-.394v-39.668a8.85 8.85 0 0 1 17.692-.394l.008.394z"></path><path fill="#0087CB" d="M8.85 135.693A8.85 8.85 0 0 1 8.456 118l.394-.009h39.668a8.85 8.85 0 0 1 .394 17.692l-.394.009z"></path><path fill="#505052" d="M224.319 17.102c6.28 5.496 7.018 14.97 1.745 21.367l-.3.352-77.707 88.791 77.707 88.791c5.599 6.397 4.951 16.121-1.445 21.72-6.28 5.496-15.769 4.972-21.41-1.103l-.31-.343-74.996-85.694-74.995 85.694c-5.599 6.396-15.323 7.044-21.72 1.445-6.28-5.496-7.018-14.97-1.745-21.366l.3-.353 77.706-88.79L29.443 38.82c-5.599-6.397-4.951-16.121 1.446-21.72 6.28-5.496 15.768-4.972 21.41 1.103l.309.344 74.995 85.692L202.6 18.548c5.598-6.397 15.322-7.045 21.719-1.446"></path></g>', 1)
    ]), 4));
  }
});
export {
  m as _
};