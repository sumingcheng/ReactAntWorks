import React, {useState} from 'react';
import '@/assets/home.less';
import {Button} from 'antd';
import {useSelector, useDispatch} from "react-redux";
import {toggleTheme} from "@/store/themeSlice";
import {getData} from '@/api';


const Home: React.FC = () => {
  const theme = useSelector((state: RootStateType) => state.theme);
  const dispatch = useDispatch();

  const [state, setState] = useState({});
  const getTheme = () => {
    getData().then(res => {
      console.log(res)
      setState(res)
    })
  }

  return (
      <div>
        <h5>
          <Button onClick={() => dispatch(toggleTheme())}>切换主题</Button>
          <Button type={'primary'} onClick={() => getTheme()}>请求</Button>
          <div>{JSON.stringify(state)}</div>
        </h5>
        <h1>{theme}</h1>
      </div>
  );
};

export default Home;
