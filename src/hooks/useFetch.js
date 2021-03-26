import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ ...state, loading: true });
    setTimeout(() => {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          if (isMounted.current)
            setState({
              loading: false,
              error: null,
              data,
            });
          else console.log("set state no se llama");
        });
    }, 1000);
  }, [url]);

  return state;
};
