document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const bgVideo = document.getElementById('bg-video');
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply saved or system preference
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark-mode');
    bgVideo.querySelector('source').setAttribute('src', 'pinterest_video_1759102099.mp4');
    bgVideo.load();
    bgVideo.play();
  }

  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    const isDark = document.documentElement.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Change video depending on mode
    if (isDark) {
      bgVideo.querySelector('source').setAttribute('src', 'pinterest_video_1759102099.mp4');
    } else {
      bgVideo.querySelector('source').setAttribute('src', 'pinterest_video_1759075441.mp4');
    }
    bgVideo.load();
    bgVideo.play();
  });
});
