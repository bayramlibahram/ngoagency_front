import moment from "moment";

/**
 * Get the current date index within a given date range.
 * @param {string} start - The start date in 'YYYY-MM-DD' format.
 * @param {string} end - The end date in 'YYYY-MM-DD' format.
 * @returns {number} - The index of the current date within the date range.
 *                     Returns -1 if the current date is outside the range.
 */

export const getCurrentDateIndex = (start, end) => {
  const startDate = moment(start);
  const endDate = moment(end);
  const currentDate = moment();

  const total_months_range = endDate.diff(startDate, "months");
  const current_month_range = endDate.diff(currentDate, "months");

  return total_months_range - current_month_range;
};
