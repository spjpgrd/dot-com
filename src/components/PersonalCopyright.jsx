function PersonalCopyright() {
  const firstYear = 2014;
  const currentYear = new Date().getFullYear();
  const displayedDateRange = `${firstYear}–${currentYear}`;

  return (
    <p>
      Copyright © <time>{displayedDateRange}</time> SPJPGRD LLC.
    </p>
  );
}

export default PersonalCopyright;
