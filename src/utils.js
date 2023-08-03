const formatDate = (dateString) => {
  const date = new Date(dateString);

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZoneName: 'short'
  };
  const formattedDate = date.toLocaleString('en-US', options);
  return formattedDate.split(' at ');
}

export {formatDate};