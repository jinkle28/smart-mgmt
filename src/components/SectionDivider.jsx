import React from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/SectionDivider.css'; // Import any additional styles you want
const SectionDivider = () => {
    const ref = React.useRef(null);
    const inView = useInView(ref);
 return (
     <motion.div
         ref={ref}
     className="section-divider"
     initial={{ opacity: 0, y: 50 }}
     animate={inView ?{ opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
     transition={{ duration: 1 }}
>
<motion.div
       className="divider-line"
       initial={{ width: 0 }}
       animate={inView ? { width: '100%' } : { width: 0 }}
       transition={{ duration: 1 }}
     />
</motion.div>
 );
};
export default SectionDivider;