// компонент статистики
const  Statistics = (props) => {
const { title, stats} = props;
   return (
    <section 
    className="statistics" 
       >
  <h2 className="title">{title}</h2>
  <ul
     className="stat-list">
{/* спсиок так треба */}
{stats.map(stat => (
<li key={stat.id}
className="item">
<span className="label">{stat.label}</span>
       <span className="percentage">{stat.percentage}</span>
</li>)
)}; 
</ul>

</section>)}
                
       
   


      export default   Statistics