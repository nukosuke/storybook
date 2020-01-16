import * as React from 'react';

export default {
  title: 'Color',
};

/**
 * カラー表示用タイル
 */
const Color: React.FC<ColorCode> = (props) => (
  <>
    <div style={{
      width: '133px',
      height: '133px',
      backgroundColor: props.hex,
    }}></div>
    <p>{props.hex}</p>
  </>
);

interface ColorCode {
  hex: string,
}

/**
 * Colors
 */
export const black = () => <Color hex='#000000' />;
