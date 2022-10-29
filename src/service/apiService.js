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
const Getalluser = () => {
    return axios.get('api/v1/participant/all');

}
export { PostapiService, Getalluser };