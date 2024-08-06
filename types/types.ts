export type TextComponentProps = {
  text: string;
  setText: (text: string) => void;
};

export interface Component {
  name: string;
  id: string;
  value: string;
}

interface TextComponent extends Component {
  component_name: string;
  text: string;
}
interface InputComponent extends Component {
  component_name: string;
  placeholder: string;
}
interface Options extends Component {}
