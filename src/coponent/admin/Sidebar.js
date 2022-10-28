import { Collapse } from 'bootstrap';
import { FaAccessibleIcon, FaAddressBook, FaAddressCard, FaAdversal, FaBabyCarriage, FaTachometerAlt } from 'react-icons/fa';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';



const Sidebars = (props) => {
    const { Collapsed } = props;

    return (
        <div className='sidebar-container'>
            <ProSidebarProvider
            >

                < Sidebar className={Collapsed === true ? "hidden" : "show"}>
                    <div

                        style={{
                            padding: "24px",
                            TextTransform: 'uppercase',
                            fontWeight: 'bold',
                            orderflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'


                        }}
                    >
                        Dương Manh Manh
                    </div>


                    <Menu
                    >
                        <MenuItem icon={<FaTachometerAlt />}>Dashboard</MenuItem>
                        <SubMenu label="Charts" icon={<FaBabyCarriage />}>
                            <MenuItem icon={<FaAccessibleIcon />}> Quản lý User </MenuItem>
                            <MenuItem icon={<FaAddressCard />}> Quản lý bài Quiz </MenuItem>
                            <MenuItem icon={<FaAddressBook />}> Quản lý câu hỏi </MenuItem>
                        </SubMenu>

                        <MenuItem icon={<FaAdversal />}> Calendar </MenuItem>
                    </Menu>
                </Sidebar>

            </ProSidebarProvider >


        </div >
    )
}

export default Sidebars;