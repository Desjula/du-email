export const Email = ({sender, subject, time}) => {
    return `
    <div class="email">
    <div class="email__head">
      <button class="email__icon email__icon--closed"></button>
      <div class="email__info">
        <div class="email__sender">${sender}</div>
        <div class="email__subject">${subject}</div>
      </div>
      <div class="email__time">${time}</div>
    </div>
    <div class="email__body"></div>
  </div>
    `
};