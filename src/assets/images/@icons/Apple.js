import Svg, { Path } from "react-native-svg";
import React from "react";

const Apple = () => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M17.517 12.556c-.01-1.599.715-2.804 2.178-3.692-.818-1.172-2.056-1.816-3.687-1.94-1.545-.122-3.235.9-3.853.9-.654 0-2.15-.858-3.326-.858C6.4 7.003 3.82 8.902 3.82 12.764c0 1.142.209 2.32.626 3.534.558 1.599 2.569 5.515 4.667 5.452 1.096-.026 1.872-.778 3.3-.778 1.385 0 2.102.778 3.325.778 2.117-.03 3.935-3.59 4.465-5.194-2.838-1.338-2.686-3.919-2.686-4Zm-2.463-7.149c1.188-1.41 1.08-2.695 1.045-3.157-1.05.06-2.264.715-2.955 1.519-.762.862-1.21 1.929-1.114 3.131 1.135.087 2.17-.497 3.024-1.493Z"
        fill="#A9885B"
      />
    </Svg>
  );
};

export default Apple;