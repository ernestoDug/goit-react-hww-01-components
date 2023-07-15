import PropTypes from "prop-types"
import  css from "./Statistics.module.css";



// компонент статистики
const  Statistics = (props) => {
const { title, stats} = props;

   return (
    <section 
    className={css.statistics} 
       >
  <h2 className={css.title}>{title}</h2>
  <ul
     className={css.statList}>
{/* спсиок так треба */}
{stats.map(stat => (
<li key={stat.id}
className={css.item}>
<span className={css.label}>{stat.label}</span>
       <span className={css.percentage}>{stat.percentage}</span>
</li>)
)}
</ul>
</section>)}
                
                
        // прототайпи
        Statistics.propTypes =  {
         title: PropTypes.string,
   stats:  PropTypes.array,
 }

   


      export default   Statistics