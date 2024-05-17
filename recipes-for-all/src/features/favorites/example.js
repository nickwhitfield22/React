import { useEffect, useState } from "react";

export function useExample(table) {
  const registrationID = 12345;
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    async function getExample() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/fetchExample", {
          method: "POST",
          headers: { "Content-type": "applicaton/json" },
          body: JSON.stringify({
            tableName: table,
            body: registrationID,
          }),
        });
        if (res.ok) {
          const result = res.json();
          setData(result);
          setIsSubmitted(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getExample();
  }, [table]);

  return { data, isLoading, isSubmitted };
}
