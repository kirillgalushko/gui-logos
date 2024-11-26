import { defineComponent as s, computed as c, openBlock as l, createElementBlock as n, normalizeStyle as p, createStaticVNode as r } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoBitcoin",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, o = c(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, e) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(o.value)
    }, e[0] || (e[0] = [
      r('<defs><linearGradient id="bitcoin-gui-asset-a" x1="49.973%" x2="49.973%" y1="-.024%" y2="99.99%"><stop offset="0%" stop-color="#F9AA4B"></stop><stop offset="100%" stop-color="#F7931A"></stop></linearGradient></defs><g><path fill="url(#bitcoin-gui-asset-a)" d="M252.171 158.954c-17.102 68.608-86.613 110.314-155.123 93.211-68.61-17.102-110.316-86.61-93.213-155.119C20.937 28.438 90.347-13.268 158.957 3.835c68.51 17.002 110.317 86.51 93.214 155.119"></path><path fill="#FFF" d="M188.945 112.05c2.5-17-10.4-26.2-28.2-32.3l5.8-23.1-14-3.5-5.6 22.5c-3.7-.9-7.5-1.8-11.3-2.6l5.6-22.6-14-3.5-5.7 23q-4.65-1.05-9-2.1v-.1l-19.4-4.8-3.7 15s10.4 2.4 10.2 2.5c5.7 1.4 6.7 5.2 6.5 8.2l-6.6 26.3c.4.1.9.2 1.5.5-.5-.1-1-.2-1.5-.4l-9.2 36.8c-.7 1.7-2.5 4.3-6.4 3.3.1.2-10.2-2.5-10.2-2.5l-7 16.1 18.3 4.6c3.4.9 6.7 1.7 10 2.6l-5.8 23.3 14 3.5 5.8-23.1c3.8 1 7.6 2 11.2 2.9l-5.7 23 14 3.5 5.8-23.3c24 4.5 42 2.7 49.5-19 6.1-17.4-.3-27.5-12.9-34.1 9.3-2.1 16.2-8.2 18-20.6m-32.1 45c-4.3 17.4-33.7 8-43.2 5.6l7.7-30.9c9.5 2.4 40.1 7.1 35.5 25.3m4.4-45.3c-4 15.9-28.4 7.8-36.3 5.8l7-28c7.9 2 33.4 5.7 29.3 22.2"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
