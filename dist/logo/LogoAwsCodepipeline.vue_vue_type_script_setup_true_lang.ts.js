import { defineComponent as s, computed as h, openBlock as p, createElementBlock as a, normalizeStyle as r, createStaticVNode as n } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoAwsCodepipeline",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (p(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(o.value)
    }, t[0] || (t[0] = [
      n('<defs><linearGradient id="aws-codepipeline-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#2E27AD"></stop><stop offset="100%" stop-color="#527FFF"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-codepipeline-gui-asset-a)"></rect><path fill="#FFF" d="M96 99.2h16v-6.4H96zm21.334 96.531-5.92-2.429 24.295-59.27 5.92 2.429zm28.493-17.235 17.59-15.43-17.577-15.236 4.195-4.838 20.349 17.642a3.2 3.2 0 0 1 1.104 2.41 3.2 3.2 0 0 1-1.091 2.415l-20.349 17.85zM81.63 163.354a3.2 3.2 0 0 1 1.081-2.416l20.279-17.927 4.237 4.797-17.533 15.498 17.437 15.03-4.183 4.848-20.211-17.427a3.2 3.2 0 0 1-1.107-2.403M200.112 112H59.088C52.976 112 48 107.027 48 100.915V99.2h38.4v-6.4H48V59.085C48 52.973 52.976 48 59.088 48h141.024c6.112 0 11.088 4.973 11.088 11.085V92.8h-89.6v6.4h89.6v1.715c0 6.112-4.976 11.085-11.088 11.085M70.4 211.2h115.2v-92.8H70.4zM200.112 41.6H59.088c-9.645 0-17.488 7.843-17.488 17.485v41.83c0 9.642 7.843 17.485 17.488 17.485H64v96a3.2 3.2 0 0 0 3.2 3.2h121.6a3.2 3.2 0 0 0 3.2-3.2v-96h8.112c9.645 0 17.488-7.843 17.488-17.485v-41.83c0-9.642-7.843-17.485-17.488-17.485"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
