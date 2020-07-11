import Head from "next/head";
import React,{useState} from 'react'
import Link from "next/link"
import {Row, Col , List,BackTop} from 'antd'
import Header from "../components/Header";
import Author from '../components/Author';
import Footer from '../components/Footer';
import { CalendarOutlined,TagOutlined} from '@ant-design/icons';
import axios from 'axios';
import servicePath from '../config/apiUrl';
import '../public/style/pages/index.css';
const  Home=(list)=> {
  console.log(list);
  const [ mylist , setMylist ] = useState(list.data)
  return (
    <>
      <Head>
        <title>xqy`s blog</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            // header={<div className="list-header">最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={(item) => (
              <List.Item>
                <div className="list-title">
                  <Link href={{pathname:'/ArticleDetail',query:{id:item._id}}}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <p>
                     <CalendarOutlined />
                     <span>{item.addTime}</span>
                  </p>
                  <p>
                     <TagOutlined />
                    <span>{item.type_name}</span>
                  </p>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
           <Author />
        </Col>
      </Row>
      <Footer />
      <BackTop />
    </>
  );
}
Home.getInitialProps = async ()=>{
  const res=await axios(servicePath.getArticleList);
  return { data: res.data.data }
}

export default Home;
