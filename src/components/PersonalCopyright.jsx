function PersonalCopyright() {
  const firstYear = 2022;
  const currentYear = new Date().getFullYear();
  const displayedDateRange = `${firstYear}–${currentYear}`;

  return (
    <p>
      Copyright © <time>{displayedDateRange}</time> SPJPGRD LLC.
    </p>
  );
}

export default PersonalCopyright;
