// компонент статистики
const  Statistics = (props) => {
const  {title,
   stats: {percentage, label} 
} = props;
   return props.stats.map((stat) => 
    (    
    <section 
    key = {stat.id}
    className="statistics" 
    
    >
  {/* <h2 className="title">{title}</h2> */}


  <ul className="stat-list">
           <li  

           className="item"
           >
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </li>
                   </ul>
         </section>)
)}
    
  
   



    
      // 
      //   ( <li key = {stat.id} clasName="item">
      //     <span className="label">{label}</span>
      //     <span className="percentage">{percentage}</span>
      //   </li>
      //   ))}



      export default   Statistics