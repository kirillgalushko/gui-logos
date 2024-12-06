import { defineComponent as e, computed as t, openBlock as l, createElementBlock as z, normalizeStyle as o, createElementVNode as i } from "vue";
const s = /* @__PURE__ */ e({
  __name: "LogoParadoxInteractive",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const h = c, v = t(() => ({
      width: h.width || "1em",
      height: h.height || "1em",
      minWidth: h.width || "1em",
      minHeight: h.height || "1em"
    }));
    return (n, m) => (l(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "2365",
      height: "2500",
      viewBox: "0 0 1037.965 1097.141",
      style: o(v.value)
    }, m[0] || (m[0] = [
      i("path", {
        fill: "#1D1D1B",
        d: "M.99 1050.058h12.444v45.801H.99zm109.795 0h12.057v45.801H109.31l-24.948-31.936h-.124v31.936H72.18v-45.801h14.427l24.043 31.938h.135zm83.37 8.723h-16.992v-8.725h46.429v8.725h-16.993v37.076h-12.443v-37.076zm83.76-8.723h42.771v8.723h-30.33v9.502h28.792v8.332h-28.792v10.523h30.586v8.721h-43.028zm99.913 0h33.291c12.696 0 14.81 7.771 14.81 12.449 0 5.588-2.243 9.17-7.435 11.033v.131c5.451.82 6.282 7.75 6.282 12.246 0 2.236.196 7.627 2.374 9.939h-13.6c-1.152-2.125-1.217-3.969-1.217-8.793 0-6.408-2.754-8.02-6.604-8.02h-15.458v16.813h-12.444zm12.445 20.272h16.484c2.757 0 5.961-1.531 5.961-5.844 0-4.545-3.59-5.705-6.602-5.705h-15.844zm125.12 16.105h-21.029l-3.724 9.424h-13.4l20.136-45.801h15.004l20.146 45.801h-13.41zm-10.515-26.494-7.182 18.15h14.366zm119.796 7.449c-1.154-6.609-6.602-9.896-13.082-9.896-11.791 0-14.302 9.24-14.302 15.465 0 6.213 2.515 15.467 14.302 15.467 6.033 0 11.861-2.896 13.082-10.135h13.539c-1.539 13.332-12.508 18.85-27.063 18.85-16.686 0-27.063-7.184-27.063-24.182 0-16.996 10.386-24.18 27.063-24.18 11.033 0 25.074 2.816 26.939 18.609h-13.416zm82.086-8.609h-16.986v-8.725h46.431v8.725h-16.996v37.076h-12.451v-37.076zm83.759-8.723h12.442v45.801h-12.442zm65.415 0h13.67l13.278 34.895 13.278-34.895h13.653l-20.339 45.801h-13.203zm106.84 0h42.783v8.723h-30.336v9.502h28.805v8.332h-28.805v10.523h30.594v8.721h-43.041zM0 909.554h41.778v11.238h.349c7.768-8.994 19.682-13.818 38.849-13.818 27.973 0 53.696 15.359 53.696 50.408 0 35.066-25.725 50.434-53.696 50.434-17.611 0-30.046-4.316-37.465-13.293h-.348v43.34H0zm66.99 69.248c15.542 0 23.479-9.328 23.479-21.42 0-12.426-6.906-21.395-23.655-21.395-16.57 0-23.649 7.93-23.649 21.395-.002 13.295 7.077 21.42 23.825 21.42m86.33-40.578c2.591-12.951 7.948-20.896 18.648-25.9 10.536-4.824 26.247-6.561 49.034-6.561 44.032 0 61.47 9.836 61.47 37.982v45.584c0 7.256 1.9 11.576 3.972 14.686h-44.201q-1.29-4.155-1.557-9.32c-9.664 8.977-24.343 13.121-47.309 13.121-29.009 0-47.306-7.777-47.306-31.945 0-17.275 12.258-28.316 44.2-29.701l36.432-1.729c8.636-.523 11.566-2.592 11.566-7.766 0-6.217-7.769-9.156-20.025-9.156-9.844 0-19.686 1.543-21.758 10.705zm85.99 22.791c-7.251 1.557-19.51 2.59-34.875 3.975-7.947.695-11.748 3.275-11.748 9.32 0 6.568 5.356 10.701 16.059 10.701 14.503 0 30.565-3.619 30.565-19.848zm65.958-51.461h41.782v18.137h.349c11.224-14.68 25.378-20.717 40.229-20.717 4.663 0 9.494.344 14.159 1.023v38.688c-7.596-1.9-13.989-3.457-21.582-3.457-15.367 0-31.77 5.014-31.77 25.389v35.398h-43.167zm111.882 28.67c2.593-12.951 7.942-20.896 18.65-25.9 10.529-4.824 26.24-6.561 49.034-6.561 44.027 0 61.476 9.836 61.476 37.982v45.584c0 7.256 1.893 11.576 3.965 14.686h-44.197c-.868-2.77-1.393-5.877-1.561-9.32-9.665 8.977-24.341 13.121-47.307 13.121-29.009 0-47.312-7.777-47.312-31.945 0-17.275 12.26-28.316 44.198-29.701l36.433-1.729c8.636-.523 11.566-2.592 11.566-7.766 0-6.217-7.763-9.156-20.021-9.156-9.844 0-19.684 1.543-21.764 10.705zm85.988 22.791c-7.252 1.557-19.512 2.59-34.878 3.975-7.947.695-11.747 3.275-11.747 9.32 0 6.568 5.355 10.701 16.06 10.701 14.506 0 30.564-3.619 30.564-19.848zm153.664 32.983h-.344c-7.768 8.979-19.678 13.816-38.842 13.816-27.973 0-53.704-15.365-53.704-50.434 0-35.041 25.731-50.408 53.704-50.408 17.606 0 30.037 4.311 37.463 13.297h.344v-43.855h43.167v127.598h-41.788zm-25.198-58.01c-15.537 0-23.492 9.322-23.492 21.395 0 12.439 6.91 21.42 23.664 21.42 16.58 0 23.655-7.945 23.655-21.42-.008-13.297-7.075-21.395-23.827-21.395m154.865-30.225c48.704 0 69.932 16.234 69.932 50.936 0 34.883-21.228 51.117-69.932 51.117-48.685 0-69.92-16.234-69.92-51.117 0-34.701 21.235-50.936 69.92-50.936m0 74.081c17.447 0 24.691-7.953 24.691-23.148 0-14.85-7.244-22.955-24.691-22.955-17.264 0-24.68 8.105-24.68 22.955.004 15.19 7.416 23.148 24.68 23.148m75.809 24.167 43.511-49.389-39.882-45.068h52.823l17.104 25.395 17.096-25.395h52.824l-40.57 45.068 44.207 49.389h-54.918l-18.639-26.762-18.659 26.762zm24.102-561.174c-5.12-25 20.903-46.661 8.592-72.229-12.196-25.188-71.681-23.972-72.598-52.968-1.229-33.87 48.082-16.6 68.707-15.948 0-54.266-21.362-100.61-79.739-63.988-9.797 0-23.137-1.986-27.793-10.701-17.472-32.081 35.921-38.953 37.375-64.854.816-15.002-17.525-24.516-23.221-36.721-3.896-8.125-.443-18.504-.443-27.162 0-3.621-4.233-3.771-7.077-4.48-11.024-2.838-21.252 3.49-32.596 1.068-12.55-2.719-19.459-14.202-30.64-19.421 0 4.628-7.999 10.673-10.633 14.45-8.239 11.406-37.834 51.841-55.844 34.283-7.063-6.868-5.894-19.015-4.476-28.304 10.398-70.006-15.187-77.624-76.71-87.408-14.928-2.486-53.017-11.488-70.434-6.168 0 12.012 15.185 95.815-11.733 91.441-32.017 0-14.525-83.2-60.958-93.727-7.654 2.797-17.749 3.973-22.71 11.279-6.591 9.604 6.515 38.867 9.392 50.211 3.498 14.302 2.771 33.453-3.121 45.928v2.281c-52.527 0-47.155-116.417-128.928-59.402 0 31.146 74.168 70.563 48.722 104.772-4.366 5.696-11.586 10.538-18.785 11.497-39.792 4.782-55.548-81.076-100.008-73.458-7.263 1.229-13.718 6.929-16.819 13.122-10.478 20.28 38.742 49.843 45.876 70.021 3.907 11.013.469 21.121-1.212 31.745-37.452 0-81.479-53.709-116.348-19.635-5.515 5.275-11.478 12.627-9.336 20.838 3.582 14.231 28.939 11.828 36.64 25.195.302.581.537 1.103.826 1.68 13.214 29.992-17.178 52.147-17.584 79.355-.313 13.557 10.236 21.206 5.913 36.118-14.921 50.793-63.146-5.86-86.075 15.862-20.662 19.458 2.832 59.942 4.392 82.866.948 14.998-7.202 26.256-8.136 40.919-.94 13.347 8.66 23.344 11.955 35.155 4.437 16.231-.246 34.184 8.735 48.204 25.919 40.129 70.103-68.939 89.736-22.986 15.875 37.203-64.518 35.166-66.467 63.375-2.048 28.045 46.833 53.281 65.394 71.389 16.319 15.9 29.245 36.25 31.413 59.1 2.093 22.793-8.577 45.938-14.39 65.959 8.263 0 14.293 3.564 23.007 1.057 40.777-12.082 64.716-77.227 57.997-117.492-5.729-33.924-24.283-63.006-26.551-98.461-2.252-34.928 31.797-93.527-.817-118.498-1.435-.856-2.902-1.741-4.39-2.588 0 3.652-7.78 4.86-11.773 4.976-7.139.246-12.816-2.539-17.66-6.314-7.033-5.529-11.155-14.008-5.519-22.183 7.863-11.504 30.094-9.264 32.754-24.818 5.664-34.362-66.313-41.096-22.773-83.456 8.068-7.921 19.346-14.143 31.852-13.135 20.185 1.577 68.842 15.978 66.107 41.857-1.315 11.726-11.192 22.718-6.924 35.869 4.365 13.623 24.358 12.054 29.633 24.91 7.136 17.438-7.406 30.348-6.01 46.563.34 4.091 2.136 5.563 5.23 8.015 6.15 4.779 17.979 6.405 21.544 14.354 9.096 20.203-15.347 44.748 17.229 55.651 0-14.351-3.254-33.703 9.364-41.157 0 3.444 6.979 8.241 9.076 11.595 10.28 16.03 14.551 31.119 35.459 36.425.768-30.377-16.423-56.375-16.423-57.186 15.026 0 24.215 19.811 41.218 15.297 15.566-4.206 1.777-21.489-1.853-28.767-10.313-20.729 4.506-37.562-1.776-56.716-6.64-20.261-60.892-34.619-77.563-50.936-5.603-5.398-11.517-14.314-8.76-22.784 10.224-31.772 47.721-12.827 73.888-20.317 12.246-3.612 21.519-12.087 30.274-21.662 12.004-13.349 20.424-35.128 12.893-53.304-4.454-10.792-12.305-18.971-10.404-32.522 7.903-57.142 100.375-53.971 140.688-33.211 20.61 10.55 40.124 34.755 29.26 59.479-9.666 21.679-35.778 9.067-54.226 17.104-16.251 7.023-37.556 39.813-42.962 55.277-8.199 23.238 14.727 40.81 16.3 63.399 3.13 49.396-20.109 94.767-29.931 139.335-1.867 8.154 5.374 19.21 1.017 26.707-7.09 12.025-21.896 7.586-33.75 11.979-9.203 3.416-13.366 10.592-21.396 15.654-17.254 10.627-37.153 15.801-39.414 39.443 10.895 0 18.881-5.85 30.455-6.889 1.64-.154 2.304.885 2.349 2.277-.045.828-.225 1.516-.289 2.252-2.706 20.539-18.907 37.949-9.063 59.443 14.541 0 17.982-33.943 42.193-25.111 2.845 0 2.497.164 3.234 2.625 4.944 15.814 6.946 29.361 15.491 43.104 2.336 0 9.846-2.129 9.592-8.199-.64-14.563-2.918-36.564 2.015-49 7.11-18.463 19.853-16.078 16.557-41.078 3.726 0 8.145-6.43 12.236-7.807 29.618-10.346 34.509-27.518 72.118-26.293 9.067.229 18.255.668 25.835 4.408 6.626 0 4.115-10.225 1.77-18.178-13.184-43.69-29.873-86.904-29.873-137.258h7.023c0 5.636 22.301 35.89 26.572 42.914 5.586 8.916 23.701 50.478 39.73 41.386 7.465-4.395 11.953-56.556 16.328-68.081 15.892-42.782 60.795-52.188 87.162-10.792 24.982 39.113 9.571 121.71-22.419 151.996-12.59 11.689-30.349 11.75-42.381 22.738-12.599 11.459-1.313 33.025-3.389 48.127-1.952 13.953-11.24 27.129-21.521 37.184-22.976 22.332-53.422 32.383-76.882 53.213-9.978 8.758-12.147 23.324-24.312 28.707-11.954 5.164-26.671-1.455-39.146 2.207-9.076 5.734-18.221 11.418-27.416 17.152-16.865 8.764-44.049 23.631-53.054 26.326 0 35.869 85.729 16.768 103.38 7.225 12.512-6.746 16.234-23.223 28.651-28.555 13.196-5.779 24.771 7.723 39.023 2.826 13.195-4.76 25.573-15.408 37.235-23.189 22.453-15.268 46.682-28.105 67.609-46.033 7.11-6.227 18.267-14.725 21.321-23.182 5.438-15.148-18.536-52.465 23.935-46.305 32.921 4.373 65.689-61.797 72-85.262 3.694-18.078 7.268-36.328 10.886-54.475 4.589-10.894 9.035-21.821 13.64-32.813 6.612-26.947-17.433-26.05-21.364-45.602m-745.706 69.281c-26.376 5.537-44.84-24.729-32.951-46.011 4.963-9.067 12.646-13.122 21.238-18.144 10.4.917 19.364 1.892 26.963 8.163 22.008 18.259 11.266 50.339-15.25 55.992m175.902-192.119c-2.385 1.167-6.919-1.003-9.544-2.109-33.484-14.183-19.653-35.833-6.856-59.599 25.704 10.231 31.424 54.376 16.4 61.708m46.872 98.265c30.966 15.125 41.654 41.385 40.61 54.7-.337 4.284-2.934 7.929-2.934 7.929s-7.942 2.817-16.716-.699c-24.873-9.982-20.96-36.559-20.96-61.93m246.654 109.437c-1.311 10.706-5.241 15.416-12.173 23.125-11.991 0-23.123-5.783-26.693-16.498-3.302-9.658-.282-21.801.54-31.54 2.72-34.592 5.333-73.95 16.801-105.081 11.501 25.482 7.463 55.339 13.104 84.226 2.863 14.67 10.346 29.112 8.421 45.768M778.47 377.132c-15.771 0-31.103 1.851-46.647-1.232-58.697-11.632-8.105-77.487 4.446-103.926 23.902 21.731 50.449 70.723 42.201 105.158m245.21 531.297c7.896 0 14.285 6.381 14.285 14.285 0 7.889-6.39 14.27-14.285 14.27-7.889 0-14.276-6.381-14.276-14.27-.001-7.898 6.387-14.285 14.276-14.285m10.779 14.29c0-6.205-4.81-11.205-10.779-11.205-5.964 0-10.771 4.996-10.771 11.205 0 6.191 4.809 11.197 10.771 11.197 5.971 0 10.779-5.008 10.779-11.197m-11.64 1.236h-2.375v6.75h-2.794v-15.99h6.227c3.965 0 5.996 1.361 5.996 4.602 0 2.912-1.845 4.115-4.104 4.529l4.374 6.863h-3.239zm.476-2.363c2.035 0 3.85-.191 3.85-2.467 0-1.883-2.004-2.182-3.611-2.182h-3.154v4.648z"
      }, null, -1)
    ]), 4));
  }
});
export {
  s as _
};