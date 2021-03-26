import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({ ...state, loading: true });
    setTimeout(() => {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setState({
            loading: false,
            error: null,
            data,
          });
        });
    }, 1000);
  }, [url]);

  return state;
};
