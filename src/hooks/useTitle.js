import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Tooth Fixers`;
  }, [title]);
};

export default useTitle;
