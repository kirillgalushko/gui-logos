import { defineComponent as o, computed as h, openBlock as l, createElementBlock as a, normalizeStyle as c, createStaticVNode as r } from "vue";
const n = /* @__PURE__ */ o({
  __name: "LogoAwsShield",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const e = s, i = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, t) => (l(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: c(i.value)
    }, t[0] || (t[0] = [
      r('<defs><linearGradient id="aws-shield-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#BD0816"></stop><stop offset="100%" stop-color="#FF5252"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-shield-gui-asset-a)"></rect><path fill="#FFF" d="M172.834 159.998h-6.4v12.8h-12.8v6.4h12.8v12.8h6.4v-12.8h12.8v-6.4h-12.8zm22.4 16c0-14.115-11.485-25.6-25.6-25.6s-25.6 11.485-25.6 25.6 11.485 25.6 25.6 25.6 25.6-11.484 25.6-25.6m6.4 0c0 17.645-14.355 32-32 32s-32-14.355-32-32c0-17.644 14.355-32 32-32s32 14.356 32 32m-86.4 9.508V71.858l-35.2 13.539v65.001c.039 1.325 1.267 33.216 35.2 35.108m41.6-45.668V85.397l-35.2-13.54V185.48c3.712-.246 7.159-.902 10.355-1.917.432 2.141 1.07 4.205 1.84 6.202-4.688 1.469-9.824 2.233-15.395 2.233-43.389 0-44.79-41.113-44.8-41.53v-67.27c0-1.324.816-2.512 2.051-2.988l41.6-16a3.23 3.23 0 0 1 2.298 0l41.6 16a3.2 3.2 0 0 1 2.051 2.988v54.98c-2.201.37-4.34.93-6.4 1.66M143.218 203.8a38.7 38.7 0 0 0 5.815 4.547c-8.816 3.994-19.066 6.013-30.599 6.013-20.246 0-36.387-6.16-47.971-18.307-20.58-21.578-19.293-54.035-19.226-55.405l-.003-70.25c0-1.308.797-2.483 2.013-2.972l64-25.6a3.23 3.23 0 0 1 2.374 0l64 25.6a3.205 3.205 0 0 1 2.013 2.972v70.4s.007.141.013.343a38 38 0 0 0-6.41-2.279l-.003-66.297-60.8-24.32-60.8 24.32v68.233c-.02.458-1.2 31.31 17.491 50.87 10.327 10.81 24.9 16.292 43.31 16.292 9.24 0 17.52-1.414 24.783-4.16"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};
