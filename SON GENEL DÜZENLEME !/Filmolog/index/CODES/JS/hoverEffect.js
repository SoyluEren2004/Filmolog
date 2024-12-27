document.addEventListener('DOMContentLoaded', function () {
    const menuSign = document.getElementById('menuSign');
    const menuPopup = document.getElementById('menuPopup');

    menuSign.addEventListener('mouseenter', function () {
        menuPopup.style.display = 'block'; // Popup'ı göster
    });

    menuSign.addEventListener('mouseleave', function () {
        menuPopup.style.display = 'none'; // Popup'ı gizle
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const profilLogo = document.getElementById('profilLogo');
    const profilPopup = document.getElementById('profilPopup');

    profilLogo.addEventListener('mouseenter', function () {
        menuPopup.style.display = 'block'; // Popup'ı göster
    });

    profilLogo.addEventListener('mouseleave', function () {
        menuPopup.style.display = 'none'; // Popup'ı gizle
    });
});
