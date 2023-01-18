function googlebtnfun() {
  window.open(
    "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=521513834326-p1p2matiqrcstc57rg051lk2jt74cr75.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fauth.ec0.dbi.tools%2Foauth2%2Fidpresponse&scope=profile%20email&response_type=code&state=H4sIAAAAAAAAAE2Q3ZKaQBCF32WuBYEMyHAZWHQV3dLEDZpKbfX8ALMODjIgm03l3TPe5aq765zvdFf_QYASNBpHgBkc_60oRX9Oi26PZohaZal1rYQdmB3CS9Xc6lFWwdAozElo7qOOAVrfGrg1NMPQmWQ-n6bJ5XCX3NBeclAu0-1cwzg0DgOlKLCLJYQlmOaP9Or_VTVKfiKYjKXqqxy0a6StV3c0oneBt_L6gFuQylbdiavktul6XUnL_5qhxqZFkfeFUh6QQCwqCjgmC1YJwSnxwA9CzxIXa3ti2R1uxWG73n5-L8mz16eeWPGPJ1UwesTXEn6syzxb36iIZBymx-zMqX96b3ebcns5KtMdltkh8okKzSbLV8f8hUgxFre2CYfD5_192y1rNoxngePV5IDXaZrl-Svb-Xmx32yc4hy9hN6m-ppWp1QZ0kQZi19pH6b9_htsd2-_6_b51J5SbC9W9uLHF13BPJdT6Q5aK2OFFiV-tMBeEEcxsb9ASQXKiBnqLYHJIqQ4AocEPHIwVLFDPJ87BNMYM-4LAhj9_Qe_FwUCCgIAAA.H4sIAAAAAAAAAAEgAN__QK5olrSytAhoniLL8bOTaFZ3mT3ZvmO1STKY_7g7azySak9NIAAAAA.4&service=lso&o2v=2&flowName=GeneralOAuthFlow",
    "_self",
    "popup"
  );
}

document.querySelector("#facebookbtn").addEventListener("click", facebookfun);
function facebookfun() {
  window.open(
    "https://www.facebook.com/login.php?skip_api_login=1&api_key=365527841653013&kid_directed_site=0&app_id=365527841653013&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv14.0%2Fdialog%2Foauth%3Fclient_id%3D365527841653013%26redirect_uri%3Dhttps%253A%252F%252Fauth.ec0.dbi.tools%252Foauth2%252Fidpresponse%26scope%3Dpublic_profile%252C%2Bemail%26response_type%3Dcode%26state%3DH4sIAAAAAAAAAFWQ23KiQBCG32WuBTmJ4F0wqyZSUQymLLe2Uj0HYHSGQYaDyda-e8bLveq_q_-vT38RoAXqtcVAd5b7mZ5Ye16mTYYmCJvKCgjDSl1NSkw6uxbVrex54XWVCGg800OvIgDpGgM1hqrrGr2YTsdxtCkMnGrccgrCJkpOFfRdZREQAgN5tGSGIIoyI4v_h5Vo8RvBqA1X1rxTtuYm1navWWsDlbx-4BK4MFE1rObUiKZVBRcM_ZmgyvQLQ8fHmHqxx-YFhiCK56RgjOLYAdebOYa4Gps-ZWldH9PNeb2trmz_tB6j8uu8-lhynRxW9Yl6F-J-xNtq21_2t5lMIP81Hu-1cxcFZG9Z8348kNNFls_H3Xsz91Zb7Lf37PL9IhsYc_0qd2G5PXb-MG7kJtHYPdCKyjjbvOVxK2Kc7KXYifSQL3Prtk7b5IU_X1Qx5K-fQ94p2d838rv0e202Fmbjxx9tRhybYm53SolHQaKFG84Dx4vC0DW_QIsChGYTdDPE4Ab2497W6IiQ0CcQWQAzbAUODoxixIpijxq4YOA46N8PCzaGihoCAAA.H4sIAAAAAAAAAHNbNDHnx-usuZ3dqyxlDRk-GDec6rvaZGTNyBXgzMybFgkAz1xsZyAAAAA.4%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D16c05242-0eb0-416e-aded-c3776a1e6506%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fauth.ec0.dbi.tools%2Foauth2%2Fidpresponse%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DH4sIAAAAAAAAAFWQ23KiQBCG32WuBTmJ4F0wqyZSUQymLLe2Uj0HYHSGQYaDyda-e8bLveq_q_-vT38RoAXqtcVAd5b7mZ5Ye16mTYYmCJvKCgjDSl1NSkw6uxbVrex54XWVCGg800OvIgDpGgM1hqrrGr2YTsdxtCkMnGrccgrCJkpOFfRdZREQAgN5tGSGIIoyI4v_h5Vo8RvBqA1X1rxTtuYm1navWWsDlbx-4BK4MFE1rObUiKZVBRcM_ZmgyvQLQ8fHmHqxx-YFhiCK56RgjOLYAdebOYa4Gps-ZWldH9PNeb2trmz_tB6j8uu8-lhynRxW9Yl6F-J-xNtq21_2t5lMIP81Hu-1cxcFZG9Z8348kNNFls_H3Xsz91Zb7Lf37PL9IhsYc_0qd2G5PXb-MG7kJtHYPdCKyjjbvOVxK2Kc7KXYifSQL3Prtk7b5IU_X1Qx5K-fQ94p2d838rv0e202Fmbjxx9tRhybYm53SolHQaKFG84Dx4vC0DW_QIsChGYTdDPE4Ab2497W6IiQ0CcQWQAzbAUODoxixIpijxq4YOA46N8PCzaGihoCAAA.H4sIAAAAAAAAAHNbNDHnx-usuZ3dqyxlDRk-GDec6rvaZGTNyBXgzMybFgkAz1xsZyAAAAA.4%23_%3D_&display=page&locale=en_GB&pl_dbl=0",
    "_self",
    "popup"
  );
}

document.querySelector(".signupbtn").addEventListener("click", signupfunc);
signupdataArr = JSON.parse(localStorage.getItem("signupdata")) || [];
function signupfunc(event) {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let givenName = document.querySelector("#GivenName").value;
  let familyName = document.querySelector("#familyName").value;
  let password = document.querySelector("#password").value;
  let obj = {};
  obj.email = email;
  obj.givenName = givenName;
  obj.familyName = familyName;
  obj.password = password;

  signupdataArr.push(obj);
  localStorage.setItem("signupdata", JSON.stringify(signupdataArr));
}
