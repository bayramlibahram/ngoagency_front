import moment from "moment";
import { format } from "date-fns";
import { az } from "date-fns/locale";

export const convertedDate = (date) => {
  return moment(date).format("DD.MM.YYYY");
};
export const dateFormat = (date = null, format) => {
  if (date !== null) {
    return moment(date).format(format);
  }
  return moment(moment.now()).format(format);
};
export const getCurrentYear = () => {
  return moment().year();
};
export const dateFormatToAz = (date = null, formatString) => {
  if (date !== null) {
    return format(new Date(date), formatString, { locale: az });
  }
  return format(new Date(), formatString, { locale: az });
};
