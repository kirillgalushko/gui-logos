import { defineComponent as n, computed as p, openBlock as l, createElementBlock as s, normalizeStyle as g, createStaticVNode as h } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoConanIo",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, i = p(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (m, t) => (l(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "241",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 241 256",
      style: g(i.value)
    }, t[0] || (t[0] = [
      h('<g><polygon fill="#AFD4E5" points="118.874 0 0 56.984 118.874 129.541 240.278 63.448"></polygon><polygon fill="#69C" points="0.0002 170.5869 118.8742 255.9999 118.8742 129.5409 0.0002 56.9849"></polygon><polygon fill="#7DA7D3" points="118.874 129.5406 118.874 255.9996 240.278 176.9806 240.278 63.4486"></polygon><polygon fill="#369" points="184.5564 213.2489 187.3874 211.4059 184.9874 93.5489 182.8444 94.7149"></polygon><path fill="#69C" d="m161.91 77.054 30.502-16.468s-45.97-50.157-100.11-21.033C66.83 53.255 59.24 67.026 70.516 81.73c18.662 24.338 41.17 21.606 41.17 21.606L141.04 89.05s-31.876 4.205-45.356-6.959c-11.057-9.159-6.414-20.817 8.845-31.44 13.388-9.321 40.036-5.565 49.479 1.564 9.442 7.127 13.11 17.095 7.903 24.839"></path></g>', 1)
    ]), 4));
  }
});
export {
  c as _
};
