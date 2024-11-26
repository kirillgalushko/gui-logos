import { defineComponent as h, computed as l, openBlock as p, createElementBlock as m, normalizeStyle as o, createStaticVNode as a } from "vue";
const n = /* @__PURE__ */ h({
  __name: "LogoEditorconfig",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, i = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, c) => (p(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "248",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 248",
      style: o(i.value)
    }, c[0] || (c[0] = [
      a('<g><path fill="#E3E3F8" d="M61.342 145.021c5.405-2.394 9.87-8.379 7.168-12.608-7.403 2.155-7.05 7.102-7.168 12.608m56.817 13.725c5.064-1.276 9.926-5.745 7.19-10.373-3.95 2.154-6.481 5.107-7.19 10.373"></path><path fill="#FDFDFD" d="M6.521 224.82c0 5.026 1.277 10.453 4.788 12.368 12.927 7.261 58.253 1.596 73.654-1.835 8.06-1.836 14.603-7.82 22.183-11.092 17.077-7.422 29.446-13.406 43.091-23.381 9.895-7.262 25.616-27.69 27.291-39.9l-13.486-3.032c-.319 13.726-3.43 16.838-15.64 20.03-8.22 2.234-24.259 2.713-32.637 1.276-11.092-1.835-16.12-7.66-21.147-14.283-9.735-12.928 2.155-21.945-13.246-22.823-16.2 19.87-44.767 5.586-57.295 3.591-5.347 7.74-17.875 58.013-17.717 69.504 7.742-2.633 12.61.24 19.552 2.953 24.578 9.496 3.112 17.875-6.703 15.401-6.703-1.596-8.778-5.985-12.688-8.778M38.68 110.15c9.974 1.915 18.832 6.064 27.29 10.293 13.806 6.863 16.28 5.905 17.556 15.481.16 1.756-.16 2.713 4.868 4.31 8.458 2.633-4.868-2.076 17.795-1.996 13.486.08 44.368 5.506 54.342 11.81 4.15 2.634 3.352 5.985 17.396 5.586-.16-16.518-4.548-41.176-11.012-56.337-7.9-18.354-18.353-21.147-39.66-28.01-12.448-3.99-48.996-8.378-60.327-1.356C56.315 76.554 54.32 84.454 44.425 98.34c-2.873 4.07-3.91 7.182-5.745 11.81"></path><path fill="#FDFDFD" d="M126.537 144.064c7.98 3.271-.399 24.418-11.49 19.31-3.592-10.134 4.947-15.88 7.261-20.428-4.788-.718-18.433-2.872-22.503-1.356-5.267 1.995-6.464 13.246-3.75 18.513 12.767 25.057 69.184 19.71 63.2.24-2.394-7.9-4.629-9.177-12.688-11.89-6.464-2.155-12.928-4.39-20.03-4.39M26.231 141.27c6.384 6.145 20.827 7.103 30.164 7.581 1.197-12.368 2.234-21.625 12.13-20.907 4.867 6.624 2.313 14.444-2.794 19.471 8.698-.08 13.725-6.623 12.449-16.12-7.342-5.266-29.605-15.8-40.777-17.315-3.112 3.351-10.773 21.705-11.172 27.29"></path><path fill="#020202" d="M11.23 220.27c5.266-.478 18.991 3.512 20.108 7.98-8.538 1.038-19.39.24-20.109-7.98m-4.709 4.55c3.91 2.792 5.985 7.181 12.688 8.777 9.815 2.474 31.28-5.905 6.703-15.401-6.942-2.713-11.81-5.586-19.552-2.953-.158-11.49 12.37-61.763 17.717-69.504 12.528 1.995 41.096 16.28 57.295-3.59 15.4.877 3.51 9.894 13.246 22.822 5.027 6.623 10.055 12.448 21.147 14.283 8.378 1.437 24.418.958 32.637-1.276 12.21-3.192 15.321-6.304 15.64-20.03l13.486 3.033c-1.675 12.209-17.396 32.637-27.29 39.899-13.646 9.975-26.015 15.96-43.092 23.38-7.58 3.272-14.124 9.257-22.183 11.093-15.401 3.43-60.727 9.096-73.654 1.835-3.511-1.915-4.788-7.342-4.788-12.369m111.638-66.074c.709-5.266 3.24-8.219 7.19-10.373 2.736 4.628-2.126 9.097-7.19 10.373m8.378-14.682c7.102 0 13.566 2.234 20.03 4.388 8.06 2.714 10.294 3.99 12.688 11.89 5.984 19.471-50.433 24.818-63.2-.24-2.714-5.266-1.517-16.517 3.75-18.512 4.07-1.516 17.715.638 22.503 1.356-2.314 4.549-10.853 10.294-7.262 20.429 11.092 5.107 19.471-16.04 11.491-19.311m-65.195.957c.118-5.506-.235-10.453 7.168-12.608 2.703 4.23-1.763 10.214-7.168 12.608m-35.11-3.75c.398-5.586 8.059-23.94 11.17-27.291 11.173 1.516 33.436 12.05 40.778 17.316 1.276 9.496-3.75 16.04-12.449 16.12 5.107-5.028 7.66-12.848 2.793-19.472-9.895-.718-10.932 8.539-12.13 20.907-9.336-.478-23.779-1.436-30.163-7.58m-7.98-6.384c-2.953-8.14-2.953-20.828 9.575-21.865l-6.384 17.795c-1.675 3.83-1.675 2.953-3.192 4.07m20.428-24.738c1.835-4.628 2.872-7.74 5.745-11.81 9.895-13.885 11.89-21.785 22.503-28.408 11.331-7.022 47.879-2.633 60.328 1.357 21.306 6.862 31.76 9.655 39.66 28.009 6.463 15.161 10.852 39.82 11.011 56.337-14.044.4-13.246-2.952-17.396-5.586-9.974-6.304-40.856-11.73-54.342-11.81-22.663-.08-9.337 4.629-17.795 1.995-5.027-1.596-4.708-2.553-4.868-4.309-1.277-9.576-3.75-8.618-17.555-15.48-8.459-4.23-17.317-8.38-27.291-10.295m141.242-3.91c-1.516-5.027 1.277-4.708 6.145-8.14 2.793-1.994 5.027-4.069 8.458-5.984 12.848-7.182 36.787-8.379 47.001.16 4.15 3.43 10.933 10.134 9.895 18.912-2.154 17.476-14.124 27.051-23.94 35.031-9.974 8.14-26.572 16.518-43.728 10.932-1.437-3.51-.32-25.774-1.995-33.994-1.517-7.341-.719-8.139 3.51-12.528 12.45-12.927 39.42-22.343 54.742-11.251 6.464 4.788 4.628 6.623 7.98 10.294 4.15-4.47-3.59-19.471-32.159-18.514-19.39.639-27.77 15.8-35.909 15.082M63.736 60.834c.4-11.092 10.613-34.074 20.828-42.053C96.932 9.205 109.86.188 128.85 10.96c4.709 2.633 4.47 3.99 4.948 10.533.399 6.304-.16 8.618-1.756 13.725-12.608 40.697-23.141 17.316-63.519 26.972 1.517-13.246 13.008-25.056 19.392-31.2 10.932-10.613 18.832-17.476 35.27-15.242 4.55 7.581 5.028 12.369-.478 21.227-7.341 11.81-9.177 11.091-8.06 19.151 5.746-1.436 7.501-7.022 10.135-12.608 16.04-33.515-7.262-37.585-21.546-31.44-9.575 4.07-26.652 22.902-32.238 34.233-1.117 2.234-2.314 5.107-3.352 7.58zm63.2 1.676c1.676-9.975 11.571-12.449 11.571-43.17 0-13.247-16.279-25.137-37.585-16.28-18.274 7.501-21.067 13.247-30.802 27.93-9.177 13.885-8.857 29.126-16.757 41.973-2.315 3.671-4.39 4.948-6.943 8.619-1.835 2.713-3.192 6.144-5.027 9.336-3.75 6.144-7.581 10.613-10.613 17.955-9.576.239-17.636.399-18.593 10.294-1.277 13.565 5.107 16.917 5.107 22.024-.08 5.506-22.423 61.045-16.2 94.162 1.756 9.096 7.741 9.176 17.317 10.293 23.062 2.793 52.986 1.836 73.654-6.463l37.505-17.955c9.496-5.346 25.455-15.48 32.557-22.902 5.028-5.187 7.66-9.576 11.97-15.72 5.905-8.618 6.065-8.459 7.341-20.189 7.82 1.436 22.424 4.868 27.291 9.097-.558 5.506-3.271 2.873-3.271 7.82 3.112.08 8.299-3.83 9.575-8.14-3.271-4.787-6.703-3.989-11.41-7.82 3.75-2.952 10.533-4.308 15.72-6.463 11.171-4.628 30.243-18.673 34.951-31.44 3.75-10.294.958-27.45-5.107-34.154-6.384-7.022-21.226-10.613-33.356-10.613-14.443 0-29.365 10.374-41.016 14.842-4.469-3.91-4.788-8.378-8.06-12.688-3.75-5.107-28.168-17.874-39.819-20.348"></path><path fill="#FDF2F2" d="M179.922 106.24c8.14.717 16.518-14.444 35.91-15.083 28.567-.957 36.307 14.045 32.158 18.514-3.352-3.671-1.516-5.506-7.98-10.294-15.321-11.092-42.293-1.676-54.741 11.251-4.23 4.389-5.028 5.187-3.511 12.528 1.675 8.22.558 30.483 1.995 33.994 17.156 5.586 33.754-2.793 43.729-10.932 9.815-7.98 21.785-17.555 23.94-35.031 1.037-8.778-5.746-15.481-9.896-18.912-10.214-8.539-34.153-7.342-47-.16-3.432 1.915-5.666 3.99-8.46 5.985-4.867 3.431-7.66 3.112-6.144 8.14"></path><path fill="#FEF3F3" d="m63.736 60.834 3.91-6.942c1.038-2.474 2.235-5.347 3.352-7.581 5.586-11.331 22.663-30.164 32.238-34.233 14.284-6.145 37.585-2.075 21.546 31.44-2.634 5.586-4.39 11.172-10.135 12.608-1.117-8.06.719-7.341 8.06-19.151 5.506-8.858 5.027-13.646.479-21.227-16.439-2.234-24.339 4.629-35.27 15.242-6.385 6.144-17.876 17.954-19.392 31.2 40.378-9.655 50.911 13.726 63.52-26.971 1.595-5.107 2.154-7.421 1.755-13.725-.479-6.544-.24-7.9-4.948-10.534C109.86.188 96.932 9.205 84.564 18.78c-10.215 7.98-20.429 30.962-20.828 42.054"></path><path fill="#EFEFEF" d="M18.251 134.887c1.517-1.117 1.517-.24 3.192-4.07l6.384-17.795C15.3 114.06 15.3 126.747 18.251 134.887"></path><path fill="#FAF1F1" d="M31.338 228.25c-1.117-4.468-14.842-8.458-20.109-7.98.718 8.22 11.57 9.018 20.11 7.98"></path></g>', 1)
    ]), 4));
  }
});
export {
  n as _
};
