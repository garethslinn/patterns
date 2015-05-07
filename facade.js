/**
 * Created by Gareth on 07/05/2015.
 *
 * The Facade Pattern hides the methods complexities making it appear simple.
 *
 */


function navigate(url) {
    // Less than IE9
    if (navigator.userAgent.match(/MSIE\s(?!9.0)/)) {
        var referLink = document.createElement("a");
        referLink.href = url;
        document.body.appendChild(referLink);
        referLink.click();
    } else {
        window.location.replace(url);
    }
}

navigate('http://www.google.com');