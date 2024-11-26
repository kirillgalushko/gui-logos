import { defineComponent as i, computed as p, openBlock as a, createElementBlock as r, normalizeStyle as c, createStaticVNode as l } from "vue";
const h = /* @__PURE__ */ i({
  __name: "LogoEmacs",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (a(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: c(s.value)
    }, e[0] || (e[0] = [
      l('<defs><linearGradient id="emacs-gui-asset-a" x1="25.141%" x2="92.394%" y1="20.136%" y2="101.477%"><stop offset="0%" stop-color="#8381C5"></stop><stop offset="56.639%" stop-color="#7E55B3" stop-opacity=".996"></stop><stop offset="100%" stop-color="#A52ECB" stop-opacity=".992"></stop></linearGradient><linearGradient id="emacs-gui-asset-b" x1="90.716%" x2="32.749%" y1="79.092%" y2="9.825%"><stop offset="0%" stop-color="#411F5D"></stop><stop offset="100%" stop-color="#5B2A85"></stop></linearGradient></defs><g><path fill="url(#emacs-gui-asset-a)" d="M253 128c0 69.036-55.964 125-125 125S3 197.036 3 128 58.964 3 128 3s125 55.964 125 125"></path><path fill="url(#emacs-gui-asset-b)" d="M128 0C57.3 0 0 57.316 0 128s57.3 128 128 128 128-57.316 128-128S198.7 0 128 0m0 7.05c66.752 0 120.88 54.143 120.88 120.95S194.752 248.95 128 248.95 7.12 194.807 7.12 128 61.248 7.05 128 7.05"></path><path fill="#FFF" d="M85.23 217.573s10.536.745 24.091-.45c5.49-.484 26.331-2.53 41.913-5.948 0 0 18.999-4.066 29.163-7.811 10.635-3.92 16.422-7.246 19.027-11.96-.114-.965.802-4.39-4.103-6.446-12.538-5.26-27.08-4.308-55.855-4.918-31.91-1.097-42.525-6.438-48.18-10.74-5.422-4.364-2.695-16.437 20.539-27.072 11.703-5.663 57.582-16.114 57.582-16.114-15.45-7.638-44.263-21.064-50.185-23.963-5.195-2.543-13.507-6.372-15.31-11.004-2.042-4.447 4.826-8.278 8.662-9.375 12.355-3.564 29.796-5.779 45.67-6.028 7.98-.125 9.274-.638 9.274-.638 11.01-1.826 18.257-9.359 15.238-21.288-2.711-12.176-17.008-19.331-30.595-16.854-12.795 2.332-43.633 11.29-43.633 11.29 38.118-.33 44.498.306 47.348 4.29 1.683 2.353-.765 5.579-10.93 7.24-11.068 1.807-34.075 3.983-34.075 3.983-22.07 1.311-37.617 1.399-42.28 11.27-3.046 6.45 3.25 12.152 6.008 15.721 11.659 12.966 28.5 19.959 39.34 25.109 4.078 1.937 16.045 5.596 16.045 5.596-35.167-1.934-60.535 8.864-75.415 21.297-16.83 15.568-9.385 34.123 25.096 45.549 20.366 6.748 30.466 9.922 60.845 7.186 17.893-.964 20.714-.39 20.892 1.078.251 2.067-19.874 7.202-25.369 8.787-13.978 4.032-50.62 12.173-50.804 12.213"></path></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};
