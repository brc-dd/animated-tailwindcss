import { useState } from 'react';

type AnimationItemProps = { name: string; stateHandler: () => void };

const AnimationItem: React.FC<AnimationItemProps> = ({ name, stateHandler }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard: React.MouseEventHandler = async (e) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(`animate-${name}`);
    setCopied(true);
  };

  const resetState: React.MouseEventHandler = () => {
    setCopied(false);
  };

  const clickHandler: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    stateHandler();
    e.currentTarget.blur();
  };

  return (
    <li>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        className="justify-between menu-item group active:!bg-neutral active:focus-within:!bg-opacity-10 active:focus-within:!text-current"
        href="/#"
        onClick={clickHandler}
      >
        {name}
        <button
          className="tooltip tooltip-left"
          data-tip={copied ? 'copied!' : 'click to copy'}
          type="button"
          onClick={copyToClipboard}
          onMouseEnter={resetState}
        >
          <svg
            className="w-5 h-5 opacity-0 transition delay-75 stroke-current stroke-2 group-hover:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </a>
    </li>
  );
};

export default AnimationItem;
