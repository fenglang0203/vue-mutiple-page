import Mock from 'mockjs';

const LoginUsers = [
  {
    "birthday": null,
    "signTime": 1519805952000,
    "gender": 0,
    "phoneNum": "18161847109",
    "idE": "jTAQsMS-UWk.",
    "commentCount": null,
    "password": "******",
    "headImgUrl": "/html_app/img/personal/head.png",
    "nickname": "181****7109_TWFD",
    "travellerCount": null,
    "state": 1
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    idE: Mock.Random.guid(),
    nickname: Mock.Random.cname(),
    phoneNum: Mock.Random.string('number', 11),
    password: Mock.Random.string('number', 6),
    addr: Mock.mock('@county(true)'),
    headImgUrl: "/static/pic/personal/headImg.png",
    birthday: Mock.Random.date(),
    gender: Mock.Random.integer(0, 1),
    travellerCount: null,
    signTime: 1519805952000,
    commentCount: null
  }));
}

export {LoginUsers, Users};
