import classes from './CommentItem.module.css';

const ComentItem = (props) => {
    return (
        <li className={classes.item}>
          <p>{props.text}</p>
        </li>
      );
};

export default ComentItem;