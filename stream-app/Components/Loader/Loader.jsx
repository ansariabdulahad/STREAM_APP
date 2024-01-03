"use client"
import Style from './Loader.module.css';

const Loader = () => {
    const design = (
        <>
            <>
                <div className={Style.loader}>
                    <i
                        className="fa fa-spinner fa-spin"
                        style={{
                            fontSize: '50px',
                            color: "white"
                        }}
                    ></i>
                </div>
            </>
        </>
    );
    return design;
}

export default Loader;