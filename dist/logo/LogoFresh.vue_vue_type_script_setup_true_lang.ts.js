import { defineComponent as h, computed as c, openBlock as p, createElementBlock as a, normalizeStyle as o, createStaticVNode as d } from "vue";
const r = /* @__PURE__ */ h({
  __name: "LogoFresh",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, i = c(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, e) => (p(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "216",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 216",
      style: o(i.value)
    }, e[0] || (e[0] = [
      d('<g><path fill="#FFDB1E" d="M240.382 20.866c37.348 91.165 0 140.18-31.596 167.204 7.722 27.025-23.055 32.6-34.745 19.303-34.414 11.868-104.33 11.482-154.426-38.606-27.025-27.025-5.946-87.143 65.63-127.401 61.771-34.746 123.541-54.05 155.137-20.5"></path><path fill="#FFF" d="M85.246 41.366C138.12 6.643 201.258-7.896 227.07 14.573c39.626 34.514-83.915 112.592-130.242 131.03-50.189 19.975-23.164 65.63-50.189 65.63-23.164 0-19.303-30.884-40.02-59.84-12.237-17.102 18.092-70.278 78.627-110.027"></path><path fill="#FFDB1E" d="M83.127 38.138a274 274 0 0 0-28.82 21.778L49.96 63.76C12.186 97.903-8.717 136.595 3.48 153.64a89 89 0 0 1 3.269 4.91c2.72 4.391 5.06 8.973 7.3 14.148l1.632 3.922 5.787 15.304c6.325 16.389 12.436 23.17 25.171 23.17 11.621 0 15.662-5.511 18.525-19.715l1.328-6.948.816-3.97.495-2.13.495-1.863.527-1.717.593-1.696.69-1.798c4.35-10.947 12.182-19.185 25.927-25.145l2.22-.922c26.71-10.63 69.159-36.016 98.382-60.094l4.047-3.394a265 265 0 0 0 5.725-5.029l3.58-3.307c27.879-26.315 37.264-49.055 20.686-64.735l-1.07-.97C202.918-11.57 139.28 1.264 83.127 38.138m141.409-20.653c13.024 11.344 5.365 30.384-19.596 54.03l-3.51 3.252q-.906.82-1.836 1.647l-3.829 3.335a294 294 0 0 1-4.038 3.388c-27.593 22.735-67.408 46.768-93.487 57.717l-2.84 1.162c-17.117 6.813-27.11 16.905-32.467 30.39l-1.123 2.978-.62 1.874-.56 1.94q-.135.503-.268 1.036l-.536 2.286-.87 4.213-1.352 7.087-.59 2.772c-1.978 8.588-4.217 10.781-10.375 10.781-8.238 0-12.31-4.12-17.283-16.49l-5.823-15.384-1-2.535c-2.804-6.885-5.705-12.805-9.22-18.48a96 96 0 0 0-3.553-5.336c-6.679-9.333 1.805-30.372 20.365-53.338l3.097-3.74C47.02 75.805 65.655 58.848 87.365 44.593c53.57-35.18 113.918-47.349 137.17-27.108"></path><path fill="#FFE600" d="M197.475 20.302c35.865 9.651-2.819 43.973-33.225 65.909-28.816 20.786-51.007 32.506-61.176 37.294-2.826 1.335-12.485-17.389-12.485-7.722 0 3.22-5.405 17.28-7.212 17.96-10.54 3.953-32.607 9.96-45.054 9.96-26.955 0-14.848-36.706 23.272-70.433 6.888-6.092 11.412-4.98 17.628-4.98-4.146-5.969-4.123-7.08 3.112-11.937 32.174-21.628 72.402-36.067 89.482-38.769 2.826.108 6.331 2.702 6.331 4.857 3.166-1.081 16.176-2.996 19.327-2.147z"></path><path fill="#FFF" d="M87.539 79.895c7.605-5.768 12.694-7.799 16.207-19.504 4.37.934 6.494-.618 9.96-5.413 2.502 3.598 12.795 4.695 18.94 5.413-5.52 3.482-8.16 6.578-11.21 16.26-11.305-4.717-24.454-2.331-33.897 3.244"></path></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};