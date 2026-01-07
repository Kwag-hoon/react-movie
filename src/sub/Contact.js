import React from 'react';
import '../css/contact.css';

function Contact() {
  const checkForm = (e) => {
    const f = e.target;
    if (!f.check.checked) {
      e.preventDefault();
      alert('개인정보처리방침에 동의해주세요');
      return false;
    }
    if (!f.name.value.trim()) {
      e.preventDefault();
      alert('성함을 입력해주세요');
      return false;
    }
    if (!f.tel.value.trim() || f.tel.value.replace(/\D/g, '').length < 11) {
      e.preventDefault();
      alert('전화번호를 정확히 입력해주세요');
      return false;
    }
    if (!f.email.value.trim()) {
      e.preventDefault();
      alert('이메일을 입력해주세요');
      return false;
    }
    if (!f.content.value.trim()) {
      e.preventDefault();
      alert('내용을 입력해주세요');
      return false;
    }
    return true;
  };

  return (
    <main>
      <article>
        <div className="title">
          <h2>Quesiton</h2>
          <h3>
            정성을 다해 답변을<br /> 해드리겠습니다
          </h3>
        </div>
        <form
          action="./qna_input.php"
          method="post"
          name="qnaForm"
          onSubmit={checkForm}
        >
          <div className="inputbox">
            <div>
              <label htmlFor="name">성함</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="성함을 입력해주세요"
                maxLength={5}
              />
            </div>
            <div>
              <label htmlFor="tel">전화번호</label>
              <input
                type="text"
                id="tel"
                name="tel"
                placeholder="전화번호를 입력해주세요"
                minLength={11}
              />
            </div>
            <div>
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="이메일을 입력해주세요"
                maxLength={50}
              />
            </div>
          </div>

          <div className="txtbox">
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              name="content"
              placeholder="내용을 입력해주세요"
            />
          </div>

          <div className="btn_box">
            <label htmlFor="check">
              <input type="checkbox" id="check" name="check" />
              <span>개인정보처리방침에 동의합니다</span>
            </label>
            <input type="submit" className="btn" value="SEND" />
          </div>
        </form>
      </article>
    </main>
  );
}

export default Contact;
