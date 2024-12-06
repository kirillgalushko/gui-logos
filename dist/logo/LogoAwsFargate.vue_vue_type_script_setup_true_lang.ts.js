import { defineComponent as i, computed as o, openBlock as a, createElementBlock as c, normalizeStyle as m, createStaticVNode as r } from "vue";
const v = /* @__PURE__ */ i({
  __name: "LogoAwsFargate",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, s = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, e) => (a(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: m(s.value)
    }, e[0] || (e[0] = [
      r('<defs><linearGradient id="aws-fargate-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#C8511B"></stop><stop offset="100%" stop-color="#F90"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-fargate-gui-asset-a)"></rect><path fill="#FFF" d="M166.4 180.874v-15.508l9.6-3.84v15.508zm-16-19.348 9.6 3.84v15.508l-9.6-3.84zm-19.2 41.748v-15.508l9.6-3.84v15.508zm-16-19.348 9.6 3.84v15.508l-9.6-3.84zM96 180.874v-15.508l9.6-3.84v15.508zm-16-19.348 9.6 3.84v15.508l-9.6-3.84zm12.8-7.68 7.386 2.954-7.386 2.954-7.386-2.954zm35.2 22.4 7.386 2.954-7.386 2.954-7.386-2.954zm35.2-22.4 7.386 2.954-7.386 2.954-7.386-2.954zm17.187-.019-16-6.4c-.761-.3-1.613-.3-2.374 0l-16 6.4A3.205 3.205 0 0 0 144 156.8v18.954l-14.813-5.927c-.761-.3-1.613-.3-2.374 0L112 175.754V156.8a3.205 3.205 0 0 0-2.013-2.973l-16-6.4c-.761-.3-1.613-.3-2.374 0l-16 6.4A3.205 3.205 0 0 0 73.6 156.8v22.4c0 1.309.797 2.483 2.013 2.973l16 6.4c.38.15.784.227 1.187.227s.806-.077 1.187-.227l14.813-5.927V201.6c0 1.309.797 2.483 2.013 2.973l16 6.4c.38.15.784.227 1.187.227s.806-.077 1.187-.227l16-6.4a3.205 3.205 0 0 0 2.013-2.973v-18.954l14.813 5.927c.38.15.784.227 1.187.227s.806-.077 1.187-.227l16-6.4a3.205 3.205 0 0 0 2.013-2.973v-22.4a3.205 3.205 0 0 0-2.013-2.973M208 115.002c0 18.704-41.22 28.8-80 28.8s-80-10.096-80-28.8c0-8.932 9.904-16.794 27.888-22.141l1.824 6.134c-14.38 4.275-23.312 10.41-23.312 16.007 0 10.595 30.224 22.4 73.6 22.4s73.6-11.805 73.6-22.4c0-5.597-8.931-11.732-23.312-16.007l1.824-6.134C198.096 98.208 208 106.07 208 115m-80-60.375L160.685 67.2 128 79.773 95.315 67.2zm33.856 63.267c-6.035 2.701-16.166 5.847-30.656 6.27V85.397l35.2-13.536v39.012c0 3.043-1.78 5.798-4.544 7.02m-72.256-7.02V71.862l35.2 13.536v38.765c-14.49-.422-24.62-3.568-30.669-6.275-2.752-1.216-4.531-3.971-4.531-7.014m1.933 12.86c7.043 3.152 19.088 6.912 36.467 6.912 17.38 0 29.424-3.76 36.458-6.905 5.068-2.243 8.342-7.293 8.342-12.867V67.2a3.2 3.2 0 0 0-2.051-2.989l-41.6-16a3.23 3.23 0 0 0-2.298 0l-41.6 16A3.2 3.2 0 0 0 83.2 67.2v43.674c0 5.574 3.274 10.624 8.333 12.86"></path></g>', 2)
    ]), 4));
  }
});
export {
  v as _
};