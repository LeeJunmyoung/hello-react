import React from 'react';

const MyName = ({ name,phone,company }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name} 입니다.<br/>
      전화번호는 {phone}
      회사는 {company}
    </div>
  );
};

export default MyName;
