import { defineComponent as m, computed as c, openBlock as n, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const l = /* @__PURE__ */ m({
  __name: "LogoCorda",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "157",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 157",
      style: s(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#E0081C",
          d: "M477.81 145.722c-20.176 18.944-68.268 14.916-68.268-22.451 0-39.378 41.79-42.417 68.018-40.025v-.139c-.964-20.6-35.658-15.526-49.51-4.595-4.332-6.134-11.681-17.108-14.69-22.062 15.94-12.153 54.876-21.015 74.794-9.831a46.62 46.62 0 0 1 23.844 40.695v66.783h-33.261zm-130.862-.909c-35.39 27.73-71.68 1.4-76.203-34.27-5.632-44.43 30.02-79.714 75.919-64.336V0h34.988v154.107h-33.67zm-.287-37.427v-30.86c-15.162-6.814-38.571-7.077-40.7 23.905-2.183 31.732 37.967 34.957 40.7 6.952M212.357 56.252q15.366-18.543 43.7-10.687-4.267 23.183-5.863 31.323c-27.225-4.686-37.25 3.41-37.367 26.89v50.485H177.85V45.108h33.678zM90.151 53.654A56.8 56.8 0 0 0 69.57 81.89c-9.751-7.079-23.394-4.915-30.475 4.834a21.81 21.81 0 0 0 4.841 30.47 21.81 21.81 0 0 0 25.634 0 56.8 56.8 0 0 0 20.58 28.237 56.75 56.75 0 0 1-79.284-12.495A56.75 56.75 0 0 1 23.36 53.651c19.907-14.486 46.884-14.486 66.79 0m387.277 52.874c-10.441.125-33.994-3.614-33.455 13.553s33.455 14.163 33.455-5.685v-7.856m-353.824 14.846c-12.05-.03-21.793-9.822-21.764-21.87.03-12.048 9.817-21.79 21.864-21.764 12.03.028 21.767 9.786 21.768 21.816-.022 12.06-9.81 21.824-21.87 21.816"
        })
      ], -1)
    ]), 4));
  }
});
export {
  l as _
};
