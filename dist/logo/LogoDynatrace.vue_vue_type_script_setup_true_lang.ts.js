import { defineComponent as v, computed as i, openBlock as p, createElementBlock as l, normalizeStyle as m, createStaticVNode as a } from "vue";
const s = /* @__PURE__ */ v({
  __name: "LogoDynatrace",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const c = t, e = i(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (o, h) => (p(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "91",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 91",
      style: m(e.value)
    }, h[0] || (h[0] = [
      a('<g><path fill="#1A1A1A" d="m160.08 16.827 17.9 46.578 17.9-46.578h7.377L175.22 89.838h-7.378l6.48-16.873-21.557-56.138zm303.08.064v6.352h-17.002c-5.838 0-9.43 1.668-11.676 3.85-2.63 2.501-3.53 5.966-3.53 8.596v18.606c0 2.63.9 6.03 3.53 8.597 2.18 2.182 5.838 3.85 11.676 3.85h17.002v6.351h-16.296c-9.046 0-14.5-2.694-17.836-5.966-5.026-4.903-5.191-11.846-5.196-12.992V35.85c.005-1.147.17-8.09 5.196-12.992 3.4-3.272 8.854-5.967 17.836-5.967zm-92.515 0v6.352h-11.87c-3.336 0-5.645.641-7.057 2.053-1.411 1.347-2.117 3.721-2.117 6.929v40.804h-7.057V31.712c.064-3.144.577-6.545 2.245-9.11 3.016-4.813 8.79-5.71 13.088-5.71zM147.183.018v58.19c-.064 3.144-.641 6.545-2.245 9.111-3.016 4.748-8.79 5.71-13.088 5.71h-6.609c-9.046 0-14.5-2.694-17.835-5.967-4.856-4.736-5.175-11.376-5.196-12.855l-.001-.19V35.84l.001-.19c.021-1.478.34-8.12 5.196-12.855 3.4-3.272 8.853-5.967 17.835-5.967h14.82V.017zm81.737 16.809c8.47.128 13.666 2.759 16.938 5.967 4.88 4.819 5.12 11.61 5.132 12.928V73.03h-7.057V35.69c0-2.63-.898-6.03-3.464-8.597-2.182-2.117-6.352-3.785-11.934-3.85-5.581.065-9.752 1.733-11.933 3.85-2.63 2.567-3.464 5.967-3.464 8.597v37.34h-7.058V35.722c.013-1.318.253-8.11 5.133-12.928 3.272-3.208 8.469-5.839 16.937-5.967Zm260.994 0c8.469.128 13.665 2.759 16.937 5.967 5.197 5.068 5.197 12.318 5.133 13.088v11.677h-37.853v6.608c0 2.63.898 6.03 3.465 8.597 2.18 2.117 6.351 3.785 11.933 3.85h16.296v6.415h-16.681c-8.469-.128-13.666-2.759-16.938-5.967-4.964-4.902-5.127-11.845-5.132-12.991V35.786c.005-1.147.168-8.09 5.132-12.992 3.272-3.208 8.47-5.839 16.938-5.967ZM315.854.017v16.874h14.82v6.352h-14.82V57.76c0 3.207.706 5.453 2.117 6.8 1.412 1.412 3.721 2.053 7.058 2.053h11.869v6.352H324.13c-4.298 0-10.072-.898-13.088-5.71-1.668-2.566-2.181-5.967-2.245-9.11V.018zm-37.404 16.81c9.046 0 14.5 2.695 17.836 5.967 4.941 4.819 5.184 11.61 5.196 12.928v22.423c-.064 3.143-.64 6.544-2.245 9.11-3.015 4.748-8.79 5.71-13.088 5.71h-14.307c-4.299 0-10.073-.898-13.088-5.71-1.668-2.566-2.182-5.967-2.246-9.11v-2.246c.064-3.144.642-6.544 2.246-9.11 3.015-4.748 8.79-5.71 13.088-5.71h22.52v-5.454c0-2.63-.9-6.03-3.53-8.597-2.18-2.181-5.838-3.85-11.676-3.85H262.73v-6.351Zm116.767 0c9.046 0 14.5 2.695 17.836 5.967 4.941 4.819 5.184 11.61 5.196 12.928v22.423c-.063 3.143-.64 6.544-2.245 9.11-3.015 4.748-8.79 5.71-13.088 5.71h-14.307c-4.299 0-10.073-.898-13.088-5.71-1.668-2.566-2.182-5.967-2.246-9.11v-2.246c.064-3.144.642-6.544 2.246-9.11 3.015-4.748 8.79-5.71 13.088-5.71h22.52v-5.454c0-2.63-.9-6.03-3.53-8.597-2.18-2.181-5.838-3.85-11.676-3.85h-16.425v-6.351Zm-255.22 6.416h-15.525c-5.839 0-9.432 1.668-11.677 3.85-2.63 2.566-3.529 5.966-3.529 8.596v18.542c0 2.63.898 6.03 3.529 8.597 2.181 2.181 5.838 3.85 11.677 3.85h6.415c3.337 0 5.646-.706 7.058-2.054 1.411-1.411 2.117-3.657 2.053-6.8zM294.426 47.43h-21.557c-3.336 0-5.646.706-7.057 2.053-1.411 1.348-2.117 3.593-2.117 6.801v1.54c0 3.143.641 5.389 2.053 6.8 1.411 1.412 3.721 2.054 7.057 2.054h12.447c3.336 0 5.646-.706 7.057-2.054 1.412-1.411 2.117-3.657 2.117-6.8zm116.767 0h-21.557c-3.336 0-5.646.706-7.057 2.053-1.411 1.348-2.117 3.593-2.117 6.801v1.54c0 3.143.641 5.389 2.053 6.8 1.411 1.412 3.721 2.054 7.057 2.054h12.447c3.336 0 5.646-.706 7.057-2.054 1.412-1.411 2.117-3.657 2.117-6.8zm78.401-24.187c-5.582.064-9.752 1.732-11.933 3.85-2.63 2.566-3.465 5.966-3.465 8.596v5.518h30.796v-5.518c0-2.63-.898-6.03-3.465-8.597-2.181-2.117-6.351-3.785-11.933-3.85"></path><g><path fill="#1496FF" d="M29.967 7.524c-1.155 6.095-2.566 15.141-3.336 24.316-1.347 16.168-.513 27.01-.513 27.01L3.342 80.471S1.61 68.346.712 54.68C.197 46.211.005 38.769.005 34.278c0-.257.128-.513.128-.77 0-.32.385-3.336 3.336-6.16C6.678 24.27 30.352 5.729 29.967 7.525"></path><path fill="#1284EA" d="M29.967 7.524c-1.155 6.095-2.566 15.141-3.336 24.316 0 0-25.214-3.016-26.625 3.08 0-.321.449-4.042 3.4-6.865 3.208-3.08 26.946-22.327 26.561-20.53"></path><path fill="#B4DC00" d="M.006 33.444v1.411c.256-1.09.705-1.86 1.604-3.08 1.86-2.373 4.876-3.015 6.095-3.143 6.159-.834 15.27-1.796 24.444-2.053 16.232-.513 26.946.834 26.946.834L81.87 5.792s-11.933-2.246-25.535-3.85A346 346 0 0 0 35.164.018c-.32 0-3.464-.385-6.416 2.438C25.54 5.536 9.244 20.997 2.7 27.22-.25 30.043.006 33.187.006 33.444"></path><path fill="#6F2DA8" d="M81.037 61.096c-6.16.834-15.27 1.86-24.444 2.181-16.232.513-27.01-.834-27.01-.834L6.805 84.128s12.062 2.374 25.663 3.914c8.34.962 15.72 1.476 20.21 1.732.32 0 .834-.256 1.155-.256.32 0 3.464-.578 6.416-3.4 3.208-3.08 22.583-25.215 20.787-25.022"></path><path fill="#591F91" d="M81.037 61.096c-6.16.834-15.27 1.86-24.444 2.181 0 0 1.732 25.342-4.363 26.433.32 0 4.491-.192 7.442-3.015 3.208-3.08 23.161-25.792 21.365-25.6"></path><path fill="#73BE28" d="M53.577 89.838c-.449 0-.898-.064-1.411-.064 1.155-.192 1.925-.577 3.144-1.475 2.438-1.733 3.207-4.748 3.464-5.967 1.09-6.095 2.566-15.141 3.272-24.316 1.283-16.168.513-26.946.513-26.946L85.335 9.385s1.668 12.061 2.63 25.727c.578 8.918.77 16.81.835 21.172 0 .32.257 3.464-2.695 6.287-3.208 3.08-19.504 18.606-25.984 24.83-3.08 2.822-6.223 2.437-6.544 2.437"></path></g></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};