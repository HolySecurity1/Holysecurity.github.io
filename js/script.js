document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Function to toggle the navigation menu
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('open');
        navToggle.classList.toggle('close');
    });

    // Function to fetch and parse XML
    function loadXML() {
        fetch('sitemap.xml')
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, 'text/xml');

                // Example: Populate navigation menu
                const menuItems = xmlDoc.getElementsByTagName('menu-item');
                const menuList = document.getElementById('navMenu');
                menuList.innerHTML = ''; // Clear existing items

                for (let i = 0; i < menuItems.length; i++) {
                    const item = menuItems[i];
                    const href = item.getAttribute('href');
                    const text = item.textContent;

                    const li = document.createElement('li');
                    if (item.getAttribute('active') === 'true') {
                        li.classList.add('active');
                    }
                    const a = document.createElement('a');
                    a.href = href;
                    a.textContent = text;
                    li.appendChild(a);
                    menuList.appendChild(li);
                }

                // Example: Populate footer social media links
                const socialIcons = xmlDoc.getElementsByTagName('social-icon');
                const socialMediaDiv = document.querySelector('.footer-social-media');
                socialMediaDiv.innerHTML = ''; // Clear existing icons

                for (let i = 0; i < socialIcons.length; i++) {
                    const icon = socialIcons[i];
                    const href = icon.getAttribute('href');
                    const platform = icon.getAttribute('platform');

                    const a = document.createElement('a');
                    a.href = href;
                    a.target = '_blank';
                    a.classList.add('social-icon');

                    const iconElement = document.createElement('i');
                    iconElement.classList.add('fab', `fa-${platform}`);
                    a.appendChild(iconElement);

                    socialMediaDiv.appendChild(a);
                }
            })
            .catch(error => console.error('Error loading XML:', error));
    }

    // Call the function to load XML data
    loadXML();
});
