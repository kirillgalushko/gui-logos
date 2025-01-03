import { defineComponent as h, computed as n, openBlock as c, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoConcretecms2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, i) => (c(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(m.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#181819",
          d: "M20.898 0h214.204C246.596 0 256 9.404 256 20.898v214.204c0 11.494-9.404 20.898-20.898 20.898H20.898C9.404 256 0 246.596 0 235.102V20.898C0 9.404 9.404 0 20.898 0"
        }),
        t("path", {
          fill: "#FFF",
          d: "M154.122 213.206c-7.314 3.919-16.718 6.27-22.204 6.792-21.942 1.829-43.885-3.918-59.036-18.547-14.89-15.673-18.025-36.571-4.441-53.812 12.539-15.935 32.914-22.988 54.073-23.771 11.755-.523 51.462 4.18 39.706 23.249-9.404 15.673-35.265 0-50.155 4.963-16.718 5.486-21.42 27.69-5.747 37.094 11.494 6.792 27.951 6.27 38.923-.784 15.673-10.188 44.93-57.992 63.739-35.265 3.657 4.702-40.49 52.245-54.858 60.081M43.886 89.386c-1.568-7.837.522-16.718 8.359-15.673 6.792 1.044 9.143 10.71 10.449 17.502 1.045 5.747 15.15 46.498 7.837 45.191-7.053-1.567-25.078-38.922-26.645-47.02m37.616-45.714c10.449-8.882 15.412 6.27 16.718 13.845 1.045 7.314 14.368 62.694.262 61.649-10.71-.784-18.025-47.804-18.809-55.119-1.044-5.747-3.395-15.934 1.829-20.375m53.812-15.674c8.882 1.829 6.53 20.115 6.27 26.906 0 7.315.783 61.91-10.71 60.343-11.756-1.828-8.882-55.902-9.405-64.522.262-8.882 1.568-25.078 13.845-22.727m27.168 39.184c1.045-5.486 2.09-15.673 8.359-18.025 12.277-4.963 12.016 10.45 10.71 17.764-1.567 7.053-10.971 62.171-23.51 56.947-9.404-3.919 2.873-49.633 4.44-56.686"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
