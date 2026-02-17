export function getAge(birthday: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  
  return age;
}

export function getTimeUntilBirthday(birthday: Date): string {
  const today = new Date();
  const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
  
  if (today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate()) {
    return "it is my birthday today";
  }
  
  if (nextBirthday <= today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  
  const diffTime = nextBirthday.getTime() - today.getTime();
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const nextAge = getAge(birthday) + 1;
  
  if (days < 30) {
    return `turning ${nextAge} in ${days} day${days !== 1 ? 's' : ''}`;
  }
  
  const months = Math.round(days / 30);
  return `turning ${nextAge} in ${months} month${months !== 1 ? 's' : ''}`;
}