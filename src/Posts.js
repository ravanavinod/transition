
export function Posts() {
    const items = [];
    for (let i = 0; i < 500; i++) {
      items.push(<SlowPost key={i} />);
    }
    return <ul>{items}</ul>;
  }
  
  function SlowPost() {
    const startTime = performance.now();
    while (performance.now() - startTime < 10) {
      // Do nothing for 1 ms per item to emulate extremely slow code
    }
  
    return <li>Post</li>;
  }
  