import classNames from 'classnames';
import React from 'react';

export const AngleHighlightBox: React.FC<AngleHighlightBoxProps> = ({
  widthClass = 'w-full',
  borderRadiusClass = 'rounded-[24px]',
  paddingClass = 'p-5',
  children,
  ...props
}) => {
  return (
    <div
      className={classNames(
        'relative z-[2] shadow-2xl bg-white',
        widthClass,
        borderRadiusClass,
      )}
      {...props}>
      {/* The highlights are applied with ablolutely positioned divs at the edges of the main box with linear gradients from blue to light blue */}
      {/* There are two for each corner in order to achieve the fading of colour in different directions better */}

      {/* Highlight from top-left going rightwards */}
      <div
        className={classNames(
          'absolute -top-[2px] -left-[0px] w-3/5 h-3/5 z-[1] bg-gradient-to-r from-blue-500 to-blue-200',
          borderRadiusClass,
        )}></div>
      {/* Highlight from top-left going downwards */}
      <div
        className={classNames(
          'absolute -top-[0px] -left-[2px] w-3/5 h-3/5 z-[1] bg-gradient-to-b from-blue-500 to-blue-200',
          borderRadiusClass,
        )}></div>
      {/* Highlight from bottom-right going leftwards */}
      <div
        className={classNames(
          'absolute -bottom-[2px] -right-[0px] w-3/5 h-3/5 z-[1] bg-gradient-to-l from-blue-500 to-blue-200',
          borderRadiusClass,
        )}></div>
      {/* Highlight from bottom-right going upwards */}
      <div
        className={classNames(
          'absolute -bottom-[0px] -right-[2px] w-3/5 h-3/5 z-[1] bg-gradient-to-t from-blue-500 to-blue-200',
          borderRadiusClass,
        )}></div>

      {/* Container for content of the AngleHighlightBox. Covers the visible box and contains the padding and children */}
      <div
        className={classNames(
          'w-full h-full relative z-[3] bg-white',
          paddingClass,
          borderRadiusClass,
        )}>
        <div className="relative z-[3]">{children}</div>
      </div>
    </div>
  );
};
