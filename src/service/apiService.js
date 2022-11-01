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

const PutapiService = (id, email, username, role, img) => {
    const data = new FormData();//vì cần lấy file ảnh nên phải dùng FormData

    data.append('email', email);
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', img);
    return axios.put('api/v1/participant', data);


}
export { PostapiService, Getalluser, PutapiService };