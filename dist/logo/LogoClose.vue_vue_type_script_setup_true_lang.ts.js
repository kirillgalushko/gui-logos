import { defineComponent as h, computed as m, openBlock as p, createElementBlock as i, normalizeStyle as M, createStaticVNode as l } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoClose",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const a = t, e = m(() => ({
      width: a.width || "1em",
      height: a.height || "1em",
      minWidth: a.width || "1em",
      minHeight: a.height || "1em"
    }));
    return (s, c) => (p(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: M(e.value)
    }, c[0] || (c[0] = [
      l('<g><path fill="#49BC82" d="M194.21 167.138a254 254 0 0 0 1.263-10.796 286 286 0 0 1-12.101 13.716q5.636-1.33 10.838-2.92M62.567 90.053a247 247 0 0 0-1.306 10.705 272 272 0 0 1 11.938-13.62 176 176 0 0 0-10.632 2.915m134.05 28.778a172 172 0 0 0 5.623-9.789 253 253 0 0 0-6.84-8.632 271 271 0 0 1 1.217 18.42M54.646 147.619q3.135 4.202 6.548 8.383A286 286 0 0 1 60.08 138.1a177 177 0 0 0-5.434 9.52m112.021 46.91c-1.576 5.02-3.315 9.735-5.207 14.097-3.004 6.928-6.378 12.972-10.02 18.039-6.914 9.62-14.794 15.68-22.984 17.27-8.626-1.857-16.634-7.954-23.53-17.488-6.782 2.546-13.407 4.353-19.788 5.36 2.06 2.852 4.239 5.497 6.549 7.889 9.93 10.279 18.6 16.138 36.663 16.138s28.292-6.633 38.543-18.168a74 74 0 0 0 4.446-5.55c3.807-5.218 7.195-11.18 10.153-17.787 3.285-7.342 6.042-15.473 8.272-24.234-7.293 1.845-15.02 3.324-23.097 4.434m-.151-175.103C156.19 7.628 146.2.83 128.35.83s-24.2 5.023-33.67 13.926c-3.231 3.038-6.245 6.542-9.05 10.439-3.655 5.079-6.942 10.845-9.847 17.204-3.453 7.557-6.365 15.943-8.714 24.997 7.234-1.888 14.89-3.416 22.892-4.57 1.615-5.235 3.41-10.145 5.372-14.674 2.918-6.74 6.194-12.647 9.732-17.645 6.988-9.876 15.007-16.165 23.39-17.989 8.312 1.543 16.305 7.736 23.292 17.606 6.534-2.476 12.923-4.238 19.1-5.237a78 78 0 0 0-4.332-5.46m.418 43.301q-5.175-.718-10.528-1.231a271 271 0 0 1 13.413 11.766 176 176 0 0 0-2.885-10.535M89.848 194.37c3.594.52 7.253.97 10.977 1.34A286 286 0 0 1 86.9 183.434a173 173 0 0 0 2.949 10.936m143.066-15.982a74 74 0 0 0-.75-6.873c-.982-6.389-2.789-13.008-5.362-19.782-2.896-7.622-6.755-15.436-11.453-23.325-3.844 6.466-8.257 12.983-13.178 19.484 2.507 4.79 4.663 9.473 6.445 14.009 2.764 7.03 4.642 13.698 5.63 19.856 1.86 11.595.56 21.37-4.078 28.243-7.343 4.742-17.198 6.116-28.676 4.329-2.958 6.607-6.346 12.569-10.153 17.786 3.343.523 6.627.832 9.831.888 14.29.247 24.565-1.741 37.337-14.513s15.315-24.697 14.407-40.102M78.33 24.337c-15.644-1.041-27.514 1.215-40.137 13.838-12.622 12.622-13.56 20.662-13.96 33.654-.138 4.494.217 9.169 1.012 13.975 1.021 6.17 2.786 12.565 5.236 19.106 2.874 7.673 6.688 15.545 11.348 23.49 3.788-6.445 8.128-12.935 12.974-19.402-2.483-4.714-4.636-9.332-6.415-13.806-2.713-6.823-4.585-13.31-5.637-19.346-2.095-12.022-.886-22.22 3.782-29.482 7.034-4.831 17.185-6.084 29.252-3.965 2.905-6.359 6.192-12.125 9.847-17.204a78 78 0 0 0-7.302-.858m117.072 76.073a247 247 0 0 0-1.244-10.215c-1.16-8.087-2.704-15.823-4.613-23.127-2.29-8.764-5.107-16.903-8.435-24.26-6.025 1.018-12.527 2.873-19.373 5.571 1.893 4.439 3.628 9.242 5.198 14.348a176 176 0 0 1 2.885 10.535c.898 3.727 1.707 7.59 2.422 11.578 1.366 7.602 2.38 15.66 3 24.098a264 264 0 0 1 .71 19.288c0 6.678-.257 13.157-.722 19.435 5.6-6.463 10.652-12.912 15.103-19.27a199 199 0 0 0 6.285-9.56 271 271 0 0 0-1.216-18.421M89.848 194.37a173 173 0 0 1-2.95-10.936c-.847-3.6-1.62-7.318-2.297-11.169-1.362-7.738-2.356-15.976-2.96-24.622a278 278 0 0 1-.68-19.417c0-6.667.255-13.129.714-19.385-5.615 6.484-10.665 12.978-15.136 19.397a202 202 0 0 0-6.459 9.862c.19 6.098.564 12.073 1.114 17.902.349 3.693.763 7.331 1.255 10.896 1.104 7.99 2.572 15.637 4.395 22.86 2.243 8.882 5.03 17.117 8.354 24.547 6.17-1.025 12.821-2.917 19.827-5.696-1.893-4.403-3.623-9.161-5.177-14.24M109.133 54.6a255 255 0 0 0-8.786 6.957 271 271 0 0 1 18.813-1.232 176 176 0 0 0-10.027-5.724M46.3 210.426c-4.83-7.033-6.084-17.185-3.963-29.252-6.36-2.904-12.127-6.192-17.205-9.847-.403 2.471-.7 4.91-.859 7.302-1.04 15.644 1.216 27.515 13.838 40.136s20.662 13.56 33.655 13.96c4.306.133 8.777-.19 13.372-.916-3.721-5.151-7.038-11.015-9.94-17.503-11.767 1.954-21.753.711-28.898-3.88m62.65-8.279c-4.756 2.508-9.414 4.673-13.925 6.463 2.94 6.835 6.265 12.813 9.901 17.838 7.606-2.854 15.407-6.634 23.28-11.243-6.392-3.819-12.83-8.189-19.256-13.058m38.762.048a246 246 0 0 0 8.227-6.43c-5.705.537-11.551.905-17.515 1.099a172 172 0 0 0 9.288 5.331m-52.687 6.415c-7.006 2.78-13.658 4.67-19.827 5.696 2.902 6.488 6.219 12.352 9.94 17.503 6.38-1.008 13.006-2.815 19.788-5.36-3.636-5.026-6.962-11.004-9.901-17.839m123.4-170.16c-12.771-12.771-24.695-15.314-40.1-14.407a74 74 0 0 0-7.476.845c-6.178.999-12.567 2.761-19.1 5.237-7.692 2.916-15.578 6.813-23.539 11.564 6.52 3.814 13.087 8.193 19.632 13.09 4.749-2.485 9.395-4.626 13.894-6.399 6.846-2.698 13.348-4.553 19.373-5.57 11.85-2 21.84-.735 28.827 3.98 4.743 7.343 6.116 17.198 4.329 28.676 6.607 2.959 12.569 6.345 17.788 10.154.523-3.344.831-6.629.886-9.833.248-14.29-1.74-24.564-14.513-37.336m-9.863 57.048c-1.755 4.394-3.869 8.92-6.322 13.545a172 172 0 0 1-5.623 9.789 199 199 0 0 1-6.285 9.56c-4.451 6.358-9.503 12.807-15.103 19.27a277 277 0 0 1-13.527 14.53 264 264 0 0 1-14.122 13.126c8.61-.602 16.815-1.592 24.526-2.945a199 199 0 0 0 11.266-2.314 285 285 0 0 0 12.101-13.716 255 255 0 0 0 6.698-8.45c4.921-6.501 9.334-13.018 13.178-19.484 4.603-7.74 8.386-15.406 11.252-22.892-5.065-3.64-11.11-7.015-18.039-10.019M84.68 84.732a201 201 0 0 0-11.48 2.406 272 272 0 0 0-11.94 13.62 245 245 0 0 0-6.458 8.24c-4.846 6.467-9.186 12.957-12.974 19.401-4.67 7.944-8.5 15.818-11.384 23.492 4.999 3.538 10.904 6.814 17.645 9.733 1.819-4.536 4.018-9.221 6.557-14.005a177 177 0 0 1 5.434-9.52 202 202 0 0 1 6.46-9.86c4.47-6.42 9.52-12.914 15.135-19.398a262.5 262.5 0 0 1 27.2-27.124c-8.473.621-16.565 1.641-24.195 3.015m152.922 5.331a74 74 0 0 0-5.55-4.444c-5.218-3.809-11.18-7.195-17.787-10.154-7.477-3.347-15.773-6.146-24.721-8.397 1.91 7.304 3.452 15.04 4.613 23.127 5.135 1.6 9.954 3.372 14.405 5.302 6.928 3.004 12.974 6.378 18.039 10.019 9.62 6.915 15.68 14.795 17.27 22.985-1.83 8.502-7.772 16.404-17.069 23.232 2.573 6.774 4.38 13.393 5.362 19.782 2.692-1.97 5.194-4.048 7.468-6.245 10.28-9.929 16.139-18.6 16.139-36.663s-6.634-28.292-18.17-38.544M62.449 166.898c-5.116-1.59-9.921-3.352-14.36-5.274-6.74-2.919-12.646-6.195-17.645-9.733-9.875-6.989-16.166-15.007-17.99-23.39 1.565-8.43 7.908-16.533 18.026-23.59-2.45-6.542-4.215-12.937-5.236-19.107a78 78 0 0 0-5.88 4.638C7.564 100.767.766 110.757.766 128.607s5.022 24.198 13.926 33.67c3.038 3.23 6.542 6.245 10.439 9.049 5.078 3.655 10.845 6.943 17.205 9.847 7.419 3.39 15.64 6.259 24.507 8.585-1.823-7.223-3.291-14.87-4.395-22.86m66.09-100.422a202 202 0 0 0-9.38-6.15c-6.414.199-12.695.613-18.812 1.23q-5.281.534-10.385 1.27c-8.001 1.154-15.658 2.682-22.892 4.57-8.787 2.293-16.947 5.115-24.32 8.45 1.052 6.035 2.924 12.523 5.637 19.346 4.392-1.87 9.137-3.586 14.18-5.139a177 177 0 0 1 10.632-2.915c3.698-.89 7.528-1.695 11.481-2.406 7.63-1.374 15.722-2.394 24.196-3.015 6.233-.458 12.663-.71 19.286-.71 6.877 0 13.541.273 19.993.765-6.556-5.681-13.125-10.786-19.615-15.296m80.077 95.425c-4.45 1.917-9.265 3.667-14.406 5.237a172 172 0 0 1-10.838 2.92 200 200 0 0 1-11.266 2.314c-7.711 1.353-15.915 2.343-24.526 2.945-6.265.438-12.737.679-19.418.679a266 266 0 0 1-18.828-.67c6.39 5.534 12.766 10.53 19.054 14.94a199 199 0 0 0 10.036 6.597 286 286 0 0 0 17.515-1.1 255 255 0 0 0 10.728-1.234c8.076-1.11 15.804-2.589 23.097-4.434 8.858-2.24 17.07-5.022 24.482-8.338-.988-6.158-2.866-12.826-5.63-19.856m-60.904 40.293a172 172 0 0 1-9.288-5.331 199 199 0 0 1-10.036-6.596c-6.288-4.411-12.664-9.407-19.054-14.942a278 278 0 0 1-14.568-13.56 264 264 0 0 1-13.126-14.122c.605 8.646 1.599 16.884 2.96 24.622a199 199 0 0 0 2.299 11.17 286 286 0 0 0 13.926 12.275 254 254 0 0 0 8.125 6.436c6.425 4.87 12.864 9.24 19.256 13.058 7.857 4.695 15.64 8.552 23.234 11.46 3.642-5.066 7.016-11.11 10.02-18.038-4.458-1.781-9.053-3.933-13.748-6.432m24.53-117.354a201 201 0 0 0-2.423-11.578 271 271 0 0 0-13.413-11.766 246 246 0 0 0-8.564-6.718c-6.545-4.897-13.112-9.276-19.632-13.09-7.826-4.576-15.582-8.338-23.144-11.181-3.538 4.998-6.814 10.905-9.732 17.645 4.47 1.793 9.086 3.957 13.799 6.449a176 176 0 0 1 10.027 5.724c3.1 1.908 6.23 3.964 9.38 6.151 6.49 4.51 13.059 9.615 19.615 15.296a263 263 0 0 1 27.085 27.167c-.62-8.439-1.633-16.497-2.999-24.1"></path><g><path fill="#49BC82" d="M194.21 167.138a254 254 0 0 0 1.263-10.796 286 286 0 0 1-12.101 13.716q5.636-1.33 10.838-2.92M62.567 90.053a247 247 0 0 0-1.306 10.705 272 272 0 0 1 11.938-13.62 176 176 0 0 0-10.632 2.915"></path><path fill="#57B6DF" d="M196.617 118.83a172 172 0 0 0 5.623-9.788 253 253 0 0 0-6.84-8.632 271 271 0 0 1 1.217 18.42M54.646 147.62q3.135 4.202 6.548 8.382A286 286 0 0 1 60.08 138.1a177 177 0 0 0-5.434 9.52"></path><path fill="#49BC82" d="M166.667 194.53c-1.576 5.019-3.315 9.734-5.207 14.096-3.004 6.928-6.378 12.972-10.02 18.039-6.914 9.62-14.794 15.68-22.984 17.27-8.626-1.857-16.634-7.954-23.53-17.488-6.782 2.546-13.407 4.353-19.788 5.36 2.06 2.852 4.239 5.497 6.549 7.889 9.93 10.279 18.6 16.138 36.663 16.138s28.292-6.633 38.543-18.168a74 74 0 0 0 4.446-5.55c3.807-5.218 7.195-11.18 10.153-17.787 3.285-7.342 6.042-15.473 8.272-24.234-7.293 1.845-15.02 3.324-23.097 4.434m-.151-175.103C156.19 7.628 146.2.83 128.35.83s-24.2 5.023-33.67 13.926c-3.231 3.038-6.245 6.542-9.05 10.439-3.655 5.079-6.942 10.845-9.847 17.204-3.453 7.557-6.365 15.943-8.714 24.997 7.234-1.888 14.89-3.416 22.892-4.57 1.615-5.235 3.41-10.145 5.372-14.674 2.918-6.74 6.194-12.647 9.732-17.645 6.988-9.876 15.007-16.165 23.39-17.989 8.312 1.543 16.305 7.736 23.292 17.606 6.534-2.476 12.923-4.238 19.1-5.237a78 78 0 0 0-4.332-5.46"></path><path fill="#276392" d="M166.934 62.727q-5.175-.718-10.528-1.231a271 271 0 0 1 13.413 11.766 176 176 0 0 0-2.885-10.535M89.848 194.37c3.594.52 7.253.97 10.977 1.34A286 286 0 0 1 86.9 183.434a173 173 0 0 0 2.949 10.936"></path><path fill="#57B6DF" d="M232.914 178.388a74 74 0 0 0-.75-6.873c-.982-6.389-2.789-13.008-5.362-19.782-2.896-7.622-6.755-15.436-11.453-23.325-3.844 6.466-8.257 12.983-13.178 19.484 2.507 4.79 4.663 9.473 6.445 14.009 2.764 7.03 4.642 13.698 5.63 19.856 1.86 11.595.56 21.37-4.078 28.243-7.343 4.742-17.198 6.116-28.676 4.329-2.958 6.607-6.346 12.569-10.153 17.786 3.343.523 6.627.832 9.831.888 14.29.247 24.565-1.741 37.337-14.513s15.315-24.697 14.407-40.102M78.329 24.337c-15.644-1.041-27.514 1.215-40.137 13.838-12.622 12.622-13.56 20.662-13.96 33.654-.138 4.494.217 9.169 1.012 13.975 1.021 6.17 2.786 12.565 5.236 19.106 2.874 7.673 6.688 15.545 11.348 23.49 3.788-6.445 8.128-12.935 12.974-19.402-2.483-4.714-4.636-9.332-6.415-13.806-2.713-6.823-4.585-13.31-5.637-19.346-2.095-12.022-.886-22.22 3.782-29.482 7.034-4.831 17.185-6.084 29.252-3.965 2.905-6.359 6.192-12.125 9.847-17.204a78 78 0 0 0-7.302-.858"></path><path fill="#49BC82" d="M195.4 100.41c-.349-3.46-.763-6.868-1.243-10.215-1.16-8.087-2.704-15.823-4.613-23.127-2.29-8.764-5.107-16.903-8.435-24.26-6.025 1.018-12.527 2.873-19.373 5.571 1.893 4.439 3.628 9.242 5.198 14.348a176 176 0 0 1 2.885 10.535c.898 3.727 1.707 7.59 2.422 11.578 1.366 7.602 2.38 15.66 3 24.098a264 264 0 0 1 .71 19.288c0 6.678-.257 13.157-.722 19.435 5.6-6.463 10.652-12.912 15.103-19.27a199 199 0 0 0 6.285-9.56 271 271 0 0 0-1.216-18.421M89.848 194.37a173 173 0 0 1-2.95-10.936c-.847-3.6-1.62-7.318-2.297-11.169-1.362-7.738-2.356-15.976-2.96-24.622a278 278 0 0 1-.68-19.417c0-6.667.255-13.129.714-19.385-5.615 6.484-10.665 12.978-15.136 19.397a202 202 0 0 0-6.459 9.862c.19 6.098.564 12.073 1.114 17.902.349 3.693.763 7.331 1.255 10.896 1.104 7.99 2.572 15.637 4.395 22.86 2.243 8.882 5.03 17.117 8.354 24.547 6.17-1.025 12.821-2.917 19.827-5.696-1.893-4.403-3.623-9.161-5.177-14.24"></path><path fill="#FABB66" d="M109.133 54.6a255 255 0 0 0-8.786 6.957 271 271 0 0 1 18.813-1.232 176 176 0 0 0-10.027-5.724M46.3 210.425c-4.83-7.033-6.084-17.185-3.963-29.252-6.36-2.904-12.127-6.192-17.205-9.847-.403 2.471-.7 4.91-.859 7.302-1.04 15.644 1.216 27.515 13.838 40.136s20.662 13.56 33.655 13.96c4.306.133 8.777-.19 13.372-.916-3.721-5.151-7.038-11.015-9.94-17.503-11.767 1.954-21.753.711-28.898-3.88m62.65-8.279c-4.756 2.508-9.414 4.673-13.925 6.463 2.94 6.835 6.265 12.813 9.901 17.838 7.606-2.854 15.407-6.634 23.28-11.243-6.392-3.819-12.83-8.189-19.256-13.058m38.762.048a246 246 0 0 0 8.227-6.43c-5.705.537-11.551.905-17.515 1.099a172 172 0 0 0 9.288 5.331"></path><path fill="#FABB66" d="M95.025 208.61c-7.006 2.778-13.658 4.67-19.827 5.695 2.902 6.488 6.219 12.352 9.94 17.503 6.38-1.008 13.006-2.815 19.788-5.36-3.636-5.026-6.962-11.004-9.901-17.839M218.426 38.45c-12.772-12.772-24.696-15.315-40.102-14.408a74 74 0 0 0-7.475.845c-6.178.999-12.567 2.761-19.1 5.237-7.692 2.916-15.578 6.813-23.539 11.564 6.52 3.814 13.087 8.193 19.632 13.09 4.749-2.485 9.395-4.626 13.894-6.399 6.846-2.698 13.348-4.553 19.373-5.57 11.85-2 21.84-.735 28.827 3.98 4.743 7.343 6.116 17.198 4.329 28.676 6.607 2.959 12.569 6.345 17.788 10.154.523-3.344.831-6.629.886-9.833.248-14.29-1.74-24.564-14.513-37.336m-9.864 57.047c-1.755 4.394-3.869 8.92-6.322 13.545a172 172 0 0 1-5.623 9.789 199 199 0 0 1-6.285 9.56c-4.451 6.358-9.503 12.807-15.103 19.27a277 277 0 0 1-13.527 14.53 264 264 0 0 1-14.122 13.126c8.61-.602 16.815-1.592 24.526-2.945a199 199 0 0 0 11.266-2.314 285 285 0 0 0 12.101-13.716 255 255 0 0 0 6.698-8.45c4.921-6.501 9.334-13.018 13.178-19.484 4.603-7.74 8.386-15.406 11.252-22.892-5.065-3.64-11.11-7.015-18.039-10.019M84.68 84.732a201 201 0 0 0-11.48 2.406 272 272 0 0 0-11.94 13.62 245 245 0 0 0-6.458 8.24c-4.846 6.467-9.186 12.957-12.974 19.401-4.67 7.944-8.5 15.818-11.384 23.492 4.999 3.538 10.904 6.814 17.645 9.733 1.819-4.536 4.018-9.221 6.557-14.005a177 177 0 0 1 5.434-9.52 202 202 0 0 1 6.46-9.86c4.47-6.42 9.52-12.914 15.135-19.398a262.5 262.5 0 0 1 27.2-27.124c-8.473.621-16.565 1.641-24.195 3.015"></path><path fill="#276392" d="M237.602 90.063a74 74 0 0 0-5.55-4.444c-5.218-3.809-11.18-7.195-17.787-10.154-7.477-3.347-15.773-6.146-24.721-8.397 1.91 7.304 3.452 15.04 4.613 23.127 5.135 1.6 9.954 3.372 14.405 5.302 6.928 3.004 12.974 6.378 18.039 10.019 9.62 6.915 15.68 14.795 17.27 22.985-1.83 8.502-7.772 16.404-17.069 23.232 2.573 6.774 4.38 13.393 5.362 19.782 2.692-1.97 5.194-4.048 7.468-6.245 10.28-9.929 16.139-18.6 16.139-36.663s-6.634-28.292-18.17-38.544M62.45 166.898c-5.117-1.59-9.922-3.352-14.36-5.274-6.742-2.919-12.647-6.195-17.646-9.733-9.875-6.989-16.166-15.007-17.99-23.39 1.565-8.43 7.908-16.533 18.026-23.59-2.45-6.542-4.215-12.937-5.236-19.107a78 78 0 0 0-5.88 4.638C7.564 100.767.766 110.757.766 128.607s5.022 24.198 13.926 33.67c3.038 3.23 6.542 6.245 10.439 9.049 5.078 3.655 10.845 6.943 17.205 9.847 7.419 3.39 15.64 6.259 24.507 8.585-1.823-7.223-3.291-14.87-4.395-22.86M128.54 66.476a202 202 0 0 0-9.38-6.15c-6.415.199-12.696.613-18.813 1.23q-5.281.534-10.385 1.27c-8.001 1.154-15.658 2.682-22.892 4.57-8.787 2.293-16.947 5.115-24.32 8.45 1.052 6.035 2.924 12.523 5.637 19.346 4.392-1.87 9.137-3.586 14.18-5.139a177 177 0 0 1 10.632-2.915c3.698-.89 7.528-1.695 11.481-2.406 7.63-1.374 15.722-2.394 24.196-3.015 6.233-.458 12.663-.71 19.286-.71 6.877 0 13.541.273 19.993.765-6.556-5.681-13.125-10.786-19.615-15.296m80.076 95.424c-4.45 1.918-9.265 3.668-14.406 5.238a172 172 0 0 1-10.838 2.92 200 200 0 0 1-11.266 2.314c-7.711 1.353-15.915 2.343-24.526 2.945-6.265.438-12.737.679-19.418.679a266 266 0 0 1-18.828-.67c6.39 5.534 12.766 10.53 19.054 14.94a199 199 0 0 0 10.036 6.597 286 286 0 0 0 17.515-1.1 255 255 0 0 0 10.728-1.234c8.076-1.11 15.804-2.589 23.097-4.434 8.858-2.24 17.07-5.022 24.482-8.338-.988-6.158-2.866-12.826-5.63-19.856"></path><path fill="#57B6DF" d="M147.712 202.194a172 172 0 0 1-9.288-5.331 199 199 0 0 1-10.036-6.596c-6.288-4.411-12.664-9.407-19.054-14.942a278 278 0 0 1-14.568-13.56 264 264 0 0 1-13.126-14.122c.605 8.646 1.599 16.884 2.96 24.622a199 199 0 0 0 2.299 11.17 286 286 0 0 0 13.926 12.275 254 254 0 0 0 8.125 6.436c6.425 4.87 12.864 9.24 19.256 13.058 7.857 4.695 15.64 8.552 23.234 11.46 3.642-5.066 7.016-11.11 10.02-18.038-4.458-1.781-9.053-3.933-13.748-6.432M172.241 84.84a201 201 0 0 0-2.422-11.578 271 271 0 0 0-13.413-11.766 246 246 0 0 0-8.564-6.718c-6.545-4.897-13.112-9.276-19.632-13.09-7.826-4.576-15.582-8.338-23.144-11.181-3.538 4.998-6.814 10.905-9.732 17.645 4.47 1.793 9.086 3.957 13.799 6.449a176 176 0 0 1 10.027 5.724c3.1 1.908 6.23 3.964 9.38 6.151 6.49 4.51 13.059 9.615 19.615 15.296a263 263 0 0 1 27.085 27.167c-.62-8.439-1.633-16.497-2.999-24.1"></path></g></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};
