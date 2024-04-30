import { addYears } from 'date-fns';

const currentDate = new Date();

export const maxBirthday = addYears(currentDate, -18);

export const minBirthday = addYears(currentDate, -125);

export function calculateAge(birthday: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    const dayDiff = today.getDate() < birthday.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff)) {
        age--;
    }
    return age;
}
