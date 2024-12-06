import { defineComponent as l, computed as i, openBlock as o, createElementBlock as n, normalizeStyle as a, createElementVNode as e } from "vue";
const p = /* @__PURE__ */ l({
  __name: "LogoSonarcloud",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const c = h, m = i(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (r, t) => (o(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "76",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 76",
      style: a(m.value)
    }, t[0] || (t[0] = [
      e("g", null, [
        e("path", {
          fill: "#000",
          d: "M342.955 64.073c-2.087 3.647-6.689 8.438-14.437 8.438-6.848 0-15.067-3.95-15.067-19.873V26.115h7.931v25.116c0 8.627 2.53 14.437 9.73 14.437 5.338 0 9.03-3.837 10.462-7.484.447-1.223.73-2.734.73-4.224V26.115h7.931v32.988c0 4.672.08 8.806.368 12.384h-7.027l-.437-7.414zm-183.173 2.783c-2.883 3.647-7.385 5.63-12.613 5.63-8.93 0-14.263-6.758-14.263-14.064 0-11.892 10.277-17.627 25.892-17.517v-.647c0-2.435-1.278-5.893-8.041-5.893-4.503 0-9.293 1.59-12.176 3.458l-2.53-9.193c3.077-1.79 9.11-4.026 17.146-4.026 14.71 0 19.391 9.005 19.391 19.764v15.923c0 4.403.18 8.622.621 11.142H160.85v.024l-.8-4.601zM81.68 48.02c0 16.757-11.45 24.465-23.258 24.465-12.906 0-22.825-8.816-22.825-23.63s9.393-24.281 23.546-24.281c13.507.03 22.537 9.68 22.537 23.441zm225.633.373c0 16.762-11.191 24.092-21.732 24.092-11.807 0-20.917-9.005-20.917-23.332 0-15.197 9.552-24.092 21.648-24.092 12.513 0 21.001 9.467 21.001 23.332m82.868 15.192c-2.445 5.054-7.753 8.895-14.889 8.895-10.56 0-18.676-9.273-18.676-23.059-.08-15.087 8.92-24.36 19.566-24.36 6.689 0 11.186 3.27 13.164 6.952h.179V4.924h7.966V59.75c0 4.026.075 8.622.358 11.708h-7.126l-.363-7.871zm-145.733 6.192c-2.082 1.133-6.689 2.624-12.543 2.624-13.164 0-21.717-9.274-21.717-23.144 0-13.974 9.204-24.087 23.437-24.087 4.686 0 8.845 1.212 11.007 2.35l-1.794 6.381c-1.903-1.133-4.87-2.161-9.213-2.161-10.02 0-15.426 7.678-15.426 17.145 0 10.485 6.5 16.946 15.137 16.946 4.503 0 7.5-1.218 9.73-2.246zM2.48 58.994c2.52 1.59 7.752 3.459 11.808 3.459 4.134 0 5.854-1.486 5.854-3.837 0-2.355-1.352-3.464-6.505-5.248-9.105-3.19-12.623-8.349-12.539-13.79 0-8.508 7.027-15.003 17.955-15.003 5.149 0 9.73 1.217 12.434 2.623l-2.445 9.84c-1.973-1.133-5.78-2.619-9.551-2.619-3.33 0-5.228 1.407-5.228 3.757 0 2.162 1.714 3.27 7.131 5.248 8.379 2.997 11.917 7.405 11.992 14.139 0 8.512-6.506 14.814-19.123 14.814-5.775 0-10.899-1.332-14.263-3.196l2.475-10.187zm97.746 12.518H86.52V40.254h.025c0-5.7-.184-10.59-.363-14.626H98.1l.622 6.277h.258a16.02 16.02 0 0 1 13.607-7.306c9.03 0 15.798 6.197 15.798 19.69v27.168h-13.716V46.073c0-5.899-1.973-9.924-6.948-9.924-3.796 0-6.038 2.728-6.942 5.347-.368.84-.552 2.251-.552 3.578zm93.28-.025h-13.717V40.716c0-6.759-.179-11.162-.358-15.088h11.808l.447 8.438h.363c2.261-6.654 7.678-9.462 11.912-9.462 1.277 0 1.903 0 2.892.19V38.2a18.7 18.7 0 0 0-3.692-.378c-5.054 0-8.488 2.808-9.392 7.221-.19.944-.269 2.053-.269 3.19v23.253zm64.554-.03h-7.937V4.925h7.932v66.532zm14.62-22.576c0 9.924 5.487 17.438 13.27 17.438 7.568 0 13.268-7.405 13.268-17.627 0-7.678-3.697-17.433-13.09-17.433-9.392 0-13.448 8.995-13.448 17.622m116.87-4.324c0-1.024-.07-2.435-.363-3.464-1.168-5.243-5.491-9.566-11.45-9.566-8.19 0-13.085 7.484-13.085 17.518 0 9.193 4.319 16.757 12.906 16.757 5.333 0 10.198-3.648 11.629-9.84.263-1.138.363-2.246.363-3.568zM159.24 49.8c-7.206-.08-12.802 1.675-12.802 7.216 0 3.653 2.341 5.437 5.412 5.437 3.43 0 6.212-2.351 7.132-5.248.178-.756.258-1.59.258-2.435zM49.75 48.503c0 7.862 3.151 13.786 9.03 13.786 5.332 0 8.742-5.546 8.742-13.786 0-6.843-2.52-13.786-8.747-13.786-6.61 0-9.025 7.022-9.025 13.786"
        }),
        e("path", {
          fill: "#F3702A",
          d: "M506.459 33.957a24.64 24.64 0 0 0-11.743-8.195v-.298c0-14.029-10.973-25.464-24.5-25.464C456.679 0 445.7 11.41 445.7 25.47v.347c-9.91 3.245-17.145 12.896-17.145 24.281 0 14.03 10.983 25.47 24.51 25.47a24 24 0 0 0 17.22-7.33 23.94 23.94 0 0 0 17.2 7.33c13.501 0 24.514-11.41 24.514-25.47 0-5.864-1.988-11.599-5.541-16.14m-18.974 35.17c-10.093 0-18.313-8.538-18.313-19.034a3.166 3.166 0 0 0-3.096-3.21 3.15 3.15 0 0 0-3.1 3.215c0 4.756 1.276 9.219 3.458 13.03a17.93 17.93 0 0 1-13.368 6.029c-10.098 0-18.323-8.543-18.323-19.034 0-10.486 8.225-19.028 18.323-19.028 2.186 0 4.313.407 6.351 1.162.025 0 .045.025.07.025.705.249 1.7.73 2.007 1a2.98 2.98 0 0 0 4.344-.349 3.275 3.275 0 0 0-.338-4.522c-1.352-1.188-3.46-1.998-3.976-2.187a23.7 23.7 0 0 0-8.433-1.54c-.393 0-.78 0-1.173.025.417-10.138 8.458-18.244 18.323-18.244 10.093 0 18.313 8.538 18.313 19.034a19.36 19.36 0 0 1-7.703 15.515 3.295 3.295 0 0 0-.73 4.463 3.1 3.1 0 0 0 2.529 1.351 3 3 0 0 0 1.794-.596 25.66 25.66 0 0 0 9.417-13.975c7.077 2.729 11.992 9.835 11.992 17.866-.025 10.466-8.245 19.004-18.368 19.004"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};