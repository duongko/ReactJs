import ModalCreatuser from "./ModalCreatuser";




const MansUser = (props) => {
    return (
        <div className="mansUser">
            <div className="tittle">
                quản lý người dùng

            </div>
            <div className="User-content">
                <div>
                    <button><ModalCreatuser /></button>
                </div>

            </div>
            <div>
                bảng người dùng
            </div>
        </div>
    )
}
export default MansUser;