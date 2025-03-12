import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment-hijri';
import 'moment-timezone';

export const getFormatDate = async (date: string, hijiriDate?: string) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const daysArabic = [
    'الأحد',
    'الإثنين',
    'الثلاثاء',
    'الأربعاء',
    'الخميس',
    'الجمعة',
    'السبت',
  ];

  const parsedDate = moment.utc(date);

  const storedTimezone = await AsyncStorage.getItem('app-timezone');

  const timezoneDate = parsedDate.tz(storedTimezone || 'Asia/Riyadh');

  const day = timezoneDate.toDate();

  const dayNumber = day.getDay() + 1;
  const dayName = days[day.getDay()];
  const dayNameArabic = daysArabic[day.getDay()];

  const dayNumberOfMonth = day.getDate();

  const formattedDate = `${String(day.getDate()).padStart(2, '0')} / ${String(
    day.getMonth() + 1,
  ).padStart(2, '0')} / ${day.getFullYear()}`;

  let hours = timezoneDate.hours();
  const minutes = timezoneDate.minutes();
  const ampm = hours >= 12 ? 'pm' : 'am';

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedTime = `${hours}:${String(minutes).padStart(2, '0')} ${ampm}`;
  const arabicAmpm = ampm === 'pm' ? 'م' : 'ص';
  const formattedTimeArabic = `${hours}:${String(minutes).padStart(
    2,
    '0',
  )} ${arabicAmpm}`;
  const formattedDateArabic = `${day
    .getDate()
    .toLocaleString('ar-EG', { minimumIntegerDigits: 2 })} / ${(
      day.getMonth() + 1
    ).toLocaleString('ar-EG', {
      minimumIntegerDigits: 2,
    })} / ${day.getFullYear().toLocaleString('ar-EG').replace('٬', '')}`;

  let hijriDateArabic;
  let hijriFormattedDateEnglish;
  if (hijiriDate) {
    const hijriMoment = moment(hijiriDate, 'iYYYY-iMM-iDD');
    hijriDateArabic = hijriMoment.locale('ar-sa').format('iD iMMMM iYYYY هـ');
    hijriFormattedDateEnglish =
      hijriMoment.locale('en').format('iD iMMMM iYYYY') + ' AH';
  } else {
    hijriDateArabic = moment(date).locale('ar-sa').format('iD iMMMM iYYYY هـ');
    hijriFormattedDateEnglish =
      moment(date).locale('en').format('iD iMMMM iYYYY') + ' AH';
  }
  const georgeFormattedDateEnglish = `${day.getDate()} ${day.toLocaleString(
    'en-US',
    { month: 'long' },
  )} ${day.getFullYear()}`;
  const georgeFormattedDateArabic = `${day
    .getDate()
    .toLocaleString('ar-EG')} ${day.toLocaleString('ar-EG', {
      month: 'long',
    })} ${day.getFullYear().toLocaleString('ar-EG').replace('٬', '')}`;

  return {
    dayNumber, // example: 2 (Monday)
    dayNumberOfMonth, // example: 2
    dayName, // example: Sunday
    dayNameArabic, // example: السبت
    formattedDate, // example: 13/11/2024
    formattedDateArabic, // example: 13/11/2024 in arabic numbers
    formattedTime, // Example: 2:00PM
    formattedTimeArabic, // Example: 2:00PM
    hijriFormattedDateEnglish, // Example: 18 Safar 1445 AH
    hijriFormattedDateArabic: hijriDateArabic, // Example: 18 صفر 1445 هـ
    georgeFormattedDateEnglish,
    georgeFormattedDateArabic,
  };
};
