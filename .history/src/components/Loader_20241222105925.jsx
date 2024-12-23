import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="svg-frame">
        <svg style={{ transform: 'translate(0, 0)' }}>
          <g id="out1">
            <path d="M72 172C72 116.772 116.772 72 172 72C227.228 72 272 116.772 272 172C272 227.228 227.228 272 172 272C116.772 272 72 227.228 72 172ZM197.322 172C197.322 158.015 185.985 146.678 172 146.678C158.015 146.678 146.678 158.015 146.678 172C146.678 185.985 158.015 197.322 172 197.322C185.985 197.322 197.322 185.985 197.322 172Z" />
            <path
              mask="url(#path-1-inside-1_111_3212)"
              strokeMiterlimit={16}
              strokeWidth={2}
              stroke="#00FFFF"
              d="M72 172C72 116.772 116.772 72 172 72C227.228 72 272 116.772 272 172C272 227.228 227.228 272 172 272C116.772 272 72 227.228 72 172ZM197.322 172C197.322 158.015 185.985 146.678 172 146.678C158.015 146.678 146.678 158.015 146.678 172C146.678 185.985 158.015 197.322 172 197.322C185.985 197.322 197.322 185.985 197.322 172Z"
            />
          </g>
        </svg>
        <svg style={{ transform: 'translate(10px, 10px)' }}>
          <g id="out2">
            {/* SVG content remains unchanged */}
          </g>
        </svg>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .svg-frame {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 100px;
    height: 100px;
  }
`;

export default Loader;
