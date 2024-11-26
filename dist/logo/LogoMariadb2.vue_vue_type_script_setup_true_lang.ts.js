import { defineComponent as l, computed as n, openBlock as c, createElementBlock as h, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoMariadb2",
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
    return (p, i) => (c(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "170",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 170",
      style: r(m.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#002B64",
          d: "M250.383.004c-3.957.127-2.706 1.267-11.255 3.37-8.632 2.125-19.178 1.474-28.474 5.372-27.75 11.639-33.319 51.417-58.547 65.666-18.858 10.652-37.883 11.501-54.988 16.861-11.241 3.525-23.538 10.754-33.723 19.53-7.905 6.816-8.111 12.808-16.371 21.355-8.836 9.143-35.115.155-47.025 14.148 3.837 3.879 5.519 4.966 13.08 3.96-1.566 2.966-10.793 5.466-8.987 9.831 1.9 4.593 24.21 7.706 44.489-4.538 9.444-5.702 16.967-13.92 31.676-15.882 19.034-2.537 40.96 1.627 62.996 4.805-3.268 9.742-9.827 16.22-15.082 23.979-1.627 1.753 3.268 1.949 8.853.89 10.047-2.484 17.287-4.485 24.87-8.898 9.314-5.423 10.726-19.325 22.155-22.333 6.368 9.787 23.687 12.1 34.434 4.27-9.43-2.669-12.036-22.741-8.853-31.586 3.015-8.373 5.994-21.766 9.031-32.833 3.26-11.886 4.463-26.867 8.408-32.922 5.937-9.109 12.496-12.237 18.19-17.374s10.907-10.136 10.736-21.89C255.94 2 253.983-.11 250.383.005"
        }),
        t("path", {
          fill: "#C49A6C",
          "fill-rule": "nonzero",
          d: "M241.905 6.968c.949 3.232 2.432 4.716 8.845 5.309-.937 8.13-6.36 12.578-12.441 16.844-5.352 3.753-11.214 7.367-14.981 13.23-3.86 6.005-6.31 26.559-12.294 46.857-5.173 17.539-12.984 34.88-26.625 42.479-1.425-3.587.182-10.208-2.653-12.384-1.834 5.231-3.907 10.222-6.336 14.86-8.004 15.3-19.855 26.754-39.66 30.252 9.397-12.716 18.382-25.847 18.577-47.763-6.613 1.43-6.473 17.052-13.268 21.228-4.356.474-8.77.471-13.21.204-18.24-1.093-36.952-6.575-54.015-1.1-11.618 3.729-21.12 12.525-30.958 16.792-11.563 5.015-20.32 7.077-34.718 5.015-1.829-2.463 10.538-5.64 9.798-10.988-5.635-.623-8.907.742-13.806-1.483.541-.997 1.336-1.827 2.337-2.518 8.978-6.215 34.48-1.468 41.304-8.17 4.213-4.133 6.977-8.46 9.839-12.665 2.775-4.081 5.643-8.048 10.014-11.624a76 76 0 0 1 5.23-3.898c7.448-5.097 16.662-9.72 25.73-12.907 12.351-4.342 24.868-4.7 38.034-9.73 8.133-3.109 16.978-6.948 24.187-12.32a48 48 0 0 0 4.829-4.099c20.586-20.068 24.667-55.468 56.785-58.767 3.884-.398 7.063-.27 9.958-.357 3.335-.1 6.288-.487 9.498-2.297m-39.154 113.3c.383 6.134 3.945 18.306 7.089 21.264-6.158 1.497-16.765-.977-19.486-5.32 1.398-6.271 8.674-12.004 12.397-15.945"
        }),
        t("path", {
          fill: "#002B64",
          d: "M244.219 13.837c-1.238 2.597-3.608 5.944-3.608 12.554-.01 1.135-.862 1.912-.876.163.064-6.46 1.774-9.253 3.59-12.923.844-1.504 1.353-.884.894.206m-1.247-.978c-1.46 2.478-4.976 6.996-5.558 13.581-.107 1.13-1.025 1.828-.886.083.634-6.428 3.444-10.451 5.577-13.949.967-1.422 1.422-.76.867.285m-1.136-1.296c-1.664 2.345-7.076 7.772-8.208 14.286-.204 1.114-1.177 1.736-.89.009 1.17-6.354 5.836-11.348 8.255-14.65 1.084-1.34 1.48-.64.843.355m-1.014-1.446-.548.583c-2.42 2.594-8.042 8.922-9.915 14.715-.36 1.075-1.411 1.554-.884-.117 2.052-6.126 7.703-12.724 10.562-15.653 1.263-1.172 1.556-.424.785.472m-29.05 13.115c1.254-5.386 5.443-7.84 12.674-7.242 1.745 8.04-8.02 11.283-12.674 7.242"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
