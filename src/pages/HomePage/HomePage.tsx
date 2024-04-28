import { IContext, MyContext } from "../../store/Context";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

interface Props {}

const HomePage = (props: Props) => {
  const { t } = useTranslation();
  const { value } = useContext<IContext>(MyContext);
  return (
    <div>
      {" "}
      <h1 className="text-3xl  font-bold bg-red-400 ">
        {t("hello")} {value.name}
      </h1>
    </div>
  );
};

export default HomePage;
