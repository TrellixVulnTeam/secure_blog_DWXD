function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    
    return (date.getDate()+1) + " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear() + "  " + strTime;
  }


  module.exports = formatDate;