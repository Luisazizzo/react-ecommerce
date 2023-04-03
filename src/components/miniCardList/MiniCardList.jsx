import MiniCard from "../miniCard/MiniCard";
import "./index.css";

const MiniCardList = ({ miniCards }) => {
  return (
    <div className="MiniCardList">
      {miniCards.map((card) => (
        <MiniCard imgSrc={card.thumbnail} imgAlt={card.title} key={card.id} />
      ))}
    </div>
  );
};

export default MiniCardList;
