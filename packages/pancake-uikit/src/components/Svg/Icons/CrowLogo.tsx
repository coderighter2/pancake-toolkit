import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <svg viewBox="0 0 300 300" {...props}><path 
    fillRule="evenodd"
    clipRule="evenodd" d="M 213.145 23.348 C 204.845 23.715 204.328 23.791 197.799 25.612 C 146.107 40.025 99.134 83.114 80.816 132.922 L 79.691 135.982 L 79.938 140.073 C 80.308 146.202 81.496 153.634 82.819 158.09 C 83.44 160.18 82.662 159.171 80.968 155.69 C 78.825 151.286 77.692 147.523 76.59 141.157 L 76.012 137.813 L 74.714 143.717 C 71.11 160.112 68.892 175.693 67.731 192.765 C 67.354 198.314 66.914 217.415 67.169 217.168 C 67.24 217.099 68.792 214.343 70.618 211.045 C 79.229 195.49 88.873 179.687 100.436 162.189 L 106.261 153.375 L 101.897 140.834 C 99.497 133.936 97.57 128.256 97.615 128.212 C 97.659 128.167 99.836 133.447 102.452 139.945 C 105.068 146.443 107.27 151.755 107.346 151.75 C 107.422 151.745 108.22 150.647 109.12 149.311 C 112.209 144.721 120.621 133.009 125.695 126.235 L 130.775 119.454 L 124.964 102.749 C 121.768 93.561 119.189 86.008 119.233 85.964 C 119.277 85.921 122.009 92.697 125.304 101.023 C 128.599 109.349 131.457 116.545 131.656 117.013 L 132.017 117.865 L 134.342 114.887 C 141.054 106.29 149.991 95.602 156.204 88.741 C 158.188 86.551 160.116 84.399 160.488 83.96 L 161.164 83.162 L 157.893 73.787 C 156.094 68.63 154.666 64.368 154.718 64.315 C 154.771 64.263 156.558 68.173 158.689 73.006 L 162.564 81.792 L 166.848 77.37 C 169.204 74.938 171.165 72.865 171.205 72.764 C 171.263 72.619 166.887 54.738 166.311 52.765 C 166.23 52.488 166.237 52.331 166.327 52.415 C 166.417 52.498 167.966 56.685 169.77 61.718 C 171.574 66.75 173.093 70.91 173.145 70.962 C 173.197 71.014 174.746 69.694 176.588 68.029 C 185.145 60.295 193.287 54.343 199.728 51.114 C 201.895 50.028 201.558 50.296 198.221 52.312 C 170.804 68.873 127.176 121.166 89.101 183.103 C 67.953 217.505 50 254.129 50 262.868 C 50 270.325 58.51 268.055 61.541 259.791 C 88.79 185.487 153.124 90.608 203.208 50.862 C 206.051 48.605 206.896 48.091 204.971 49.787 C 198.383 55.592 181.573 72.036 181.573 72.675 C 181.573 72.794 195.274 78.03 212.021 84.309 C 228.767 90.589 242.435 95.761 242.393 95.802 C 242.351 95.844 228.247 91.075 211.049 85.204 L 179.781 74.53 L 178.449 75.975 C 174.052 80.741 172.247 82.923 172.561 83.091 C 172.744 83.188 180.227 86.014 189.19 89.372 C 198.153 92.729 205.446 95.516 205.396 95.566 C 205.347 95.616 197.689 93.053 188.379 89.871 C 179.069 86.689 171.38 84.091 171.292 84.098 C 171.151 84.108 164.039 92.477 162.731 94.171 L 162.229 94.822 L 188.627 104.719 C 203.147 110.162 214.986 114.655 214.938 114.704 C 214.889 114.753 202.71 110.649 187.874 105.583 C 173.038 100.518 160.873 96.411 160.841 96.456 C 160.809 96.502 159.82 97.727 158.643 99.18 C 150.084 109.745 138.07 125.977 128.528 139.867 C 122.414 148.766 111.132 166.052 111.132 166.52 C 111.132 166.635 119.4 169.829 129.505 173.618 C 139.61 177.406 147.838 180.546 147.789 180.595 C 147.719 180.665 112.302 168.661 110.595 167.99 C 109.391 167.516 78.103 221.784 79.192 222.457 C 80.572 223.31 108.087 223.638 114.13 222.874 C 135.414 220.181 145.493 212.435 160.902 186.925 C 163.434 182.734 172.673 166.637 172.927 165.974 C 173.344 164.888 159.01 155.75 146.478 149.114 C 142.399 146.954 142.342 146.897 144.466 147.103 C 152.146 147.85 162.034 151.477 172.868 157.522 C 174.895 158.654 176.681 159.501 176.836 159.405 C 176.991 159.309 180.583 156.568 184.817 153.313 C 189.051 150.058 199.591 142.072 208.239 135.565 C 224.806 123.1 226.3 121.843 233.238 114.529 C 249.122 97.786 252.387 85.31 248.84 54.904 C 245.134 23.125 243.849 21.989 213.145 23.348"></path></svg>
  );
};

export default Icon;
