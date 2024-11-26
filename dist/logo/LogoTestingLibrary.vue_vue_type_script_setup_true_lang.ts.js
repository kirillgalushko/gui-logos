import { defineComponent as h, computed as s, openBlock as o, createElementBlock as f, normalizeStyle as i, createStaticVNode as c } from "vue";
const E = /* @__PURE__ */ h({
  __name: "LogoTestingLibrary",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, a = s(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, p) => (o(), f("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: i(a.value)
    }, p[0] || (p[0] = [
      c('<defs><radialGradient id="testing-library-gui-asset-a" cx="50.279%" cy="49.847%" r="50.334%" fx="50.279%" fy="49.847%" gradientTransform="matrix(1 0 0 .99252 0 .004)"><stop offset="0%" stop-color="#E33332"></stop><stop offset="20%" stop-color="#E03330"></stop><stop offset="38%" stop-color="#D52E2C"></stop><stop offset="54%" stop-color="#C32827"></stop><stop offset="71%" stop-color="#A91F23"></stop><stop offset="86%" stop-color="#89181A"></stop><stop offset="100%" stop-color="#640E0E"></stop></radialGradient><radialGradient id="testing-library-gui-asset-d" cx="50.879%" cy="49.585%" r="91.636%" fx="50.879%" fy="49.585%" gradientTransform="matrix(1 0 0 .41938 0 .288)"><stop offset="0%" stop-color="#F7B3C5"></stop><stop offset="19%" stop-color="#F7B0C2"></stop><stop offset="38%" stop-color="#F6A4B6"></stop><stop offset="58%" stop-color="#F390A5"></stop><stop offset="79%" stop-color="#E7728B"></stop><stop offset="99%" stop-color="#DC4D6C"></stop><stop offset="100%" stop-color="#DA4B6A"></stop></radialGradient><radialGradient id="testing-library-gui-asset-e" cx="50.543%" cy="49.742%" r="56.122%" fx="50.543%" fy="49.742%" gradientTransform="matrix(.81559 0 0 1 .093 0)"><stop offset="0%" stop-color="#F7B3C5"></stop><stop offset="19%" stop-color="#F7B0C2"></stop><stop offset="38%" stop-color="#F6A4B6"></stop><stop offset="58%" stop-color="#F390A5"></stop><stop offset="79%" stop-color="#E7728B"></stop><stop offset="99%" stop-color="#DC4D6C"></stop><stop offset="100%" stop-color="#DA4B6A"></stop></radialGradient><radialGradient id="testing-library-gui-asset-h" cx="51.992%" cy="49.582%" r="91.664%" fx="51.992%" fy="49.582%" gradientTransform="matrix(1 0 0 .41925 0 .288)"><stop offset="0%" stop-color="#F7B3C5"></stop><stop offset="19%" stop-color="#F7B0C2"></stop><stop offset="38%" stop-color="#F6A4B6"></stop><stop offset="58%" stop-color="#F390A5"></stop><stop offset="79%" stop-color="#E7728B"></stop><stop offset="99%" stop-color="#DC4D6C"></stop><stop offset="100%" stop-color="#DA4B6A"></stop></radialGradient><linearGradient id="testing-library-gui-asset-b" x1=".003%" x2="100%" y1="49.969%" y2="49.969%"><stop offset="0%" stop-color="#F7B3C5"></stop><stop offset="19%" stop-color="#F7B0C2"></stop><stop offset="38%" stop-color="#F6A4B6"></stop><stop offset="58%" stop-color="#F390A5"></stop><stop offset="79%" stop-color="#E7728B"></stop><stop offset="99%" stop-color="#DC4D6C"></stop><stop offset="100%" stop-color="#DA4B6A"></stop></linearGradient><linearGradient id="testing-library-gui-asset-c" x1=".025%" x2="100.015%" y1="26.463%" y2="26.463%"><stop offset="0%" stop-color="#F7B3C5"></stop><stop offset="19%" stop-color="#F7B0C2"></stop><stop offset="38%" stop-color="#F6A4B6"></stop><stop offset="58%" stop-color="#F390A5"></stop><stop offset="79%" stop-color="#E7728B"></stop><stop offset="99%" stop-color="#DC4D6C"></stop><stop offset="100%" stop-color="#DA4B6A"></stop></linearGradient><linearGradient id="testing-library-gui-asset-f" x1="0%" x2="99.996%" y1="49.997%" y2="49.997%"><stop offset="0%" stop-color="#DA4B6A"></stop><stop offset="1%" stop-color="#DC4D6C"></stop><stop offset="21%" stop-color="#E7728B"></stop><stop offset="42%" stop-color="#F390A5"></stop><stop offset="62%" stop-color="#F6A4B6"></stop><stop offset="81%" stop-color="#F7B0C2"></stop><stop offset="100%" stop-color="#F7B3C5"></stop></linearGradient><linearGradient id="testing-library-gui-asset-g" x1="-.004%" x2="99.975%" y1="26.478%" y2="26.478%"><stop offset="0%" stop-color="#DA4B6A"></stop><stop offset="1%" stop-color="#DC4D6C"></stop><stop offset="21%" stop-color="#E7728B"></stop><stop offset="42%" stop-color="#F390A5"></stop><stop offset="62%" stop-color="#F6A4B6"></stop><stop offset="81%" stop-color="#F7B0C2"></stop><stop offset="100%" stop-color="#F7B3C5"></stop></linearGradient></defs><g><path fill="url(#testing-library-gui-asset-a)" d="M249.81 103.82c6.297 24.527-20.754 53.25-54.587 45.112 43.093-31.342 23.391-71.489.616-90.748-24.695-20.888-.788-27.58 7.177-20.018-.192-15.257-53.91-11.809-6.924 37.184 24.14 25.164-4.337 80.83-38.261 38.5q-.421-.577-.758-1.203c5.478-2.275 9.977-8.463 9.977-18.654a25.4 25.4 0 0 0-2.103-10.494c3.922-7.987 7.521-17.53 7.521-29.48C172.468 25.456 153.938 0 127.99 0c-25.95 0-44.478 25.457-44.478 54.018 0 11.95 3.609 21.504 7.53 29.491a25.3 25.3 0 0 0-2.102 10.515c0 10.19 4.488 16.378 9.977 18.653q-.343.628-.768 1.203c-33.925 42.33-62.41-13.345-38.261-38.5 46.995-48.993-6.743-52.43-6.935-37.184 7.966-7.552 31.883-.86 7.177 20.018-22.774 19.209-42.456 59.366.617 90.748-33.824 8.139-60.864-20.584-54.587-45.111-10.978 20.22-2.84 58.456 40.738 65.837-46.389 10.646-32.429 74.703.233 64.451-28.012-1.648-24.898-33.889-13.566-43.594 12.535-10.747 28.385-3.175 57.286-8.018-.314 26.024 25.029 40.006 11.736 54.908-14.082 15.772-33.359-1.263-30.387-16.762-13.444 27.823 24.837 49.964 41.618 17.652 12.929-24.86-21.43-69.76 14.152-69.76s1.213 44.849 14.152 69.76c16.78 32.352 55.062 10.17 41.617-17.652 2.942 15.509-16.305 32.534-30.376 16.762-13.233-14.942 12.04-28.925 11.766-54.948 28.89 4.843 44.741-2.74 57.266 8.017 11.352 9.706 14.455 41.947-13.556 43.595 32.712 10.292 46.662-53.776.253-64.452 43.548-7.37 51.696-45.617 40.718-65.827"></path><path fill="url(#testing-library-gui-asset-b)" d="M34.1 192.486c12.525-10.747 26.91-1.345 56.78-9.999 0 0 .415-7.987.8-13.911-9.098 6.854-25.737 5.964-39.626 7.997-45.712 6.703-35.563 61.61-4.923 57.566-22.674-3.72-24.372-31.937-13.03-41.653"></path><path fill="url(#testing-library-gui-asset-c)" d="M93.438 153.137c5.055-7.815 5.682-20.412-4.538-8.957-34.532 38.691-94.446 7.077-82.71-40.35-12.635 17.157-6.57 62.016 40.738 65.827 11.878-3.943 36.331-.89 46.51-16.52"></path><path fill="url(#testing-library-gui-asset-d)" d="M60.757 148.932s12.13-1.244 19.995-10.485c-31.974 11.89-58.206-39.682-18.196-74.541C93.671 36.83 62 26.155 52.923 38.166c3.346-3.306 30.457-1.436 5.752 19.451-22.735 19.26-46.824 59.245 2.082 91.315"></path><path fill="url(#testing-library-gui-asset-e)" d="M150.987 242.652c-13.313-14.902 0-28.359 2.446-51.844 1.618-15.843-4.296-33.364-25.433-33.364s-27.06 17.551-25.433 33.364c2.416 23.485 15.749 36.942 2.446 51.844-14.071 15.762-40.384-.667-32.783-22.02-18.71 31.069 28.78 50.41 45.56 18.107 12.92-24.87-25.373-68.455 10.21-68.455s-2.71 43.585 10.21 68.455c16.78 32.302 64.26 12.962 45.55-18.107 7.591 21.353-18.702 37.772-32.773 22.02"></path><path fill="url(#testing-library-gui-asset-f)" d="M203.946 176.583c-13.899-2.022-30.548-1.153-39.626-8.007.395 5.924.8 13.921.8 13.921 29.86 8.644 44.245-.768 56.77 9.989 11.341 9.706 9.643 37.933-13.071 41.613 30.68 4.084 40.839-50.823-4.873-57.516"></path><path fill="url(#testing-library-gui-asset-g)" d="M249.81 103.82c11.736 47.417-48.178 79.051-82.72 40.34-10.22-11.455-9.623 1.152-4.528 8.967 10.179 15.63 34.622 12.577 46.5 16.52 47.318-3.801 53.383-48.67 40.748-65.827"></path><path fill="url(#testing-library-gui-asset-h)" d="M175.248 138.447c7.865 9.241 19.985 10.485 19.985 10.485 48.906-32.03 24.817-72.065 2.022-91.315-24.716-20.887 2.395-22.757 5.741-19.451-9.098-12.011-40.748-1.335-9.633 25.74 40.08 34.86 13.849 86.43-18.115 74.541"></path><path fill="#4B1313" d="M141.141 35.537c0 7.886-13.141 7.886-13.141 0s13.141-7.876 13.141 0m-20.692 7.219c0 5.429-9.027 5.429-9.027 0s9.027-5.43 9.027 0m5.762-24.972c0 5.439-9.037 5.439-9.037 0 0-5.44 9.037-5.389 9.037 0m-18.823 38.53c0 2.719-4.518 2.719-4.518 0 0-2.72 4.518-2.72 4.518 0m.86-26.691c0 3.76-6.248 3.76-6.248 0 0-3.761 6.248-3.751 6.248 0m17.963 33.07c0 3.77-6.247 3.77-6.247 0s6.247-3.741 6.247 0" opacity=".3"></path><path fill="#302D3B" d="M111.947 93.993c0 14.337-16.254 14.337-16.254 0s16.254-14.336 16.254 0"></path><path fill="#6F828A" d="M103.618 90.344a2.507 2.507 0 1 1-4.994 0 2.507 2.507 0 1 1 4.994 0"></path><path fill="#302D3B" d="M160.348 93.993c0 14.337-16.255 14.337-16.255 0s16.255-14.336 16.255 0"></path><path fill="#6F828A" d="M151.968 90.344a2.507 2.507 0 1 1-4.994 0 2.507 2.507 0 1 1 4.994 0"></path><path fill="#9E1C20" d="M120.449 122.524c0 8.169-.677 14.781-1.456 14.781s-1.405-6.612-1.395-14.77c.01-8.16.677-14.782 1.466-14.782s1.405 6.602 1.385 14.771"></path><ellipse cx="128.263" cy="122.514" fill="#9E1C20" rx="1.072" ry="17.359"></ellipse><path fill="#9E1C20" d="M138.392 122.332c0 7.967-.647 14.427-1.415 14.427-.769 0-1.345-6.44-1.335-14.417s.667-14.427 1.415-14.427 1.365 6.45 1.335 14.417"></path><path fill="#F389A4" d="M199.044 145.1c-1.678-2.224 8.087-9.564 9.785-7.33s-8.117 9.564-9.785 7.33"></path><path fill="#E34E70" d="M201.47 143.725c-.758-1.011 4.59-5.055 5.357-4.044.769 1.01-4.589 5.065-5.357 4.044"></path><path fill="#F389A4" d="M204.826 135.323c-2.022-1.94 5.408-9.574 7.41-7.633s-5.449 9.585-7.41 7.633"></path><path fill="#E34E70" d="M206.726 133.837c-.92-.89 3.144-5.055 4.044-4.175s-3.134 5.065-4.044 4.175"></path><path fill="#F7B3C5" d="M215.35 121.16c-2.67-.82.434-11 3.102-10.182 2.67.82-.485 11.01-3.103 10.181"></path><path fill="#E34E70" d="M216.39 118.955c-1.223-.374.485-5.934 1.688-5.57s-.485 5.944-1.688 5.57"></path><path fill="#F389A4" d="M188.046 144.726c-1.183-2.528 9.542-7.542 10.715-5.005 1.172 2.538-9.543 7.532-10.715 5.005"></path><path fill="#E34E70" d="M190.674 143.917c-.536-1.163 5.317-3.902 5.863-2.75s-5.388 3.903-5.863 2.75"></path><path fill="#F7B3C5" d="M214.935 130.309c-2.335-1.507 3.447-10.454 5.772-8.927 2.325 1.526-3.417 10.443-5.772 8.927"></path><path fill="#E34E70" d="M216.562 128.479c-1.071-.698 2.093-5.58 3.154-4.893s-2.092 5.58-3.154 4.893"></path><path fill="#F389A4" d="M171.78 159.112c1.082-2.76 11.12 1.193 10.11 3.964-1.012 2.77-11.201-1.193-10.11-3.964"></path><path fill="#E34E70" d="M173.924 160.336c.495-1.264 6.004.91 5.52 2.163-.486 1.254-6.026-.87-5.52-2.163"></path><path fill="#F389A4" d="M185.923 162.358c.758-3.448 11.12-1.153 10.371 2.295s-11.14 1.152-10.371-2.295"></path><path fill="#E34E70" d="M188.177 163.369c.354-1.587 6.065-.324 5.681 1.243s-6.035.273-5.681-1.243"></path><path fill="#F389A4" d="M163.006 147.102c2.548-2.81 11.302 5.166 8.765 7.956-2.538 2.79-11.312-5.156-8.765-7.956"></path><path fill="#E34E70" d="M164.664 149.215c1.173-1.284 5.954 3.083 4.792 4.357-1.163 1.274-5.954-3.033-4.792-4.357"></path><path fill="#F7B3C5" d="M199.883 166.23c0-2.406 8.976-2.224 8.926.182s-8.987 2.234-8.926-.182"></path><path fill="#E34E70" d="M201.884 166.584c0-1.112 4.903-1.011 4.893.08-.01 1.093-4.913 1.012-4.893-.08"></path><path fill="#F389A4" d="M166.726 175.703c.758-3.447 11.12-1.152 10.382 2.295s-11.14 1.153-10.382-2.295"></path><path fill="#E34E70" d="M168.98 176.664c.354-1.588 6.066-.334 5.682 1.243s-6.035.314-5.681-1.243"></path><path fill="#F389A4" d="M121.692 164.45c0-3.528 12.555-3.7 12.606-.161.05 3.538-12.555 3.7-12.606.162"></path><path fill="#E34E70" d="M124.553 164.865c0-1.617 6.864-1.708 6.894-.101.03 1.608-6.874 1.709-6.894.101"></path><path fill="#F389A4" d="M137.957 168.677c2.456-2.538 10.109 4.893 7.612 7.42s-10.068-4.883-7.612-7.42"></path><path fill="#E34E70" d="M139.362 170.678c1.142-1.162 5.297 2.902 4.185 4.044-1.112 1.143-5.297-2.901-4.185-4.044"></path><path fill="#F7B3C5" d="M150.118 178.716c3.518.192 2.931 10.818-.597 10.626s-2.931-10.808.597-10.626"></path><path fill="#E34E70" d="M149.531 181.092c1.618.09 1.294 5.904-.303 5.813-1.597-.09-1.304-5.904.303-5.813"></path><path fill="#F7B3C5" d="M144.063 189.443c3.457.707 1.334 11.12-2.123 10.443s-1.334-11.14 2.123-10.443"></path><path fill="#E34E70" d="M143.163 191.677c1.587.334.425 6.066-1.152 5.722s-.435-6.005 1.152-5.722"></path><path fill="#F7B3C5" d="M147.48 200.533c3.457.708 1.334 11.122-2.123 10.434-3.458-.687-1.335-11.131 2.122-10.434"></path><path fill="#E34E70" d="M146.56 202.798c1.587.324.434 6.066-1.153 5.712s-.414-6.035 1.153-5.712"></path><path fill="#F7B3C5" d="M139.564 212.1c3.447.697 1.335 11.12-2.122 10.423-3.458-.698-1.355-11.131 2.122-10.424"></path><path fill="#E34E70" d="M138.634 214.364c1.597.334.435 6.066-1.142 5.712s-.394-6.035 1.142-5.712"></path><path fill="#F7B3C5" d="M141.525 224.292c3.518.132 3.124 10.767-.404 10.636s-3.134-10.767.404-10.636"></path><path fill="#E34E70" d="M140.98 226.688c1.627.071 1.405 5.884-.203 5.824-1.607-.061-1.395-5.884.203-5.824"></path><path fill="#F7B3C5" d="M139.766 239.356c2.74-2.224 8.35 4.691 5.6 6.916-2.749 2.224-8.339-4.702-5.6-6.916"></path><path fill="#E34E70" d="M140.686 241.216c1.264-1.01 4.327 2.77 3.033 3.782-1.294 1.01-4.276-2.77-3.033-3.782"></path><path fill="#F389A4" d="M149.006 245.908c1.415-2.568 7.885 1.01 6.47 3.558s-7.885-.99-6.47-3.558"></path><path fill="#E34E70" d="M150.29 247.04c.647-1.183 4.185.768 3.548 1.93-.637 1.164-4.195-.757-3.548-1.93"></path><path fill="#F389A4" d="M157.174 253.733c.212-2.66 6.56-2.144 6.338.515-.223 2.66-6.56 2.134-6.338-.515"></path><path fill="#E34E70" d="M158.579 254.178c.1-1.214 3.568-.94 3.477.273-.09 1.213-3.578.92-3.477-.273"></path><path fill="#F389A4" d="M166.05 252.145c-.567-2.365 5.053-3.73 5.64-1.364s-5.065 3.73-5.64 1.364"></path><path fill="#E34E70" d="M167.424 252.125c-.253-1.071 2.83-1.82 3.093-.758s-2.86 1.84-3.093.758"></path><path fill="#F389A4" d="M174.56 252.338c-.93-2.255 4.438-4.48 5.358-2.225s-4.407 4.429-5.357 2.225"></path><path fill="#E34E70" d="M175.885 252.065c-.415-1.011 2.517-2.235 2.941-1.224.425 1.011-2.517 2.255-2.941 1.224"></path><path fill="#F389A4" d="M179.352 246.332c-1.78-1.658 2.184-5.914 3.953-4.256s-2.174 5.914-3.953 4.256"></path><path fill="#E34E70" d="M180.474 245.574c-.809-.768 1.345-3.094 2.153-2.336.809.759-1.344 3.094-2.153 2.336"></path><path fill="#F389A4" d="M185.892 238.73c-2.335-.668-.717-6.259 1.618-5.571 2.335.687.707 6.258-1.618 5.57"></path><path fill="#E34E70" d="M186.55 237.557c-1.011-.314-.183-3.367.879-3.033 1.061.333.212 3.356-.88 3.033"></path><path fill="#F389A4" d="M179.635 184.165c.303-3.508 10.897-2.598 10.584.93s-10.897 2.599-10.584-.93"></path><path fill="#E34E70" d="M181.99 184.822c.152-1.617 5.934-1.102 5.793.496-.142 1.597-5.934 1.102-5.793-.496"></path><path fill="#F7B3C5" d="M192.352 180.465c.07-3.468 10.695-3.255 10.614.222-.08 3.478-10.695 3.256-10.614-.222"></path><path fill="#E34E70" d="M194.717 180.96c0-1.597 5.843-1.466 5.813.112-.03 1.577-5.813 1.506-5.813-.112"></path><path fill="#F7B3C5" d="M204.391 184.863c.758-3.336 10.018-1.223 9.23 2.133-.789 3.357-10.008 1.223-9.23-2.133"></path><path fill="#E34E70" d="M206.383 185.773c.353-1.527 5.408-.364 5.054 1.152s-5.408.384-5.054-1.152"></path><path fill="#FACFDA" d="M217.25 185.116c1.566-3.033 9.3.93 7.712 4.044-1.587 3.114-9.28-.981-7.712-4.044"></path><path fill="#E34E70" d="M218.796 186.41c.728-1.406 4.933.788 4.236 2.163s-4.954-.768-4.236-2.163"></path><path fill="#FACFDA" d="M225.397 193.87c2.558-1.152 5.49 5.34 2.922 6.492s-5.49-5.328-2.922-6.491"></path><path fill="#E34E70" d="M225.73 195.499c1.173-.536 2.77 3.033 1.618 3.538-1.152.506-2.79-3.023-1.617-3.538"></path><path fill="#FACFDA" d="M232.564 201.706c2.8 0 2.78 7.128 0 7.077-2.78-.05-2.81-7.087 0-7.077"></path><path fill="#E34E70" d="M232.19 203.324c1.304 0 1.284 3.892 0 3.892s-1.274-3.902 0-3.892"></path><path fill="#FACFDA" d="M229.825 210.886c2.497.455 1.324 6.835-1.183 6.36-2.507-.476-1.334-6.795 1.183-6.36"></path><path fill="#E34E70" d="M229.228 212.302c1.163.222.516 3.7-.626 3.488-1.143-.213-.526-3.7.626-3.488"></path><path fill="#FACFDA" d="M230.098 220.117c2.021 1.122-.85 6.238-2.871 5.055s.849-6.198 2.87-5.055"></path><path fill="#E34E70" d="M229.228 221.118c.92.525-.647 3.316-1.567 2.79s.637-3.306 1.567-2.79"></path><path fill="#FACFDA" d="M224.093 226.91c1.405 1.366-2.072 4.945-3.477 3.56s2.072-4.944 3.477-3.56"></path><path fill="#E34E70" d="M223.133 227.538c.647.636-1.264 2.578-1.9 1.95-.638-.626 1.253-2.577 1.9-1.95"></path><path fill="#F7B3C5" d="M210.598 164.774c-.799-3.367 9.543-5.823 10.351-2.436.809 3.386-9.542 5.833-10.351 2.436"></path><path fill="#E34E70" d="M213.054 164.663c-.364-1.557 5.277-2.892 5.651-1.355s-5.297 2.892-5.65 1.355"></path><path fill="#FACFDA" d="M223.85 165.684c-1.01-2.881 9.017-6.4 10.028-3.508 1.011 2.891-9.027 6.41-10.028 3.508"></path><path fill="#E34E70" d="M226.246 165.26c-.465-1.335 5.055-3.246 5.49-1.932.434 1.315-5.025 3.256-5.49 1.931"></path><path fill="#FACFDA" d="M232.898 158.122c-2.022-2.275 5.822-9.423 7.885-7.158s-5.833 9.422-7.885 7.158"></path><path fill="#E34E70" d="M234.94 156.787c-.94-1.01 3.376-4.944 4.306-3.923.93 1.022-3.366 4.954-4.306 3.923"></path><path fill="#FACFDA" d="M245.766 150.792c-2.557-1.699 3.356-10.555 5.904-8.857s-3.377 10.555-5.904 8.857"></path><path fill="#E34E70" d="M247.414 149.002c-1.163-.788 2.072-5.61 3.224-4.852s-2.062 5.62-3.224 4.852"></path><path fill="#FACFDA" d="M249.395 138.164c-2.87-1.081.91-11.03 3.76-9.958 2.851 1.072-.91 11.05-3.76 9.958"></path><path fill="#E34E70" d="M250.608 136.072c-1.314-.506.758-5.945 2.022-5.45s-.718 5.925-2.022 5.45"></path><path fill="#FACFDA" d="M254.682 124.425c-2.244.253-3.103-7.573-.86-7.825 2.245-.253 3.114 7.572.86 7.825"></path><path fill="#E34E70" d="M254.773 122.625c-1.011.101-1.486-4.175-.475-4.276 1.01-.101 1.506 4.155.475 4.276"></path><path fill="#F7B3C5" d="M222.284 113.04c-2.76-.333-1.466-10.908 1.294-10.554s1.465 10.899-1.294 10.555"></path><path fill="#E34E70" d="M222.93 110.695c-1.273-.151-.555-5.934.698-5.783 1.254.152.566 5.935-.697 5.783"></path><path fill="#F7B3C5" d="M218.15 104.579c-2.77.232-3.63-10.383-.84-10.606 2.79-.222 3.63 10.383.84 10.606"></path><path fill="#E34E70" d="M218.31 102.142c-1.273.101-1.728-5.692-.464-5.803 1.263-.111 1.739 5.712.465 5.803"></path><path fill="#F7B3C5" d="M221.131 91.375c-2.527 1.163-6.944-8.513-4.407-9.675s6.955 8.522 4.407 9.675"></path><path fill="#E34E70" d="M220.454 89.04c-1.152.525-3.568-4.752-2.426-5.288s3.588 4.802 2.426 5.287"></path><path fill="#F7B3C5" d="M212.72 83.59c-2.274 1.274-7.075-7.38-4.79-8.644 2.284-1.264 7.085 7.37 4.79 8.644"></path><path fill="#E34E70" d="M211.902 81.477c-1.01.587-3.66-4.135-2.618-4.721 1.041-.587 3.69 4.135 2.618 4.721"></path><path fill="#F7B3C5" d="M211.164 72.924c-1.94 1.517-7.52-5.641-5.56-7.168 1.961-1.527 7.531 5.611 5.56 7.168"></path><path fill="#E34E70" d="M210.153 71.104c-.89.698-3.942-3.215-3.032-3.912s3.932 3.215 3.032 3.912"></path><path fill="#F7B3C5" d="M201.793 68.567c-1.87 1.627-7.793-5.248-5.913-6.865 1.88-1.618 7.763 5.247 5.913 6.865"></path><path fill="#E34E70" d="M200.651 66.807c-.85.749-4.043-3.033-3.235-3.75s4.104 3.012 3.235 3.75"></path><path fill="#F7B3C5" d="M197.538 59.407c-1.689 1.456-6.53-4.166-4.832-5.621s6.53 4.155 4.832 5.62"></path><path fill="#E34E70" d="M196.658 57.94c-.778.668-3.427-2.405-2.648-3.032s3.416 2.376 2.648 3.033"></path><path fill="#F389A4" d="M189.42 57.597c-1.9 1.153-5.752-5.186-3.83-6.349 1.92-1.163 5.761 5.176 3.83 6.35"></path><path fill="#E34E70" d="M188.794 56.01c-.86.526-2.972-2.932-2.103-3.468.87-.536 2.972 2.942 2.103 3.468"></path><path fill="#F389A4" d="M188.652 49.984c-2.133.627-3.78-4.873-1.627-5.51s3.75 4.863 1.627 5.51"></path><path fill="#E34E70" d="M188.51 48.65c-1.01.293-1.87-2.72-.889-3.033.98-.314 1.87 2.74.89 3.033"></path><path fill="#F389A4" d="M182.738 43.858c-2.102-.738-.202-6.158 1.911-5.41s.202 6.168-1.91 5.41"></path><path fill="#E34E70" d="M183.436 42.725c-1.01-.323.08-3.296 1.01-2.952s-.05 3.286-1.01 2.952"></path><path fill="#F389A4" d="M188.086 37.59c-.354-2.205 5.307-3.094 5.66-.88.355 2.214-5.316 3.114-5.66.88"></path><path fill="#E34E70" d="M189.41 37.67c-.162-1.01 2.942-1.486 3.093-.485.152 1-2.931 1.496-3.093.485"></path><path fill="#F389A4" d="M56.966 145.1c1.668-2.224-8.087-9.564-9.795-7.33s8.117 9.564 9.795 7.33"></path><path fill="#E34E70" d="M54.53 143.725c.758-1.011-4.59-5.055-5.357-4.044-.769 1.01 4.589 5.065 5.357 4.044"></path><path fill="#F389A4" d="M51.174 135.323c2.022-1.94-5.408-9.574-7.41-7.633s5.449 9.585 7.41 7.633"></path><path fill="#E34E70" d="M49.274 133.837c.92-.89-3.144-5.055-4.044-4.175s3.134 5.065 4.044 4.175"></path><path fill="#F7B3C5" d="M40.65 121.16c2.67-.82-.434-11-3.102-10.182-2.67.82.485 11.01 3.103 10.181"></path><path fill="#E34E70" d="M39.61 118.955c1.223-.374-.485-5.934-1.688-5.57s.485 5.944 1.688 5.57"></path><path fill="#F389A4" d="M67.965 144.726c1.172-2.528-9.553-7.542-10.726-5.005-1.172 2.538 9.543 7.532 10.726 5.005"></path><path fill="#E34E70" d="M65.377 143.917c.536-1.163-5.317-3.902-5.863-2.75s5.337 3.903 5.863 2.75"></path><path fill="#F7B3C5" d="M41.065 130.309c2.335-1.507-3.447-10.454-5.772-8.927-2.325 1.526 3.417 10.443 5.772 8.927"></path><path fill="#E34E70" d="M39.438 128.479c1.071-.698-2.093-5.58-3.154-4.893s2.092 5.58 3.154 4.893"></path><path fill="#F389A4" d="M84.694 158.81c-1.192-3.034-12.565 1.415-11.372 4.478s12.575-1.426 11.372-4.479"></path><path fill="#E34E70" d="M82.278 160.214c-.556-1.405-6.772 1.011-6.237 2.437s6.783-1.051 6.237-2.437"></path><path fill="#F389A4" d="M70.077 162.358c-.758-3.448-11.12-1.153-10.371 2.295s11.14 1.152 10.371-2.295"></path><path fill="#E34E70" d="M67.823 163.369c-.354-1.587-6.065-.324-5.681 1.243s6.035.273 5.681-1.243"></path><path fill="#F389A4" d="M92.994 147.102c-2.548-2.81-11.302 5.166-8.765 7.956 2.538 2.79 11.312-5.156 8.765-7.956"></path><path fill="#E34E70" d="M91.336 149.215c-1.173-1.284-5.954 3.083-4.792 4.357 1.163 1.274 5.954-3.033 4.792-4.357"></path><path fill="#F7B3C5" d="M57.613 165.957c-.07-2.588-9.239-2.457-9.158.142.08 2.598 9.229 2.466 9.158-.142"></path><path fill="#E34E70" d="M55.551 166.321c0-1.193-5.054-1.102-5.054.07 0 1.174 5.084 1.123 5.054-.07"></path><path fill="#F389A4" d="M89.274 175.703c-.758-3.447-11.12-1.152-10.382 2.295s11.14 1.153 10.382-2.295"></path><path fill="#E34E70" d="M87.02 176.664c-.354-1.588-6.066-.334-5.682 1.243s6.035.314 5.681-1.243"></path><path fill="#F389A4" d="M118.589 169.334c-2.022-2.892-10.736 3.205-8.714 6.066s10.736-3.165 8.714-6.066"></path><path fill="#E34E70" d="M116.88 171.083c-.94-1.325-5.69 2.022-4.78 3.326.909 1.304 5.69-2.012 4.78-3.326"></path><path fill="#F7B3C5" d="M105.882 178.716c-3.518.192-2.931 10.818.597 10.626s2.931-10.808-.597-10.626"></path><path fill="#E34E70" d="M106.469 181.092c-1.618.09-1.294 5.904.303 5.813 1.597-.09 1.304-5.904-.303-5.813"></path><path fill="#F7B3C5" d="M111.937 189.443c-3.457.707-1.334 11.12 2.123 10.443s1.334-11.14-2.123-10.443"></path><path fill="#E34E70" d="M112.837 191.677c-1.587.334-.425 6.066 1.152 5.722s.435-6.005-1.152-5.722"></path><path fill="#F7B3C5" d="M108.52 200.533c-3.457.708-1.334 11.122 2.123 10.434 3.458-.687 1.335-11.131-2.122-10.434"></path><path fill="#E34E70" d="M109.44 202.798c-1.587.324-.434 6.066 1.153 5.712s.414-6.035-1.153-5.712"></path><path fill="#F7B3C5" d="M116.436 212.1c-3.447.697-1.335 11.12 2.122 10.423 3.458-.698 1.355-11.131-2.122-10.424"></path><path fill="#E34E70" d="M117.366 214.364c-1.597.334-.435 6.066 1.142 5.712s.394-6.035-1.142-5.712"></path><path fill="#F7B3C5" d="M114.475 224.292c-3.508.132-3.124 10.767.404 10.636s3.134-10.767-.404-10.636"></path><path fill="#E34E70" d="M115.02 226.688c-1.627.071-1.405 5.884.203 5.824 1.607-.061 1.395-5.884-.203-5.824"></path><path fill="#F7B3C5" d="M116.234 239.356c-2.74-2.224-8.35 4.691-5.6 6.916 2.749 2.224 8.339-4.702 5.6-6.916"></path><path fill="#E34E70" d="M115.314 241.216c-1.264-1.01-4.327 2.77-3.033 3.782 1.294 1.01 4.276-2.77 3.033-3.782"></path><path fill="#F389A4" d="M106.994 245.908c-1.415-2.568-7.885 1.01-6.47 3.558s7.885-.99 6.47-3.558"></path><path fill="#E34E70" d="M105.76 247.04c-.646-1.183-4.184.768-3.547 1.93.637 1.164 4.144-.757 3.548-1.93"></path><path fill="#F389A4" d="M98.826 253.733c-.212-2.66-6.56-2.144-6.338.515.223 2.66 6.56 2.134 6.338-.515"></path><path fill="#E34E70" d="M97.421 254.178c-.1-1.214-3.568-.94-3.477.273.09 1.213 3.578.92 3.477-.273"></path><path fill="#F389A4" d="M89.95 252.145c.567-2.365-5.053-3.73-5.64-1.364s5.065 3.73 5.64 1.364"></path><path fill="#E34E70" d="M88.576 252.125c.253-1.071-2.83-1.82-3.093-.758s2.86 1.84 3.093.758"></path><path fill="#F389A4" d="M81.44 252.338c.93-2.255-4.438-4.48-5.358-2.225s4.407 4.429 5.357 2.225"></path><path fill="#E34E70" d="M80.115 252.065c.415-1.011-2.517-2.235-2.941-1.224-.425 1.011 2.517 2.255 2.941 1.224"></path><path fill="#F389A4" d="M76.648 246.332c1.78-1.658-2.184-5.914-3.953-4.256s2.174 5.914 3.953 4.256"></path><path fill="#E34E70" d="M75.526 245.574c.809-.768-1.345-3.094-2.153-2.336-.809.759 1.344 3.094 2.153 2.336"></path><path fill="#F389A4" d="M70.108 238.73c2.335-.668.717-6.259-1.618-5.571-2.335.687-.707 6.258 1.618 5.57"></path><path fill="#E34E70" d="M69.45 237.557c1.011-.314.183-3.367-.879-3.033-1.061.333-.212 3.356.88 3.033"></path><path fill="#F389A4" d="M76.365 184.165c-.303-3.508-10.897-2.598-10.584.93s10.897 2.599 10.584-.93"></path><path fill="#E34E70" d="M74.01 184.822c-.152-1.617-5.934-1.102-5.793.496.142 1.597 5.934 1.102 5.793-.496"></path><path fill="#F7B3C5" d="M63.648 180.465c-.07-3.468-10.695-3.255-10.614.222.08 3.478 10.695 3.256 10.614-.222"></path><path fill="#E34E70" d="M61.283 180.96c0-1.597-5.843-1.466-5.813.112.03 1.577 5.813 1.506 5.813-.112"></path><path fill="#F7B3C5" d="M51.609 184.863c-.758-3.336-10.008-1.223-9.23 2.133.779 3.357 10.008 1.223 9.23-2.133"></path><path fill="#E34E70" d="M49.617 185.773c-.353-1.527-5.408-.364-5.054 1.152s5.408.384 5.054-1.152"></path><path fill="#FACFDA" d="M38.75 185.116c-1.566-3.033-9.3.93-7.712 4.044 1.587 3.114 9.28-.981 7.712-4.044"></path><path fill="#E34E70" d="M37.204 186.41c-.728-1.406-4.933.788-4.236 2.163s4.954-.768 4.236-2.163"></path><path fill="#FACFDA" d="M30.603 193.87c-2.558-1.152-5.49 5.34-2.922 6.492s5.49-5.328 2.922-6.491"></path><path fill="#E34E70" d="M30.27 195.499c-1.173-.536-2.77 3.033-1.618 3.538 1.152.506 2.79-3.023 1.617-3.538"></path><path fill="#FACFDA" d="M23.436 201.706c-2.8 0-2.78 7.128 0 7.077 2.78-.05 2.81-7.087 0-7.077"></path><path fill="#E34E70" d="M23.81 203.324c-1.304 0-1.284 3.892 0 3.892s1.284-3.902 0-3.892"></path><path fill="#FACFDA" d="M26.175 210.886c-2.497.455-1.324 6.835 1.183 6.36 2.507-.476 1.334-6.795-1.183-6.36"></path><path fill="#E34E70" d="M26.772 212.302c-1.163.222-.516 3.7.626 3.488 1.143-.213.526-3.7-.626-3.488"></path><path fill="#FACFDA" d="M25.902 220.117c-2.021 1.122.85 6.238 2.871 5.055s-.849-6.198-2.87-5.055"></path><path fill="#E34E70" d="M26.772 221.118c-.92.525.647 3.316 1.567 2.79s-.637-3.306-1.567-2.79"></path><path fill="#FACFDA" d="M31.907 226.91c-1.405 1.366 2.022 4.945 3.477 3.56s-2.072-4.944-3.477-3.56"></path><path fill="#E34E70" d="M32.867 227.538c-.647.636 1.264 2.578 1.9 1.95.638-.626-1.253-2.577-1.9-1.95"></path><path fill="#F7B3C5" d="M45.402 164.774c.799-3.367-9.543-5.823-10.351-2.436-.809 3.386 9.542 5.833 10.351 2.436"></path><path fill="#E34E70" d="M42.946 164.663c.364-1.557-5.277-2.892-5.651-1.355s5.297 2.892 5.65 1.355"></path><path fill="#FACFDA" d="M32.15 165.684c1.01-2.881-9.017-6.4-10.028-3.508-1.011 2.891 9.027 6.41 10.028 3.508"></path><path fill="#E34E70" d="M29.754 165.26c.465-1.335-5.055-3.246-5.49-1.932-.434 1.315 5.025 3.256 5.49 1.931"></path><path fill="#FACFDA" d="M23.102 158.122c2.022-2.275-5.822-9.423-7.885-7.158s5.833 9.422 7.885 7.158"></path><path fill="#E34E70" d="M21.06 156.787c.94-1.01-3.376-4.944-4.306-3.923-.93 1.022 3.366 4.954 4.306 3.923"></path><path fill="#FACFDA" d="M10.234 150.792c2.557-1.699-3.356-10.555-5.904-8.857s3.377 10.555 5.904 8.857"></path><path fill="#E34E70" d="M8.586 149.002c1.163-.788-2.022-5.61-3.224-4.852s2.062 5.62 3.224 4.852"></path><path fill="#FACFDA" d="M6.605 138.164c2.87-1.081-.91-11.03-3.76-9.958-2.851 1.072.91 11.05 3.76 9.958"></path><path fill="#E34E70" d="M5.392 136.072c1.314-.506-.758-5.945-2.022-5.45s.718 5.925 2.022 5.45"></path><path fill="#FACFDA" d="M1.318 124.425c2.244.253 3.103-7.573.86-7.825-2.245-.253-3.114 7.572-.86 7.825"></path><path fill="#E34E70" d="M1.227 122.625c1.011.101 1.486-4.175.475-4.276-1.01-.101-1.506 4.155-.475 4.276"></path><path fill="#F7B3C5" d="M33.716 113.04c2.76-.333 1.466-10.908-1.294-10.554s-1.465 10.899 1.294 10.555"></path><path fill="#E34E70" d="M33.07 110.695c1.273-.151.555-5.934-.698-5.783-1.254.152-.566 5.935.697 5.783"></path><path fill="#F7B3C5" d="M37.85 104.579c2.77.232 3.63-10.383.84-10.606-2.79-.222-3.63 10.383-.84 10.606"></path><path fill="#E34E70" d="M37.69 102.142c1.273.101 1.728-5.692.464-5.803-1.263-.111-1.739 5.712-.465 5.803"></path><path fill="#F7B3C5" d="M34.869 91.375c2.527 1.163 6.944-8.513 4.407-9.675s-6.955 8.522-4.407 9.675"></path><path fill="#E34E70" d="M35.546 89.04c1.152.525 3.568-4.752 2.426-5.288s-3.588 4.802-2.426 5.287"></path><path fill="#F7B3C5" d="M43.28 83.59c2.274 1.274 7.075-7.38 4.79-8.644-2.284-1.264-7.085 7.37-4.79 8.644"></path><path fill="#E34E70" d="M44.098 81.477c1.01.587 3.66-4.135 2.618-4.721-1.041-.587-3.69 4.135-2.618 4.721"></path><path fill="#F7B3C5" d="M44.836 72.924c1.94 1.517 7.52-5.641 5.56-7.168-1.961-1.527-7.531 5.611-5.56 7.168"></path><path fill="#E34E70" d="M45.847 71.104c.89.698 3.942-3.215 3.032-3.912s-3.932 3.215-3.032 3.912"></path><path fill="#F7B3C5" d="M54.207 68.567c1.87 1.627 7.793-5.248 5.913-6.865-1.88-1.618-7.763 5.247-5.913 6.865"></path><path fill="#E34E70" d="M55.349 66.807c.85.749 4.043-3.033 3.235-3.75s-4.104 3.012-3.235 3.75"></path><path fill="#F7B3C5" d="M58.462 59.407c1.689 1.456 6.53-4.166 4.832-5.621s-6.53 4.155-4.832 5.62"></path><path fill="#E34E70" d="M59.342 57.94c.778.668 3.427-2.405 2.648-3.032s-3.416 2.376-2.648 3.033"></path><path fill="#F389A4" d="M66.58 57.597c1.9 1.153 5.752-5.186 3.83-6.349-1.92-1.163-5.761 5.176-3.83 6.35"></path><path fill="#E34E70" d="M67.206 56.01c.86.526 2.972-2.932 2.103-3.468-.87-.536-2.972 2.942-2.103 3.468"></path><path fill="#F389A4" d="M67.348 49.984c2.133.627 3.78-4.873 1.627-5.51s-3.75 4.863-1.627 5.51"></path><path fill="#E34E70" d="M67.49 48.65c1.01.293 1.87-2.72.889-3.033-.98-.314-1.87 2.74-.89 3.033"></path><path fill="#F389A4" d="M73.262 43.858c2.102-.738.212-6.158-1.911-5.41s-.202 6.168 1.91 5.41"></path><path fill="#E34E70" d="M72.564 42.725c1.01-.323-.08-3.296-1.01-2.952s.05 3.286 1.01 2.952"></path><path fill="#F389A4" d="M67.914 37.59c.354-2.205-5.307-3.094-5.66-.88-.355 2.214 5.316 3.114 5.66.88"></path><path fill="#E34E70" d="M66.59 37.67c.162-1.01-2.942-1.486-3.093-.485-.152 1 2.931 1.496 3.093.485"></path></g>', 2)
    ]), 4));
  }
});
export {
  E as _
};
