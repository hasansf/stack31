import style from './Layout.module.css'

const Layout = (props) => {
    return (
        <div className={style.main}>
           <div className={style.layout}>
          
           {props.children}
           
           </div>
        </div>
    );
};

export default Layout;