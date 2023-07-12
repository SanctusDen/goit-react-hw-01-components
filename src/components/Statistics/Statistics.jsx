import PropTypes from 'prop-types';
import { SectionStatistic, TitleStatistics, StatList, ItemStatistics, LabelStatistics, PercentageStatistics } from '../Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <SectionStatistic>
            <TitleStatistics>{title}</TitleStatistics>
            {title && (
                <ItemStatistics>{stats.map((stat) =>
                    <StatList key={stat.id} >
                        <LabelStatistics>{stat.label}</LabelStatistics>
                        <PercentageStatistics >{stat.percentage}%</PercentageStatistics>
                    </StatList>
                    )}
                </ItemStatistics>
            )}
        </SectionStatistic>
    );
};


Statistics.propTypes = {
    stats: PropTypes.array.isRequired
};

export default Statistics;