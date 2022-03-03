export const currentDateAndTime = () => {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth()+1).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    var hh = today.getHours();
    var MM = today.getMinutes();
    var ss = today.getSeconds();
    var ms = today.getMilliseconds();

    return today = yyyy + mm + dd + hh + MM + ss + ms
}

export const currentDateWithMin = () => {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth()+1).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    var hh = (today.getHours() < 10 ? '0' : '') + today.getHours();
    var MM = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();

    return today = yyyy + mm + dd + hh + MM
}