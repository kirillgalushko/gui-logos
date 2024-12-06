import { defineComponent as o, computed as h, openBlock as s, createElementBlock as m, normalizeStyle as n, createElementVNode as a } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoTaskade2",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const c = t, i = h(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (l, e) => (s(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(i.value)
    }, e[0] || (e[0] = [
      a("g", null, [
        a("path", {
          fill: "#FFF",
          d: "M128.418 12.37c5.811 0 10.795 3.499 12.982 8.499.219.499.705.773 1.192.773.348 0 .697-.142.949-.44a14.2 14.2 0 0 1 10.862-5.084c1.212 0 2.445.158 3.671.485 5.623 1.506 9.535 6.186 10.344 11.594.096.647.673 1.067 1.27 1.067.244 0 .492-.07.712-.224a14.25 14.25 0 0 1 8.163-2.574c2.4 0 4.831.611 7.061 1.897 5.041 2.907 7.607 8.44 6.987 13.872-.088.767.553 1.402 1.273 1.402q.21.001.424-.076a14.3 14.3 0 0 1 4.872-.858c3.623 0 7.243 1.378 10.007 4.141 4.116 4.113 5.162 10.12 3.157 15.206-.325.824.319 1.726 1.183 1.726q.057 0 .11-.005.623-.054 1.244-.055c4.896 0 9.656 2.53 12.28 7.073 2.911 5.037 2.364 11.109-.891 15.504-.548.741-.104 1.837.806 1.997 5.26.924 9.77 4.782 11.244 10.276 1.507 5.618-.594 11.343-4.877 14.746-.722.573-.577 1.747.26 2.137 4.84 2.253 8.2 7.146 8.2 12.833 0 5.808-3.5 10.786-8.505 12.97-.858.376-1.05 1.539-.334 2.14 4.097 3.427 6.076 9.025 4.601 14.52-1.506 5.618-6.19 9.526-11.604 10.335-.912.136-1.372 1.225-.844 1.98 3.066 4.37 3.526 10.285.679 15.211-2.625 4.54-7.383 7.072-12.28 7.072a14 14 0 0 1-1.604-.091 1 1 0 0 0-.14-.009c-.849 0-1.488.881-1.188 1.704 1.829 5.012.74 10.845-3.286 14.866a14.1 14.1 0 0 1-10.006 4.142c-1.77 0-3.54-.33-5.213-.988a1.2 1.2 0 0 0-.448-.086c-.706 0-1.341.62-1.274 1.38.468 5.314-2.094 10.667-7.025 13.511a14.1 14.1 0 0 1-7.06 1.896 14.25 14.25 0 0 1-8.457-2.786 1.22 1.22 0 0 0-.73-.24c-.586 0-1.157.41-1.27 1.044-.924 5.255-4.785 9.763-10.284 11.234a14.2 14.2 0 0 1-3.672.486 14.21 14.21 0 0 1-11.087-5.359 1.24 1.24 0 0 0-.977-.462c-.472 0-.942.25-1.16.722-2.257 4.837-7.155 8.192-12.847 8.192-5.812 0-10.794-3.496-12.981-8.496a1.3 1.3 0 0 0-1.192-.773c-.348 0-.698.14-.95.439a14.2 14.2 0 0 1-10.86 5.083 14.2 14.2 0 0 1-3.673-.486c-5.623-1.505-9.534-6.185-10.343-11.592-.097-.648-.674-1.068-1.271-1.068-.243 0-.49.07-.711.225a14.25 14.25 0 0 1-8.164 2.574c-2.399 0-4.83-.61-7.06-1.898-5.041-2.908-7.606-8.44-6.987-13.872.087-.767-.553-1.4-1.273-1.4-.14 0-.283.022-.424.074-1.57.573-3.222.858-4.872.858a14.1 14.1 0 0 1-10.008-4.14c-4.116-4.114-5.16-10.12-3.156-15.207.325-.823-.319-1.726-1.183-1.726q-.057 0-.11.005-.623.054-1.244.055c-4.896 0-9.656-2.53-12.281-7.073-2.91-5.037-2.363-11.11.892-15.504.548-.741.103-1.837-.806-1.997-5.26-.924-9.77-4.782-11.244-10.276-1.507-5.618.594-11.343 4.877-14.745.722-.574.577-1.748-.26-2.137-4.841-2.252-8.2-7.146-8.2-12.834 0-5.806 3.5-10.786 8.507-12.97.856-.376 1.048-1.54.332-2.138-4.097-3.428-6.076-9.027-4.602-14.522 1.507-5.618 6.192-9.526 11.604-10.335.913-.136 1.373-1.225.844-1.98-3.065-4.37-3.525-10.285-.678-15.21 2.624-4.542 7.383-7.071 12.279-7.071q.802 0 1.605.09.071.008.141.008c.848 0 1.487-.881 1.187-1.702-1.83-5.014-.74-10.847 3.284-14.868a14.1 14.1 0 0 1 10.008-4.14c1.77 0 3.54.328 5.213.987q.224.087.448.085c.706 0 1.341-.62 1.274-1.379-.468-5.315 2.094-10.668 7.025-13.512a14.1 14.1 0 0 1 7.06-1.896c3.027 0 6.004.972 8.457 2.787.224.164.479.24.73.24.586 0 1.157-.408 1.27-1.045.924-5.255 4.785-9.762 10.284-11.234a14.2 14.2 0 0 1 3.672-.486 14.21 14.21 0 0 1 11.087 5.359c.25.314.613.464.977.464.472 0 .942-.253 1.162-.724 2.255-4.837 7.153-8.192 12.844-8.192"
        }),
        a("path", {
          fill: "#2F2F2F",
          d: "M181.462 184.2c-12.94 0-11.925-18.252 0-18.252s12.94 18.251 0 18.251m-106.93 0c-12.94 0-11.925-18.251 0-18.251s12.94 18.251 0 18.251m146.026-67.432h-4.384c-7.862 0-14.614-4.695-17.636-11.424-3.022 6.729-9.774 11.424-17.635 11.424s-14.612-4.695-17.634-11.424c-3.022 6.729-9.775 11.424-17.637 11.424-7.86 0-14.613-4.695-17.635-11.424-3.022 6.729-9.774 11.424-17.634 11.424-7.862 0-14.613-4.695-17.637-11.424-3.022 6.729-9.772 11.424-17.634 11.424s-14.613-4.695-17.635-11.424c-3.022 6.729-9.775 11.424-17.637 11.424h-4.334c-6.575 7.068-2.404 13.04 13.834 13.04v36.295c0 34.11 39.317 51.166 78.635 51.166 39.317 0 78.634-17.055 78.634-51.166v-36.296c16.252 0 20.493-5.971 13.97-13.04"
        }),
        a("path", {
          fill: "#2F2F2F",
          d: "M129.257 0a27.84 27.84 0 0 0-15.844 4.972 27.9 27.9 0 0 0-10.12-1.891 28 28 0 0 0-7.208.95 27.84 27.84 0 0 0-14.033 8.92 27 27 0 0 0-3.071-.174 27.85 27.85 0 0 0-13.891 3.725 27.8 27.8 0 0 0-11.24 12.236c-5.836.877-11.22 3.58-15.47 7.825a27.8 27.8 0 0 0-7.692 14.746c-5.34 2.349-9.911 6.348-12.91 11.538a27.77 27.77 0 0 0-3.61 16.216 27.76 27.76 0 0 0-9.48 14.497 27.8 27.8 0 0 0 .713 16.6A27.75 27.75 0 0 0 0 126.614c0 5.76 1.808 11.271 4.99 15.848a27.74 27.74 0 0 0-.956 17.292 27.8 27.8 0 0 0 8.925 14.016 27.74 27.74 0 0 0 3.56 16.95 27.83 27.83 0 0 0 12.252 11.238 27.77 27.77 0 0 0 7.828 15.446c4.076 4.071 9.194 6.724 14.756 7.709a27.78 27.78 0 0 0 11.552 12.871 27.84 27.84 0 0 0 16.249 3.628 27.8 27.8 0 0 0 14.496 9.45 27.84 27.84 0 0 0 16.643-.692 27.82 27.82 0 0 0 16.443 5.376 27.84 27.84 0 0 0 15.844-4.973 27.8 27.8 0 0 0 10.119 1.892c2.427 0 4.852-.319 7.209-.951a27.8 27.8 0 0 0 14.03-8.918q1.532.172 3.074.173c4.863 0 9.667-1.289 13.89-3.725a27.8 27.8 0 0 0 11.242-12.236c5.836-.877 11.218-3.58 15.468-7.825a27.8 27.8 0 0 0 7.692-14.746c5.341-2.348 9.912-6.347 12.91-11.537a27.77 27.77 0 0 0 3.61-16.216 27.76 27.76 0 0 0 9.481-14.499 27.8 27.8 0 0 0-.713-16.598 27.76 27.76 0 0 0 5.4-16.456c0-5.759-1.809-11.27-4.988-15.845a27.74 27.74 0 0 0 .953-17.294c-1.492-5.564-4.667-10.418-8.924-14.016a27.74 27.74 0 0 0-3.558-16.95 27.84 27.84 0 0 0-12.253-11.238 27.76 27.76 0 0 0-7.828-15.445c-4.077-4.073-9.194-6.725-14.757-7.708a27.76 27.76 0 0 0-11.55-12.874 27.85 27.85 0 0 0-16.25-3.627 27.8 27.8 0 0 0-14.496-9.451 28 28 0 0 0-7.207-.951c-3.26 0-6.447.567-9.436 1.645A27.8 27.8 0 0 0 129.257 0m0 13.707c5.787 0 10.75 3.484 12.929 8.463.217.497.701.77 1.186.77.347 0 .695-.141.945-.44a14.15 14.15 0 0 1 10.818-5.06c1.207 0 2.435.157 3.656.483 5.6 1.499 9.495 6.16 10.301 11.545.096.644.67 1.062 1.266 1.062.242 0 .489-.07.708-.223a14.2 14.2 0 0 1 8.13-2.563c2.389 0 4.81.608 7.032 1.888 5.02 2.896 7.575 8.405 6.958 13.814-.087.764.55 1.396 1.267 1.396q.211 0 .422-.075a14.2 14.2 0 0 1 4.852-.855c3.609 0 7.214 1.372 9.967 4.124 4.099 4.095 5.14 10.077 3.144 15.142-.325.82.317 1.718 1.178 1.718q.056 0 .11-.005.619-.055 1.238-.055c4.876 0 9.617 2.52 12.23 7.044 2.899 5.016 2.354 11.062-.888 15.438-.545.739-.103 1.83.803 1.99 5.238.92 9.73 4.761 11.198 10.232 1.5 5.595-.592 11.295-4.858 14.684-.718.571-.574 1.74.26 2.129 4.82 2.242 8.165 7.115 8.165 12.778 0 5.783-3.485 10.74-8.47 12.916-.853.374-1.045 1.532-.332 2.13 4.08 3.413 6.051 8.987 4.583 14.46-1.5 5.594-6.166 9.485-11.557 10.29-.909.136-1.366 1.22-.84 1.973 3.053 4.35 3.51 10.241.676 15.147-2.614 4.521-7.353 7.042-12.229 7.042q-.8 0-1.598-.091a1 1 0 0 0-.14-.009c-.845 0-1.481.878-1.183 1.697 1.822 4.99.738 10.8-3.272 14.804a14.05 14.05 0 0 1-9.965 4.124c-1.763 0-3.526-.329-5.192-.984a1.2 1.2 0 0 0-.445-.085c-.704 0-1.337.617-1.27 1.374.467 5.291-2.085 10.622-6.996 13.454a14.03 14.03 0 0 1-7.03 1.888c-3.015 0-5.979-.968-8.423-2.774a1.2 1.2 0 0 0-.727-.24c-.583 0-1.152.408-1.264 1.04-.92 5.233-4.766 9.722-10.242 11.187-1.223.328-2.45.483-3.657.483a14.15 14.15 0 0 1-11.042-5.335 1.23 1.23 0 0 0-.972-.461c-.47 0-.939.25-1.156.72-2.247 4.816-7.125 8.157-12.793 8.157-5.789 0-10.75-3.482-12.929-8.46a1.29 1.29 0 0 0-1.187-.77 1.22 1.22 0 0 0-.945.437 14.15 14.15 0 0 1-10.817 5.061c-1.207 0-2.435-.156-3.656-.483-5.6-1.5-9.495-6.16-10.301-11.543-.096-.646-.671-1.064-1.266-1.064-.242 0-.489.07-.708.224a14.2 14.2 0 0 1-8.13 2.563c-2.39 0-4.81-.608-7.032-1.89-5.02-2.895-7.574-8.404-6.958-13.813.087-.764-.55-1.395-1.268-1.395q-.209-.002-.422.074c-1.564.57-3.208.855-4.852.855a14.05 14.05 0 0 1-9.966-4.123c-4.1-4.097-5.14-10.078-3.144-15.143.324-.82-.317-1.719-1.178-1.719a1 1 0 0 0-.11.005q-.619.055-1.238.055c-4.876 0-9.617-2.52-12.23-7.044-2.9-5.015-2.354-11.062.888-15.438.545-.738.103-1.83-.803-1.989-5.238-.92-9.73-4.762-11.198-10.233-1.5-5.594.592-11.295 4.857-14.682.72-.572.575-1.74-.259-2.128-4.82-2.243-8.165-7.116-8.165-12.78 0-5.782 3.485-10.74 8.47-12.917.853-.373 1.045-1.531.332-2.128-4.08-3.413-6.051-8.988-4.583-14.461 1.5-5.594 6.166-9.486 11.556-10.29.91-.136 1.367-1.22.84-1.973-3.052-4.35-3.51-10.241-.675-15.145 2.614-4.524 7.353-7.042 12.229-7.042q.797 0 1.598.09.072.008.14.007c.845 0 1.481-.877 1.183-1.694-1.822-4.993-.738-10.802 3.27-14.806a14.05 14.05 0 0 1 9.967-4.123c1.763 0 3.526.328 5.191.984q.224.086.446.084c.703 0 1.336-.617 1.27-1.373-.467-5.292 2.085-10.623 6.995-13.455a14.03 14.03 0 0 1 7.03-1.888c3.016 0 5.981.968 8.423 2.775.223.163.477.239.728.239.583 0 1.152-.407 1.264-1.04.92-5.233 4.766-9.72 10.242-11.188a14 14 0 0 1 3.657-.483c4.324 0 8.388 2.005 11.042 5.336.248.313.61.463.972.463.47 0 .938-.252 1.158-.722 2.245-4.816 7.123-8.158 12.791-8.158"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};