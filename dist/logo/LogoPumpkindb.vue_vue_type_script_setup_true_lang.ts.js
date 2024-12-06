import { defineComponent as c, computed as h, openBlock as p, createElementBlock as r, normalizeStyle as s, createStaticVNode as a } from "vue";
const m = /* @__PURE__ */ c({
  __name: "LogoPumpkindb",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, l = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (o, e) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "326",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 326",
      style: s(l.value)
    }, e[0] || (e[0] = [
      a('<g><path fill="#D04B06" d="M235.066 205c5.644-64.504-20.36-119.47-58.08-122.77-37.722-3.3-72.875 46.315-78.518 110.819-5.644 64.503 20.36 119.468 58.081 122.768 37.72 3.3 72.874-46.315 78.517-110.818"></path><path fill="#C65C14" d="M255.159 204.998c5.643-64.503-20.361-119.469-58.082-122.769-37.72-3.3-72.874 46.315-78.517 110.818s20.36 119.468 58.081 122.769c37.72 3.3 72.874-46.315 78.518-110.818"></path><path fill="#D04B06" d="M99.558 315.817c37.721-3.3 63.725-58.266 58.082-122.769S116.843 78.93 79.122 82.23c-37.72 3.3-63.724 58.266-58.081 122.77s40.797 114.118 78.517 110.818"></path><path fill="#C65C14" d="M79.472 315.815c37.72-3.3 63.724-58.266 58.081-122.769S96.756 78.928 59.036 82.228-4.69 140.494.954 204.997s40.797 114.118 78.518 110.818"></path><path fill="#F17008" d="M254.979 213.933c5.643-64.503-20.361-119.468-58.082-122.768-37.72-3.3-72.874 46.314-78.517 110.818s20.36 119.467 58.08 122.767 72.874-46.315 78.518-110.818"></path><path fill="#8F6646" d="m97.957 121.3-2.638-24.076s1.453-12.87 27.96-14.714-12.192-59.05-12.192-59.05 8.899-31.951 23.5-20.583c14.6 11.368 15.186 77.785 15.186 77.785s9.416 24.992 10.383 33.822"></path><path fill="#F48D39" d="M234.886 213.935c5.644-64.503-20.36-119.468-58.08-122.769-37.722-3.3-72.875 46.315-78.518 110.818s20.36 119.469 58.08 122.769c37.722 3.3 72.875-46.315 78.518-110.818"></path><path fill="#F17008" d="M79.288 324.752c37.72-3.3 63.725-58.265 58.081-122.768-5.643-64.504-40.796-114.118-78.517-110.818S-4.873 149.43.771 213.934s40.796 114.118 78.517 110.818"></path><path fill="#F48D39" d="M99.38 324.754c37.72-3.3 63.724-58.266 58.08-122.769S116.665 87.867 78.944 91.167 15.22 149.433 20.862 213.936s40.797 114.118 78.517 110.818"></path><ellipse cx="123.236" cy="207.959" fill="#F17008" rx="68.56" ry="117.239"></ellipse><circle cx="127.306" cy="159.796" r="23.929" fill="#F7F3F0"></circle><circle cx="135.532" cy="169.902" r="8.227" fill="#160C06"></circle><circle cx="137.507" cy="170.236" r="2.547" fill="#F9F6F4"></circle></g>', 1)
    ]), 4));
  }
});
export {
  m as _
};