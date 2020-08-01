import React from 'react';
import {motion} from 'framer-motion';
const Header = () => {
  return (
    <header>
      <motion.div drag 
      dragConstraints={{left:0,top:0,right:0,bottom:0}}
      dragElastic={2}
      >Draggable Logo</motion.div>
      <motion.div className="title"
      initial={{y:-250}}
      animate={{y:-10}}
      transition={{delay:0.2, type:'spring',stiffness:120 }}>
        <h1>Book Corner</h1>
      </motion.div> 
    </header>
  )
}

export default Header;