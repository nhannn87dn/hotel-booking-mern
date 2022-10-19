export const daysBetween = (StartDate, EndDate) => {
    // The number of milliseconds in all UTC days (no DST)
    const oneDay = 1000 * 60 * 60 * 24;
    StartDate = new Date(StartDate);
    EndDate = new Date(EndDate);
    // A day in UTC always lasts 24 hours (unlike in other time formats)
    const start = Date.UTC(EndDate.getFullYear(), EndDate.getMonth(), EndDate.getDate());
    const end = Date.UTC(StartDate.getFullYear(), StartDate.getMonth(), StartDate.getDate());
  
    // so it's safe to divide by 24 hours
    return (start - end) / oneDay;
  }

