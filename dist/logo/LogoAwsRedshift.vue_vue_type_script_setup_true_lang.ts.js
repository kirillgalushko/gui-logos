import { defineComponent as c, computed as o, openBlock as r, createElementBlock as h, normalizeStyle as l, createStaticVNode as d } from "vue";
const m = /* @__PURE__ */ c({
  __name: "LogoAwsRedshift",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, i = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, e) => (r(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(i.value)
    }, e[0] || (e[0] = [
      d('<defs><linearGradient id="aws-redshift-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#4D27A8"></stop><stop offset="100%" stop-color="#A166FF"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-redshift-gui-asset-a)"></rect><path fill="#FFF" d="M162.64 112.546c-3.391 0-6.147-2.75-6.147-6.132s2.756-6.136 6.147-6.136c3.388 0 6.144 2.754 6.144 6.136 0 3.381-2.756 6.132-6.144 6.132m-15.57 37.292c-3.388 0-6.143-2.75-6.143-6.132s2.755-6.132 6.143-6.132 6.147 2.75 6.147 6.132-2.759 6.132-6.147 6.132m-37.367-6.214c-3.385 0-6.14-2.75-6.14-6.132s2.755-6.136 6.14-6.136c3.392 0 6.147 2.754 6.147 6.136 0 3.381-2.755 6.132-6.147 6.132m-15.566 34.185c-3.385 0-6.144-2.75-6.144-6.132s2.759-6.132 6.144-6.132c3.391 0 6.146 2.75 6.146 6.132s-2.755 6.132-6.146 6.132m68.503-83.911c-6.914 0-12.54 5.615-12.54 12.516 0 4.23 2.126 7.96 5.358 10.228l-5.85 14.81a12.6 12.6 0 0 0-2.538-.258c-5.498 0-10.13 3.573-11.814 8.502l-13.09-2.97c-.406-6.537-5.808-11.75-12.463-11.75-6.91 0-12.533 5.615-12.533 12.516 0 3.225 1.26 6.141 3.276 8.362l-5.712 13.37c-.204-.012-.393-.06-.597-.06-6.911 0-12.537 5.612-12.537 12.513 0 6.898 5.626 12.513 12.537 12.513 6.914 0 12.54-5.615 12.54-12.513 0-4.428-2.328-8.302-5.815-10.528l5.04-11.795c1.21.386 2.468.65 3.801.65 4.933 0 9.168-2.88 11.21-7.019l13.867 3.146c1.134 5.743 6.21 10.088 12.29 10.088 6.914 0 12.54-5.612 12.54-12.513 0-3.73-1.678-7.044-4.28-9.341l6.147-15.557c.39.039.764.118 1.163.118 6.91 0 12.537-5.615 12.537-12.512 0-6.901-5.626-12.516-12.537-12.516M128 211.219c-31.14 0-54.407-9.348-54.407-17.707V74.085c10.593 8.608 33.016 13.157 54.474 13.157 21.362 0 43.69-4.511 54.34-13.045v119.315c0 8.36-23.27 17.707-54.407 17.707m.067-166.438c32.022 0 54.34 9.507 54.34 18.042 0 8.53-22.318 18.038-54.34 18.038-32.025 0-54.34-9.507-54.34-18.038 0-8.535 22.315-18.042 54.34-18.042M188.8 62.823c0-15.863-31.29-24.423-60.733-24.423s-60.733 8.56-60.733 24.423c0 .025.007.054.007.08H67.2v130.61c0 15.645 31.325 24.087 60.8 24.087s60.8-8.442 60.8-24.088V62.902h-.006c0-.025.006-.054.006-.08"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
