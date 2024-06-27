import React from "react";
import { useColorMode } from '@docusaurus/theme-common';

const ImageSwitcher = ({lightimg, darkimg}) => {
    const { colorMode } = useColorMode();
  
    return (
      <img src={ colorMode === 'dark' ? darkimg : lightimg } alt='test text' width={150} height={150}/>
    )
  }
  
  export default ImageSwitcher;