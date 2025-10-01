export type HeaderProps = {
  scope: string;
  directory: string;
};

export type AsideBoxProps = {
  directory: string;
  scope: string;
  reverse?: boolean;
  box?: boolean;
  buttons: {
    display: "both" | "one" | "none";
    lightBtnTo?: string;
    darkBtnTo?: string;
  };
};
