import { defineComponent as o, computed as s, openBlock as a, createElementBlock as m, normalizeStyle as r, createStaticVNode as c } from "vue";
const n = /* @__PURE__ */ o({
  __name: "LogoAwsIam",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = s(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (l, e) => (a(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(i.value)
    }, e[0] || (e[0] = [
      c('<defs><linearGradient id="aws-iam-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#BD0816"></stop><stop offset="100%" stop-color="#FF5252"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-iam-gui-asset-a)"></rect><path fill="#FFF" d="M44.8 188.8h166.4V67.2H44.8zM217.6 64v128a3.2 3.2 0 0 1-3.2 3.2H41.6a3.2 3.2 0 0 1-3.2-3.2V64a3.2 3.2 0 0 1 3.2-3.2h172.8a3.2 3.2 0 0 1 3.2 3.2m-76.8 89.6h48v-6.4h-48zm41.6-19.2h16V128h-16zm-41.6 0h25.6V128h-25.6zm-48 12.8c0-1.763-1.434-3.2-3.2-3.2a3.203 3.203 0 0 0-3.2 3.2c0 1.763 1.434 3.2 3.2 3.2s3.2-1.437 3.2-3.2m6.4 0c0 4.166-2.685 7.683-6.4 9.011v6.989h-6.4v-6.992c-3.715-1.325-6.4-4.842-6.4-9.008 0-5.293 4.307-9.6 9.6-9.6s9.6 4.307 9.6 9.6m-38.4 25.578 57.58.022.007-12.8H105.6v-6.4h12.787l.007-9.6H105.6v-6.4h12.797l.003-9.578L60.82 128zm9.6-51.175 38.4.016V99.2c.003-7.37-8.97-13.834-19.2-13.84h-.013c-10.214 0-19.174 6.467-19.18 13.84zm-16 54.371.02-51.174a3.2 3.2 0 0 1 3.2-3.2l6.38.003.006-22.403c.007-11.162 11.482-20.24 25.581-20.24h.013c14.118.006 25.603 9.088 25.6 20.24v22.422l6.4.004a3.2 3.2 0 0 1 3.2 3.2L124.78 176a3.2 3.2 0 0 1-3.2 3.2l-63.98-.026a3.2 3.2 0 0 1-3.2-3.2M192 115.2h6.4v-6.4H192zm-51.2 0H176v-6.4h-35.2z"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};