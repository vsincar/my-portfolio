document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.getElementById('tooltip');
    const skillItems = document.querySelectorAll('.skill-col-item');

    const skillInfo = {
      '1': {
        name: 'Figma',
        description: 'A powerful design tool for creating user interfaces and prototypes.',
        icon: '<img src="assets/icons/figma.png" alt="Figma" width="24" height="24" class="skill-icon">'
      },
      '2': {
        name: 'Adobe XD',
        description: 'A vector-based user experience design tool for web apps and mobile apps.',
        icon: '<img src="assets/icons/xd.png" alt="Adobe XD" width="24" height="24" class="skill-icon">'
      },
      '3': {
        name: 'Adobe Photoshop',
        description: 'A raster graphics editor for creating and editing images.',
        icon: '<img src="assets/icons/ps.png" alt="Adobe Photoshop" width="24" height="24" class="skill-icon">'
      },
      '4': {
        name: 'HTML & CSS',
        description: 'The fundamental building blocks for creating web pages and styling them.',
        icon: '<img src="assets/icons/html.png" alt="HTML" width="24" height="24" class="skill-icon"><img src="assets/icons/css.png" alt="CSS" width="24" height="24" class="skill-icon">'
      },
      '5': {
        name: 'Bootstrap',
        description: 'A popular CSS framework for building responsive and mobile-first websites.',
        icon: '<img src="assets/icons/bootstrap.png" alt="Bootstrap" width="24" height="24" class="skill-icon">'
      },
      '6': {
        name: 'JavaScript',
        description: 'A versatile programming language for creating interactive web experiences.',
        icon: '<img src="assets/icons/js.png" alt="JavaScript" width="24" height="24" class="skill-icon">'
      },
      '7': {
        name: 'React JS',
        description: 'A JavaScript library for building user interfaces, particularly single-page applications.',
        icon: '<img src="assets/icons/react.png" alt="React JS" width="24" height="24" class="skill-icon">'
      },
      '8': {
        name: 'Tailwind.css',
        description: 'Most modern CSS framework for building responsive and mobile-first websites.',
        icon: '<img src="assets/icons/tailwind.png" alt="Framer" width="24" height="24" class="skill-icon">'
      },
      '9': {
        name: 'Framer',
        description: 'A prototyping tool that allows for the creation of interactive designs.',
        icon: '<img src="assets/icons/framer.png" alt="Framer" width="24" height="24" class="skill-icon">'
      }
    };

    skillItems.forEach(item => {
      item.addEventListener('mousemove', function (e) {
        const id = this.id;
        const skill = skillInfo[id];
        tooltip.innerHTML = `${skill.icon}<strong class="skill-name">${skill.name}</strong><br><span class="skill-description">${skill.description}</span>`;
        tooltip.style.display = 'block';
        tooltip.style.left = e.clientX + 10 + 'px';
        tooltip.style.top = e.clientY + 10 + 'px';
      });

      item.addEventListener('mouseleave', function () {
        tooltip.style.display = 'none';
      });
    });
  });