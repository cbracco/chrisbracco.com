//
// getDistanceFromTop
//
// Calculate an element's distance from the top of the page
// Loops through parent nodes and adds up their offsets.
//
// https://stackoverflow.com/a/24829409
//
export function getDistanceFromTop(element) {
    var yPosition = 0;

    while (element) {
        yPosition += element.offsetTop - element.scrollTop + element.clientTop;
        element = element.offsetParent;
    }

    return yPosition;
}
