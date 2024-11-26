import { defineComponent as n, computed as h, openBlock as c, createElementBlock as p, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoImpala",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (c(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "613",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 613",
      style: r(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#2C6791",
          d: "M193.44 15.578c3.46 4.176 6.515 8.262 9.754 12.603 42.171 56.522 54.844 124.223 42.573 193.165-.78 4.384-3.09 4.573-6.364 7.732-20.25 19.539-39.743 39.789-51.848 65.505-5.087 10.809-7.67 22.947-10.146 34.742-.74 3.528 1.775 10.155 4.543 11.362 3.108 1.355 9.634-.494 12.171-3.251 12.905-14.023 25.332-28.525 37.263-43.392 8.141-10.144 15.193-21.162 23.5-31.412 2.246 22.43 1.857 44.475-8.42 64.577-4.325 12.802-9.897 14.317-16.85 22.03-7.912 5.934-17.028 14.959-22.63 22.493-8.753 14.029-8.287 25.364 4.83 35.192.824.504 5.146 2.575 6.546 2.886-2.967 1.986-5.578 2.633-12.377 4.61-.242 10.193-8.736 16.988-11.22 21.752-1.175 4.567-1.613 5.257-1.985 10.349-3.206 43.808-9.676 91.216-25.972 132.447-5.509 13.938-12.149 22.667-25.945 28.445-1.65.692-9.38 4.702-10.374 4.914 3.396-5.394 4.04-13.36-.46-19.473-3.23-4.387-16.119-4.142-20.288-8.155.794-.182 6.325.236 7.112.262 6.572.226 12.79-.107 14.718-8.2 1.546-6.491-1.91-12.974-8.45-17.523-4.444-3.093-7.509-3.971-11.305-7.845-.918-.937-2.304-6.091-1.343-9.49a.64.64 0 0 1 1.046-.316c4.286 3.843 9.878 7.914 13.458 12.194 2.297 2.102 5.195 4.514 7.196 4.489 2.114-.026 3.331-2.596 5.803-4.341 5.691-5.065 7.71-7.532 11.293-14.454.621-3.807-.73-10.268-1.92-14.958-4.982-19.62-6.557-40.03-1.437-59.714 3.67-14.108 8.92-28.515 16.755-40.666 12.532-19.433 13.111-37.213-.019-55.823-22.442-31.81-19.86-63.956-1.676-96.556 12.958-23.233 29.63-43.454 48.09-62.451 3.82-3.932 6.313-4.333 7.368-9.716 13.515-62.3 5.201-125.481-24.557-180.882-1.318-2.39-12.44-17.833-12.608-18.706.35-.235 13.824 15.81 14.174 15.575M71.74 352.47c-.72-9.112-.81-17.71-2.168-26.102-5.42-33.498-23.178-60.454-45.848-84.682-1.8-1.925-3.462-4.106-5.597-5.571-11.324-7.771-14.777-19.198-16.244-32.1C-6.29 132.114 11.98 68.34 59.748 13.483 60.066 13.117 69.524.777 71.066.168 57.671 23.513 41.73 46.315 34.17 85.336c-7.319 37.779-7.397 75.247.506 112.762.807 3.83 3.615 7.639 6.414 10.585 19.841 20.887 38.522 42.783 49.906 69.46 5.46 12.79 9.142 26.845 10.724 40.659 2.146 18.74-9.48 30.81-29.978 33.668m-20.17 58.968c18.106-12.047 31.533-8.303 39.11 8.113 8.06 17.462 13.185 42.644 14.068 61.888-4.56-11.154-10.893-28.827-15.34-40.026-2.09-5.265-4.85-9.09-11.323-8.972-6.052.11-10.041-3.434-11.351-9.1-.602-2.605-1.323-6.505-2.903-8.268-2.633-2.938-6.985-2.996-12.261-3.635m-6.315-57.26C21.625 338.361 4.53 318.096 1.293 287.892c13.006 5.58 36.592 40.667 43.963 66.286"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
