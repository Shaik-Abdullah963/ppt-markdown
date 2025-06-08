import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css';

/**
 * ProgressBar shows a horizontal fill from 0% to 100%.
 * @param {number} current - zero-based current index
 * @param {number} total - total number of items
 */
export default function ProgressBar({ current, total }) {
  const percent = total > 0 ? ((current + 1) / total) * 100 : 0;
  return (
    <div className="progress-container">
      <div
        className="progress-fill"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

ProgressBar.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
