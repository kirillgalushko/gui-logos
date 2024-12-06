import { defineComponent as m, computed as c, openBlock as l, createElementBlock as n, normalizeStyle as s, createElementVNode as h } from "vue";
const p = /* @__PURE__ */ m({
  __name: "LogoGnome",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "187",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 187",
      style: s(o.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#000",
          d: "M124.61 80.875c6.278 37.304-88.967 50.926-53.103 78.232 11.266 8.577 22.77 2.006 21.027-11.3-1.454-11.1 39.015-17.822 35.845-1.046-4.15 22-26.334 39.366-45.567 39.366-39.095 0-76.563-45.463-69.24-78.233C24.393 59.444 119.4 49.911 124.61 80.875m72.711-15.703q6.425 0 12.29 1.426 5.906 1.426 11.124 4.227l-4.467 13.206c-1.955-1.07-4.194-2.125-6.27-2.867q-5.304-1.782-10.65-1.783-9.918 0-15.307 6.57-5.347 6.519-5.347 18.69 0 12.07 5.174 18.64c3.45 4.38 8.634 6.57 14.704 6.57 6.166 0 9.986-1.554 12.023-3.192v-13.156h-13.36v-13.14h25.871v36.567c-8.21 6.895-20.247 7.123-25.943 7.13h-.747q-16.084 0-25.484-10.593-9.4-10.644-9.4-28.825 0-18.386 9.573-28.927 9.573-10.543 26.216-10.543m137.125.007c10.348 0 18.46 3.494 24.324 10.488s8.793 16.658 8.793 28.983c0 12.29-2.93 21.928-8.793 28.922-5.864 6.994-13.976 10.488-24.324 10.488-10.32 0-18.41-3.494-24.304-10.488-5.864-6.994-8.813-16.632-8.813-28.922 0-12.325 2.95-21.989 8.813-28.983 5.663-6.72 13.363-10.225 23.114-10.488.396-.01.787 0 1.19 0m65.143 1.369 14.66 47.468 14.747-47.468h17.858l8.068 76.035h-15.696l-4.84-47.546-14.833 47.774h-10.521l-14.833-49.387-4.84 49.159h-15.74l8.068-76.035zm-154.662 0 33.095 45.696V66.548h14.125v76.035h-10.474L248.58 96.887v45.696h-14.125V66.548zm266.124 0v14.82h-28.2v15.771h21.678v13.207h-21.678v17.417H512v14.82h-45.75V66.548zM334.213 79.376l-.23.002c-4.833.134-8.594 2.34-11.295 6.615-2.789 4.414-4.196 10.644-4.196 18.657 0 7.978 1.407 14.162 4.196 18.575 2.788 4.414 6.699 6.636 11.758 6.636 5.088 0 9.03-2.222 11.819-6.636 2.788-4.413 4.195-10.597 4.195-18.575 0-8.013-1.407-14.243-4.195-18.657s-6.731-6.615-11.819-6.615zM18.017 76.26C9.77 79.89-8.967 56.487 5.053 46.8c14.027-9.685 21.213 25.83 12.964 29.46M41.26 57.67c-9.812 2.005-24.668-27.828-7.154-35.055 17.51-7.225 16.972 33.053 7.154 35.055M135.465 0c38.722 0-2.422 55.15-24.202 55.15C89.481 55.15 96.744 0 135.465 0M71.17 48.317c-11.602-.709-19.266-38.605 2.525-41.433 21.798-2.828 9.073 42.14-2.525 41.433"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};