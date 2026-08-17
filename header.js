const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <nav>
    <ul>
      <li><a href="https://coopermcallister.com">Home</a></li>
      <li><a href="https://coopermcallister.com/portfolio">Portfolio</a></li>
      <li><a href="https://coopermcallister.com/resume">Resume</a></li>
    </ul>
  </nav>
`;
document.body.prepend(headerTemplate.content);  