import { defineComponent as f, computed as e, openBlock as r, createElementBlock as c, normalizeStyle as l, createStaticVNode as a } from "vue";
const n = /* @__PURE__ */ f({
  __name: "LogoCodium",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, p = e(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (i, t) => (r(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "94",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 512 94",
      style: l(p.value)
    }, t[0] || (t[0] = [
      a('<defs><radialGradient id="codium-gui-asset-a" cx="0" cy="0" r="1" gradientTransform="matrix(-34.5449 -.48237 .70359 -50.38747 43.782 62.943)" gradientUnits="userSpaceOnUse"><stop stop-color="#6447FF"></stop><stop offset=".067" stop-color="#6348FE"></stop><stop offset=".133" stop-color="#614DFC"></stop><stop offset=".2" stop-color="#5C54F8"></stop><stop offset=".267" stop-color="#565EF3"></stop><stop offset=".333" stop-color="#4E6CEC"></stop><stop offset=".4" stop-color="#447BE4"></stop><stop offset=".467" stop-color="#3A8DDB"></stop><stop offset=".533" stop-color="#2F9FD1"></stop><stop offset=".6" stop-color="#25B1C8"></stop><stop offset=".667" stop-color="#1BC0C0"></stop><stop offset=".733" stop-color="#13CEB9"></stop><stop offset=".8" stop-color="#0DD8B4"></stop><stop offset=".867" stop-color="#08DFB0"></stop><stop offset=".933" stop-color="#06E4AE"></stop><stop offset="1" stop-color="#05E5AD"></stop></radialGradient><radialGradient id="codium-gui-asset-b" cx="0" cy="0" r="1" gradientTransform="matrix(-18.4743 -5.27824 5.42636 -18.99274 66.419 40.027)" gradientUnits="userSpaceOnUse"><stop stop-color="#6447FF"></stop><stop offset=".067" stop-color="#6348FE"></stop><stop offset=".133" stop-color="#614DFC"></stop><stop offset=".2" stop-color="#5C54F8"></stop><stop offset=".267" stop-color="#565EF3"></stop><stop offset=".333" stop-color="#4E6CEC"></stop><stop offset=".4" stop-color="#447BE4"></stop><stop offset=".467" stop-color="#3A8DDB"></stop><stop offset=".533" stop-color="#2F9FD1"></stop><stop offset=".6" stop-color="#25B1C8"></stop><stop offset=".667" stop-color="#1BC0C0"></stop><stop offset=".733" stop-color="#13CEB9"></stop><stop offset=".8" stop-color="#0DD8B4"></stop><stop offset=".867" stop-color="#08DFB0"></stop><stop offset=".933" stop-color="#06E4AE"></stop><stop offset="1" stop-color="#05E5AD"></stop></radialGradient><radialGradient id="codium-gui-asset-c" cx="0" cy="0" r="1" gradientTransform="matrix(-18.4743 -5.27824 5.42636 -18.99274 66.419 90.38)" gradientUnits="userSpaceOnUse"><stop stop-color="#6447FF"></stop><stop offset=".067" stop-color="#6348FE"></stop><stop offset=".133" stop-color="#614DFC"></stop><stop offset=".2" stop-color="#5C54F8"></stop><stop offset=".267" stop-color="#565EF3"></stop><stop offset=".333" stop-color="#4E6CEC"></stop><stop offset=".4" stop-color="#447BE4"></stop><stop offset=".467" stop-color="#3A8DDB"></stop><stop offset=".533" stop-color="#2F9FD1"></stop><stop offset=".6" stop-color="#25B1C8"></stop><stop offset=".667" stop-color="#1BC0C0"></stop><stop offset=".733" stop-color="#13CEB9"></stop><stop offset=".8" stop-color="#0DD8B4"></stop><stop offset=".867" stop-color="#08DFB0"></stop><stop offset=".933" stop-color="#06E4AE"></stop><stop offset="1" stop-color="#05E5AD"></stop></radialGradient><radialGradient id="codium-gui-asset-d" cx="0" cy="0" r="1" gradientTransform="matrix(-16.90149 -7.36722 10.92332 -25.05968 83.134 89.59)" gradientUnits="userSpaceOnUse"><stop stop-color="#6447FF"></stop><stop offset=".067" stop-color="#6348FE"></stop><stop offset=".133" stop-color="#614DFC"></stop><stop offset=".2" stop-color="#5C54F8"></stop><stop offset=".267" stop-color="#565EF3"></stop><stop offset=".333" stop-color="#4E6CEC"></stop><stop offset=".4" stop-color="#447BE4"></stop><stop offset=".467" stop-color="#3A8DDB"></stop><stop offset=".533" stop-color="#2F9FD1"></stop><stop offset=".6" stop-color="#25B1C8"></stop><stop offset=".667" stop-color="#1BC0C0"></stop><stop offset=".733" stop-color="#13CEB9"></stop><stop offset=".8" stop-color="#0DD8B4"></stop><stop offset=".867" stop-color="#08DFB0"></stop><stop offset=".933" stop-color="#06E4AE"></stop><stop offset="1" stop-color="#05E5AD"></stop></radialGradient><radialGradient id="codium-gui-asset-e" cx="0" cy="0" r="1" gradientTransform="matrix(-16.90149 -7.36722 10.92332 -25.05968 83.134 43.106)" gradientUnits="userSpaceOnUse"><stop stop-color="#6447FF"></stop><stop offset=".067" stop-color="#6348FE"></stop><stop offset=".133" stop-color="#614DFC"></stop><stop offset=".2" stop-color="#5C54F8"></stop><stop offset=".267" stop-color="#565EF3"></stop><stop offset=".333" stop-color="#4E6CEC"></stop><stop offset=".4" stop-color="#447BE4"></stop><stop offset=".467" stop-color="#3A8DDB"></stop><stop offset=".533" stop-color="#2F9FD1"></stop><stop offset=".6" stop-color="#25B1C8"></stop><stop offset=".667" stop-color="#1BC0C0"></stop><stop offset=".733" stop-color="#13CEB9"></stop><stop offset=".8" stop-color="#0DD8B4"></stop><stop offset=".867" stop-color="#08DFB0"></stop><stop offset=".933" stop-color="#06E4AE"></stop><stop offset="1" stop-color="#05E5AD"></stop></radialGradient><radialGradient id="codium-gui-asset-f" cx="0" cy="0" r="1" gradientTransform="matrix(10.9966 0 0 54.245 84.453 62.46)" gradientUnits="userSpaceOnUse"><stop stop-color="#05E5AD"></stop><stop offset=".32" stop-color="#05E5AD" stop-opacity="0"></stop><stop offset=".903" stop-color="#6447FF"></stop></radialGradient></defs><path fill="#7962FE" d="M139.049 31.254c5.189 0 10.617 1.207 14.962 3.739v16.529c-4.103-2.895-8.327-4.342-12.911-4.342-9.17 0-16.168 6.394-16.168 15.443 0 8.929 6.877 15.443 16.168 15.443 4.705 0 9.292-1.93 13.032-4.584v16.65c-4.826 2.653-10.136 3.861-15.325 3.861-18.338 0-31.611-12.669-31.611-31.37 0-17.978 13.152-31.369 31.853-31.369m50.181 0c18.462 0 32.337 13.633 32.337 31.369s-13.875 31.37-32.337 31.37c-18.459 0-32.335-13.634-32.335-31.37s13.876-31.369 32.335-31.369m0 46.694c8.205 0 14.961-6.759 14.961-15.325s-6.756-15.322-14.961-15.322c-8.203 0-14.962 6.757-14.962 15.322 0 8.566 6.759 15.325 14.962 15.325M290.272 7.969v84.456h-17.497v-7.963c-4.1 6.033-11.461 9.41-19.303 9.41-16.048 0-28.232-13.513-28.232-31.249 0-17.615 12.184-31.248 28.232-31.248 7.842 0 15.203 3.016 19.303 9.168V7.969Zm-32.217 70.097c8.569 0 15.325-6.877 15.325-15.443s-6.756-15.443-15.325-15.443c-8.565 0-15.321 6.878-15.321 15.443 0 8.566 6.756 15.443 15.321 15.443m40.384 14.359V32.821h17.615v59.604Zm64.6-59.604h17.615v59.604h-17.615v-7.6c-3.501 5.67-9.534 9.168-17.376 9.168-13.513 0-21.836-9.41-21.836-24.372v-36.8h17.615v32.577c0 7.842 3.86 12.429 10.496 12.429 6.756 0 11.101-5.068 11.101-13.515Zm43.4 59.604h-17.615V32.821h17.615v7.482c3.137-5.431 8.928-9.049 16.771-9.049 8.084 0 14.238 3.86 17.497 10.375 3.739-6.273 10.495-10.375 19.182-10.375 13.633 0 21.355 9.289 21.355 23.769v37.402h-17.615v-33.3c0-7.361-3.377-11.824-9.531-11.824-6.033 0-10.136 4.947-10.257 12.911v32.213h-17.615v-33.06c0-7.601-3.376-12.064-9.409-12.064-6.275 0-10.378 5.066-10.378 13.271ZM502.09 8.802v19.072h-5.522v-2.546c-1.312 1.931-3.667 3.011-6.178 3.011-5.135 0-9.033-4.325-9.033-10.001 0-5.635 3.898-9.998 9.033-9.998 2.511 0 4.866.965 6.178 2.933V8.802Zm-10.232 14.48c2.742 0 4.904-2.201 4.904-4.944 0-2.739-2.162-4.941-4.904-4.941s-4.904 2.202-4.904 4.941c0 2.743 2.162 4.944 4.904 4.944m14.042 4.592V8.802h5.638v19.072Zm2.82-21.311c-1.815 0-3.283-1.506-3.283-3.28 0-1.777 1.468-3.283 3.283-3.283S512 1.506 512 3.283c0 1.774-1.465 3.28-3.28 3.28M307.247 7.842c5.67 0 10.254 4.708 10.254 10.257s-4.584 10.254-10.254 10.254-10.257-4.705-10.257-10.254 4.587-10.257 10.257-10.257"></path><path fill="url(#codium-gui-asset-a)" d="M31.187 31.67c4.479 0 8.726.947 12.574 2.649-8.526 4.836-14.475 15.792-14.475 28.538 0 12.744 5.955 23.702 14.475 28.538a31 31 0 0 1-12.574 2.649C13.964 94.044 0 80.08 0 62.857S13.964 31.67 31.187 31.67"></path><path fill="url(#codium-gui-asset-b)" d="M55.781 43.691a31.3 31.3 0 0 0-12.023-9.372c2.995-1.702 6.302-2.649 9.781-2.649 3.282 0 6.42.847 9.272 2.366-2.788 2.076-5.207 5.431-7.035 9.655z"></path><path fill="url(#codium-gui-asset-c)" d="M55.776 82.023c1.828 4.224 4.247 7.571 7.035 9.655-2.858 1.524-5.99 2.366-9.272 2.366-3.485 0-6.791-.947-9.781-2.649a31.36 31.36 0 0 0 12.023-9.372z"></path><path fill="#7962FE" d="M29.283 62.857c0-12.746 5.955-23.702 14.475-28.538a31.36 31.36 0 0 1 12.023 9.372c-2.296 5.291-3.662 11.939-3.662 19.166 0 7.224 1.371 13.875 3.662 19.164a31.3 31.3 0 0 1-12.023 9.374c-8.525-4.836-14.475-15.794-14.475-28.538"></path><path fill="url(#codium-gui-asset-d)" d="M74.673 78.152c.882 4.702 2.159 8.646 3.699 11.429-2.605 2.831-5.659 4.46-8.931 4.46-2.347 0-4.584-.842-6.627-2.366 5.033-2.678 9.205-7.474 11.859-13.515z"></path><path fill="url(#codium-gui-asset-e)" d="M62.814 34.036c2.043-1.524 4.28-2.366 6.627-2.366 3.267 0 6.321 1.63 8.931 4.461-1.535 2.782-2.812 6.724-3.699 11.426-2.654-6.044-6.826-10.838-11.859-13.515z"></path><path fill="#7962FE" d="M55.781 82.018a31.06 31.06 0 0 0 6.589-19.164 31.06 31.06 0 0 0-6.589-19.163c1.831-4.221 4.248-7.574 7.038-9.657 5.031 2.677 9.203 7.474 11.857 13.515-.853 4.519-1.336 9.74-1.336 15.3s.489 10.778 1.336 15.298c-2.654 6.043-6.826 10.84-11.857 13.517-2.79-2.078-5.207-5.43-7.038-9.657z"></path><path fill="#321BB2" d="M55.778 82.023c-2.293-5.291-3.659-11.939-3.659-19.166 0-7.224 1.371-13.873 3.659-19.164a31.05 31.05 0 0 1 6.592 19.164 31.05 31.05 0 0 1-6.592 19.166"></path><path fill="#05E6AD" d="M78.372 36.131c1.565-2.831 3.396-4.461 5.361-4.461 5.743 0 10.397 13.965 10.397 31.187s-4.654 31.187-10.397 31.187c-1.96 0-3.796-1.632-5.361-4.461 5.031-5.46 8.397-15.38 8.397-26.726s-3.366-21.271-8.397-26.726"></path><path fill="url(#codium-gui-asset-f)" d="M78.372 36.131c1.565-2.831 3.396-4.461 5.361-4.461 5.743 0 10.397 13.965 10.397 31.187s-4.654 31.187-10.397 31.187c-1.96 0-3.796-1.632-5.361-4.461 5.031-5.46 8.397-15.38 8.397-26.726s-3.366-21.271-8.397-26.726"></path><path fill="#7962FE" d="M77.797 62.86c0-5.563-1.135-10.781-3.124-15.3.882-4.703 2.159-8.644 3.702-11.427 5.03 5.455 8.396 15.387 8.396 26.727 0 11.337-3.366 21.271-8.396 26.726-1.538-2.785-2.812-6.727-3.702-11.429 1.984-4.519 3.124-9.737 3.124-15.297"></path><path fill="#321BB2" d="M74.673 78.155c-.852-4.52-1.336-9.738-1.336-15.298 0-5.562.489-10.781 1.336-15.3 1.984 4.519 3.124 9.738 3.124 15.3 0 5.56-1.135 10.778-3.124 15.298"></path>', 14)
    ]), 4));
  }
});
export {
  n as _
};
