const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const formatDate = (data, type) => {
    let date = new Date(data*1000);
    if(type === 'hour' || type === 'day'){
        return `${formatUnitOfTime(date.getHours())}:${formatUnitOfTime(date.getMinutes())}`
    }else{
        return `${monthArr[date.getMonth()]} ${date.getDate()}, ${formatUnitOfTime(date.getHours())}:${formatUnitOfTime(date.getMinutes())}`
    }
  }

const formatUnitOfTime = (time) => {
    return (time > 9)? time : `0${time}`;
}