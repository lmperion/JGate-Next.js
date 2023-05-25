
import classes from '@/styles/Button.module.scss';
import clsx from 'clsx';

interface Props {
    primery?: string;
    second?: string;
    text: string;
}

export default function Button(props:Props) {
    const {primery,second, text} = props;


    return (
        <button className={clsx({[classes.btnBuy]:second, [classes.btnAddCard]:primery})}>{text}</button>
    );
}
  