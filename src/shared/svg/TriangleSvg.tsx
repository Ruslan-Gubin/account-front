const TriangleSvg = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="13px"
      height="15px"
      viewBox="0 0 48 48"
      fill={active ? 'white' : '#737b8b81'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
      d="M24 36H12L18 24L24 12L30 24L36 36H24Z"   
      fill={active ? 'white' : '#737b8b81'} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 11C24.3788 11 24.725 11.214 24.8944 11.5528L36.8944 35.5528C37.0494 35.8628 37.0329 36.2309 36.8507 36.5257C36.6684 36.8205 36.3466 37 36 37H12C11.6534 37 11.3316 36.8205 11.1494 36.5257C10.9671 36.2309 10.9506 35.8628 11.1056 35.5528L23.1056 11.5528C23.275 11.214 23.6212 11 24 11ZM24 14.2361L13.618 35H34.382L24 14.2361Z"
        fill={active ? 'white' : '#737b8b81'}
      />
    </svg>
  );
};

export { TriangleSvg };
