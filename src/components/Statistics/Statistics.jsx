import PropTypes from "prop-types";
import css from './Statistics.module.css';
import { getRandomHexColor } from '../../utils/utils';
    

const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {stats.map(el => {
                    const listItemStyle = {
                        backgroundColor: getRandomHexColor(),
                    };
                    return (
                        <li
                            className={css.item} style={listItemStyle} key={el.id}>
                            <span className={css.label}>{el.label}</span>
                            <span className={css.percentage}>{el.percentage}%</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
};

export default Statistics;