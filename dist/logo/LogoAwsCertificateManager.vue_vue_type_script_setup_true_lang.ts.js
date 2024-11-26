import { defineComponent as o, computed as s, openBlock as h, createElementBlock as r, normalizeStyle as l, createStaticVNode as n } from "vue";
const p = /* @__PURE__ */ o({
  __name: "LogoAwsCertificateManager",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const e = a, i = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (h(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(i.value)
    }, t[0] || (t[0] = [
      n('<defs><linearGradient id="aws-certificate-manager-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#BD0816"></stop><stop offset="100%" stop-color="#FF5252"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-certificate-manager-gui-asset-a)"></rect><path fill="#FFF" d="M114.22 125.7a3.2 3.2 0 0 1 .906 2.982l-3.28 15.068 14.48-8.876a3.18 3.18 0 0 1 3.35.003l14.375 8.854-3.184-15.094a3.2 3.2 0 0 1 .893-2.947l12.925-12.653-16.851-2.432a3.21 3.21 0 0 1-2.42-1.763l-7.443-15.239-7.619 15.277a3.19 3.19 0 0 1-2.4 1.738l-16.803 2.454zm-10.223 24.018 4.496-20.656-16.474-15.913a3.2 3.2 0 0 1-.825-3.283 3.19 3.19 0 0 1 2.582-2.183l21.594-3.158 9.766-19.581c.54-1.088 1.565-1.837 2.877-1.773a3.21 3.21 0 0 1 2.86 1.795l9.55 19.546 21.58 3.12a3.19 3.19 0 0 1 2.583 2.173 3.19 3.19 0 0 1-.804 3.28l-16.29 15.949 4.36 20.672a3.202 3.202 0 0 1-4.809 3.388l-19.046-11.737-19.2 11.77a3.2 3.2 0 0 1-3.526-.118 3.21 3.21 0 0 1-1.274-3.29M44.8 67.268h166.4V51.2H44.8zM217.6 48v160c0 1.766-1.434 3.2-3.2 3.2h-19.2v-6.4h16V73.67H44.8V204.8h121.6v6.4H41.6a3.2 3.2 0 0 1-3.2-3.2V48a3.2 3.2 0 0 1 3.2-3.2h172.8c1.766 0 3.2 1.434 3.2 3.2M76.8 188.8H96v-6.4H76.8zm32 0h44.8v-6.4h-44.8zm-32-16H96v-6.4H76.8zm32 0h70.4v-6.4h-70.4z"></path></g>', 2)
    ]), 4));
  }
});
export {
  p as _
};
