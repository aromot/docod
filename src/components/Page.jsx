import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import PageNotfound from './Errors/PageNotfound';
import PageError from './Errors/PageError';

const Page = ({path, cache = false}) => {

  const [content, setContent] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    let err;

    const url = cache ? path : path + '?' + Date.now();

    fetch(url)
    .then(r => {
      if(r.status === 404) {
        err = 'file_not_found';
        setError(err);
      } else {
        return r.text()
      }
    })
    .catch(err => {
      setError(err)
    })
    .then(text => {
      if(err)
        return;
      setContent(text)
    })
  }, []);

  if(error) {
    if(error === 'file_not_found')
      return <PageNotfound path={path} />
    else
      return <PageError path={path} error={error} />
  }

  if( ! content)
    return <Loader />

  return (
    <div dangerouslySetInnerHTML={{__html: content}} />
  );
}
 
export default Page;