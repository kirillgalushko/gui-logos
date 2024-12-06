import { defineComponent as i, computed as l, openBlock as m, createElementBlock as p, normalizeStyle as o, createStaticVNode as d } from "vue";
const r = /* @__PURE__ */ i({
  __name: "LogoWebgpu",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, e = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (v, a) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "209",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 209",
      style: o(e.value)
    }, a[0] || (a[0] = [
      d('<g><path fill="#0086E8" d="M238.574 37.527a.18.18 0 0 1 .156.27L217 75.326a.18.18 0 0 1-.311 0l-21.667-37.528a.18.18 0 0 1 .156-.27z"></path><path fill="#0093FF" d="m217.001.09 21.729 37.528a.18.18 0 0 1-.156.27h-43.395a.18.18 0 0 1-.156-.27L216.69.09a.18.18 0 0 1 .311 0"></path><path fill="#0076CC" d="M216.85 75.054a.18.18 0 0 1 .155.27l-43.334 75.056a.18.18 0 0 1-.312 0l-43.333-75.056a.18.18 0 0 1 .156-.27z"></path><path fill="#0066B0" d="m173.671.09 43.334 75.055a.18.18 0 0 1-.156.27h-86.667a.18.18 0 0 1-.156-.27L173.359.09a.18.18 0 0 1 .312 0"></path><path fill="#005A9C" d="M173.512 0a.18.18 0 0 1 .156.27L87.004 150.38a.18.18 0 0 1-.312 0L.024.27A.18.18 0 0 1 .18 0z"></path><path fill="#000" d="m51.976 165.937-9.251 35.617-9.675-35.617h-6.17l-10.158 35.738-9.192-35.738H1.665l11.791 42.208 6.108-.06 10.159-33.924 9.796 33.924h6.168l12.215-42.148zm42.208 24.31a16.7 16.7 0 0 0-1.965-8.134 14.25 14.25 0 0 0-5.594-5.653 16.64 16.64 0 0 0-8.345-2.056 17.2 17.2 0 0 0-8.556 2.088 14.43 14.43 0 0 0-5.775 5.956q-2.056 3.87-2.056 9.01t2.116 9.04a15 15 0 0 0 5.836 6.017 16.74 16.74 0 0 0 8.435 2.117q5.925 0 9.917-2.993a14.25 14.25 0 0 0 5.322-7.77h-5.926a8.8 8.8 0 0 1-3.356 4.444q-2.39 1.664-5.957 1.662a10.67 10.67 0 0 1-7.408-2.75q-3.053-2.752-3.356-7.65h26.487a33 33 0 0 0 .18-3.326zm-5.684-1.15H67.577q.422-4.714 3.356-7.377a10.2 10.2 0 0 1 7.106-2.66c1.831-.024 3.643.38 5.291 1.179a9.05 9.05 0 0 1 3.78 3.446 10.15 10.15 0 0 1 1.39 5.413m18.443-7.981v-17.779h-5.503v44.748h5.503v-6.107a12.74 12.74 0 0 0 4.868 4.776 14.74 14.74 0 0 0 7.528 1.875 15.08 15.08 0 0 0 13.667-8.284 19 19 0 0 0 2.055-8.95q0-5.08-2.055-8.92a15 15 0 0 0-5.625-5.956 15.47 15.47 0 0 0-8.043-2.116 14.7 14.7 0 0 0-7.437 1.875 13 13 0 0 0-4.959 4.837m22.495 10.28a13.8 13.8 0 0 1-1.512 6.621 10.63 10.63 0 0 1-4.082 4.294 11.1 11.1 0 0 1-5.654 1.48 11 11 0 0 1-5.593-1.48 10.83 10.83 0 0 1-4.112-4.294 14.6 14.6 0 0 1 0-13.062 10.84 10.84 0 0 1 4.112-4.293 11 11 0 0 1 5.593-1.481 11.3 11.3 0 0 1 5.654 1.45 10.5 10.5 0 0 1 4.082 4.234 13.5 13.5 0 0 1 1.512 6.53m51.4-13.244a19.03 19.03 0 0 0-7.53-9.373q-5.17-3.326-11.881-3.326a21.3 21.3 0 0 0-10.704 2.751 20.15 20.15 0 0 0-7.65 7.68 23.24 23.24 0 0 0 0 22.162 20.2 20.2 0 0 0 7.65 7.65 21.26 21.26 0 0 0 10.704 2.751 20.5 20.5 0 0 0 10.098-2.51 20.2 20.2 0 0 0 7.317-6.833 20.9 20.9 0 0 0 3.265-9.524v-4.232H159.43v4.475h16.81q-.666 6.291-4.655 9.977t-10.159 3.69a15.7 15.7 0 0 1-7.952-2.026 14.35 14.35 0 0 1-5.563-5.776q-2.026-3.748-2.026-8.707t2.026-8.738a14.3 14.3 0 0 1 5.563-5.805 15.7 15.7 0 0 1 7.952-2.026c2.718-.06 5.399.642 7.74 2.026a13.1 13.1 0 0 1 5.079 5.714zm36.705.12q0-5.441-3.72-8.889-3.717-3.446-10.853-3.446h-13.607v42.148h5.502v-17.597h8.104q7.376 0 10.975-3.477t3.6-8.738zm-14.573 7.68h-8.103v-15.479h8.103q8.947 0 8.949 7.801 0 3.69-2.177 5.684t-6.772 1.996zm21.285-20.015v26.607q0 5.261 2.087 8.86a13.1 13.1 0 0 0 5.684 5.35 19.46 19.46 0 0 0 16.146 0 13.3 13.3 0 0 0 5.715-5.35q2.113-3.598 2.113-8.86v-26.607h-5.501v26.668q0 5.623-2.752 8.344-2.752 2.722-7.59 2.722-4.896 0-7.649-2.722-2.75-2.72-2.75-8.344v-26.668z"></path></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};