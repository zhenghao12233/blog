const dateTransfer = (date,format) => {
    let YY = String(new Date(date).getFullYear()).padStart(2,0)
    let MM = String(new Date(date).getMonth() + 1).padStart(2,0)
    let DD = String(new Date(date).getDate()).padStart(2,0)

    let hh = String(new Date(date).getHours()).padStart(2,0)
    let mm = String(new Date(date).getMinutes()).padStart(2,0)
    let ss = String(new Date(date).getSeconds()).padStart(2,0)

    if (format && format.indexOf(" ") == -1) {
        return YY + "-" + MM + '-' + DD
    }else {
        return YY + "-" + MM + '-' + DD + ' ' + hh + ':' + mm + ':' + ss
    }
}


module.exports = {
    dateTransfer
}