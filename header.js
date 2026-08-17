const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <nav>
    <ul>
      <li><a href="index">Home</a></li>
      <li><a href="portfolio">Portfolio</a></li>
      <li><a href="resume">Resume</a></li>
    </ul>
  </nav>
`;
document.body.prepend(headerTemplate.content);  