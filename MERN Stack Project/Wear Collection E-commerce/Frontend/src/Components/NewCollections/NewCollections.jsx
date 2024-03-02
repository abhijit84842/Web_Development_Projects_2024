import "./NewCollections.css";
import new_collections from "../Assets/new_collections";
import NewCollectionsItems from "../Item/NewCollectionsItems";

const NewCollections = () => {
  console.log(new_collections);
  return (
    <main>
      <div className="new-collections-container">
        <h1>NEW COLLECTIONS </h1>
      </div>

      <div className="collections-container">
        {new_collections.map((item) => (
          <NewCollectionsItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
export default NewCollections;
