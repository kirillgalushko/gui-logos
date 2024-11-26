import { defineComponent as i, computed as h, openBlock as p, createElementBlock as c, normalizeStyle as m, createStaticVNode as o } from "vue";
const n = /* @__PURE__ */ i({
  __name: "LogoNightwatch",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, l = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (s, a) => (p(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "272",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 272",
      style: m(l.value)
    }, a[0] || (a[0] = [
      o('<g><polygon fill="#452815" points="5.30310544 184.601724 54.5783446 233.876963 256 233.876963 256 241.375369 54.5764553 241.375369 24.0500649 271.897981 18.7469595 266.598654 47.7222813 237.627111 0 189.904829"></polygon><ellipse cx="145.135" cy="141.718" fill="#794422" rx="101.677" ry="87.283"></ellipse><path fill="#502D17" d="M145.132 0c13.212 0 25.713 4.266 36.839 11.87L213.175.387c3.004-1.108 6.12 1.23 5.97 4.374l-.023.297-5.068 45.195c9.587 19.144 15.213 42.464 15.213 67.626 0 65.096-37.668 117.87-84.133 117.87s-84.13-52.774-84.13-117.87c0-24.456 5.315-47.173 14.414-66.005l-5.26-46.816c-.364-3.292 2.852-5.814 5.956-4.67l31.84 11.718C119.163 4.355 131.783 0 145.131 0"></path><path fill="#FFF" d="M178.35 33.07c21.674-.003 39.238 20.012 39.238 44.7 0 24.222-16.911 43.943-38.022 44.675 14.646 9.916 24.166 25.993 24.166 44.14 0 30.12-26.236 54.54-58.6 54.54-32.363 0-58.597-24.42-58.597-54.54 0-18.137 9.509-34.207 24.139-44.124l-.802-.018c-21.069-.779-37.94-20.481-37.94-44.672 0-24.685 17.567-44.696 39.235-44.696 14.247 0 26.721 8.652 33.594 21.595 6.871-12.947 19.345-21.6 33.59-21.6m-33.59 67.802c-2.42 4.559-5.535 8.585-9.178 11.888a63 63 0 0 1 9.55-.722c2.945 0 5.84.202 8.67.593-3.585-3.277-6.652-7.258-9.042-11.759"></path><path fill="#FF7F2B" d="M141.912 93.002a8.96 8.96 0 0 1 6.736.07c6.84 2.845 11.737 6.34 16.041 11.422 1.426 1.687 1.511 4.119.338 5.987-4.483 7.145-9.916 12.516-16.844 17.842a4.74 4.74 0 0 1-5.764 0c-6.928-5.324-12.362-10.697-16.847-17.842-1.163-1.851-1.061-4.256.35-5.927 4.47-5.28 8.832-8.735 15.99-11.552"></path><path fill="#D6D6D6" d="M141.238 138.933a7.84 7.84 0 0 1-7.839 7.844 7.844 7.844 0 0 1-7.846-7.844zm23.827 0a7.843 7.843 0 0 1-7.844 7.844 7.843 7.843 0 0 1-7.844-7.844zm-35.737 15.634a7.84 7.84 0 0 1-7.846 7.844 7.84 7.84 0 0 1-7.842-7.844zm23.822 0a7.84 7.84 0 0 1-7.84 7.844 7.844 7.844 0 0 1-7.847-7.844zm23.829 0a7.843 7.843 0 0 1-7.845 7.844 7.84 7.84 0 0 1-7.842-7.844zm-59.566 15.291a7.84 7.84 0 0 1-7.843 7.844 7.837 7.837 0 0 1-7.84-7.844zm23.825 0a7.837 7.837 0 0 1-7.839 7.844 7.84 7.84 0 0 1-7.846-7.844zm23.827 0a7.84 7.84 0 0 1-7.844 7.844 7.84 7.84 0 0 1-7.844-7.844zm23.822 0a7.837 7.837 0 0 1-7.84 7.844 7.84 7.84 0 0 1-7.845-7.844zm-59.559 15.637a7.84 7.84 0 0 1-7.846 7.844 7.84 7.84 0 0 1-7.842-7.844zm23.822 0a7.84 7.84 0 0 1-7.84 7.844 7.844 7.844 0 0 1-7.847-7.844zm23.829 0a7.843 7.843 0 0 1-7.845 7.844 7.84 7.84 0 0 1-7.842-7.844zm-35.741 15.292a7.84 7.84 0 0 1-7.839 7.844 7.84 7.84 0 0 1-7.846-7.844zm23.827 0a7.84 7.84 0 0 1-7.844 7.844 7.84 7.84 0 0 1-7.844-7.844z"></path><path fill="#C2DDEB" d="M116.29 95.596c12.609 0 22.83-10.221 22.83-22.83s-10.221-22.83-22.83-22.83-22.83 10.222-22.83 22.83c0 12.609 10.222 22.83 22.83 22.83m55.856.003c12.61 0 22.833-10.222 22.833-22.833s-10.223-22.833-22.833-22.833-22.833 10.223-22.833 22.833S159.535 95.6 172.146 95.6"></path><path fill="#000" d="M116.29 87.05c7.89 0 14.285-6.395 14.285-14.284s-6.395-14.284-14.285-14.284c-7.889 0-14.284 6.395-14.284 14.284s6.395 14.285 14.284 14.285m55.856 0c7.89 0 14.285-6.395 14.285-14.284s-6.396-14.284-14.285-14.284-14.285 6.395-14.285 14.284 6.396 14.285 14.285 14.285"></path><path fill="#FFF" d="M119.888 72.764a5.286 5.286 0 1 0 0-10.572 5.286 5.286 0 0 0 0 10.572m55.855.002a5.288 5.288 0 1 0 0-10.576 5.288 5.288 0 0 0 0 10.576"></path><path fill="#FF7F2B" d="M192.521 235.774c0 6.019-3.325 10.897-7.413 10.897-4.098 0-7.42-4.878-7.42-10.897 0 6.019-3.322 10.897-7.42 10.897-4.094 0-7.419-4.878-7.419-10.897 0 6.019-3.318 10.897-7.417 10.897-4.092 0-7.415-4.878-7.415-10.897 0-8.51 9.931-15.401 22.185-15.401 12.25 0 22.183 6.892 22.183 15.4zm-50.603 0c0 6.019-3.323 10.897-7.417 10.897-4.096 0-7.42-4.878-7.42-10.897 0 6.019-3.317 10.897-7.416 10.897-4.096 0-7.412-4.878-7.412-10.897 0 6.019-3.325 10.897-7.42 10.897s-7.416-4.878-7.416-10.897c0-8.51 9.932-15.401 22.183-15.401 12.254 0 22.191 6.892 22.191 15.4z"></path></g>', 1)
    ]), 4));
  }
});
export {
  n as _
};
