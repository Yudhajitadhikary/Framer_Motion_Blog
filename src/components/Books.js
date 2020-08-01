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
const Books = ({ addBooks, books }) => {
  let book = ['Gitanjali','Inspired Talks','Rings of Fire'];

  return (
    <motion.div className="toppings container"
    variants={containerVariants}
    initial='hidden'
    animate='visible' 
    exit='exit'>
      
      <h3>Step 2: Choose Book Name</h3>
      <ul>
        {book.map(bookIndex => {
          let spanClass = books.Books.includes(bookIndex) ? 'active' : '';
          return ( 
            <motion.li
            whileHover={{scale:1.3,color:'#f8e112',originX:0}}
            transition={{type:'spring',stiffness:300}}
            key={bookIndex} onClick={() => addBooks(bookIndex)}>
              <span className={spanClass}>{ bookIndex}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button 
        variants={buttonVariants}
         whileHover='hover'
         >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Books;