(function() {
    async function setElementStyles(element, styles) {
        return new Promise((resolve) => {
            Object.assign(element.style, styles);
            resolve();
        });
    }

    const headerElement = document.querySelector('.header-element');
    if (!headerElement) {
        return; // Exit if the element is not found
    }


    // Ersten Link erstellen
    const link1 = document.createElement('a');
    link1.href = 'https://kephiso.webuntis.com/WebUntis/?school=bzz#/basic/timetable';
    link1.textContent = 'Stundenplan';
    setElementStyles(link1, {color: 'black', padding: '10px', textDecoration: 'none', 'font-weight': 600 })
    headerElement.appendChild(link1);

    // Zweiten Link erstellen
    const link2 = document.createElement('a');
    link2.href = 'https://login.microsoftonline.com/login.srf?wa=wsignin1.0&LoginOptions=1&whr=bzzch.onmicrosoft.com&wreply=https:%2F%2Fbzzch%2Esharepoint%2Ecom';
    link2.textContent = 'Intranet';
    setElementStyles(link2, {color: 'black', padding: '10px', textDecoration: 'none', 'font-weight': 600 })
    headerElement.appendChild(link2);

    // Dritten Link erstellen
    const link3 = document.createElement('a');
    link3.href = 'https://absenzen.bzz.ch/';
    link3.textContent = 'Absenzen';
    setElementStyles(link3, {color: 'black', padding: '10px', textDecoration: 'none', 'font-weight': 600 })
    headerElement.appendChild(link3);
    
    // Dritten Link erstellen
    const link4 = document.createElement('a');
    link4.href = 'https://moodle.bzz.ch/';
    link4.textContent = 'Moodle';
    setElementStyles(link4, {color: 'black', padding: '10px', textDecoration: 'none', 'font-weight': 600 })
    headerElement.appendChild(link4);


    setElementStyles(headerElement, { display: 'flex', alignItems: 'center' });

    const data = { message: 'Links added to header.' };
    chrome.runtime.sendMessage(data);
})();