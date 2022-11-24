import axios from "../utils/axiosCustom";



const PostapiService = (email, pass, username, role, img) => {
    const data = new FormData();//vì cần lấy file ảnh nên phải dùng FormData

    data.append('email', email);
    data.append('password', pass);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', img);
    return axios.post('api/v1/participant', data);


}

// tk này hình thưc là formdata
const Getalluser = () => {
    return axios.get('api/v1/participant/all');

}

const Postuserlogin = (useremail, userpass) => {
    return axios.post('api/v1/login', { email: useremail, password: userpass, delay: 3000 });

}
const PostuserSignup = (useremail, userpass, name) => {
    return axios.post('api/v1/register', { email: useremail, password: userpass, username: name });

}
const Deleteuser = (useid) => {
    return axios.delete('api/v1/participant', { data: { id: useid } });

}
const Getuserphantrang = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);

}


const GetQuizbyuser = () => {


    return axios.get('api/v1/quiz-by-participant')
}

const PutapiService = (id, email, username, role, img) => {
    const data = new FormData();//vì cần lấy file ảnh nên phải dùng FormData
    data.append('id', id);



    data.append('username', username);
    data.append('role', role);
    data.append('userImage', img);
    return axios.put('api/v1/participant', data);

}
const GetQuizid = (id) => {
    return axios.get(`api/v1/questions-by-quiz?quizId=${id}`)
}
const postSubmitQuiz = (data) => {

    // console.log("data raw:", { ...data })
    return axios.post(`api/v1/quiz-submit`, { ...data })
}
export {
    PostapiService, Getalluser, PutapiService, Deleteuser, Getuserphantrang,

    Postuserlogin, PostuserSignup, GetQuizbyuser, GetQuizid, postSubmitQuiz
};