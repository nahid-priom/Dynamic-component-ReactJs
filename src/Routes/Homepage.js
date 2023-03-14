import ProfileCard from "../ProfileCard";
import { data } from "../data";
import "../Style.css";

const Homepage = () => {
  return (
    <>
      <div>
        <h1 className="heading">Personal Digital Assistant</h1>
        <div className="card">
          {data.map((info) => (
            <ProfileCard
              title={info.title}
              username={info.userName}
              description={info.description}
              image={info.image}
              id={info.id}
              
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Homepage;
