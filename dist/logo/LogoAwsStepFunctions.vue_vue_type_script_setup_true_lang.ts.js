import { defineComponent as o, computed as h, openBlock as a, createElementBlock as n, normalizeStyle as p, createStaticVNode as r } from "vue";
const m = /* @__PURE__ */ o({
  __name: "LogoAwsStepFunctions",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, i = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (v, e) => (a(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(i.value)
    }, e[0] || (e[0] = [
      r('<defs><linearGradient id="aws-step-functions-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#B0084D"></stop><stop offset="100%" stop-color="#FF4F8B"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-step-functions-gui-asset-a)"></rect><path fill="#FFF" d="M144 140.8h67.2v-22.4H144zm70.4-28.8h-73.6a3.2 3.2 0 0 0-3.2 3.2V144a3.2 3.2 0 0 0 3.2 3.2h73.6a3.2 3.2 0 0 0 3.2-3.2v-28.8a3.2 3.2 0 0 0-3.2-3.2m-75.2 88c0 6.176-5.024 11.2-11.2 11.2s-11.2-5.024-11.2-11.2 5.024-11.2 11.2-11.2 11.2 5.024 11.2 11.2m-94.4-49.6h57.6v-12.8H44.8zm0-32h57.6v-12.8H44.8zm72-62.4c0-6.176 5.024-11.2 11.2-11.2s11.2 5.024 11.2 11.2-5.024 11.2-11.2 11.2-11.2-5.024-11.2-11.2m62.4 113.6H76.8v-12.8h28.8a3.2 3.2 0 0 0 3.2-3.2v-19.2a3.2 3.2 0 0 0-3.2-3.2H76.8v-6.4h28.8a3.2 3.2 0 0 0 3.2-3.2v-19.2a3.2 3.2 0 0 0-3.2-3.2H76.8v-9.6h102.4v12.8h6.4v-16a3.2 3.2 0 0 0-3.2-3.2h-51.2v-9.907c8.18-1.51 14.4-8.682 14.4-17.293 0-9.706-7.898-17.6-17.6-17.6s-17.6 7.894-17.6 17.6c0 8.611 6.22 15.782 14.4 17.293V83.2H73.6a3.2 3.2 0 0 0-3.2 3.2v12.8H41.6a3.2 3.2 0 0 0-3.2 3.2v19.2a3.2 3.2 0 0 0 3.2 3.2h28.8v6.4H41.6a3.2 3.2 0 0 0-3.2 3.2v19.2a3.2 3.2 0 0 0 3.2 3.2h28.8v16a3.2 3.2 0 0 0 3.2 3.2h51.2v6.707c-8.18 1.51-14.4 8.682-14.4 17.293 0 9.706 7.898 17.6 17.6 17.6s17.6-7.894 17.6-17.6c0-8.611-6.22-15.782-14.4-17.293V176h51.2a3.2 3.2 0 0 0 3.2-3.2v-15.914h-6.4z"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
