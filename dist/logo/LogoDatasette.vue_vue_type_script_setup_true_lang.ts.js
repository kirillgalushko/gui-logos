import { defineComponent as m, computed as t, openBlock as e, createElementBlock as a, normalizeStyle as i, createStaticVNode as V } from "vue";
const z = /* @__PURE__ */ m({
  __name: "LogoDatasette",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const c = l, v = t(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (s, h) => (e(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "74",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 74",
      style: i(v.value)
    }, h[0] || (h[0] = [
      V('<g fill="#0E0C82"><path d="M421.26 1.37v17.81h11.644V1.37h13.015v17.81h10.96v12.329h-10.96v42.468h-13.015V31.51H421.26v42.468h-12.33V31.51h-10.274V19.18h10.274V1.37zM175.354 17.124c5.28 0 10.132 1.468 14.126 4.27l.258.183V17.81h12.33v54.798h-12.33v-4.312l-.092.072c-4.11 3.113-9.1 4.847-14.601 4.923l-.376.002c-7.485 0-14.319-2.96-18.97-8.222l-.168-.193-.193-.194c-4.88-5.023-7.296-11.516-7.381-19.062l-.002-.413c0-8.313 2.358-14.988 7.385-20.16l.19-.194.16-.181c4.46-5.034 10.992-7.467 19.243-7.547zm89.046 0c5.577 0 10.265 1.386 14.162 4.19l.223.163V17.81H291.8v54.798h-13.015v-4.204l-.076.06c-4.014 3.122-8.813 4.756-14.598 4.827l-.395.002c-7.21 0-13.329-2.723-18.771-8.05l-.366-.361-.068-.08c-4.503-5.253-6.825-12.025-6.825-19.593 0-8.009 2.184-14.707 6.574-19.98l.32-.377.074-.074c5.296-5.297 11.458-7.653 19.746-7.653m54.114 0c6.598 0 11.904 1.476 15.84 4.51l.217.17.191.147a14.7 14.7 0 0 1 5.668 11.322l.003.29v2.74h-11.966l-.336-2.352c-.476-3.328-3.443-5.182-9.617-5.182l-.715.006c-5.926.1-8.19 1.479-8.19 4.104 0 .973.199 1.615.76 2.315l.084.101 5.399 1.8 8.177 2.045 7.797 2.126.242.122c3.135 1.567 5.214 3.05 6.746 5.06l.178.24.094.074c2.321 1.862 3.35 4.87 3.4 8.445l.002.276c0 5.609-2.423 10.553-6.586 13.171l-.065.04-.112.088c-3.852 2.968-9.013 4.445-15.413 4.508l-.429.002c-6.864 0-12.984-1.93-17.21-5.193l-.374-.297-.107-.107c-4.029-4.028-6.2-8.007-6.94-13.194l-.447-3.128h14.119v2.74c0 3.295 1.64 5.154 5.547 6.27l4.234 1.21 4.153-.593 3.803-.634.099-.042c2.015-.88 2.676-1.89 2.712-3.975l.001-.181c0-1.095-.232-1.601-1.24-2.322l-.163-.114-1.437-.767c-1.19-.62-2.017-.907-2.64-.907h-.337l-8.685-2.171-7.548-2.745-.163-.042c-2.916-.79-5.262-2.278-6.947-4.446l-.212-.283-.086-.064c-2.414-1.86-3.376-4.514-3.42-8.46v-.283c0-4.47 1.948-8.47 5.356-11.969l.348-.35.118-.095c3.74-2.992 8.564-4.026 16.097-4.026m52.058 0c7.721 0 14.36 2.416 19.474 7.384l.347.343.068.08c4.558 5.317 6.825 12.117 6.825 20.277v5.48h-40.397l.08.235c.774 2.193 1.987 4.077 3.654 5.802l.241.245c2.922 2.922 5.66 3.993 10.393 3.993 5.231 0 9.018-2.244 11.249-6.705l.757-1.515h13.714l-1.202 3.606c-1.623 4.869-4.754 9.236-8.994 12.166l-.21.143-.158.124C382.56 71.75 377.4 73.227 371 73.29l-.428.002c-7.475 0-14.361-2.95-19.747-8.337-5.15-5.15-7.652-11.887-7.652-19.747 0-8.313 2.358-14.988 7.385-20.16l.19-.194.159-.181c4.46-5.034 10.993-7.467 19.244-7.547zm113.706 0c8.312 0 14.988 2.36 20.16 7.386l.346.341.068.08c4.558 5.317 6.825 12.117 6.825 20.277v5.48h-40.502c.72 2.624 1.844 4.416 3.675 5.934l.417.337.19.237c2.028 2.535 5.177 3.767 9.506 3.767 5.846 0 9.675-2.188 11.933-6.705l.758-1.515H512l-1.983 3.965c-2.49 4.983-5.477 9.09-8.958 11.874-3.962 3.17-9.355 4.71-16.096 4.71-7.92 0-14.165-2.755-19.747-8.337-5.15-5.15-7.652-11.887-7.652-19.747 0-8.009 2.183-14.707 6.573-19.98l.32-.377.074-.074c5.15-5.15 11.887-7.653 19.747-7.653M113.73 1.37c8.511.078 16.63 3.595 22.462 9.707 6.77 6.77 10.392 15.73 10.392 25.912s-3.622 19.14-10.348 25.866a31.52 31.52 0 0 1-22.531 9.752H83.567V1.37zM227.41 0v17.81h11.645v11.644h-11.644v43.153h-12.33V29.454h-10.274V17.809h10.274V0zm191.11 4.11h-6.85v17.81h-10.274v6.849h10.274v42.468h6.85V28.77h17.124v42.468h7.535V28.77h10.96v-6.85h-10.96V4.11h-7.535v17.81H418.52zm65.758 15.754c-6.85 0-13.015 2.055-17.81 6.85q-6.165 7.193-6.165 18.494c0 6.85 2.055 13.015 6.85 17.81s10.275 7.534 17.81 7.534q9.247 0 14.384-4.11c3.425-2.74 6.165-6.85 8.22-10.959h-8.22q-4.11 8.22-14.384 8.22c-4.795 0-8.905-1.37-11.645-4.795-3.425-2.74-4.795-6.165-5.48-10.96h41.099v-2.74q0-11.302-6.165-18.494c-4.795-4.795-10.96-6.85-18.494-6.85m-113.706 0c-7.535 0-13.7 2.055-17.81 6.85-4.795 4.795-6.85 10.96-6.85 18.494 0 6.85 2.055 13.015 6.85 17.81s10.96 7.534 17.81 7.534q9.247 0 14.384-4.11c4.11-2.74 6.85-6.85 8.22-10.959h-8.22c-2.74 5.48-7.535 8.22-13.7 8.22-5.48 0-8.904-1.37-12.329-4.795-2.74-2.74-4.795-6.165-5.48-10.96h41.099v-2.74q0-11.302-6.165-18.494c-4.795-4.795-10.96-6.85-17.81-6.85m-52.058 0c-6.165 0-10.96.685-14.385 3.425-2.74 2.74-4.795 6.165-4.795 10.275 0 3.425.685 5.48 2.74 6.85q2.055 3.081 6.165 4.11l7.535 2.74 8.22 2.054c2.054 0 4.11 1.37 5.48 2.055 2.054 1.37 2.74 2.74 2.74 4.795 0 3.425-1.37 5.48-4.796 6.85l-4.11.685-4.794.685-4.795-1.37c-4.795-1.37-7.535-4.11-7.535-8.905h-8.22c.685 4.795 2.74 8.22 6.165 11.645 3.425 2.74 8.905 4.794 15.754 4.794q9.248 0 14.385-4.11c3.425-2.054 5.48-6.164 5.48-10.959 0-2.74-.685-5.48-2.74-6.85-1.37-2.055-3.425-3.425-6.165-4.795l-7.535-2.055-8.22-2.054-6.164-2.055c-1.37-1.37-2.055-2.74-2.055-4.795 0-4.795 4.11-6.85 11.645-6.85s11.644 2.74 12.33 7.535h6.849c0-3.986-1.932-7.327-4.548-9.4l-.247-.19q-5.138-4.11-14.384-4.11m-54.114 0c-7.534 0-13.014 2.055-17.809 6.85q-6.165 7.193-6.165 18.494c0 6.85 2.055 13.015 6.165 17.81 4.795 4.795 10.275 7.534 17.125 7.534 8.22 0 13.699-3.424 17.809-8.904v8.22h7.535v-49.32h-7.535v7.535c-4.11-5.48-9.59-8.22-17.125-8.22m-89.046 0c-7.535 0-13.7 2.055-17.81 6.85-4.794 4.795-6.85 10.96-6.85 18.494 0 6.85 2.056 13.015 6.85 17.81 4.11 4.795 10.275 7.534 17.125 7.534 7.534 0 13.7-3.424 17.81-8.904v8.22h6.849V20.548h-6.85v7.535c-4.11-5.48-10.275-8.22-17.124-8.22M224.672 2.74h-6.85v17.81h-10.274v6.164h10.274v43.153h6.85V26.714h11.645v-6.165h-11.645zM113.706 4.11h-27.4v65.757h27.4a28.77 28.77 0 0 0 20.55-8.904c6.164-6.165 9.589-14.385 9.589-23.974s-3.425-17.81-9.59-23.974a28.77 28.77 0 0 0-20.064-8.897zm151.38 21.92c5.48 0 9.59 2.054 12.329 5.479 3.425 3.425 4.795 8.22 4.795 13.7 0 4.794-1.37 9.589-4.795 13.014-2.74 3.425-6.85 5.48-12.33 5.48s-9.59-2.055-13.014-5.48c-2.74-3.425-4.11-8.22-4.11-13.015 0-5.48 1.37-10.274 4.11-13.7 3.425-3.424 7.535-5.479 13.014-5.479m-89.732 0c5.48 0 9.59 2.054 13.014 5.479 2.74 3.425 4.11 8.22 4.11 13.7 0 4.794-1.37 9.589-4.11 13.014-3.425 3.425-7.535 5.48-13.014 5.48-4.795 0-9.59-2.055-12.33-5.48-3.425-3.425-4.795-8.22-4.795-13.015 0-5.48 1.37-10.274 4.795-13.7 2.74-3.424 7.535-5.479 12.33-5.479m-61.648-14.385c6.165 0 12.33 2.055 16.44 7.534 4.11 4.795 6.164 10.96 6.164 17.81s-2.055 13.014-6.165 17.809c-4.11 5.48-10.274 7.535-16.44 7.535H93.843V11.645zm151.38 17.124c-4.342 0-7.762 1.458-10.847 4.45l-.119.116-.083.107c-2.11 2.764-3.274 6.698-3.334 11.385l-.002.381c0 4.256 1.2 8.274 3.325 11.067l.094.12.12.118c3.007 2.917 6.333 4.376 10.522 4.447l.323.003c4.479 0 7.874-1.556 10.19-4.452l.095-.118.108-.107c2.642-2.643 3.992-6.542 3.992-11.078 0-4.99-1.229-8.832-3.745-11.507l-.355-.362-.094-.119c-2.317-2.895-5.712-4.451-10.19-4.451m-89.732 0c-4.056 0-8.027 1.747-10.19 4.451l-.095.119-.107.107c-2.683 2.683-3.993 6.611-3.993 11.762 0 4.536 1.35 8.435 3.993 11.078l.107.107.095.118c2.163 2.705 6.134 4.452 10.19 4.452 4.341 0 7.76-1.458 10.846-4.45l.119-.118.094-.12c2.064-2.713 3.256-6.583 3.322-10.702l.003-.365c0-4.855-1.17-8.927-3.336-11.766l-.084-.107-.118-.116c-3.008-2.917-6.334-4.376-10.522-4.447zm-61.648-14.385H96.582v45.209h17.124c5.906 0 10.82-2.039 14.066-6.201l.235-.31.058-.067c3.62-4.222 5.505-9.723 5.505-16.026 0-6.17-1.806-11.57-5.276-15.755l-.287-.34-.054-.07c-3.241-4.323-8.23-6.44-14.247-6.44M353.447 41.1c.728-8.81 8.293-15.468 17.125-15.07 4.11 0 8.22 1.37 10.96 4.795 3.424 2.055 4.794 6.165 5.48 10.275zm130.83-15.07c4.795 0 8.905 1.37 11.645 4.795 2.74 2.055 4.795 6.165 5.48 10.275h-33.564c.714-8.54 7.87-15.1 16.44-15.07m0 2.74a13.71 13.71 0 0 0-13.038 9.315l-.09.275h26.697l-.072-.194c-.824-2.139-2.018-3.964-3.331-5.021l-.165-.128-.278-.209-.217-.272c-2.028-2.534-5.177-3.766-9.505-3.766m-127.454 9.375-.07.215h26.83l-.009-.032c-.744-2.43-1.81-4.096-3.292-5.054l-.16-.1-.423-.253-.307-.385c-1.927-2.408-4.904-3.68-8.451-3.762l-.493-.007c-6.251-.282-11.742 3.679-13.625 9.378"></path><path fill-opacity=".3" d="M113.706 4.11a28.77 28.77 0 0 1 20.55 8.905c6.164 6.164 9.589 14.384 9.589 23.974s-3.425 17.809-9.59 23.974a28.77 28.77 0 0 1-20.55 8.904H86.308V4.11zm0 58.223c6.165 0 12.33-2.055 16.44-7.535 4.11-4.795 6.164-10.96 6.164-17.81s-2.055-13.014-6.165-17.809c-4.11-5.48-10.274-7.534-16.44-7.534H93.843v50.688zm78.772-.685c-4.11 5.48-10.275 8.904-17.81 8.904-6.849 0-13.014-2.74-17.124-7.534-4.794-4.795-6.85-10.96-6.85-17.81 0-7.534 2.056-13.7 6.85-18.494 4.11-4.795 10.275-6.85 17.81-6.85 6.85 0 13.014 2.74 17.124 8.22v-7.535h6.85v49.318h-6.85zm-17.124 2.055c5.48 0 9.59-2.055 13.014-5.48 2.74-3.425 4.11-8.22 4.11-13.015 0-5.48-1.37-10.274-4.11-13.7-3.425-3.424-7.535-5.479-13.014-5.479-4.795 0-9.59 2.055-12.33 5.48-3.425 3.425-4.795 8.22-4.795 13.7 0 4.794 1.37 9.589 4.795 13.014 2.74 3.425 7.535 5.48 12.33 5.48m42.468 6.164V26.714h-10.274v-6.165h10.274V2.74h6.85v17.81h11.645v6.165h-11.645v43.153zm63.703-8.22c-4.11 5.48-9.59 8.905-17.81 8.905-6.85 0-12.329-2.74-17.124-7.534-4.11-4.795-6.165-10.96-6.165-17.81q0-11.302 6.165-18.494c4.795-4.795 10.275-6.85 17.81-6.85s13.014 2.74 17.124 8.22v-7.535h7.535v49.318h-7.535zm-16.44 2.056c5.48 0 9.59-2.055 12.33-5.48 3.425-3.425 4.795-8.22 4.795-13.015 0-5.48-1.37-10.274-4.795-13.7-2.74-3.424-6.85-5.479-12.33-5.479s-9.59 2.055-13.014 5.48c-2.74 3.425-4.11 8.22-4.11 13.7 0 4.794 1.37 9.589 4.11 13.014 3.425 3.425 7.535 5.48 13.014 5.48m65.758-30.14c-.685-4.794-4.795-7.534-12.33-7.534-7.534 0-11.644 2.055-11.644 6.85 0 2.055.685 3.425 2.055 4.795l6.165 2.055 8.22 2.054 7.534 2.055c2.74 1.37 4.795 2.74 6.165 4.795 2.055 1.37 2.74 4.11 2.74 6.85 0 4.795-2.055 8.905-5.48 10.96q-5.137 4.11-14.385 4.11c-6.85 0-12.33-2.055-15.754-4.795-3.425-3.425-5.48-6.85-6.165-11.645h8.22c0 4.795 2.74 7.535 7.535 8.905l4.795 1.37 4.794-.685 4.11-.685c3.425-1.37 4.795-3.425 4.795-6.85 0-2.055-.685-3.425-2.74-4.795-1.37-.685-3.425-2.055-5.48-2.055l-8.22-2.055-7.534-2.74q-4.11-1.027-6.165-4.11c-2.055-1.37-2.74-3.424-2.74-6.85 0-4.11 2.055-7.534 4.795-10.274 3.425-2.74 8.22-3.425 14.385-3.425q9.247 0 14.384 4.11c2.74 2.055 4.795 5.48 4.795 9.59zm40.414 30.14c6.164 0 10.96-2.74 13.7-8.22h8.219c-1.37 4.11-4.11 8.22-8.22 10.96q-5.138 4.11-14.384 4.11c-6.85 0-13.015-2.74-17.81-7.535s-6.85-10.96-6.85-17.81c0-7.534 2.055-13.7 6.85-18.494 4.11-4.795 10.275-6.85 17.81-6.85 6.85 0 13.014 2.055 17.809 6.85q6.165 7.193 6.165 18.494v2.74h-41.099c.685 4.795 2.74 8.22 5.48 10.96 3.425 3.425 6.85 4.795 12.33 4.795m-.685-37.674c-8.832-.398-16.397 6.26-17.125 15.07h33.564c-.685-4.11-2.055-8.22-5.48-10.275-2.74-3.425-6.85-4.795-10.96-4.795m114.39 37.674q10.275 0 14.385-8.22h8.22c-2.055 4.11-4.795 8.22-8.22 10.96q-5.138 4.11-14.384 4.11c-7.535 0-13.015-2.74-17.81-7.535s-6.85-10.96-6.85-17.81q0-11.302 6.165-18.494c4.795-4.795 10.96-6.85 17.81-6.85 7.534 0 13.7 2.055 18.494 6.85q6.165 7.193 6.165 18.494v2.74h-41.099c.685 4.795 2.055 8.22 5.48 10.96 2.74 3.425 6.85 4.795 11.645 4.795m-.684-37.674c-8.57-.03-15.726 6.53-16.44 15.07h33.564c-.685-4.11-2.74-8.22-5.48-10.275-2.74-3.425-6.85-4.795-11.644-4.795M411.67 71.237V28.77h-10.274v-6.85h10.274V4.11h6.85v17.81h7.535v6.85h-7.535v42.468zm23.974 0V28.77h-9.59v-6.85h9.59V4.11h7.535v17.81h10.96v6.85h-10.96v42.468z"></path><g><path d="M62.333 1.37c4.866 0 8.904 4.038 8.904 8.905v53.428c0 4.866-4.038 8.904-8.904 8.904H8.905C4.038 72.607 0 68.57 0 63.703V10.275C0 5.408 4.038 1.37 8.905 1.37zm6.165 60.278H2.74v2.055c0 3.293 2.712 6.064 5.986 6.162l.179.003h53.428c3.353 0 6.165-2.812 6.165-6.165zm0-11.645H2.74v8.905h65.758zm0-11.644H2.74v8.904h65.758zm0-11.645H2.74v8.905h65.758zm0-12.33H2.74v9.59h65.758zM62.333 4.11H8.905c-3.355 0-6.165 2.81-6.165 6.165v1.37h65.758v-1.37c0-3.294-2.712-6.065-5.986-6.162z"></path><path fill-opacity=".3" d="M13.015 13.015c.756 0 1.37.613 1.37 1.37v56.852a1.37 1.37 0 1 1-2.74 0V14.385c0-.757.613-1.37 1.37-1.37m34.248 0c.757 0 1.37.613 1.37 1.37v56.852a1.37 1.37 0 1 1-2.74 0V14.385c0-.757.614-1.37 1.37-1.37m10.96 0c.757 0 1.37.613 1.37 1.37v56.852a1.37 1.37 0 0 1-2.74 0V14.385c0-.757.613-1.37 1.37-1.37m-34.249-1.37c.757 0 1.37.613 1.37 1.37v56.853a1.37 1.37 0 1 1-2.74 0V13.015c0-.757.614-1.37 1.37-1.37m11.645 0c.756 0 1.37.613 1.37 1.37v56.853a1.37 1.37 0 0 1-2.74 0V13.015c0-.757.613-1.37 1.37-1.37"></path><path fill-opacity=".3" d="M69.867 13.015H1.37C2.055 5.48 3.425 2.74 10.96 2.74h48.633c8.22 0 10.274 2.74 10.274 10.275"></path></g></g>', 1)
    ]), 4));
  }
});
export {
  z as _
};