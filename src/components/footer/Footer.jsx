import style from './Footer.module.css'

const Footer = () => {
    return (
        <div>
            <div className={style.footer_area}>
                <h2>Footer</h2>
                <ul>
                    <li>Footer link</li>
                    <li>Footer link</li>
                    <li>Footer link</li>
                    <li>Footer link</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;