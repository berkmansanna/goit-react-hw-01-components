import {PropTypes} from 'prop-types'

export const Statistics = ({title, stats}) => {
    return (<section class="statistics">
  {title && <h2 >{title}</h2>}
        <ul class="stat-list">
            {stats.map(({ id, label, parcentage }) => {
                return (<li key={id } className="item">
      <span class="label">{label}</span>
      <span class="percentage">{parcentage}%</span>
    </li>)
            })}
  </ul>
</section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};