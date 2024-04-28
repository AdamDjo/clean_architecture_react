import { useTranslation } from "react-i18next";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const { t } = useTranslation();
  return (
    <QueryClientProvider client={queryClient}>
      <>
        {" "}
        <h1 className="text-3xl  font-bold ">{t("hello")}</h1>
      </>
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
