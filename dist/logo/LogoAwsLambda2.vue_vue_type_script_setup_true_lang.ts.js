import { defineComponent as o, computed as s, openBlock as h, createElementBlock as l, normalizeStyle as r, createStaticVNode as d } from "vue";
const n = /* @__PURE__ */ o({
  __name: "LogoAwsLambda2",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const t = a, i = s(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, e) => (h(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(i.value)
    }, e[0] || (e[0] = [
      d('<defs><linearGradient id="aws-lambda-2-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#C8511B"></stop><stop offset="100%" stop-color="#F90"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-lambda-2-gui-asset-a)"></rect><path fill="#FFF" d="M89.624 211.2H49.89l43.945-91.853 19.912 40.992zm7.079-100.63a3.22 3.22 0 0 0-2.887-1.805h-.01a3.2 3.2 0 0 0-2.886 1.82L41.913 213.022a3.203 3.203 0 0 0 2.893 4.58l46.848-.001a3.21 3.21 0 0 0 2.9-1.83l25.65-54.08a3.18 3.18 0 0 0-.016-2.762zM207.985 211.2h-39.477L105.174 78.624a3.21 3.21 0 0 0-2.897-1.824h-25.83l.03-32h50.626l63.042 132.573a3.21 3.21 0 0 0 2.897 1.827h14.943zm3.208-38.4h-16.121L132.03 40.227a3.21 3.21 0 0 0-2.9-1.827H73.273a3.206 3.206 0 0 0-3.208 3.197l-.035 38.4c0 .851.333 1.664.94 2.265.6.602 1.414.938 2.267.938h27.017l63.337 132.576a3.2 3.2 0 0 0 2.893 1.824h44.709a3.203 3.203 0 0 0 3.207-3.2V176c0-1.766-1.434-3.2-3.207-3.2"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};
