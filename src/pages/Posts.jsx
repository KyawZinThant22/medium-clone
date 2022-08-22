import Foryou from "../components/post/Foryou";
import Navbar from "../components/post/Navbar";
import Topic from "../components/Topic";
import UserList from "../components/UserList";
const Posts = () => {
  return (
    <div className="md:w-[74%]  md:px-[15rem] px-5 overflow-x-hidden border-t-0 border border-solid border-r-2 border-b-0 ">
      <Topic />
      <UserList />
      <Navbar />
      <Foryou/>
    </div>
  );
};

export default Posts;
