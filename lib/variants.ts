export const fadeIn =  (direc: string, delay: number) => {
    return {
        active: {
            x : 0,
            y : 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration:1.2,
                delay: delay,
                ease: [[0.175, 0.885, 0.320, 1.275],
                        [0.175, 0.885, 0.320, 1.275]]
            }
        },
        inactive: {
            y: direc === 'up' ? 100 : direc === 'down' ? -40 : 0,
            x: direc === 'left' ? 120 : direc === 'right' ? -40 : 0,
            opacity:0
        }
      }

}
export const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1], // Smooth easing curve
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
  };
  
 export const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1, // Delays each child element's entrance
      },
    },
  };
  