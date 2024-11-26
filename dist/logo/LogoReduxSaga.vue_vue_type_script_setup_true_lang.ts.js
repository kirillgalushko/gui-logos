import { defineComponent as s, computed as m, openBlock as h, createElementBlock as n, normalizeStyle as a, createElementVNode as t } from "vue";
const r = /* @__PURE__ */ s({
  __name: "LogoReduxSaga",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, c) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 -49.5 256 256",
      style: a(o.value)
    }, c[0] || (c[0] = [
      t("g", null, [
        t("path", {
          fill: "#999",
          d: "M130.005 96.227c0 5.271-3.92 9.624-9.004 10.307-6.027 14.049-18.302 27.755-35.12 37.465-14.115 8.15-29.073 12.126-42.49 12.126-17.063 0-31.636-6.43-38.826-18.883-11.677-20.224-.3-48.444 26.667-67.513.001 4.356.342 8.35 1.105 11.894-2.176 1.835-4.153 3.406-6.083 5.43-4.966 5.205-8.936 10.599-11.652 16.358-5.066 10.742-5.409 20.896-.965 28.593 5.007 8.672 15.852 13.645 29.754 13.645 12.047 0 25.276-3.808 37.252-10.722 6.974-4.026 13.175-8.861 18.43-14.372 4.967-5.206 8.862-10.766 11.578-16.525q.354-.753.675-1.5a10.36 10.36 0 0 1-2.127-6.303c0-5.745 4.657-10.403 10.403-10.403s10.403 4.658 10.403 10.403M83.578 0c23.227 0 42.478 24.543 45.95 56.62a64.7 64.7 0 0 0-11.387-5.425 78 78 0 0 0-1.76-7.298c-2.026-6.904-4.893-13.057-8.523-18.29-6.77-9.757-15.393-15.131-24.28-15.131s-17.51 5.374-24.28 15.132c-3.63 5.232-6.497 11.385-8.523 18.289-2.144 7.307-3.231 15.095-3.231 23.147s1.087 15.84 3.23 23.146c2.027 6.904 4.894 13.057 8.524 18.29q.564.812 1.145 1.584a10.5 10.5 0 0 1 1.912-.178c5.746 0 10.403 4.658 10.403 10.403s-4.657 10.403-10.403 10.403-10.403-4.658-10.403-10.403c0-1.176.198-2.306.558-3.36-9.478-12.274-15.442-30.074-15.442-49.885C37.068 30.016 57.891 0 83.578 0m40.087 145.647c12.757 0 22.94-4.188 28.399-11.578 3.174 1.678 6.702 2.698 10.426 3.216-7.231 12.315-21.86 18.838-38.825 18.838-10.491 0-21.922-2.43-33.157-7.386 4.372-2.415 8.245-4.748 11.114-6.917 7.426 2.503 14.94 3.827 22.043 3.827m17.212-58.763c-5.256-5.511-11.457-10.346-18.43-14.372-11.976-6.915-25.205-10.723-37.25-10.723-2.633 0-5.156.179-7.55.527l-.18.03c-1.088 4.582-5.204 7.993-10.12 7.993-5.745 0-10.403-4.658-10.403-10.403 0-5.746 4.658-10.404 10.403-10.404a10.36 10.36 0 0 1 7.004 2.712l.042-.009c3.447-.612 7.065-.921 10.801-.921 13.419-.001 28.373 3.975 42.49 12.126 23.226 13.41 37.805 34.44 39.198 53.47-4.218-.475-7.788-1.874-11.07-3.684-.659-3.178-1.78-6.469-3.358-9.817-2.716-5.76-6.611-11.32-11.577-16.525"
        }),
        t("path", {
          fill: "#89D96D",
          d: "M247.01 71.082c4.608 6.94-4.777 12.369-8.98 5.39-2.561-4.373-6.49-8.463-11.642-12.036-5.232-3.63-11.386-6.497-18.289-8.523-7.307-2.144-15.095-3.231-23.147-3.231s-15.84 1.087-23.147 3.231a73 73 0 0 0-3.693 1.194c-.15 5.615-4.745 10.122-10.397 10.122-5.745 0-10.403-4.658-10.403-10.403 0-5.746 4.658-10.404 10.403-10.404 1.912 0 3.702.518 5.241 1.418 9.51-3.59 20.408-5.634 31.996-5.634 28.03 0 52.043 11.934 62.057 28.876m8.746 25.145c0 5.217-3.84 9.536-8.846 10.287-10.073 16.855-34.019 28.712-61.958 28.712-21.818 0-41.201-7.23-53.444-18.424-5.922-5.953 1.206-12.87 6.73-8.038a47 47 0 0 0 5.278 4.232c5.233 3.63 11.386 6.497 18.29 8.523 7.306 2.144 15.094 3.231 23.146 3.231s15.84-1.087 23.147-3.23c6.903-2.027 13.057-4.894 18.289-8.524 4.54-3.15 8.127-6.7 10.67-10.492a10.36 10.36 0 0 1-2.11-6.277c0-5.745 4.659-10.403 10.405-10.403s10.403 4.658 10.403 10.403"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};
