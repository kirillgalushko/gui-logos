import { defineComponent as s, computed as l, openBlock as p, createElementBlock as h, normalizeStyle as n, createStaticVNode as a } from "vue";
const m = /* @__PURE__ */ s({
  __name: "LogoBitbucket",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, e) => (p(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "231",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 231",
      style: n(i.value)
    }, e[0] || (e[0] = [
      a('<defs><linearGradient id="bitbucket-gui-asset-a" x1="108.633%" x2="46.927%" y1="13.818%" y2="78.776%"><stop offset="18%" stop-color="#0052CC"></stop><stop offset="100%" stop-color="#2684FF"></stop></linearGradient></defs><g fill="none"><polygon points="101.272088 152.561281 154.720712 152.561281 167.622105 77.2417255 87.0600784 77.2417255"></polygon><path fill="#2684FF" d="M8.308 0A8.202 8.202 0 0 0 .106 9.516l34.819 211.373a11.155 11.155 0 0 0 10.909 9.31h167.04a8.2 8.2 0 0 0 8.201-6.89l34.82-213.752a8.202 8.202 0 0 0-8.203-9.514zm146.616 152.768h-53.315l-14.436-75.42h80.67z"></path><path fill="url(#bitbucket-gui-asset-a)" d="M244.61 77.242h-76.916l-12.909 75.36h-53.272l-62.902 74.663a11.1 11.1 0 0 0 7.171 2.704H212.73a8.196 8.196 0 0 0 8.196-6.884z"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
