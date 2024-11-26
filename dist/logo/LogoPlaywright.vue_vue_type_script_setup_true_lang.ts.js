import { defineComponent as h, computed as i, openBlock as p, createElementBlock as s, normalizeStyle as m, createStaticVNode as a } from "vue";
const n = /* @__PURE__ */ h({
  __name: "LogoPlaywright",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, l = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (o, c) => (p(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "192",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 192",
      style: m(l.value)
    }, c[0] || (c[0] = [
      a('<g><path fill="#2D4552" d="M84.38 108.352c-9.556 2.712-15.826 7.467-19.956 12.218 3.956-3.461 9.255-6.639 16.402-8.665 7.311-2.072 13.548-2.057 18.702-1.062v-4.03c-4.397-.402-9.437-.082-15.148 1.539M63.987 74.475l-35.49 9.35s.646.914 1.844 2.133l30.092-7.93s-.427 5.495-4.13 10.41c7.005-5.299 7.684-13.963 7.684-13.963m29.709 83.41c-49.946 13.452-76.37-44.43-84.37-74.472-3.696-13.868-5.31-24.37-5.74-31.148a11.5 11.5 0 0 1 .025-1.84C1.021 50.58-.22 51.927.032 55.82c.43 6.773 2.044 17.275 5.74 31.147 7.997 30.038 34.424 87.92 84.37 74.468 10.871-2.929 19.038-8.263 25.17-15.073-5.652 5.104-12.724 9.123-21.616 11.523M103.08 39.05v3.555h19.59c-.401-1.259-.806-2.393-1.208-3.555z"></path><path fill="#2D4552" d="M127.05 68.325c8.81 2.503 13.47 8.68 15.933 14.146l9.824 2.79s-1.34-19.132-18.645-24.047c-16.189-4.6-26.151 8.995-27.363 10.754 4.71-3.355 11.586-6.102 20.251-3.643m78.197 14.234c-16.204-4.62-26.162 9.003-27.356 10.737 4.713-3.351 11.586-6.099 20.247-3.629 8.797 2.506 13.452 8.676 15.923 14.146l9.837 2.8s-1.361-19.135-18.651-24.054m-9.76 50.443-81.718-22.845s.885 4.485 4.279 10.293l68.803 19.234c5.664-3.277 8.636-6.682 8.636-6.682m-56.655 49.174C74.127 164.828 81.949 82.386 92.419 43.32c4.311-16.1 8.743-28.066 12.419-36.088-2.193-.451-4.01.704-5.804 4.354C95.13 19.5 90.14 32.387 85.312 50.427c-10.467 39.066-18.29 121.506 46.412 138.854 30.497 8.17 54.256-4.247 71.966-23.749-16.81 15.226-38.274 23.763-64.858 16.644"></path><path fill="#E2574C" d="M103.081 138.565v-16.637l-46.223 13.108s3.415-19.846 27.522-26.684c7.311-2.072 13.549-2.058 18.701-1.063V39.05h23.145c-2.52-7.787-4.958-13.782-7.006-17.948-3.387-6.895-6.859-2.324-14.741 4.269-5.552 4.638-19.583 14.533-40.698 20.222-21.114 5.694-38.185 4.184-45.307 2.95-10.097-1.742-15.378-3.96-14.884 3.721.43 6.774 2.043 17.277 5.74 31.148 7.996 30.039 34.424 87.92 84.37 74.468 13.046-3.515 22.254-10.464 28.637-19.32h-19.256zm-74.588-54.74 35.494-9.35s-1.034 13.654-14.34 17.162c-13.31 3.504-21.154-7.812-21.154-7.812"></path><path fill="#2EAD33" d="M236.664 39.84c-9.226 1.617-31.361 3.632-58.716-3.7-27.363-7.328-45.517-20.144-52.71-26.168-10.197-8.54-14.682-14.476-19.096-5.498-3.902 7.918-8.893 20.805-13.723 38.846-10.466 39.066-18.289 121.505 46.413 138.853 64.687 17.333 99.126-57.978 109.593-97.047 4.83-18.037 6.948-31.695 7.53-40.502.665-9.976-6.187-7.08-19.29-4.784M106.668 72.161s10.196-15.859 27.49-10.943c17.305 4.915 18.645 24.046 18.645 24.046zm42.215 71.163c-30.419-8.91-35.11-33.167-35.11-33.167l81.714 22.846c0-.004-16.494 19.12-46.604 10.32m28.89-49.85s10.183-15.847 27.474-10.918c17.29 4.923 18.651 24.054 18.651 24.054z"></path><path fill="#D65348" d="m86.928 126.51-30.07 8.522s3.266-18.609 25.418-25.983L65.25 45.147l-1.471.447c-21.115 5.694-38.185 4.184-45.307 2.95-10.097-1.741-15.379-3.96-14.885 3.722.43 6.774 2.044 17.276 5.74 31.147 7.997 30.039 34.425 87.92 84.37 74.468l1.471-.462zM28.493 83.825l35.494-9.351s-1.034 13.654-14.34 17.162c-13.31 3.504-21.154-7.811-21.154-7.811"></path><path fill="#1D8D22" d="m150.255 143.658-1.376-.335c-30.419-8.91-35.11-33.166-35.11-33.166l42.137 11.778 22.308-85.724-.27-.07c-27.362-7.329-45.516-20.145-52.71-26.17-10.196-8.54-14.682-14.475-19.096-5.497-3.898 7.918-8.889 20.805-13.719 38.846-10.466 39.066-18.289 121.505 46.413 138.852l1.326.3zM106.668 72.16s10.196-15.859 27.49-10.943c17.305 4.915 18.645 24.046 18.645 24.046z"></path><path fill="#C04B41" d="m88.46 126.072-8.064 2.289c1.906 10.74 5.264 21.047 10.534 30.152.918-.202 1.828-.376 2.762-.632 2.449-.66 4.72-1.479 6.906-2.371-5.89-8.74-9.785-18.804-12.137-29.438m-3.148-75.644c-4.144 15.467-7.852 37.73-6.831 60.06 1.826-.793 3.756-1.532 5.9-2.14l1.492-.334c-1.82-23.852 2.114-48.157 6.546-64.694a323 323 0 0 1 3.373-11.704 105 105 0 0 1-5.974 3.547 307 307 0 0 0-4.506 15.265"></path></g>', 1)
    ]), 4));
  }
});
export {
  n as _
};
