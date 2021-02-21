/**
 * Provides a component to display a simple flex box with a stylized border.
 */
import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

import { useImageExtension } from 'components/interface/Image';

const useStyles = makeStyles((_theme) => ({
  borderBox: {
    borderImage: ({ img }) => `url(${img}) 32 round`,
    border: '16px solid transparent',
    boxSizing: 'border-box',
    marginBottom: 12,
    marginRight: 12,
  },
}));

/**
 * Display a flex box with a fancy border.
 * @param {*} param0
 */
const BorderBox = ({
  children,
  displayed = true,
  direction = 'column',
  grow = true,
  wrap = false,
  image = null,
  className = null,
  ...other
}) => {
  const classes = useStyles({
    img: image !== null ? image : require('images/controls/filter_container.png?webp'),
  });

  return (
    <Box
      className={clsx(classes.borderBox, className)}
      display={displayed ? 'flex' : 'none'}
      flexDirection={direction}
      flexGrow={grow ? '1' : '0'}
      flexWrap={wrap ? 'wrap' : 'none'}
      {...other}
    >
      {children}
    </Box>
  );
};

export default BorderBox;
