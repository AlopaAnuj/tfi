import DatePicker from 'react-datepicker';
import React from "react";

export default function ({children,multiSeleteDate,...otherProps}) {
    const classes = "";
    return (
        <>
          <DatePicker 
            {...otherProps}
            calendarClassName={multiSeleteDate?`${classes.calander} ${classes.removeBorder}`:classes.calander}
            dayClassName = {(date) => classes.calanderDateColor}
          />
          {children}
        </>
      );
}