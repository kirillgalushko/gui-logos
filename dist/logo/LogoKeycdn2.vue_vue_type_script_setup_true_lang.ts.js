import { defineComponent as a, computed as o, openBlock as h, createElementBlock as n, normalizeStyle as m, createElementVNode as t } from "vue";
const s = /* @__PURE__ */ a({
  __name: "LogoKeycdn2",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const e = c, i = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, l) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "247",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 247",
      style: m(i.value)
    }, l[0] || (l[0] = [
      t("g", null, [
        t("path", {
          fill: "#2E3234",
          d: "M24.575 198.657c2.413.1 4.852.433 7.122 1.269v-.025l.347.124 29.962-29.226 1.101 1.467c1.554 2.103 3.206 4.028 4.95 5.952l.638.737c.458.458.823.916 1.281 1.373l.743.73.724.737.643.637.73.737.644.637.823.736.742.644a79.63 79.63 0 0 0 49.658 18.966 80.34 80.34 0 0 0 42.79-11.089l2.29 2.383c2.66 2.84 5.408 5.68 8.068 8.52a94.27 94.27 0 0 1-53.513 14.938 94.2 94.2 0 0 1-58.278-21.992l.093-.186-19.226 18.954a23.966 23.966 0 1 1-22.938-17.03h.619zM207.793 75.041a94.25 94.25 0 0 1 13.65 51.502 93.88 93.88 0 0 1-23.544 59.924l.093.093 11.819 12.555c4.764-.644 9.529 1.002 12.827 4.486 5.62 5.955 5.374 15.332-.55 20.983-5.955 5.617-15.326 5.37-20.978-.55a14.78 14.78 0 0 1-3.762-13.007 4579 4579 0 0 0-20.791-22.085l-1.2-1.28 1.373-1.102a74.3 74.3 0 0 0 9.9-9.437 79.32 79.32 0 0 0 20.068-50.945 79.45 79.45 0 0 0-9.9-40.686zM40.825 19.034c4.207-.062 8.168 1.603 11.1 4.604a14.79 14.79 0 0 1 3.757 13.013L78.41 60.475l-1.38 1.101c-3.57 2.84-6.868 5.953-9.894 9.437-22.49 25.318-26.6 62.055-10.26 91.717l-10.91 10.63a93.5 93.5 0 0 1-13.736-51.767c.47-22.06 9.065-43.371 23.501-59.967L43.22 48.569a14.89 14.89 0 0 1-12.827-4.499c-5.619-5.956-5.37-15.333.557-20.983a15.04 15.04 0 0 1 8.459-3.96c.47-.05.946-.062 1.423-.1zM232.038 0a23.966 23.966 0 1 1-7.475 46.737v.031l-.372-.13-32.53 30.878-1.101-1.466a76 76 0 0 0-5.68-6.683l-.372-.464-1.002-1.01-1.832-1.83-.643-.551-.638-.545-.823-.736-.643-.551-.83-.73a79.6 79.6 0 0 0-49.292-18.694c-15.124-.371-29.876 3.391-42.697 11.089l-10.452-10.91a94.26 94.26 0 0 1 53.514-14.937 93.77 93.77 0 0 1 58.277 22.085h.186l21.534-20.452A23.966 23.966 0 0 1 232.05 0z"
        }),
        t("path", {
          fill: "#047AED",
          d: "M127.58 53.5c2.71.013 5.414.224 8.1.533 38.668 4.857 66.062 40.135 61.297 78.803-4.858 38.675-40.135 66.069-78.803 61.304-38.669-4.858-66.069-40.141-61.304-78.803 4.616-35.872 34.75-61.712 70.71-61.837m.426 30.247-1.485.037c-15.655 1.257-26.98 13.094-27.381 28.83.247 10.928 4.962 18.644 13.898 24.684l2.153 1.17-5.445 25.611h36.515l-5.44-25.618c10.025-5.16 15.761-14.634 16.046-25.847-.21-16.237-12.772-28.464-28.86-28.867"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};
