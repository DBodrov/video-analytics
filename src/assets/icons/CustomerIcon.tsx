import React from 'react';

export function CustomerIcon(props: React.SVGProps<SVGSVGElement>) {
  const { fill = '#8492B4', ...restProps } = props;
  return (
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.991 2C8.98493 3.09678 8.09217 3.98166 6.99537 3.97799C5.89858 3.97432 5.01176 3.08348 5.01303 1.98669C5.01431 0.889888 5.9032 0.00111964 7 0C8.10027 0.00605158 8.98902 0.899712 8.989 2H8.991ZM3.237 6.48L3.637 10.808C3.67437 11.1468 3.95621 11.4061 4.297 11.415L4.597 11.426C4.83172 11.4319 5.02415 11.614 5.043 11.848L5.404 16.393C5.43829 16.7414 5.73396 17.0053 6.084 17H7.933C8.28357 17.0058 8.57965 16.741 8.613 16.392L8.972 11.844C8.99234 11.6113 9.1845 11.4312 9.418 11.426L9.718 11.414C10.0543 11.4053 10.332 11.1486 10.367 10.814L10.767 6.477C10.4847 5.704 9.81082 5.14076 9 5H5C4.18907 5.14067 3.51601 5.7057 3.237 6.48ZM11.705 6.48001L11.3 10.9C11.2316 11.5453 10.7768 12.0837 10.152 12.259C9.99432 12.3085 9.87816 12.4428 9.852 12.606L9.627 15.027C9.61779 15.1661 9.66707 15.3027 9.76295 15.4039C9.85883 15.5051 9.99261 15.5617 10.132 15.56H11.516C11.8252 15.5671 12.0872 15.3339 12.116 15.026L12.431 11.036C12.4479 10.8311 12.6174 10.6724 12.823 10.669L13.083 10.659C13.3772 10.6507 13.6201 10.4266 13.652 10.134L14.004 6.33401C13.9947 5.81798 13.569 5.40709 13.053 5.41601H11.942C11.8284 5.41291 11.7204 5.46531 11.6526 5.55646C11.5847 5.6476 11.5655 5.76607 11.601 5.87401C11.6686 6.07159 11.7024 6.27917 11.701 6.48801L11.705 6.48001ZM10.415 0.660005C10.2971 0.674141 10.1923 0.741728 10.1308 0.843264C10.0693 0.9448 10.0579 1.06899 10.1 1.18C10.4699 2.09764 10.3597 3.13908 9.806 3.959C9.74255 4.05977 9.72971 4.18435 9.77129 4.29593C9.81286 4.40751 9.90409 4.49333 10.018 4.528C10.8132 4.84347 11.721 4.62376 12.2839 3.97954C12.8469 3.33533 12.9429 2.40634 12.5237 1.66055C12.1045 0.914767 11.261 0.513947 10.418 0.660005H10.415ZM2.4 5.86599C2.43553 5.75806 2.41629 5.63959 2.34843 5.54844C2.28057 5.4573 2.17259 5.4049 2.059 5.40799H0.951C0.703106 5.40345 0.463575 5.49765 0.28519 5.66984C0.106805 5.84204 0.00420557 6.07809 0 6.32599L0.352 10.126C0.383917 10.4189 0.627421 10.6432 0.922 10.651L1.182 10.661C1.38718 10.6649 1.55611 10.8235 1.573 11.028L1.888 15.018C1.9168 15.3259 2.17882 15.5591 2.488 15.552H3.871C4.0104 15.5537 4.14417 15.4971 4.24005 15.3959C4.33593 15.2947 4.38521 15.1581 4.376 15.019L4.148 12.6C4.1214 12.437 4.00541 12.3029 3.848 12.253C3.22509 12.0785 2.77071 11.543 2.7 10.9L2.3 6.48299C2.29855 6.27416 2.33236 6.06658 2.4 5.86899V5.86599ZM1.229 2.43998C1.17644 3.13643 1.48086 3.81196 2.03741 4.23392C2.59397 4.65588 3.32661 4.76662 3.983 4.52798C4.09691 4.4933 4.18814 4.40749 4.22972 4.29591C4.27129 4.18432 4.25845 4.05974 4.195 3.95898C3.6413 3.13905 3.53113 2.09761 3.901 1.17998C3.94304 1.06912 3.9318 0.945083 3.87051 0.843586C3.80922 0.74209 3.70469 0.67439 3.587 0.659978C3.03704 0.57545 2.47627 0.71688 2.03218 1.05212C1.58808 1.38735 1.29841 1.88791 1.229 2.43998Z"
        fill={fill}
      />
    </svg>
  );
}