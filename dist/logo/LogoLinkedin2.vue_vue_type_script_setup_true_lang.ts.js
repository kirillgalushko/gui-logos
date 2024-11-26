import { defineComponent as o, computed as v, openBlock as n, createElementBlock as c, normalizeStyle as a, createElementVNode as h } from "vue";
const s = /* @__PURE__ */ o({
  __name: "LogoLinkedin2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, m = v(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (n(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "128",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 128",
      style: a(m.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#0A66C2",
          d: "m202.057 74.971 28.252 34.743H208l-25.143-31.908v31.908h-18.286V18.286h18.286v53.76l23.223-26.332h23.314zm-73.143-31.085a24.78 24.78 0 0 0-20.205 10.971v-9.143h-17.28v64h18.285V79.817a15.91 15.91 0 0 1 15.177-17.646c10.606 0 12.252 10.423 12.252 17.646v29.897h18.286v-33.92c0-20.114-6.675-31.908-26.149-31.908zm163.657 35.291q.105 2.011 0 4.023h-48v.64a16.366 16.366 0 0 0 16.732 13.074 22.95 22.95 0 0 0 16.823-6.308l12.16 9.143a39.4 39.4 0 0 1-29.715 11.794 31.91 31.91 0 0 1-33.828-34.286 32.73 32.73 0 0 1 34.377-33.371c17.189 0 31.451 12.16 31.451 35.291m-17.005-7.863a13.35 13.35 0 0 0-14.537-12.8c-8.04-.869-15.321 4.794-16.458 12.8zM18.286 18.286H0v91.428h54.857V91.43H18.286zm329.143 0h18.285v91.428h-17.28v-6.4a22.31 22.31 0 0 1-18.285 8.229 31.177 31.177 0 0 1-30.263-33.829 30.72 30.72 0 0 1 30.171-33.828 23.95 23.95 0 0 1 17.372 6.4zm1.371 59.428A14.903 14.903 0 0 0 333.989 60.8c-8.747.635-15.375 8.157-14.903 16.914-.472 8.757 6.156 16.28 14.903 16.915A14.903 14.903 0 0 0 348.8 77.714M73.143 16.457A11.61 11.61 0 0 0 61.714 27.43c0 6.311 5.117 11.428 11.429 11.428S84.57 33.74 84.57 27.43a11.61 11.61 0 0 0-11.428-10.972M64 109.714h18.286v-64H64zM512 9.143v109.714a9.143 9.143 0 0 1-9.143 9.143H393.143a9.143 9.143 0 0 1-9.143-9.143V9.143A9.143 9.143 0 0 1 393.143 0h109.714A9.143 9.143 0 0 1 512 9.143m-91.429 36.571h-18.285v64h18.285zm2.286-18.285c0-6.312-5.117-11.429-11.428-11.429S400 21.117 400 27.429c0 6.311 5.117 11.428 11.429 11.428 6.311 0 11.428-5.117 11.428-11.428m70.857 48.365c0-20.114-6.674-31.908-26.148-31.908a24.78 24.78 0 0 0-20.572 10.971v-9.143h-17.28v64H448V79.817a15.91 15.91 0 0 1 15.177-17.646c10.606 0 12.252 10.423 12.252 17.646v29.897h18.285z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};
