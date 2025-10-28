import React from "react";

export default function Article({ title, date, preview, minutes }) {
  // Helper function to render the emoji and read time
  const renderReadingTime = () => {
    let emoji = "";
    let timeUnit = 0;

    if (minutes < 30) {
      // For articles less than 30 minutes
      emoji = "☕️";
      // Math.ceil() rounds up to the nearest whole number
      timeUnit = Math.ceil(minutes / 5);
    } else {
      // For articles 30 minutes or longer
      emoji = "🍱";
      timeUnit = Math.ceil(minutes / 10);
    }

    // Creates a string of emojis by repeating the emoji character
    const emojis = emoji.repeat(timeUnit);

    return (
      <p>
        {emojis} {minutes} min read
      </p>
    );
  };

  return (
    <article>
      <h3>{title}</h3>
      {date ? <small>{date}</small> : <small>January 1, 1970</small>}
      {renderReadingTime()}
      <p>{preview}</p>
    </article>
  );
}
