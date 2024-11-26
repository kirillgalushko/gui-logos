import { defineComponent as o, computed as l, openBlock as a, createElementBlock as h, normalizeStyle as r, createStaticVNode as c } from "vue";
const n = /* @__PURE__ */ o({
  __name: "LogoAwsEks",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, i = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, e) => (a(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(i.value)
    }, e[0] || (e[0] = [
      c('<defs><linearGradient id="aws-eks-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#C8511B"></stop><stop offset="100%" stop-color="#F90"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-eks-gui-asset-a)"></rect><path fill="#FFF" d="m149.894 103.037-21.852 25.347 23.77 27.725h-8.871L121.6 131.2v25.6h-6.4v-54.4h6.4v22.4l19.78-21.763zm54.906 51.312-25.6-15.363V102.4c0-1.14-.602-2.192-1.587-2.765L140.8 78.163V47.206l64 37.821zm4.829-73.904-70.4-41.6a3.21 3.21 0 0 0-3.216-.026A3.21 3.21 0 0 0 134.4 41.6V80c0 1.136.605 2.189 1.587 2.765l36.813 21.472V140.8c0 1.123.592 2.166 1.555 2.742l32 19.2a3.19 3.19 0 0 0 3.223.042A3.2 3.2 0 0 0 211.2 160V83.2c0-1.133-.595-2.18-1.571-2.755m-80.205 133.517L54.4 174.077v-89.05l64-37.82v31.036L84.682 99.7a3.2 3.2 0 0 0-1.482 2.7v54.4c0 1.194.666 2.288 1.722 2.838l43.05 22.4c.924.48 2.025.484 2.946.004l41.767-21.581 25.702 15.424zm77.024-40.708-32-19.2a3.2 3.2 0 0 0-3.117-.096l-41.875 21.636L89.6 154.858v-50.701L123.318 82.7A3.2 3.2 0 0 0 124.8 80V41.6a3.2 3.2 0 0 0-1.613-2.782 3.21 3.21 0 0 0-3.216.026l-70.4 41.6A3.2 3.2 0 0 0 48 83.2V176c0 1.18.653 2.269 1.696 2.826l78.253 41.6a3.2 3.2 0 0 0 3.05-.026l75.35-41.6a3.2 3.2 0 0 0 1.652-2.742 3.21 3.21 0 0 0-1.553-2.804"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};
