import React from 'react';
import './App.css';

function App(){
    return (
      <div>
        <Header>
          <div className='headerIn'>
            <Navigation/>
            <div className='profile'></div>
          </div>
          {/* 1페이지
            네비게이션(프로필 html~react 기술기입 인적사항 깃이나블로그주소 )
          */}

          <div className='mainImg'></div>
          <Contents>
            <con1/>
            <con2/>
            <con3/>
          </Contents>
          {/*2페이지
           프로젝트들을 보여주는 페이지 */}

          <div className='footer'>
            <div></div>
          </div>
          {/* 3페이지 이메일이나 연락처 크게확대 */}
        </Header>
      </div>
          
    )
          
       
    
  }  



export default App;

 