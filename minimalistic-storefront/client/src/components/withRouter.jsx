import React from 'react';
import { useParams } from 'react-router-dom';

const  withRouter = (Child) => (props) => {
  const params = useParams();
  return(
    <Child 
    {...props} 
    params={params} 
    />
  );
}

export default withRouter;