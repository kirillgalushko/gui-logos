import { defineComponent as m, computed as o, openBlock as l, createElementBlock as s, normalizeStyle as n, createElementVNode as t } from "vue";
const v = /* @__PURE__ */ m({
  __name: "LogoVmware",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const c = i, h = o(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (r, e) => (l(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "82",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 82",
      style: n(h.value)
    }, e[0] || (e[0] = [
      t("g", { fill: "#717074" }, [
        t("path", { d: "M351.282 1.633c10.639 0 18.998 2.66 24.697 8.36 5.32 5.319 7.979 12.918 7.979 22.416v42.174c0 3.04-2.28 5.7-5.7 5.7-3.039 0-5.699-2.28-5.699-5.32v-7.599c-5.319 7.22-14.438 13.299-27.736 13.299-13.541.376-27.827-7.44-28.112-22.712l-.004-.465c0-16.338 13.298-25.077 32.676-25.077 9.878 0 16.717 1.14 23.556 3.04v-2.66c0-14.058-8.359-20.517-22.797-20.517-7.381 0-11.895.717-17.371 3.196l-.486.224c-.76.38-1.52.38-1.9.38-2.66 0-5.32-2.28-5.32-4.94s1.14-3.8 3.04-4.94l1.1-.433c7.065-2.75 12.68-4.126 22.077-4.126m-90.047-.38c3.04 0 5.319 1.9 6.079 4.94l18.997 56.232L305.69 6.193c.76-2.28 2.28-4.56 5.699-4.56s5.699 2.28 5.699 5.32c0 1.14-.38 2.28-.76 3.04l-23.557 64.97c-1.14 3.42-3.42 5.32-6.459 5.32h-.38c-2.66 0-5.319-1.52-6.459-5.32l-18.997-55.092-18.998 55.092c-1.14 3.42-3.04 5.32-6.459 5.32h-.38c-3.04.38-5.319-1.9-6.459-4.94l-23.176-64.97c-.38-.76-.76-1.9-.76-3.04 0-2.66 2.28-5.7 6.079-5.7 2.66 0 4.94 1.9 6.079 4.94l18.997 55.852 19.378-56.232c.76-2.66 2.66-4.94 5.699-4.94zm88.907 39.515c-14.438 0-22.416 6.46-22.416 15.958v.38c0 9.498 8.738 15.198 18.997 15.198 14.818 0 26.216-8.74 26.216-20.897v-7.6c-5.699-1.52-13.298-3.039-22.797-3.039m53.193-39.135c3.04 0 6.08 2.28 6.08 6.08V21.01c5.698-12.918 18.237-18.618 26.216-18.618 3.42 0 5.699 2.28 5.699 6.08 0 3.04-1.9 5.319-5.32 6.079-14.817 1.52-26.976 12.918-26.976 34.955v25.836c0 3.04-2.28 6.08-5.699 6.08-3.04 0-6.08-2.28-6.08-6.08V7.713h.38c0-3.04 2.28-6.08 5.7-6.08m73.71 0C499.462 1.633 512 19.871 512 40.388c0 3.04-2.28 5.32-5.32 5.32h-54.712c1.52 16.337 13.298 25.836 26.597 25.836 9.118 0 16.337-3.42 21.657-8.739.76-.76 1.9-1.14 3.04-1.14 2.659 0 4.939 2.28 4.939 4.94 0 1.14-.38 2.66-1.52 3.419-7.22 6.46-15.578 11.018-28.496 11.018-20.312 0-36.9-15.64-37.23-38.81l-.005-1.084c0-22.037 15.198-39.515 36.095-39.515m-.38 9.5c-13.298 0-23.177 11.018-24.317 25.836h48.254c-1.14-14.058-9.12-25.837-23.937-25.837M20.728 6.573c-2.28-5.7-8.739-7.98-14.438-5.7-5.7 2.28-7.979 9.12-4.94 14.439l24.317 52.812c3.8 8.36 7.98 12.918 15.578 12.918 7.98 0 11.399-4.939 15.578-12.918 0 0 21.277-46.353 21.657-46.733s.76-1.9 3.04-1.9c1.9 0 3.04 1.52 3.04 3.42v44.833c0 6.84 3.799 12.919 11.018 12.919 7.599 0 11.398-5.7 11.398-12.919V31.27c0-7.219 5.32-11.778 11.778-11.778 6.84 0 11.399 4.94 11.399 11.778v36.855c0 6.84 3.8 12.918 11.018 12.918 7.6 0 11.399-5.699 11.399-12.918V31.27c0-7.219 5.32-11.778 11.778-11.778 6.84 0 11.399 4.94 11.399 11.778v36.855c0 6.84 3.8 12.918 11.018 12.918 7.599 0 11.398-5.699 11.398-12.918V26.33c0-15.578-12.158-26.216-27.356-26.216s-24.316 10.258-24.316 10.258C141.17 3.913 134.712.114 122.934.114c-12.158 0-23.177 10.258-23.177 10.258C94.817 3.913 86.08.114 79.62.114c-10.64 0-19.377 4.939-24.697 16.716L39.346 53.306z" })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};