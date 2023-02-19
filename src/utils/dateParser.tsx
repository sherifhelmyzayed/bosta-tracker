const engDay = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
const arDay = ["السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"]

const engMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const arMonth = ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "اغسطس", "سبتمبر", "اكتوبر", "نوفمبر", "ديسمبر"]

const dateTimeParser = (stamp: string, language: string) => {
    const initial = new Date(stamp);
    const hours = initial.getHours();
    const minute = initial.getMinutes();
    const day = initial.getDate();
    const month = initial.getMonth();
    const year = initial.getFullYear();

    return {
        dayInWeek: language === "eng" ? engDay[initial.getDay()] : arDay[initial.getDay()],
        date: `${day}/${month}/${year}`,
        time: `${hours > 12 ? hours - 12 : hours}:${minute}${hours > 12 ? "pm" : "am"}`,
        dayInMonth: day,
        month: language == "eng" ? engMonth[month] : arMonth[month],
        year: year
    }
}

export default dateTimeParser