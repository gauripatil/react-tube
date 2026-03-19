import { useParams, useSearchParams } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./../stores/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const params = useSearchParams();
  console.log(params.v);
  return <div className="col-span-11 p-5 shadow-md">WatchPage</div>;
};

export default WatchPage;
