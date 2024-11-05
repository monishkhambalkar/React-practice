let inactivityTime = function () {
  let time;
  const logout = function () {
    alert("You have been logged out due to inactivity.");
    // Add your logout functionality here, e.g., window.location.href = '/logout';
  };

  const resetTime = function () {
    clearTimeout(time);
    time = setTimeout(logout, 30 * 1000); // 30 seconds in milliseconds
  };

  // Reset the timer on any of these events
  window.onload = resetTime;
  window.onmousemove = resetTime;
  window.onmousedown = resetTime; // Includes touch events
  window.ontouchstart = resetTime;
  window.ontouchmove = resetTime;
  window.onclick = resetTime; // Includes touch events
  window.onkeypress = resetTime;
  window.addEventListener("scroll", resetTime, true); // Capture scrolling events

  // Initial timer set
  time = setTimeout(logout, 30 * 1000); // 30 seconds in milliseconds
};

// Call the inactivityTime function to set everything up
inactivityTime();
