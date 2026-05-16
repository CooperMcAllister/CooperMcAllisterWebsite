const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="portfolio.html">Portfolio</a></li>
      <li><a href="resume.html">Resume</a></li>
    </ul>
  </nav>
`;
document.body.prepend(headerTemplate.content);  