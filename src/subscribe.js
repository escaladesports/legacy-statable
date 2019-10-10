import { useState, useEffect } from "react";

function Subscribe(props) {
  const [_, setState] = useState({});
  let multi = false;

  if (Array.isArray(props.to)) multi = true;

  function onChange() {
    setState({ changed: true });
  }

  useEffect(() => {
    if (!multi) {
      props.to.subscribe(onChange);
      return;
    }
    props.to.forEach(to => to.subscribe(onChange));

    return () => {
      if (!multi) {
        props.to.unsubscribe(onChange);
        return;
      }
      props.to.forEach(to => to.unsubscribe(onChange));
    };
  }, []);

  if (!multi) return props.children(props.to.state);
  return props.children(...props.to.map(to => to.state));
}

export default Subscribe;
