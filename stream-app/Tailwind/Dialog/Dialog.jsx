import SweetAlert from "react-bootstrap-sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "..";

const Dialog = ({ title = "", children }) => {

    const dispatch = useDispatch();
    const DialogReducer = useSelector(response => response.DialogReducer);

    const deisgn = (
        <>
            <SweetAlert
                title={title}
                show={DialogReducer.open}
                showConfirm={false}
                onConfirm={() => { }}
            >
                <Icon
                    onClick={() => dispatch({
                        type: 'CLOSE_DIALOG'
                    })}
                    className="absolute top-3 right-3 cursor-pointer"
                >close</Icon>

                {children}
            </SweetAlert>
        </>
    );
    return deisgn;
}

export default Dialog;