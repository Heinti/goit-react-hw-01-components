import css from './Statistics.module.css';
import PropTypes from 'prop-types';

// var randomColor = Math.floor(Math.random()*16777215).toString(16);

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}

      <ul className={css.stat_list}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id}>
            <span className="label">{stat.label} </span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// proptypes
Statistics.propTypes ={
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
}