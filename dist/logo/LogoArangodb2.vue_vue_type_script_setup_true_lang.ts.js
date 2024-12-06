import { defineComponent as c, computed as l, openBlock as a, createElementBlock as p, normalizeStyle as o, createStaticVNode as d } from "vue";
const m = /* @__PURE__ */ c({
  __name: "LogoArangodb2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (a(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "177",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 177",
      style: o(i.value)
    }, e[0] || (e[0] = [
      d('<g><path fill="#577138" d="M251.466 88.549c-2.366-7.858-3.547-11.789-5.262-15.968-3.303-8.083-7.507-14.655-13.805-22.798-14.74-19.028-22.107-28.56-34.129-36.153C172.185-2.862 144.733.056 141.602.435c-9.369 1.128-29.977 5.24-47.639 22.28-10.005 9.666-16.292 23.525-19.235 30.6-3.254 56.391 52.067 78.982 65.092 88.427 4.185 1.993 13.811 6.23 21.623 10.264 18.042 9.312 30.548 11.239 37 12.367 14.06 2.465 35.928-3.102 46.307-14.736 9.944-11.149 12.84-26.19 10.468-39.595-.72-4.122-.73-11.452-3.76-21.519z"></path><path fill="#A3B34F" d="M243.512 82.495c-3.768-10.052-8.184-16.722-13.427-24.633-6.418-9.688-12.154-16.293-16.76-21.553-9.824-11.216-14.74-16.824-21.415-20.896-11.522-7.031-22.66-8.301-28.991-8.962-14.942-1.549-26.362 1.62-31.915 3.212-5.712 1.646-17.03 5.019-28.853 14.299C91.444 32.37 84.856 45.03 81.272 51.846c-3.29 6.144 16.95 55.457 63.709 84.604 2.392 1.237 9.053 4.278 13.167 6.36a237 237 0 0 0 3.719 1.841c1.858.851 3.59 1.665 5.22 2.445 5.252 2.371 8.504 3.577 12.808 5.829 14.91 7.796 30.652 5.573 32.987 5.21 3.095-.476 24.615-3.805 33.523-20.93 4.7-9.032 3.882-18.025 2.765-30.341-.317-3.492-1.383-12.94-5.676-24.39"></path><path fill="#DDE072" d="M171.313 142.865c15.672 5.998 20.827 9.133 27.538 9.951 2.206.264 23.249 1.587 35.582-10.066 9.184-8.67 9.625-17.436 10.154-21.57 1.83-14.233-2.218-32.486-6.945-41.446-6.207-11.771-7.81-14.245-24.46-36.308-12.33-16.32-18.508-19.34-24.943-23.578-11.06-7.232-23.854-7.396-32.537-7.754-6.389-.26-18.354 2.08-29.822 6.1-17.92 6.302-28.386 16.861-35.738 31.812-8.16 17.24 33.109 73.43 61.806 84.915"></path><path fill="#A3B34F" d="M176.675 109.134c9.993-1.748 16.646-12.002 18.682-20.308 2.858-11.749-3.053-21.554-6.992-28.092-3.717-6.153-10.254-14.762-22.09-19.564-10.895-4.428-19.356.943-23.3 3.14-17.384 25.704-3.918 51.79 21.658 64.815 3.227.319 9.503.452 12.037.01"></path><path fill="#577138" d="M147.736 133.35c4.387-5.237 12.82-16.097 16.23-22.85.223-.44.445-.906.668-1.39 3.679-7.995 7.329-21.83 7.677-32.728.311-9.76-3.026-16.355-3.026-16.355-3.404-8.876-13.195-11.915-17.488-13.558-3.525-1.277-6.684-1.929-9.89-2.296-6.311-.566-15.066.11-30.202 2.33-14.993 2.1-29.96 4.963-43.746 8.283-16.715 4.073-25.93 6.317-36.55 11.456C19.141 72.175 7.554 77.78 2.538 90.096-.532 97.64-.265 105.236.5 110.283c0 0 3.31 33.021 26.034 49.852 19.028 14.112 47.085 19.322 67.998 13.607 16.494-3.136 32.226-18.595 45.303-32.122 2.671-2.706 5.89-5.882 7.906-8.28z"></path><path fill="#A3B34F" d="M127.03 127.815c-15.376 9.028-37.934 21.277-66.164 20.965a95 95 0 0 1-2.747-.07c-9.468-.382-34.614-1.394-47.552-18.214-3.569-4.647-5.678-9.782-6.821-13.273l-.03-.076v-.001c-.691-2.128-.946-3.378-.954-3.423a43 43 0 0 1-.496-2.713l-.017-.062-.005-.029h.001l-.005-.015c-.726-4.824-.976-12.058 1.932-19.2 4.76-11.678 15.53-16.888 28.006-22.92C42.63 63.728 51.776 61.5 68.365 57.455c2.126-.514 4.17-1.003 6.142-1.455 2.23-.506 4.372-.984 6.427-1.42a381 381 0 0 1 11.77-2.307l.02-.012c7.148-1.272 13.418-2.207 19.236-3.056 14.992-2.199 23.629-2.873 29.787-2.318 3.378.297 6.192.952 9.412 2.185 4.397 1.683 12.58 4.817 16.535 12.696 1.19 2.375 1.894 5.006 2.096 7.833.024.274.04.556.048.838.242 7.1-2.685 14.08-4.257 17.834-8.834 21.034-25.255 31.725-38.557 39.543"></path><path fill="#DDE072" d="M117.343 128.853c14.64-7.535 26.518-16.184 32.642-22.92 10.17-11.193 14.317-22.573 15.215-31.828 1.006-10.37-5.515-14.246-7.727-16.132-8.234-7.028-19.426-6.916-29.597-6.953-4.622-.015-11.254.339-31.586 4.768-16.17 3.687-19.477 4.487-39.024 9.83-13.03 3.626-20.377 6.069-26.38 9.838-8.39 5.27-18.837 11.828-21.484 24.477-3.288 15.692 8.319 28.766 10.678 31.24 11.36 11.85 27.02 13.273 37.814 13.31 4.24.014 8.254-.21 11.794-.406 21.933-1.212 37.034-9.766 47.655-15.215"></path><path fill="#5E3108" d="M60.502 65.716c-1.679 1.27-4.416 3.96-5.82 5.4l-3.906 4.368C43.85 84.18 38.91 100.946 42.66 105.46c1.924 2.32 2.934 2.572 3.622 3.034 9.615 4.65 18.388 11.033 32.728 11.872l11.927-.014c.966-.04 2.384-.098 3.403-.174 2.658-.239 1.498-.261 3.333-.457 16.499-2.709 38.47-14.381 37.623-30.721-.324-6.106-7.298-16.108-12.033-20.62-5.033-4.801-14.442-9.465-16.907-10.345-1.153-.356-2.532-.827-4.833-1.23a59 59 0 0 0-3.596-.545 55 55 0 0 0-1.7-.182c-.573-.054-1.138-.084-1.704-.12-11.979-.745-22.73 2.377-31.015 7.656-.688.439-1.365.887-2.017 1.355-.338.247-.667.485-.995.74"></path></g>', 1)
    ]), 4));
  }
});
export {
  m as _
};