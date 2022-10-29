import ModalCreatuser from "./ModalCreatuser";




import TableUser from "./TableUser";
const MansUser = (props) => {
    return (
        <div className="mansUser">
            <div className="tittle">
                quản lý người dùng


            </div>
            <div className="User-content">
                <div>
                    <ModalCreatuser />
                </div>

            </div>
            <div>
                <TableUser />
            </div>
        </div>
    )
}
export default MansUser;