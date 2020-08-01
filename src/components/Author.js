import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
const containerVariants={
  hidden:{
    opacity:0,
    x:'100vw'
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      type:'spring',
      delay:0.5
    }
  },
  exit:{
    x:'-100vw',
    transition:{ease:'easeInOut'}
  }
}
const nextVariants={
  hidden:{
    x:'-100vw'
  },
  visible:{
    x:0,
    transition:{type:'spring',stiffness:120}
  }
}
const buttonVariants={
  
  hover:{
    scale:1.1,
      textShadow:"0px 0px 8px rgb(255,255,255)",
      boxShadow:"0px 0px 8px rgb(255,255,255)",
      transition:{
        duration:0.3,
        yoyo:Infinity
      }
  }
}
const Author = ({ addAuthor, books }) => {
  const authors = ['Rabindranath Tagore', 'Swami Vivekananda', 'APJ Abdul Kalam'];
  // console.log(bases)
  return (
    <motion.div className="base container"
    // initial={{x:'100vw'}}
    // animate={{x:0}}
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'
    // transition={{type:'spring',delay:0.5}}
    >

      <h3>Step 1: Choose Your Author Name</h3>
      <ul>
        {authors.map(author=> {
          let spanClass = books.author === author ? 'active' : '';
          return (
            <motion.li
            whileHover={{scale:1.3,color:'#f8e112',originX:0}}
            transition={{type:'spring',stiffness:300}}
             key={author} onClick={() => addAuthor(author)}>
              <span className={spanClass}>{ author }</span>
            </motion.li>
          )
        })}
      </ul>

      {books.author && (
        <motion.div className="next"
        // initial={{x:'-100vw'}}
        // animate={{x: 0}}
        variants={nextVariants}
        // initial='hidden'
        // animate='visible'
        // transition={{type:'spring',stiffness:120}}
        >
          <Link to="/books">
            <motion.button
            variants={buttonVariants}
             whileHover='hover'>Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Author;