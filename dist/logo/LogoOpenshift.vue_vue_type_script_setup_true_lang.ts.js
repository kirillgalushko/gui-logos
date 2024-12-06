import { defineComponent as a, computed as i, openBlock as p, createElementBlock as c, normalizeStyle as m, createStaticVNode as o } from "vue";
const s = /* @__PURE__ */ a({
  __name: "LogoOpenshift",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, h = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (p(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "237",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 237",
      style: m(h.value)
    }, e[0] || (e[0] = [
      o('<g><path fill="#DA2430" d="m74.84 106.893-40.869 14.87c.525 6.552 1.652 13.024 3.24 19.366l38.818-14.137c-1.244-6.552-1.689-13.32-1.18-20.1m180.595-45.19c-2.85-5.879-6.147-11.561-9.966-16.916l-40.857 14.87c4.755 4.864 8.743 10.33 12.007 16.176L255.445 61.7z"></path><g><path fill="#DA2430" d="M182.95 61.461c-5.14-4.46-10.946-8.31-17.408-11.324h-.003C127.6 32.449 82.33 48.905 64.642 86.859a74 74 0 0 0-2.653 6.487c-2.208 6.423-3.498 12.99-3.991 19.546l-.144.054-.011.144-24.596 8.95-15.826 5.849-.007-.088-.434.158c-1.536-19.435 1.74-39.512 10.553-58.411a118 118 0 0 1 3.687-7.246c29.054-54.116 95.164-76.736 150.918-50.33a115.3 115.3 0 0 1 30.557 21.074 116.6 116.6 0 0 1 15.78 17.94L187.618 65.86a80 80 0 0 0-.635-.641l-.113.041a79 79 0 0 0-3.919-3.798"></path><path fill="#E82429" d="m19.261 193.896-.064.024A118.4 118.4 0 0 1 .939 154.347l38.825-14.14.002.003.024.125.252-.093.006.015c1.994 10.56 6.145 20.635 12.198 29.494a75 75 0 0 0 7.722 9.326l-.154.057.294.308-40.488 14.97q-.18-.256-.359-.516"></path><path fill="#DA2430" d="M173.465 183.447c-21.051 13.017-48.053 15.532-72.113 4.312a75.1 75.1 0 0 1-22.118-15.695l-40.772 14.844.313.437-.02.008c11.21 16.016 26.502 29.404 45.266 38.298 40.47 19.163 86.387 12.501 119.634-13.284 14.888-11.152 27.317-26.016 35.713-44.02 8.819-18.895 12.076-38.964 10.515-58.384l-1.136.414q-.022-.312-.047-.624l-40.49 14.957.002.004a76.5 76.5 0 0 1-6.806 26.46c-6.315 13.753-16.164 24.708-27.94 32.273"></path><path fill="#E82429" d="m218.552 75.13.607-.222v-.001a117.7 117.7 0 0 1 11.454 42.055l-40.773 14.834.022-.304-.77.285c1.11-15.088-2.275-30.093-9.435-43.123l38.548-14.25.002-.004q.174.364.345.73"></path></g><path fill="#C22035" d="M74.89 106.654 34.31 121.65c.52 6.61 1.64 13.136 3.219 19.532l38.546-14.258c-1.247-6.622-1.695-13.438-1.169-20.274m179.321-45.567c-2.83-5.929-6.106-11.658-9.898-17.059L203.76 59.02c4.72 4.906 8.68 10.418 11.92 16.315l38.542-14.256z"></path><path fill="#AC223B" d="m34.308 121.653 40.482-14.829-.165 8.133-39.056 14.749-1.266-8.063zm169.458-62.756 41.113-14.108 4.273 6.449-39.946 14.121-5.434-6.465z"></path><path fill="#B92135" d="m38.764 187.201 40.53-14.749 12.258 11.565-42.503 15.956-10.283-12.776zm210.616-77.339-41.165 14.844-3.032 16.478 43.892-15.643.311-15.677z"></path></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};