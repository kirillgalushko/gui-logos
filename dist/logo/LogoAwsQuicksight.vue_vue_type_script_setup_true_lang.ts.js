import { defineComponent as o, computed as c, openBlock as h, createElementBlock as a, normalizeStyle as r, createStaticVNode as p } from "vue";
const n = /* @__PURE__ */ o({
  __name: "LogoAwsQuicksight",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, i = c(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (l, e) => (h(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(i.value)
    }, e[0] || (e[0] = [
      p('<defs><linearGradient id="aws-quicksight-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#4D27A8"></stop><stop offset="100%" stop-color="#A166FF"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-quicksight-gui-asset-a)"></rect><path fill="#FFF" d="M208 76.8c0-3.53-2.87-6.4-6.4-6.4s-6.4 2.87-6.4 6.4 2.87 6.4 6.4 6.4 6.4-2.87 6.4-6.4m-73.6 73.6c0-3.53-2.87-6.4-6.4-6.4s-6.4 2.87-6.4 6.4 2.87 6.4 6.4 6.4 6.4-2.87 6.4-6.4m-6.4-44.8c3.53 0 6.4-2.87 6.4-6.4s-2.87-6.4-6.4-6.4-6.4 2.87-6.4 6.4 2.87 6.4 6.4 6.4m-67.2 64c0-3.53-2.87-6.4-6.4-6.4s-6.4 2.87-6.4 6.4 2.87 6.4 6.4 6.4 6.4-2.87 6.4-6.4m153.6-92.8c0 7.06-5.74 12.8-12.8 12.8-2.66 0-5.133-.816-7.178-2.211l-55.494 56.445c1.162 1.926 1.872 4.156 1.872 6.566 0 7.06-5.74 12.8-12.8 12.8s-12.8-5.74-12.8-12.8c0-5.946 4.093-10.915 9.6-12.346v-26.508a12.74 12.74 0 0 1-5.168-2.74L65.2 162.796c1.251 1.975 2 4.298 2 6.804 0 7.06-5.74 12.8-12.8 12.8s-12.8-5.74-12.8-12.8 5.74-12.8 12.8-12.8c2.227 0 4.294.624 6.118 1.629l55.453-55.005c-.467-1.331-.771-2.736-.771-4.224 0-7.06 5.74-12.8 12.8-12.8s12.8 5.74 12.8 12.8c0 5.946-4.093 10.915-9.6 12.346v26.508c1.123.292 2.176.736 3.155 1.303l55.863-56.823C189.34 80.8 188.8 78.87 188.8 76.8c0-7.06 5.74-12.8 12.8-12.8s12.8 5.74 12.8 12.8m-160-22.4h147.2v3.2h6.4v-6.4a3.2 3.2 0 0 0-3.2-3.2H51.2a3.2 3.2 0 0 0-3.2 3.2v99.2h6.4zM201.6 96h6.4v108.8a3.2 3.2 0 0 1-3.2 3.2H51.2a3.2 3.2 0 0 1-3.2-3.2v-16h6.4v12.8h147.2z"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};
