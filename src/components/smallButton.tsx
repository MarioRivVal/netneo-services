import s from "../assets/styles/components/smallButton.module.css";

type SmallButtonProps = {
  text: string;
};

export default function SmallButton({ text }: SmallButtonProps) {
  return <button className={s.smallBtn}>{text}</button>;
}
